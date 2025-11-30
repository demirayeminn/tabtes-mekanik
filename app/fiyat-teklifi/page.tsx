"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import {
  Flame,
  Droplets,
  Search,
  Thermometer,
  Bath,
  Clock,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { calculatePriceRange } from "@/lib/pricing";

type ServiceType =
  | "kombi-montaj"
  | "kombi-bakim"
  | "su-tesisati"
  | "kacak-tespiti"
  | "petek-temizleme"
  | "banyo-tadilati"
  | "acil-servis"
  | "diger";

const services = [
  {
    id: "kombi-montaj",
    icon: Flame,
    title: "Kombi Montajı",
    description: "Yeni kombi montajı ve devreye alma",
  },
  {
    id: "kombi-bakim",
    icon: Flame,
    title: "Kombi Bakımı",
    description: "Periyodik bakım ve kontrol",
  },
  {
    id: "su-tesisati",
    icon: Droplets,
    title: "Su Tesisatı",
    description: "Yeni tesisat veya tadilat",
  },
  {
    id: "kacak-tespiti",
    icon: Search,
    title: "Kaçak Tespiti",
    description: "Cihazlı kaçak tespit",
  },
  {
    id: "petek-temizleme",
    icon: Thermometer,
    title: "Petek Temizleme",
    description: "Petek ve sistem temizliği",
  },
  {
    id: "banyo-tadilati",
    icon: Bath,
    title: "Banyo Tadilatı",
    description: "Komple banyo yenileme",
  },
  {
    id: "acil-servis",
    icon: Clock,
    title: "Acil Servis",
    description: "7/24 acil müdahale",
  },
  {
    id: "diger",
    icon: HelpCircle,
    title: "Diğer",
    description: "Diğer tesisat işleri",
  },
];

const districts = [
  "Çerkezköy",
  "Kapaklı",
  "Çorlu",
  "Velimeşe",
  "Tekirdağ Merkez",
  "Edirne",
  "Diğer",
];

export default function FiyatTeklifiPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({
    service: "",
    // Step 2 - details
    marka: "",
    kapasite: "",
    binaType: "",
    isTuru: "",
    metre: "",
    kacakYeri: "",
    petekSayisi: "",
    katSayisi: "",
    banyoBoyutu: "",
    kapsam: [] as string[],
    aciliyet: "normal",
    aciklama: "",
    // Step 3 - contact
    name: "",
    phone: "",
    district: "",
    address: "",
    notes: "",
  });
  const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(null);

  const handleNext = () => {
    if (currentStep === 3) {
      // Calculate price before showing summary
      if (formData.service) {
        const price = calculatePriceRange(formData.service, formData);
        setPriceRange(price);
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      const currentKapsam = formData.kapsam || [];
      setFormData({
        ...formData,
        kapsam: checked
          ? [...currentKapsam, value]
          : currentKapsam.filter((item: string) => item !== value),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const canProceed = () => {
    if (currentStep === 1) return formData.service;
    if (currentStep === 2) {
      if (formData.service === "petek-temizleme") {
        return formData.petekSayisi;
      }
      return true; // For now, allow proceeding
    }
    if (currentStep === 3) {
      return formData.name && formData.phone && formData.district;
    }
    return true;
  };

  const renderStepIndicator = () => {
    return (
      <div className="max-w-md mx-auto mb-12">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((step, index) => {
            const isCompleted = step < currentStep;
            const isCurrent = step === currentStep;
            return (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      isCompleted || isCurrent
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground-muted"
                    } ${
                      isCurrent ? "ring-4 ring-primary/20" : ""
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step
                    )}
                  </div>
                  <span className="text-xs mt-2 text-center text-foreground-muted">
                    {["Hizmet", "Detaylar", "İletişim", "Özet"][index]}
                  </span>
                </div>
                {index < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step < currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderStep1 = () => (
    <div>
      <h2 className="text-2xl font-bold text-foreground font-heading">
        Hangi hizmeti almak istiyorsunuz?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = formData.service === service.id;
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => handleServiceSelect(service.id)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all text-left ${
                isSelected
                  ? "border-primary bg-primary-light"
                  : "border-border bg-white hover:border-primary/50"
              }`}
            >
              <Icon className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-foreground mt-2">
                {service.title}
              </h3>
              <p className="text-sm text-foreground-muted mt-1">
                {service.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderStep2 = () => {
    const service = formData.service;
    
    return (
      <div>
        <h2 className="text-2xl font-bold text-foreground font-heading">
          Detayları belirtin
        </h2>
        <div className="space-y-6 mt-8">
          {/* Kombi Montajı/Bakımı */}
          {(service === "kombi-montaj" || service === "kombi-bakim") && (
            <>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Marka *
                </label>
                <select
                  name="marka"
                  value={formData.marka}
                  onChange={handleChange}
                  required
                  className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="">Marka seçin...</option>
                  <option value="baymak">Baymak</option>
                  <option value="demirdokum">Demirdöküm</option>
                  <option value="vaillant">Vaillant</option>
                  <option value="bosch">Bosch</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Kapasite *
                </label>
                <select
                  name="kapasite"
                  value={formData.kapasite}
                  onChange={handleChange}
                  required
                  className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="">Kapasite seçin...</option>
                  <option value="24">24 kW</option>
                  <option value="28">28 kW</option>
                  <option value="32">32 kW</option>
                </select>
              </div>
            </>
          )}

          {/* Su Tesisatı */}
          {service === "su-tesisati" && (
            <>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  İş Türü *
                </label>
                <select
                  name="isTuru"
                  value={formData.isTuru}
                  onChange={handleChange}
                  required
                  className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="">İş türü seçin...</option>
                  <option value="yeni">Yeni Tesisat</option>
                  <option value="tadilat">Tadilat</option>
                  <option value="tamir">Tamir</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Yaklaşık Metre
                </label>
                <input
                  type="number"
                  name="metre"
                  value={formData.metre}
                  onChange={handleChange}
                  placeholder="Örn: 50"
                  className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
            </>
          )}

          {/* Kaçak Tespiti */}
          {service === "kacak-tespiti" && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Kaçak Yeri Tahmini
              </label>
              <select
                name="kacakYeri"
                value={formData.kacakYeri}
                onChange={handleChange}
                className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="">Yer seçin...</option>
                <option value="banyo">Banyo</option>
                <option value="mutfak">Mutfak</option>
                <option value="genel">Genel</option>
                <option value="bilinmiyor">Bilinmiyor</option>
              </select>
            </div>
          )}

          {/* Petek Temizleme */}
          {service === "petek-temizleme" && (
            <>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Petek Sayısı * (1-20)
                </label>
                <input
                  type="number"
                  name="petekSayisi"
                  value={formData.petekSayisi}
                  onChange={handleChange}
                  required
                  min="1"
                  max="20"
                  className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Kat Sayısı
                </label>
                <select
                  name="katSayisi"
                  value={formData.katSayisi}
                  onChange={handleChange}
                  className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="">Kat sayısı seçin...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
              </div>
            </>
          )}

          {/* Banyo Tadilatı */}
          {service === "banyo-tadilati" && (
            <>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Banyo Boyutu
                </label>
                <select
                  name="banyoBoyutu"
                  value={formData.banyoBoyutu}
                  onChange={handleChange}
                  className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="">Boyut seçin...</option>
                  <option value="kucuk">Küçük (4m²)</option>
                  <option value="orta">Orta (6m²)</option>
                  <option value="buyuk">Büyük (8m²+)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Kapsam
                </label>
                <div className="space-y-2">
                  {["Seramik", "Tesisat", "Vitrifiye", "Tavan"].map(
                    (item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="kapsam"
                          value={item.toLowerCase()}
                          checked={
                            formData.kapsam?.includes(item.toLowerCase()) ||
                            false
                          }
                          onChange={handleChange}
                          className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                        />
                        <span className="text-foreground">{item}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
            </>
          )}

          {/* Acil Servis / Diğer */}
          {(service === "acil-servis" || service === "diger") && (
            <>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Açıklama *
                </label>
                <textarea
                  name="aciklama"
                  value={formData.aciklama}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Aciliyet *
                </label>
                <select
                  name="aciliyet"
                  value={formData.aciliyet}
                  onChange={handleChange}
                  required
                  className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="normal">Normal</option>
                  <option value="acil">Acil (24 saat içi)</option>
                </select>
              </div>
            </>
          )}

          {/* Bina Tipi (for most services) */}
          {service !== "petek-temizleme" && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Bina Tipi
              </label>
              <select
                name="binaType"
                value={formData.binaType}
                onChange={handleChange}
                className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="">Bina tipi seçin...</option>
                <option value="apartman">Apartman</option>
                <option value="mustakil">Müstakil Ev</option>
                <option value="isyeri">İşyeri</option>
              </select>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderStep3 = () => (
    <div>
      <h2 className="text-2xl font-bold text-foreground font-heading">
        İletişim bilgilerinizi girin
      </h2>
      <div className="space-y-6 mt-8">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Ad Soyad *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="05XX XXX XX XX"
            className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            İlçe *
          </label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          >
            <option value="">İlçe seçin...</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Adres Detayı
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Notlar
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => {
    const selectedService = services.find((s) => s.id === formData.service);
    
    return (
      <div>
        <h2 className="text-2xl font-bold text-foreground font-heading">
          Teklif Özeti
        </h2>
        
        <div className="bg-muted rounded-xl p-6 mt-8 space-y-4">
          <div>
            <span className="text-sm font-medium text-foreground-muted">
              Seçilen Hizmet:
            </span>
            <p className="text-foreground font-semibold mt-1">
              {selectedService?.title}
            </p>
          </div>
          
          {formData.binaType && (
            <div>
              <span className="text-sm font-medium text-foreground-muted">
                Bina Tipi:
              </span>
              <p className="text-foreground mt-1">
                {formData.binaType === "apartman" && "Apartman"}
                {formData.binaType === "mustakil" && "Müstakil Ev"}
                {formData.binaType === "isyeri" && "İşyeri"}
              </p>
            </div>
          )}
          
          <div>
            <span className="text-sm font-medium text-foreground-muted">
              İletişim:
            </span>
            <p className="text-foreground mt-1">{formData.name}</p>
            <p className="text-foreground-muted">{formData.phone}</p>
            <p className="text-foreground-muted">{formData.district}</p>
          </div>
        </div>

        {priceRange && (
          <div className="mt-8 text-center">
            <p className="text-foreground-muted">Tahmini Fiyat Aralığı</p>
            <p className="text-4xl font-bold text-primary mt-2">
              ₺{priceRange.min.toLocaleString()} - ₺{priceRange.max.toLocaleString()}
            </p>
            <p className="text-sm text-foreground-muted mt-2">
              * Kesin fiyat için ekibimiz sizi arayacaktır
            </p>
          </div>
        )}
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <main>
        <PageHeader
          title="Fiyat Teklifi"
          subtitle="Online fiyat hesaplayıcı"
          breadcrumbs={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Fiyat Teklifi", href: "/fiyat-teklifi" },
          ]}
        />
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h2 className="text-3xl font-bold text-foreground font-heading mt-6">
              Talebiniz Alındı!
            </h2>
            <p className="text-foreground-muted mt-4">
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <Link
              href="/"
              className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHeader
        title="Fiyat Teklifi"
        subtitle="Online fiyat hesaplayıcı"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Fiyat Teklifi", href: "/fiyat-teklifi" },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          {renderStepIndicator()}

          <form onSubmit={currentStep === 4 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}

            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-muted text-foreground px-6 py-3 rounded-lg font-medium hover:bg-border transition-colors flex items-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Geri
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 4 ? (
                <button
                  type="submit"
                  disabled={!canProceed()}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                    canProceed()
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-muted text-foreground-muted cursor-not-allowed"
                  }`}
                >
                  İleri
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  Teklif Gönder
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}


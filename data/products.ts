export interface Product {
  id: number;
  brand: string;
  name: string;
  category: string;
  features: string[];
  image?: string;
}

export const categories = [
  { id: "tumu", label: "Tümü" },
  { id: "kombiler", label: "Kombiler" },
  { id: "petekler", label: "Petekler" },
  { id: "armaturler", label: "Armatürler" },
  { id: "su-aritma", label: "Su Arıtma" },
  { id: "malzeme", label: "Tesisat Malzemeleri" },
  { id: "takimlar", label: "Takımlar & Aletler" },
];

export const products: Product[] = [
  // Kombiler
  {
    id: 1,
    brand: "Baymak",
    name: "Luna 24 kW",
    category: "kombiler",
    features: ["24 kW Kapasite", "Yoğuşmalı", "A Sınıfı Enerji"],
  },
  {
    id: 2,
    brand: "Demirdöküm",
    name: "Atromix 24",
    category: "kombiler",
    features: ["24 kW Kapasite", "Hermetik", "Dijital Ekran"],
  },
  {
    id: 3,
    brand: "Vaillant",
    name: "EcoTEC Plus",
    category: "kombiler",
    features: ["28 kW Kapasite", "Yoğuşmalı", "WiFi Kontrol"],
  },
  {
    id: 4,
    brand: "Bosch",
    name: "Condens 2500",
    category: "kombiler",
    features: ["24 kW Kapasite", "Yoğuşmalı", "Sessiz Çalışma"],
  },
  // Petekler
  {
    id: 5,
    brand: "Demirdöküm",
    name: "Panel Radyatör 600x1000",
    category: "petekler",
    features: ["Tip 22", "Yüksek Verim", "10 Yıl Garanti"],
  },
  {
    id: 6,
    brand: "ECA",
    name: "Panel Radyatör 500x800",
    category: "petekler",
    features: ["Tip 11", "Ekonomik", "Kolay Montaj"],
  },
  // Armatürler
  {
    id: 7,
    brand: "Grohe",
    name: "Eurosmart Lavabo Bataryası",
    category: "armaturler",
    features: ["Krom Kaplama", "Su Tasarruflu", "5 Yıl Garanti"],
  },
  {
    id: 8,
    brand: "Artema",
    name: "Punto Banyo Bataryası",
    category: "armaturler",
    features: ["Krom Kaplama", "Seramik Kartuş", "Yerli Üretim"],
  },
  // Su Arıtma
  {
    id: 9,
    brand: "Aqua",
    name: "5 Aşamalı Su Arıtma",
    category: "su-aritma",
    features: ["5 Aşama Filtrasyon", "Tezgah Altı", "2 Yıl Garanti"],
  },
  {
    id: 10,
    brand: "LG",
    name: "Premium Su Arıtma",
    category: "su-aritma",
    features: ["RO Teknolojisi", "Dijital Ekran", "Otomatik Yıkama"],
  },
  // Tesisat Malzemeleri
  {
    id: 11,
    brand: "Wavin",
    name: "PPR Boru Seti",
    category: "malzeme",
    features: ["20-63mm Çaplar", "PN20 Basınç", "50 Yıl Ömür"],
  },
  {
    id: 12,
    brand: "Pimtas",
    name: "PVC Boru Seti",
    category: "malzeme",
    features: ["Atık Su Borusu", "Kolay Montaj", "Uzun Ömür"],
  },
  // Takımlar & Aletler
  {
    id: 13,
    brand: "Hilti",
    name: "Profesyonel Kırıcı Delici",
    category: "takimlar",
    features: ["SDS-Plus", "850W Güç", "Darbeli"],
  },
  {
    id: 14,
    brand: "Bosch",
    name: "Professional Matkap",
    category: "takimlar",
    features: ["18V Akülü", "2 Adet Batarya", "Şarj Cihazı Dahil"],
  },
  {
    id: 15,
    brand: "Rothenberger",
    name: "Boru Anahtarı Seti",
    category: "takimlar",
    features: ["3 Parça Set", "10-36mm Arası", "Krom Vanadyum"],
  },
  {
    id: 16,
    brand: "Ridgid",
    name: "İngiliz Anahtarı 12\"",
    category: "takimlar",
    features: ["Ayarlanabilir", "Ergonomik Sap", "Paslanmaz Çelik"],
  },
  {
    id: 17,
    brand: "Rothenberger",
    name: "PPR Boru Kaynak Makinesi",
    category: "takimlar",
    features: ["20-63mm Kaplar", "Dijital Termostat", "Hızlı Isınma"],
  },
  {
    id: 18,
    brand: "Super Ego",
    name: "Manuel Boru Kesici",
    category: "takimlar",
    features: ["3-35mm Çap", "Hızlı Kesim", "Dayanıklı Bıçak"],
  },
  {
    id: 19,
    brand: "Rems",
    name: "Pafta Seti",
    category: "takimlar",
    features: ["1/2\" - 2\" Arası", "7 Parça", "Metal Çanta"],
  },
  {
    id: 20,
    brand: "MGF",
    name: "Kaçak Tespit Cihazı",
    category: "takimlar",
    features: ["Dijital Ekran", "Hassas Sensör", "Şarjlı"],
  },
  {
    id: 21,
    brand: "Ridgid",
    name: "Boru Kamera Sistemi",
    category: "takimlar",
    features: ["30m Kablo", "Renkli Ekran", "Kayıt Özelliği"],
  },
  {
    id: 22,
    brand: "Rothenberger",
    name: "Lehim Seti",
    category: "takimlar",
    features: ["Propan Brülör", "Lehim Teli Dahil", "Taşıma Çantası"],
  },
];

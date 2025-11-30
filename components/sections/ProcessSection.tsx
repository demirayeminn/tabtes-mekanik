export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Bizi Arayın",
      description: "7/24 müşteri hattımızdan bize ulaşın",
    },
    {
      number: "2",
      title: "Ücretsiz Keşif",
      description: "Ekibimiz adresinize gelip sorunu tespit eder",
    },
    {
      number: "3",
      title: "Fiyat Teklifi",
      description: "Şeffaf ve detaylı fiyat teklifi alırsınız",
    },
    {
      number: "4",
      title: "İş Tamamlandı",
      description: "Uzman ekibimiz sorunu garantili çözer",
    },
  ];

  return (
    <section className="bg-primary-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-foreground-muted mt-4">
            4 kolay adımda sorununuzu çözüyoruz
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Number Circle */}
              <div className="w-16 h-16 rounded-full bg-primary text-white font-bold text-2xl flex items-center justify-center">
                {step.number}
              </div>
              {/* Title */}
              <h3 className="font-semibold text-foreground mt-4 text-lg">
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-foreground-muted mt-2 text-sm max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

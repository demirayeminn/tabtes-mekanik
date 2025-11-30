"use client";

export default function RegionsSection() {
  const regions = [
    "Çerkezköy", // Featured
    "Kapaklı",
    "Çorlu",
    "Velimeşe",
    "Marmaracık",
    "Kızılpınar",
    "Saray",
    "Muratlı",
    "Tekirdağ Merkez",
    "Edirne",
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
            Hizmet Bölgelerimiz
          </h2>
          <p className="text-foreground-muted mt-4">
            Trakya genelinde yanınızdayız
          </p>
        </div>

        {/* Badges Container */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 max-w-4xl mx-auto">
          {regions.map((region, index) => {
            const isFeatured = region === "Çerkezköy";
            return (
              <div
                key={index}
                className={`rounded-full px-6 py-3 font-medium transition-all duration-300 cursor-pointer ${
                  isFeatured
                    ? "bg-primary text-white shadow-md"
                    : "bg-primary-light text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {region}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

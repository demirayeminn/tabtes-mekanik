export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Tabtes Mekanik Tesisat",
    image: "https://tabtesmekanik.com/logo.jpg",
    telephone: "+90-537-010-24-12",
    email: "tabtesmekanik@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Atatürk Caddesi",
      addressLocality: "Çerkezköy",
      addressRegion: "Tekirdağ",
      postalCode: "59500",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.2863,
      longitude: 27.9994,
    },
    url: "https://tabtesmekanik.com",
    priceRange: "₺₺",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "23:59",
        description: "Sadece Acil Servis",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Çerkezköy" },
      { "@type": "City", name: "Kapaklı" },
      { "@type": "City", name: "Çorlu" },
      { "@type": "City", name: "Tekirdağ" },
      { "@type": "City", name: "Edirne" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tesisat Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Kombi Montajı ve Bakımı" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Su Tesisatı" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Kaçak Tespiti" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Petek Temizleme" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Banyo Tadilatı" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "7/24 Acil Servis" },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/tabtesmekanik",
      "https://www.instagram.com/tabtesmekanik",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


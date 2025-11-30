import {
  Shield,
  Warehouse,
  Building,
  Home,
  Wind,
  Snowflake,
  Flame,
  Droplets,
  Search,
  Thermometer,
  Bath,
  Clock,
} from "lucide-react";

export const services = [
  // YENİ HİZMETLER (KARTVIZITTEKI SIRA)
  {
    icon: Shield,
    title: "Yangın Sprink",
    description:
      "Endüstriyel ve ticari binalar için yangın sprinkler sistem montajı, bakımı ve periyodik kontrolleri.",
    href: "/hizmetlerimiz/yangin-sprink",
    featured: true,
  },
  {
    icon: Warehouse,
    title: "Kazan Dairesi",
    description:
      "Merkezi ısıtma sistemleri için kazan dairesi kurulumu, bakımı, onarımı ve modernizasyonu.",
    href: "/hizmetlerimiz/kazan-dairesi",
    featured: true,
  },
  {
    icon: Building,
    title: "Kaskat Sistemler",
    description:
      "Büyük binalar ve tesisler için kaskat kazan sistemleri. Yüksek verimli, ekonomik ısıtma çözümleri.",
    href: "/hizmetlerimiz/kaskat-sistemler",
  },
  {
    icon: Home,
    title: "Daire Tesisatı",
    description:
      "Konut ve apartman dairelerinde komple su tesisatı kurulumu, yenileme ve onarım hizmetleri.",
    href: "/hizmetlerimiz/daire-tesisati",
  },
  {
    icon: Wind,
    title: "Isıtma Soğutma",
    description:
      "Merkezi ısıtma, klima, fancoil ve soğutma sistemleri kurulum, bakım ve onarım hizmetleri.",
    href: "/hizmetlerimiz/isitma-sogutma",
  },
  {
    icon: Snowflake,
    title: "Çiller Gruplama",
    description:
      "Endüstriyel soğutma için çiller sistemleri kurulumu ve bakımı. Fabrika ve işletmeler için profesyonel çözümler.",
    href: "/hizmetlerimiz/ciller-gruplama",
  },

  // MEVCUT HİZMETLER (ALTTA KALACAK)
  {
    icon: Flame,
    title: "Kombi Montajı & Bakımı",
    description:
      "Tüm marka kombilerin montajı, periyodik bakımı ve arıza onarımı. Yetkili servis kalitesinde hizmet.",
    href: "/hizmetlerimiz/kombi",
  },
  {
    icon: Droplets,
    title: "Su Tesisatı",
    description:
      "Yeni bina tesisatı, tadilat ve onarım işleri. Kaliteli malzeme ve işçilik garantisi.",
    href: "/hizmetlerimiz/su-tesisati",
  },
  {
    icon: Search,
    title: "Kaçak Tespiti",
    description:
      "Kameralı ve cihazlı kaçak tespit sistemleri. Kırıp dökmeden hassas tespit.",
    href: "/hizmetlerimiz/kacak-tespiti",
  },
  {
    icon: Thermometer,
    title: "Petek Temizleme",
    description:
      "Petek ve tesisat temizliği ile ısınma verimliliğinizi artırın. Komple sistem temizliği.",
    href: "/hizmetlerimiz/petek-temizleme",
  },
  {
    icon: Bath,
    title: "Banyo Tadilatı",
    description:
      "Komple banyo yenileme, seramik döşeme ve tesisat tadilatı. Anahtar teslim projeler.",
    href: "/hizmetlerimiz/banyo-tadilati",
  },
  {
    icon: Clock,
    title: "7/24 Acil Servis",
    description:
      "Gece gündüz acil tesisat arızalarınızda yanınızdayız. Hızlı müdahale garantisi.",
    href: "/hizmetlerimiz/acil-servis",
    featured: true,
  },
];

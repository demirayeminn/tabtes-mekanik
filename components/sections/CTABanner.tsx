import Link from "next/link";
import { Phone } from "lucide-react";

export default function CTABanner() {
  const phoneNumber = "0537 010 24 12";
  const phoneLink = "tel:+905370102412";

  return (
    <section className="w-full bg-accent py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold font-heading">
          Tesisat Sorununuz mu Var?
        </h2>
        <p className="text-white/90 mt-4 text-lg">
          Hemen arayın, aynı gün çözüm sunalım!
        </p>
        <Link
          href={phoneLink}
          className="bg-white text-accent rounded-full px-10 py-5 text-xl font-bold inline-flex items-center gap-3 mt-8 hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <Phone className="w-6 h-6" />
          {phoneNumber}
        </Link>
      </div>
    </section>
  );
}

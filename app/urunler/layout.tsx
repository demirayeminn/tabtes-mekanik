import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tesisat Ürünleri | Kombi, Petek, Armatür | Tabtes Mekanik",
  description:
    "Baymak, Demirdöküm, Vaillant kombi ve tesisat ürünleri. Çerkezköy'de kaliteli ürün, profesyonel montaj.",
};

export default function UrunlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


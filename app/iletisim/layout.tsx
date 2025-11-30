import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Çerkezköy Tesisatçı | Tabtes Mekanik",
  description:
    "Tabtes Mekanik iletişim bilgileri. Çerkezköy, Çorlu, Tekirdağ bölgesinde 7/24 tesisat hizmeti. Hemen arayın!",
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


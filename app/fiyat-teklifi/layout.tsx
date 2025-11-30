import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiyat Teklifi | Online Hesaplayıcı | Tabtes Mekanik",
  description:
    "Tabtes Mekanik fiyat hesaplayıcı. Hizmet seçin, detayları girin, anında tahmini fiyat alın. Çerkezköy tesisatçı.",
};

export default function FiyatTeklifiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


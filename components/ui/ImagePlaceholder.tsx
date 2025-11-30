import { Image } from "lucide-react";

interface ImagePlaceholderProps {
  aspectRatio?: "video" | "square" | "portrait";
  icon?: React.ReactNode;
  text?: string;
  className?: string;
}

export default function ImagePlaceholder({
  aspectRatio = "video",
  icon,
  text = "Görsel Eklenecek",
  className = "",
}: ImagePlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  return (
    <div
      className={`${aspectClasses[aspectRatio]} bg-muted rounded-xl flex flex-col items-center justify-center ${className}`}
    >
      {icon || <Image className="w-12 h-12 text-foreground-muted/50" />}
      <p className="text-sm text-foreground-muted mt-2">{text}</p>
    </div>
  );
}


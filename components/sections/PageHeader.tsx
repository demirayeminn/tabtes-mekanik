import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="w-full h-48 md:h-56 bg-gradient-to-br from-[#004494] to-[#0066CC] pt-8">
      <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center gap-2 text-sm text-white/70">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-white/50" />
                )}
                {isLast ? (
                  <span className="text-white font-medium">
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {breadcrumb.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Title */}
        <h1 className="text-white text-3xl md:text-4xl font-bold font-heading mt-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/80 mt-2">{subtitle}</p>
        )}
      </div>
    </div>
  );
}


import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Tesisat Bilgileri | Tabtes Mekanik",
  description:
    "Tesisat dünyasından bilgiler, ipuçları ve öneriler. Kombi bakımı, kaçak tespiti, petek temizliği ve daha fazlası.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        title="Blog"
        subtitle="Tesisat dünyasından bilgiler"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {blogCategories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-primary hover:text-white transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const postDate = new Date(post.date);
              const formattedDate = postDate.toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <article
                  key={post.id}
                  className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-primary-light flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-primary/30" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-sm font-medium mb-3">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-foreground font-heading mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-foreground-muted mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-foreground-muted">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:gap-3 transition-all"
                    >
                      Devamını Oku
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}


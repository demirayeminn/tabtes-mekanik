import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı",
    };
  }

  return {
    title: `${post.title} | Blog | Tabtes Mekanik`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postDate = new Date(post.date);
  const formattedDate = postDate.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Convert markdown-like content to HTML (simple conversion)
  const formatContent = (content: string) => {
    return content
      .split("\n")
      .map((line, index) => {
        // Headers
        if (line.startsWith("## ")) {
          return `<h2 class="text-2xl font-bold text-foreground font-heading mt-8 mb-4">${line.replace("## ", "")}</h2>`;
        }
        if (line.startsWith("### ")) {
          return `<h3 class="text-xl font-bold text-foreground font-heading mt-6 mb-3">${line.replace("### ", "")}</h3>`;
        }
        // Lists
        if (line.startsWith("- ")) {
          return `<li class="ml-4">${line.replace("- ", "")}</li>`;
        }
        // Tables (simple)
        if (line.includes("|")) {
          return null; // Skip table rows for now
        }
        // Regular paragraphs
        if (line.trim()) {
          return `<p class="mb-4">${line}</p>`;
        }
        return null;
      })
      .filter(Boolean)
      .join("\n");
  };

  return (
    <main>
      <PageHeader
        title={post.title}
        subtitle={post.category}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Back Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Blog'a Dön
              </Link>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-foreground-muted mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              {/* Image Placeholder */}
              <div className="aspect-video bg-primary-light rounded-xl flex items-center justify-center mb-8">
                <Calendar className="w-24 h-24 text-primary/30" />
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none text-foreground-muted leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground font-heading mb-4">
                    İlgili Yazılar
                  </h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <li key={relatedPost.id}>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="text-foreground-muted hover:text-primary transition-colors block"
                        >
                          <h4 className="font-semibold text-foreground mb-1">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Card */}
              <div className="bg-primary-light rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground font-heading mb-4">
                  Tesisat Sorununuz mu Var?
                </h3>
                <p className="text-foreground-muted mb-4">
                  Hemen arayın, aynı gün çözüm sunalım!
                </p>
                <a
                  href="tel:+905370102412"
                  className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  Hemen Ara
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}


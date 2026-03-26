import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  getLatestPost,
  getFeaturedPosts,
  getPaginatedPosts,
  type BlogPost,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Next Wave Agentic",
  description:
    "Insights on AI, software development, and the future of creative technology from the Next Wave Agentic team.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function HeroPost({ post }: { post: BlogPost }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
        <Link href={`/blog/${post.slug}`} className="group block">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-night-navy border border-muted-indigo/30 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-neon-blue/20 to-night-navy flex items-center justify-center">
                <span className="text-6xl opacity-40">✦</span>
              </div>
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover relative z-10"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              )}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-neon-pink">
                  Latest
                </span>
                <span className="text-xs text-muted-indigo">
                  {formatDate(post.date)}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cool-white mb-4 group-hover:text-neon-blue transition-colors leading-tight">
                {post.title}
              </h1>
              <p className="text-cool-white/70 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted-indigo/50 flex items-center justify-center text-sm font-bold text-cool-white">
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-cool-white">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-muted-indigo">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full rounded-2xl border border-muted-indigo/30 bg-night-navy/40 overflow-hidden transition-all duration-300 hover:border-neon-pink/40 hover:bg-night-navy/60">
        <div className="aspect-[16/9] bg-gradient-to-br from-neon-blue/15 via-neon-pink/10 to-night-navy relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl opacity-30">✦</span>
          </div>
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover relative z-10"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-wider text-neon-pink/80 bg-neon-pink/10 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold text-cool-white mb-2 group-hover:text-neon-blue transition-colors leading-snug">
            {post.title}
          </h3>
          <p className="text-cool-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-indigo">
              {formatDate(post.date)}
            </span>
            <span className="text-xs font-medium text-neon-pink group-hover:text-neon-blue transition-colors">
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function ArticleRow({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="flex flex-col sm:flex-row gap-6 py-6 border-b border-muted-indigo/20 last:border-b-0">
        <div className="sm:w-48 sm:flex-shrink-0 aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden bg-night-navy/40 border border-muted-indigo/20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-pink/5 to-night-navy flex items-center justify-center">
            <span className="text-2xl opacity-25">✦</span>
          </div>
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover relative z-10"
              sizes="192px"
            />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-wider text-neon-pink/70 bg-neon-pink/10 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
            <span className="text-xs text-muted-indigo">
              {formatDate(post.date)}
            </span>
          </div>
          <h3 className="text-base font-bold text-cool-white mb-1.5 group-hover:text-neon-blue transition-colors leading-snug">
            {post.title}
          </h3>
          <p className="text-cool-white/60 text-sm leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || "1", 10) || 1);

  const latestPost = getLatestPost();
  const featuredPosts = getFeaturedPosts(3);
  const featuredSlugs = featuredPosts.map((p) => p.slug);

  const perPage = 6;
  const { posts: paginatedPosts, totalPages } = getPaginatedPosts(
    currentPage,
    perPage,
    featuredSlugs
  );

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Header />

      <HeroPost post={latestPost} />

      {/* Featured Section */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-cool-white">Featured</h2>
            <div className="flex-1 h-px bg-muted-indigo/30" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <FeaturedCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Paginated All Articles */}
      {paginatedPosts.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-cool-white">
                All Articles
              </h2>
              <div className="flex-1 h-px bg-muted-indigo/30" />
            </div>
            <div className="max-w-3xl">
              {paginatedPosts.map((post) => (
                <ArticleRow key={post.slug} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                {currentPage > 1 && (
                  <Link
                    href={`/blog?page=${currentPage - 1}`}
                    className="px-4 py-2 text-sm rounded-lg border border-muted-indigo/30 text-cool-white hover:border-neon-pink/40 hover:text-neon-pink transition-colors"
                  >
                    ← Previous
                  </Link>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <Link
                      key={pageNum}
                      href={`/blog?page=${pageNum}`}
                      className={`w-10 h-10 flex items-center justify-center text-sm rounded-lg border transition-colors ${
                        pageNum === currentPage
                          ? "border-neon-pink bg-neon-pink/10 text-neon-pink"
                          : "border-muted-indigo/30 text-cool-white hover:border-neon-pink/40"
                      }`}
                    >
                      {pageNum}
                    </Link>
                  )
                )}
                {currentPage < totalPages && (
                  <Link
                    href={`/blog?page=${currentPage + 1}`}
                    className="px-4 py-2 text-sm rounded-lg border border-muted-indigo/30 text-cool-white hover:border-neon-pink/40 hover:text-neon-pink transition-colors"
                  >
                    Next →
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Next Wave Agentic" };
  }

  return {
    title: `${post.title} | Next Wave Agentic`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Header />

      {/* Article Header */}
      <div className="pt-32 md:pt-40 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-indigo hover:text-neon-pink transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {post.coverImage && (
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8 border border-muted-indigo/30">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-neon-blue/20 to-night-navy" />
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover relative z-10"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-wider text-neon-pink/80 bg-neon-pink/10 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cool-white leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-indigo">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="w-1 h-1 rounded-full bg-muted-indigo" />
            <span>{Math.ceil(post.content.split(/\s+/).length / 200)} min read</span>
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          {/* Article Content */}
          <article className="min-w-0">
            <div className="blog-prose">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start space-y-8">
            {/* Author Card */}
            <div className="rounded-2xl border border-muted-indigo/30 bg-night-navy/40 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-muted-indigo/50 flex items-center justify-center text-lg font-bold text-cool-white flex-shrink-0">
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-cool-white">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-neon-pink">{post.author.role}</p>
                </div>
              </div>
              <p className="text-sm text-cool-white/60 leading-relaxed">
                {post.author.bio}
              </p>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="rounded-2xl border border-muted-indigo/30 bg-night-navy/40 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-indigo mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block"
                    >
                      <h4 className="text-sm font-medium text-cool-white group-hover:text-neon-blue transition-colors leading-snug mb-1">
                        {related.title}
                      </h4>
                      <p className="text-xs text-muted-indigo">
                        {formatDate(related.date)}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="rounded-2xl border border-muted-indigo/30 bg-night-navy/40 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-indigo mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-cool-white/70 bg-muted-indigo/20 px-3 py-1.5 rounded-full border border-muted-indigo/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}

import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextwaveagentic.com";

  // 1. Static routes
  const staticRoutes = [
    "",
    "/blog",
    "/projects",
    "/bentonville",
    "/engagement",
    "/experiences",
    "/gallery",
    "/healthcare-ai",
    "/nexie",
    "/software",
    "/storytelling",
    "/strategy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Blog posts dynamic routes
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = getAllPosts();
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Failed to generate blog routes for sitemap:", error);
  }

  // 3. Projects dynamic routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}${project.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}

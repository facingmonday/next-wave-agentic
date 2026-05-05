import type { Metadata } from "next";
import { projects } from "@/lib/projects";

const DEFAULT_TITLE = "Projects | Next Wave Agentic";
const DEFAULT_DESCRIPTION =
  "Explore our portfolio of AI-powered projects, campaigns, and digital experiences.";
const DEFAULT_IMAGE = "/images/next-wave-agentic.jpeg";

export function buildProjectMetadata(slug: string): Metadata {
  const pagePath = `/projects/${slug}`;
  const project = projects.find((item) => item.href === pagePath);

  if (!project) {
    return {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      alternates: {
        canonical: pagePath,
      },
      openGraph: {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        type: "website",
        url: pagePath,
        images: [{ url: DEFAULT_IMAGE, alt: "Next Wave Agentic" }],
      },
      twitter: {
        card: "summary_large_image",
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        images: [DEFAULT_IMAGE],
      },
    };
  }

  return {
    title: `${project.title} | Next Wave Agentic`,
    description: project.description,
    alternates: {
      canonical: pagePath,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      url: pagePath,
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

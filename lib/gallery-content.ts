import { projects } from "./projects";

export type GalleryVideoItem = {
  type: "video";
  id: string;
  videoUrl: string;
  thumbnailUrl?: string;
  title: string;
  description?: string;
  projectHref: string | null;
  /** Short "what we did" case-study teaser (1 sentence) */
  teaser?: string;
};

export type GalleryAppItem = {
  type: "app" | "website";
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
  /** Short "what we did" case-study teaser (1 sentence) */
  teaser?: string;
};

export type GalleryItem = GalleryVideoItem | GalleryAppItem;

/**
 * Tags that indicate a project is an App or Website for gallery display.
 * Used to filter projects from lib/projects.ts.
 */
const APP_WEBSITE_TAGS = [
  "Product",
  "CMS",
  "Events",
  "Payments",
  "Marketplace",
  "App",
  "Web",
  "Education",
  "Civic",
  "Community",
];

export const galleryVideos: GalleryVideoItem[] = [
  {
    type: "video",
    id: "gallery-vimeo-1168643448",
    videoUrl: "https://vimeo.com/1168643448?share=copy&fl=sv&fe=ci",
    title: "Goodtimes Bentonville",
    description:
      "A video that showcases the Goodtimes Bentonville concierge service.",
    projectHref: "/projects/goodtimes-bentonville",
    teaser: "Concierge storytelling and event experiences for Bentonville.",
  },
  {
    type: "video",
    id: "kikits-launch",
    videoUrl: "https://vimeo.com/1105184966?fl=ip&fe=ec",
    thumbnailUrl: "/images/projects/kikits/kikits-video.png",
    title: "Kikits Launch Announcement",
    description:
      "A high-level launch announcement introducing Kikits to the world.",
    projectHref: "/projects/kikits",
    teaser:
      "Event discovery and ticketing platform with AI-powered product videos.",
  },
  {
    type: "video",
    id: "pedal-pals-main",
    videoUrl: "https://vimeo.com/1126858733?fl=ip&fe=ec",
    thumbnailUrl: "/images/projects/pedal-pals/crystal.jpg",
    title: "Pedal Pals Main Campaign",
    description:
      "Join the Pedal Pals as they explore Bentonville and learn about bike safety together.",
    projectHref: "/projects/pedal-pals",
    teaser:
      "Character-driven bike safety storytelling for kids in Northwest Arkansas.",
  },
  {
    type: "video",
    id: "maya-spark",
    videoUrl: "https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci",
    thumbnailUrl: "/images/projects/kikits/MayaAndSpark.jpg",
    title: "Maya & Spark",
    description:
      "Find Your Way. Light the Moment. An emotionally uplifting animated short.",
    projectHref: "/projects/maya-spark",
    teaser:
      "AI-powered emotional storytelling that brings event discovery to life.",
  },
  {
    type: "video",
    id: "stewart-healthcare",
    videoUrl: "https://vimeo.com/1152624059?share=copy&fl=sv&fe=ci",
    thumbnailUrl: "/images/projects/kikits/MayaAndSpark.jpg",
    title: "Stewart Gill - Healthcare Innovation",
    description:
      "Stewart Gill - Healthcare Innovation. A video that showcases the innovation and leadership of Stewart Gill in the healthcare industry.",
    teaser: "Thought-leadership and legacy storytelling for healthcare.",
    projectHref: "/stories",
  },
  {
    type: "video",
    id: "stewart-gill-legacy",
    videoUrl: "https://vimeo.com/1152629235?share=copy&fl=sv&fe=ci",
    thumbnailUrl: "/images/projects/pedal-pals/benny.jpg",
    title: "Stewart Gill - Legacy",
    description:
      "Stewart Gill - Legacy. A video that showcases the legacy of Stewart Gill in the healthcare industry.",
    projectHref: "/stories",
  },
  {
    type: "video",
    id: "kikits-qr-codes",
    videoUrl: "https://vimeo.com/1110591196?fl=ip&fe=ec",
    thumbnailUrl: "/images/projects/kikits/explain.jpeg",
    title: "Creating QR Codes",
    description:
      "An AI-generated walkthrough that teaches users how to create and customize QR codes in Kikits.",
    projectHref: "/projects/kikits",
  },
  {
    type: "video",
    id: "pedal-pals-safety",
    videoUrl: "https://vimeo.com/1140033869?share=copy&fl=sv&fe=ci",
    thumbnailUrl: "/images/projects/pedal-pals/benny.jpg",
    title: "Cold Weather Tips and Safety",
    description:
      "Learn about the importance of safety in cold weather, and how to stay warm and safe while riding your bike.",
    projectHref: "/projects/pedal-pals",
  },
  {
    type: "video",
    id: "kikits-drink-tickets",
    videoUrl: "https://vimeo.com/1111744640?fl=ip&fe=ec",
    thumbnailUrl: "/images/projects/kikits/show.jpeg",
    title: "Creating Drink Tickets",
    description:
      "A clear, guided explanation showing how Kikits simplifies drink ticket creation.",
    projectHref: "/projects/kikits",
  },
  {
    type: "video",
    id: "scale",
    videoUrl: "https://vimeo.com/1153463822",
    title: "Scale",
    description:
      "Scale — an exploration of growth and transformation by NWA Apps.",
    projectHref: "/projects/scalelxp",
    teaser: "AI-powered supply chain education through competitive simulation.",
  },
];

/**
 * Apps & Websites for the gallery grid.
 * Filtered from projects where at least one tag matches APP_WEBSITE_TAGS.
 */
export const galleryAppsWebsites: GalleryAppItem[] = projects
  .filter(
    (p) =>
      p.tags &&
      p.tags.some((tag) =>
        APP_WEBSITE_TAGS.some((t) =>
          tag.toLowerCase().includes(t.toLowerCase()),
        ),
      ),
  )
  .map((p) => ({
    type: "website" as const,
    id: p.id,
    title: p.title,
    description: p.description,
    image: p.image,
    href: p.href,
    tags: p.tags,
  }));

/**
 * Unified gallery items: videos first, then apps & websites.
 */
export const allGalleryItems: GalleryItem[] = [
  ...galleryVideos,
  ...galleryAppsWebsites,
];

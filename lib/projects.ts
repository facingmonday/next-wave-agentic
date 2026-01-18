export type SiteProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
};

/**
 * Canonical list of project pages under `app/projects/*`.
 * Keep this in sync with the routes in `app/projects/`.
 */
export const projects: SiteProject[] = [
  {
    id: "scalelxp",
    title: "ScaleLXP",
    description:
      "An AI-powered learning platform that turns supply chain education into a competitive, consequence-driven simulation.",
    image: "/images/scalelxp/hero/Group_collaboration_scene_202601111653_jj9ed.jpg",
    href: "/projects/scalelxp",
    tags: ["Education", "Simulation", "AI"],
  },
  {
    id: "cityviewcms",
    title: "CityView CMS",
    description:
      "A multi-tenant, AI-assisted content platform for cities—events, locations, tickets, and QR experiences in one system.",
    image: "/images/cityview/cityview-dashboard.png",
    href: "/projects/cityviewcms",
    tags: ["CMS", "Civic", "AI"],
  },
  {
    id: "kikits",
    title: "Kikits",
    description:
      "An event discovery and ticketing platform built with modern web tech—plus AI-powered product and campaign videos.",
    image: "/images/projects/kikits/spokesperson.jpeg",
    href: "/projects/kikits",
    tags: ["Events", "Product", "AI Video"],
  },
  {
    id: "okay-nwa",
    title: "OkayNWA",
    description:
      "AI-powered event discovery for Northwest Arkansas—personalized recommendations that make finding events feel effortless.",
    image: "/images/okay-nwa/okay-nwa-dash.png",
    href: "/projects/okay-nwa",
    tags: ["Events", "Community", "AI"],
  },
  {
    id: "lineup-booking",
    title: "Lineup Booking",
    description:
      "A modern platform for artists and venues—discovery, booking workflows, and Stripe-backed payments all in one place.",
    image: "/images/lineup-booking/LineUpDudes.png",
    href: "/projects/lineup-booking",
    tags: ["Payments", "Marketplace", "Music"],
  },
  {
    id: "maya-spark",
    title: "Maya & Spark",
    description:
      "An emotionally uplifting animated short and event experience blending AI storytelling with real-world interaction.",
    image: "/images/projects/kikits/MayaAndSpark.jpg",
    href: "/projects/maya-spark",
    tags: ["Storytelling", "Experience", "AI"],
  },
  {
    id: "pedal-pals",
    title: "Pedal Pals",
    description:
      "A character-driven bike safety initiative for kids—AI-powered storytelling built for community impact in Bentonville.",
    image: "/images/projects/pedal-pals/crystal.jpg",
    href: "/projects/pedal-pals",
    tags: ["Community", "Education", "AI Video"],
  },
  {
    id: "mrs",
    title: "Miller Risk Solutions",
    description:
      "A full website redesign and social content strategy to modernize the brand and drive high-intent engagement.",
    image: "/images/MRS/MRS.png",
    href: "/projects/mrs",
    tags: ["Web", "Brand", "Content"],
  },
  {
    id: "astro",
    title: "Astro Tow",
    description:
      "An app built for tow truck companies to simplify their operations and improve efficiency with law enforcement.",
    image: "/images/astro/astro.png",
    href: "/projects/astro",
    tags: ["App", "Operations", "Law Enforcement"],
  },
  {
    id: "nova-stone-capital-advisors",
    title: "Nova Stone Capital Advisors",
    description:
      "A website redesign and social media strategy to modernize the brand and drive high-intent engagement.",
    image: "/images/novastone/novastone-capital-advisors.jpg",
    href: "/projects/nova-stone-capital-advisors",
    tags: ["Web", "Brand", "Content"],
  }
];


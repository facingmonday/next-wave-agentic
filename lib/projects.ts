export type SiteProject = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
  client?: string;
  impact?: string;
  services?: string[];
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
    image:
      "/images/scalelxp/hero/Group_collaboration_scene_202601111653_jj9ed.jpg",
    href: "/projects/scalelxp",
    tags: ["Education", "Simulation", "AI"],
    services: ["App", "AI", "Media"],
  },
  {
    id: "cityviewcms",
    title: "CityView CMS",
    description:
      "A multi-tenant, AI-assisted content platform for cities—events, locations, tickets, and QR experiences in one system.",
    image: "/images/cityview/cityview-dashboard.png",
    href: "/projects/cityviewcms",
    tags: ["CMS", "Civic", "AI"],
    services: ["Web", "App", "AI"],
  },
  {
    id: "kikits",
    title: "Kikits",
    description:
      "An event discovery and ticketing platform built with modern web tech—plus AI-powered product and campaign videos.",
    image: "/images/projects/kikits/spokesperson.jpeg",
    href: "/projects/kikits",
    tags: ["Events", "Product", "AI Video"],
    client: "Event platform launch",
    impact:
      "Brought product UX, launch storytelling, and campaign assets into one rollout so the platform could launch with a stronger market presence.",
    services: ["App", "Web", "Video", "Marketing"],
  },
  {
    id: "chasinpayson",
    title: "Chasin Payson",
    description:
      "A high-energy event microsite and registration experience for Red Bull-supported shakeout ride activation in Bentonville.",
    image: "/images/chasinpayson/chasinpayson_home.jpeg",
    href: "/projects/chasinpayson",
    tags: ["Events", "Web", "Experience"],
    client: "Activation and registration campaign",
    impact:
      "Designed a high-energy microsite and registration flow that matched the pace of the event and made the experience easy to share.",
    services: ["Web", "Marketing", "Media"],
  },
  {
    id: "okay-nwa",
    title: "OkayNWA",
    description:
      "AI-powered event discovery for Northwest Arkansas—personalized recommendations that make finding events feel effortless.",
    image: "/images/okay-nwa/okay-nwa-dash.png",
    href: "/projects/okay-nwa",
    tags: ["Events", "Community", "AI"],
    services: ["App", "AI", "Marketing"],
  },
  {
    id: "lineup-booking",
    title: "Lineup Booking",
    description:
      "A modern platform for artists and venues—discovery, booking workflows, and Stripe-backed payments all in one place.",
    image: "/images/lineup-booking/LineUpDudes.png",
    href: "/projects/lineup-booking",
    tags: ["Payments", "Marketplace", "Music"],
    services: ["App", "Web", "Marketing"],
  },
  {
    id: "maya-spark",
    title: "Maya & Spark",
    description:
      "An emotionally uplifting animated short and event experience blending AI storytelling with real-world interaction.",
    image: "/images/projects/kikits/MayaAndSpark.jpg",
    href: "/projects/maya-spark",
    tags: ["Storytelling", "Experience", "AI"],
    services: ["Video", "Media", "Events"],
  },
  {
    id: "pedal-pals",
    title: "Pedal Pals",
    description:
      "A character-driven bike safety initiative for kids—AI-powered storytelling built for community impact in Bentonville.",
    image: "/images/projects/pedal-pals/crystal.jpg",
    href: "/projects/pedal-pals",
    tags: ["Community", "Education", "AI Video"],
    services: ["Video", "Media", "Marketing"],
  },
  {
    id: "mrs",
    title: "Miller Risk Solutions",
    description:
      "A full website redesign and social content strategy to modernize the brand and drive high-intent engagement.",
    image: "/images/MRS/MRS.png",
    href: "/projects/mrs",
    tags: ["Web", "Brand", "Content"],
    client: "Insurance and risk advisory brand",
    impact:
      "Modernized the brand with a sharper website and content strategy built to create more trust and attract higher-intent leads.",
    services: ["Web", "Brand", "Marketing"],
  },
  {
    id: "astro",
    title: "Astro Tow",
    description:
      "An app built for tow truck companies to simplify their operations and improve efficiency with law enforcement.",
    image: "/images/astro/astro.png",
    href: "/projects/astro",
    tags: ["App", "Operations", "Law Enforcement"],
    services: ["App", "Web", "Operations"],
  },
  {
    id: "nova-stone-capital-advisors",
    title: "Nova Stone Capital Advisors",
    description:
      "A website redesign and social media strategy to modernize the brand and drive high-intent engagement.",
    image: "/images/novastone/novastone-capital-advisors.jpg",
    href: "/projects/nova-stone-capital-advisors",
    tags: ["Web", "Brand", "Content"],
    services: ["Web", "Brand", "Marketing"],
  },
  {
    id: "goodtimes-bentonville",
    title: "Goodtimes Bentonville",
    description:
      "Concierge service and event storytelling for The Town of GoodTimes—community engagement and experiences in Bentonville.",
    image: "/images/goodtimes-bentonville/goodtimes-bentonville-logo.png",
    href: "/projects/goodtimes-bentonville",
    tags: ["Experience", "Events", "Engagement"],
    services: ["Events", "Media", "Marketing"],
  },
  {
    id: "drop-in-displays",
    title: "Drop In Displays",
    description:
      "Multi-screen broadcast for live events—manage queues of content for wall-mounted screens at conferences, expos, and trade shows. One admin, unlimited displays.",
    image: "/images/drop-in-displays/drop-in-displays.jpg",
    href: "/projects/drop-in-displays",
    tags: ["Events", "Product", "App"],
    services: ["App", "Events", "Media"],
  },
  {
    id: "lytnt",
    title: "lytnt",
    description:
      "AI image generation in bulk from ingredients and references—for brands, bars, restaurants, and anyone who needs to create images. Cartoon, lifelike, ads, social media, and more.",
    image: "/images/lytnt/lytnt_black_icon.jpg",
    href: "/projects/lytnt",
    tags: ["Product", "App", "AI"],
    services: ["App", "AI", "Media"],
  },
];

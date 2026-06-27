import { BlogPost } from "./blog";

export function getOrganizationSchema() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextwaveagentic.com";
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${baseUrl}/#organization`,
    "name": "Next Wave Agentic",
    "alternateName": "NWA Apps",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      "url": `${baseUrl}/logo/NextWaveAgenticLogo.png`,
      "caption": "Next Wave Agentic Logo",
    },
    "image": `${baseUrl}/images/next-wave-agentic.jpeg`,
    "description":
      "At the intersection of AI, storytelling, and custom technology. Based in Bentonville, Northwest Arkansas, we build and deploy practical AI solutions, automated workflows, and agentic layers that transform operations.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bentonville",
      "addressRegion": "AR",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.3729",
      "longitude": "-94.2088",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@nextwaveagentic.com",
      "contactType": "customer service",
    },
    "sameAs": ["https://github.com/facingmonday"],
  };
}

export function getServicesSchema() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextwaveagentic.com";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Next Wave Agentic",
      "url": baseUrl,
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Next Wave Agentic Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intelligent AI Systems & Agentic Workflows",
            "description":
              "Deploying practical LLM applications, custom agentic workflows, internal operations automation, and governance systems to help businesses adopt AI safely.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cinematic Storytelling & Campaign Production",
            "description":
              "Producing launch films, animated explainer videos, campaign narratives, and visual branding systems designed to build credibility and trust.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software & Web Application Development",
            "description":
              "Engineering high-performance Next.js web applications, scalable platforms, and internal system integrations optimized for speed and reliability.",
          },
        },
      ],
    },
  };
}

export function getProductSchema() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextwaveagentic.com";
  return {
    "@context": "https://schema.org",
    "@type": ["Product", "SoftwareApplication"],
    "name": "Nexie",
    "image": `${baseUrl}/images/nexie/Glowing_orb_with_202603271806.jpeg`,
    "description":
      "An intelligence layer and operating system powered by OpenClaw. Nexie connects content, workflows, products, and event systems to run processes, content generation, and decision support autonomously.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "url": `${baseUrl}/nexie`,
    "brand": {
      "@type": "Brand",
      "name": "Next Wave Agentic",
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function getArticleSchema(post: BlogPost) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextwaveagentic.com";
  const coverImage = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${baseUrl}${post.coverImage}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    "headline": post.title,
    "image": [coverImage],
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Next Wave Agentic",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo/NextWaveAgenticLogo.png`,
      },
    },
    "description": post.excerpt,
  };
}

export function getHealthcareServiceSchema() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextwaveagentic.com";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare AI Pilot-to-Enterprise Acceleration",
    "description":
      "Hardening, governing, scaling, and operationalizing clinical and administrative AI pilots into secure, compliant enterprise solutions for health systems.",
    "provider": {
      "@type": "Organization",
      "name": "Next Wave Agentic",
      "alternateName": "NWA Apps",
      "url": baseUrl,
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Northwest Arkansas",
    },
  };
}

export function getHealthcareFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name":
          "How does Next Wave Agentic / NWA Apps help health systems transition from AI pilots to enterprise scale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We provide a 90-day Pilot-to-Enterprise framework that assesses and hardens experimental AI pilots, builds a secure enterprise wrapper (handling PHI security, audit logging, role-based dashboards, and EHR connectors), establishes usage governance guidelines, and deploys ROI measurement tracking.",
        },
      },
      {
        "@type": "Question",
        "name":
          "How does the NWA Apps enterprise wrapper ensure security in healthcare AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Our secure orchestration layer manages PHI risk exposure, enforces strict role-based access control, generates compliance-ready audit trails, and tracks data flows, wrapping existing AI pilot tools with the security controls required for institutional compliance.",
        },
      },
    ],
  };
}

export function getStrategyServiceSchema() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextwaveagentic.com";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Strategy & Agentic Operating System Design",
    "description":
      "Designing organizational intelligence, agent architectures, MCP integrations, structured data pipelines, and search discoverability strategies for the AI era.",
    "provider": {
      "@type": "Organization",
      "name": "Next Wave Agentic",
      "url": baseUrl,
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Agentic Operating System Strategy Deliverables",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Readiness Assessment",
            "description": "Evaluating current infrastructure, compliance risk exposure, and fast-value AI opportunities."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agent Architecture Design",
            "description": "Mapping multi-agent workflows, tool registries, model selections, and human-in-the-loop approvals."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Generative Engine Optimization (GEO)",
            "description": "Optimizing entity relationships, LLMs.txt, structured JSON-LD schemas, and discoverability in AI search engines."
          }
        }
      ]
    }
  };
}

export function getStrategyFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an Agentic Operating System?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An Agentic Operating System is the strategic design of how a business compiles its knowledge, exposes internal systems via protocols like Model Context Protocol (MCP), and deploys autonomous AI agents to execute workflow tasks while maintaining human oversight."
        }
      },
      {
        "@type": "Question",
        "name": "How does GEO (Generative Engine Optimization) differ from traditional SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional SEO focuses on keyword density, backlinks, and optimization for human clicks on search engine result pages. Generative Engine Optimization (GEO) ensures your business data, documentation, and entities are structured semantically, using formats like structured schemas and LLMs.txt, so that large language models (LLMs) and AI search agents can discover, synthesize, and accurately recommend your business."
        }
      }
    ]
  };
}

import type { BlogPost } from "@/sanity/blog";
import type { VideoGuide } from "@/sanity/guides";

export const fallbackPosts: BlogPost[] = [
  {
    title: "Top Reasons Visa Applications Get Rejected",
    slug: "visa-application-rejection-reasons",
    excerpt:
      "Understand common mistakes, missing details, and preparation gaps that can weaken a visa application.",
    publishedAt: "2026-06-12",
    author: "Visa Mate",
    category: "Visa Tips",
    keywords: [
      "visa rejection reasons",
      "visa application mistakes",
      "visa preparation tips",
    ],
    readTime: "4 min read",
    seoTitle: "Top Reasons Visa Applications Get Rejected | Visa Mate",
    seoDescription:
      "Learn common visa application mistakes and how better preparation can help you avoid confusion.",
    thumbnail: {
      url: "/images/blogs.png",
      alt: "Visa decision guidance illustration",
    },
    body: [
      {
        type: "paragraph",
        text: "Visa refusals can happen for many reasons, and every case depends on the applicant profile, destination country, documents, and interview answers. The best preparation starts with understanding where applications often become weak.",
      },
      {
        type: "heading",
        text: "Common Preparation Gaps",
      },
      {
        type: "list",
        items: [
          "Incomplete or unclear documents.",
          "Travel purpose that is not explained properly.",
          "Weak financial or profile presentation.",
          "Inconsistent details across forms, documents, and interview answers.",
        ],
      },
      {
        type: "paragraph",
        text: "Visa Mate focuses on practical preparation: document planning, profile review, form guidance, and interview practice. We do not guarantee outcomes, but we help you prepare with more clarity.",
      },
    ],
  },
  {
    title: "How to Organise Your Visa Documents Clearly",
    slug: "organise-visa-documents",
    excerpt:
      "A practical guide to building a simple document checklist and keeping your application files ready.",
    publishedAt: "2026-06-10",
    author: "Visa Mate",
    category: "Documents",
    keywords: ["visa documents", "document checklist", "visa file planning"],
    readTime: "5 min read",
    seoTitle: "How to Organise Visa Documents Clearly | Visa Mate",
    seoDescription:
      "Prepare your visa documents with a clear checklist and simple file organization process.",
    thumbnail: {
      url: "/images/blogs.png",
      alt: "Visa document support illustration",
    },
    body: [
      {
        type: "paragraph",
        text: "A clear document file helps you understand what is ready, what needs review, and what is still missing. It also reduces last-minute confusion before form filling or appointment dates.",
      },
      {
        type: "heading",
        text: "Build a Simple Checklist",
      },
      {
        type: "list",
        items: [
          "Keep identity, travel, financial, employment, and invitation documents separate.",
          "Use readable file names for digital copies.",
          "Check names, dates, and document validity carefully.",
          "Keep originals and copies organized before your appointment.",
        ],
      },
    ],
  },
  {
    title: "Visa Interview Tips for Clear Answers",
    slug: "visa-interview-clear-answers",
    excerpt:
      "Learn how to prepare for common questions and answer with confidence, honesty, and clarity.",
    publishedAt: "2026-06-08",
    author: "Visa Mate",
    category: "Interview Prep",
    keywords: [
      "visa interview tips",
      "interview preparation",
      "visa questions",
    ],
    readTime: "6 min read",
    seoTitle: "Visa Interview Tips for Clear Answers | Visa Mate",
    seoDescription:
      "Prepare for common visa interview questions with clear and practical answer guidance.",
    thumbnail: {
      url: "/images/blogs.png",
      alt: "Visa interview preparation illustration",
    },
    body: [
      {
        type: "paragraph",
        text: "A visa interview is not about memorizing perfect answers. It is about explaining your purpose, profile, and plans clearly and honestly.",
      },
      {
        type: "heading",
        text: "Prepare Around Your Real Profile",
      },
      {
        type: "list",
        items: [
          "Know your travel purpose clearly.",
          "Practice short, direct answers.",
          "Keep your documents and answers consistent.",
          "Avoid guessing when you do not know something.",
        ],
      },
    ],
  },
];

export const fallbackGuides: VideoGuide[] = [
  {
    _id: "fallback-1",
    title: "How to Prepare Your Visa Documents",
    description:
      "A step-by-step walkthrough of the documents you need for a tourist visa application.",
    category: "Documents",
    videoUrl: "https://www.instagram.com/reels/DPlPJClDPl-/",
    featured: true,
    publishedAt: "2026-06-01",
    thumbnail: { url: "/images/blogs.png" },
  },
  {
    _id: "fallback-2",
    title: "Top 5 Visa Interview Questions",
    description:
      "Practice the most commonly asked questions in a visa interview.",
    category: "Interview Prep",
    videoUrl: "https://www.instagram.com/reel/example",
    featured: false,
    publishedAt: "2026-06-05",
    thumbnail: { url: "/images/generated/about-consultation.png" },
  },
  {
    _id: "fallback-3",
    title: "Tourist Visa Tips for First-Time Applicants",
    description:
      "Quick tips to avoid common mistakes when applying for a tourist visa.",
    category: "Tourist Visa",
    videoUrl: "https://www.instagram.com/reel/example",
    featured: false,
    publishedAt: "2026-06-10",
    thumbnail: { url: "/images/blogs.png" },
  },
  {
    _id: "fallback-4",
    title: "Understanding Your Visa Profile",
    description:
      "What officers look for in your profile and how to present it clearly.",
    category: "Visa Tips",
    videoUrl: "https://www.instagram.com/reel/example",
    featured: true,
    publishedAt: "2026-06-12",
    thumbnail: { url: "/images/generated/hero-travel-consultation.png" },
  },
  {
    _id: "fallback-5",
    title: "Student Visa Document Checklist",
    description:
      "Everything you need to prepare before your student visa appointment.",
    category: "Student Visa",
    videoUrl: "https://www.instagram.com/reel/example",
    featured: false,
    publishedAt: "2026-06-15",
    thumbnail: { url: "/images/blogs.png" },
  },
  {
    _id: "fallback-6",
    title: "How to Answer Travel Purpose Questions",
    description:
      "Clear, practical advice on explaining your travel purpose to an officer.",
    category: "Interview Prep",
    videoUrl: "https://www.instagram.com/reel/example",
    featured: false,
    publishedAt: "2026-06-18",
    thumbnail: { url: "/images/generated/cta-travel-documents.png" },
  },
  {
    _id: "fallback-7",
    title: "US Visa Approved After 2 Rejections",
    description:
      "A detailed breakdown of how we approached a complex student visa case.",
    category: "Case Studies",
    videoUrl: "https://www.youtube.com/watch?v=example",
    featured: true,
    publishedAt: "2026-06-20",
    thumbnail: { url: "/images/blogs.png" },
  },
];

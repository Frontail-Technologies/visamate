export type Guide = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
};

export const guides: Guide[] = [
  {
    slug: "visa-application-rejection-reasons",
    category: "Visa Tips",
    title: "Top Reasons Visa Applications Get Rejected",
    excerpt:
      "Understand common mistakes, missing details, and preparation gaps that can weaken a visa application.",
    image: "/images/illustrations/process/Visa%20Decision%20%26%20Guidance.png",
    readTime: "4 min read",
  },
  {
    slug: "organise-visa-documents",
    category: "Documents",
    title: "How to Organise Your Visa Documents Clearly",
    excerpt:
      "A practical guide to building a simple document checklist and keeping your application files ready.",
    image: "/images/illustrations/features/Clear%20document%20support.png",
    readTime: "5 min read",
  },
  {
    slug: "visa-interview-clear-answers",
    category: "Interview Prep",
    title: "Visa Interview Tips for Clear Answers",
    excerpt:
      "Learn how to prepare for common questions and answer with confidence, honesty, and clarity.",
    image: "/images/illustrations/process/Interview%20Preparation.png",
    readTime: "6 min read",
  },
  {
    slug: "choose-right-visa-category",
    category: "Visa Tips",
    title: "How to Choose the Right Visa Category",
    excerpt:
      "Know how travel purpose, profile, and destination requirements affect the visa category you should prepare for.",
    image: "/images/illustrations/process/Country%20%26%20Visa%20Selection.png",
    readTime: "4 min read",
  },
  {
    slug: "student-visa-sop-basics",
    category: "Student Visa",
    title: "Student Visa SOP Basics You Should Know",
    excerpt:
      "Learn what a clear Statement of Purpose should explain before you move ahead with student visa preparation.",
    image: "/images/illustrations/services/student%20visa.png",
    readTime: "7 min read",
  },
  {
    slug: "business-visa-document-planning",
    category: "Business Visa",
    title: "Business Visa Document Planning Guide",
    excerpt:
      "Prepare your business purpose, invitation details, and supporting documents with a practical checklist.",
    image: "/images/illustrations/services/business%20visa.png",
    readTime: "5 min read",
  },
];

export const guideCategories = [
  "All",
  ...Array.from(new Set(guides.map((guide) => guide.category))),
];

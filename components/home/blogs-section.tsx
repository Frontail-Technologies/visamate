import { ArrowRight, BookOpen, Calendar, Clock, FileText } from "lucide-react";

const featured = {
  category: "Visa Tips",
  date: "June 28, 2026",
  readTime: "4 min",
  title: "Top 10 Reasons Visa Applications Get Rejected (And How to Avoid Them)",
  excerpt: "Understanding rejection reasons is the first step toward a stronger application. We break down the most common mistakes and what you can do to avoid them.",
  Icon: FileText,
};

const posts = [
  {
    category: "Documents",
    date: "June 22, 2026",
    readTime: "5 min",
    title: "How to Organise Your Visa Documents Like a Pro",
    excerpt: "A practical approach to document preparation that saves you time and stress.",
    Icon: BookOpen,
  },
  {
    category: "Interview",
    date: "June 15, 2026",
    readTime: "6 min",
    title: "Visa Interview Tips: What to Say and What to Avoid",
    excerpt: "Practical interview guidance to help you answer questions confidently and honestly.",
    Icon: FileText,
  },
  {
    category: "Student Visa",
    date: "June 8, 2026",
    readTime: "7 min",
    title: "SOP Writing Guide: What Visa Officers Want to See",
    excerpt: "Your Statement of Purpose is critical. Learn exactly what makes one stand out.",
    Icon: BookOpen,
  },
];

export function BlogsSection() {
  return (
    <section id="blogs" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Blogs &amp; Insights
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Latest Visa Tips &amp; Updates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Stay updated with visa tips, travel advice, and application insights.
          </p>
        </div>

        {/* Blog layout: featured + side list */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-[1.2fr_1fr]">
          {/* Featured post */}
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            {/* Neutral thumbnail — no heavy maroon gradient */}
            <div className="relative flex h-48 items-end overflow-hidden bg-muted p-6">
              <span className="relative z-10 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground">
                {featured.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {featured.readTime} read
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
                {featured.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                {featured.excerpt}
              </p>
              <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Read article <ArrowRight className="size-3.5" />
              </a>
            </div>
          </article>

          {/* Post list */}
          <div className="flex flex-col gap-4">
            {posts.map(({ category, date, readTime, title, excerpt, Icon }) => (
              <article
                key={title}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                  <Icon className="size-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {readTime}
                    </span>
                  </div>
                  <h3 className="mt-1.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground line-clamp-2">{excerpt}</p>
                  <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                    Read <ArrowRight className="size-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

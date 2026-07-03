"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import type { BlogPost } from "@/sanity/blog";

type BlogTabsProps = {
  categories: string[];
  posts: BlogPost[];
};

const isRecentlyAdded = (publishedAt: string) => {
  const publishedTime = new Date(publishedAt).getTime();

  if (Number.isNaN(publishedTime)) {
    return false;
  }

  const age = Date.now() - publishedTime;
  return age >= 0 && age <= 3 * 24 * 60 * 60 * 1000;
};

export function BlogTabs({ categories, posts }: BlogTabsProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const tabCategories = useMemo(
    () => [
      "All",
      "Recent",
      ...categories.filter((category) => category !== "All"),
    ],
    [categories],
  );

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return posts;
    }

    if (activeCategory === "Recent") {
      return [...posts].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime(),
      );
    }

    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  return (
    <section id="all-blogs" className="bg-background pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category filter strip */}
        <div className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {tabCategories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "inline-flex shrink-0 items-center rounded-lg border px-4 py-1.5 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-xs"
                    : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Showing {filteredPosts.length}{" "}
          {filteredPosts.length === 1 ? "blog" : "blogs"}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xs"
            >
              {post.thumbnail && (
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-background">
                  <Image
                    src={post.thumbnail.url}
                    alt={post.thumbnail.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    {post.category}
                  </p>
                  {isRecentlyAdded(post.publishedAt) && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-primary">
                      New
                    </span>
                  )}
                </div>
                <h2 className="mt-4 text-lg font-bold leading-tight text-foreground">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {post.readTime}
                  </span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-foreground">
                  Read Blog
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

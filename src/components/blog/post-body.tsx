import Image from "next/image";

import type { BlogBlock } from "@/sanity/blog";

export function PostBody({ body }: { body: BlogBlock[] }) {
  return (
    <div className="space-y-6 text-muted-foreground">
      {body.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={`${block.text}-${index}`}
              className="pt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={`${block.items.join("-")}-${index}`}
              className="list-disc space-y-2 pl-5 leading-7"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "image" && block.url) {
          return (
            <figure key={`${block.url}-${index}`} className="py-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-background">
                <Image
                  src={block.url}
                  alt={block.alt}
                  fill
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="object-cover"
                />
              </div>
              {block.caption && (
                <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        if (block.type === "table") {
          return (
            <figure
              key={`${block.caption || "table"}-${index}`}
              className="py-2"
            >
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full min-w-[640px] border-collapse bg-card text-sm">
                  {block.headers.length > 0 && (
                    <thead className="bg-background text-left text-foreground">
                      <tr>
                        {block.headers.map((header) => (
                          <th
                            key={header}
                            className="border-b border-border px-4 py-3 font-bold"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-border">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={`${rowIndex}-${cellIndex}`}
                            className="px-4 py-3 text-muted-foreground"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {block.caption && (
                <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={`${block.text}-${index}`} className="leading-7">
              {block.text}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}

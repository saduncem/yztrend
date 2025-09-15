import { Metadata } from "next";
import Link from "next/link";
import { aiNews } from "@/data/aiNews";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "YZTrend AI Haber Akışı - Güncel AI Haberleri ve Trendler",
  description: "YZTrend: Yapay zeka düyasından en güncel haberler ve trend analizleri.",
  keywords: ["AI haberleri", "YZTrend", "yapay zeka", "teknoloji", "trend"],
};

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl mb-4">
          Günlük AI Haber Akışı
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Yapay zeka düyasından en son haberler ve trendler. Günlück güncellenen içeriklerle hep güncel kalın.
        </p>
      </section>
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {aiNews.map((item) => (
          <article
            key={item.id}
            className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900 shadow-sm flex flex-col justify-between"
          >
            <header>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <time
                dateTime={item.date}
                className="block mt-1 text-sm text-gray-600 dark:text-gray-400"
              >
                {new Date(item.date).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </header>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{item.summary}</p>
            {item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            {item.url ? (
              <Link
                href={item.url}
                className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Daha fazla →
              </Link>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  );
}

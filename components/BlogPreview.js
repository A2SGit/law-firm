"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const previews = [
  {
    slug: "understanding-stay-orders",
    category: "Civil Litigation",
    title: "Understanding Stay Orders Under Indian Law",
    summary:
      "A practical guide to stay orders — when courts grant them, what conditions must be met, and how to protect your rights during pending litigation.",
    date: "15 April 2024",
    author: "Adv. Hanumanta Rao",
    readTime: "5 min read",
    accent: "bg-primary",
  },
  {
    slug: "criminal-procedure-code",
    category: "Criminal Defence",
    title: "Key Amendments to the Bharatiya Nagarik Suraksha Sanhita",
    summary:
      "An analysis of how the new criminal procedure code changes bail provisions, evidence timelines, and defence strategy for accused persons in Telangana.",
    date: "2 April 2024",
    author: "Adv. Ramarao",
    readTime: "7 min read",
    accent: "bg-secondary",
  },
  {
    slug: "citizens-guide-constitution",
    category: "Constitutional Law",
    title: "Article 21 & Your Right to Personal Liberty",
    summary:
      "From the right to privacy to the right to a dignified life — how the Supreme Court has expanded Article 21 into a powerful charter of individual rights.",
    date: "20 March 2024",
    author: "Adv. Hanumanta Rao",
    readTime: "6 min read",
    accent: "bg-primary",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3"
            >
              Legal Insights
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-primary"
            >
              From Our Advocates
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors border-b border-secondary/40 hover:border-primary pb-0.5"
            >
              View all articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previews.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image placeholder with category label */}
              <div className={`${article.accent} h-2 w-full`} />
              <div className="bg-neutral-100 h-44 flex items-center justify-center relative overflow-hidden">
                <ScalesPlaceholder />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed flex-grow mb-5">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                      {article.author.split(" ").pop()[0]}R
                    </div>
                    <span className="text-xs font-medium text-neutral-600">{article.author}</span>
                  </div>
                  <Link
                    href="/blog"
                    className="text-xs font-semibold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Read
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScalesPlaceholder() {
  return (
    <svg viewBox="0 0 120 80" className="w-24 h-16 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="60" y1="10" x2="60" y2="70" />
      <line x1="30" y1="28" x2="90" y2="28" />
      <line x1="30" y1="28" x2="18" y2="48" />
      <line x1="30" y1="28" x2="42" y2="48" />
      <path d="M14 48 Q30 54 46 48" />
      <line x1="90" y1="28" x2="78" y2="46" />
      <line x1="90" y1="28" x2="102" y2="46" />
      <path d="M74 46 Q90 52 106 46" />
      <path d="M48 70 L72 70 L68 62 L52 62 Z" />
    </svg>
  );
}

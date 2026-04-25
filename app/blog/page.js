"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const articles = [
  {
    slug: "understanding-stay-orders",
    title: "Understanding Stay Orders Under Indian Law",
    summary: "A comprehensive guide to stay orders, when they are granted, and how they protect your rights during pending litigation.",
    content: "Stay orders are interim relief granted by courts to preserve the status quo during the pendency of a case. They are typically granted when three conditions are met: a prima facie case exists, the balance of convenience favours the applicant, and irreparable loss would occur without such an order.\n\nIn Indian jurisprudence, stay orders play a crucial role in protecting property rights, preventing demolitions, and halting administrative actions. The Supreme Court has laid down guidelines for granting interim relief in cases like Dorab Cawasji Warden v. Coomi Sorab Warden.\n\nTo obtain a stay order, your legal team files an application before the appropriate court, demonstrating urgency and the merits of the case. Courts often hear such applications on priority, especially when fundamental rights are at stake.",
    category: "Civil Litigation",
    date: "April 15, 2024",
    author: "Hanumantha Rao",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "criminal-procedure-code",
    title: "Key Amendments to the Criminal Procedure Code",
    summary: "An analysis of recent changes to criminal procedure and what it means for defendants in white-collar cases.",
    content: "The recent amendments to the Code of Criminal Procedure bring significant changes to how white-collar crimes are investigated and prosecuted in India. Key changes include revised bail provisions, timelines for charge-sheet filing, and expanded use of electronic evidence.\n\nFor defendants in economic offenses, these amendments create both challenges and opportunities. The stricter timelines may pressure prosecution agencies, potentially leading to weaker cases. Conversely, the expanded evidence provisions allow courts to consider digital records more readily.\n\nOur criminal defense practice has been closely monitoring these changes and advising clients on how to navigate the evolving legal landscape effectively.",
    category: "Criminal Defense",
    date: "April 02, 2024",
    author: "Meera Reddy",
    imageUrl: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "citizens-guide-constitution",
    title: "A Citizen's Guide to Fundamental Rights",
    summary: "Exploring Article 21 and how recent Supreme Court judgments have expanded the scope of personal liberty.",
    content: "Article 21 of the Indian Constitution guarantees that no person shall be deprived of life or personal liberty except according to procedure established by law. Over decades, the Supreme Court has expanded this seemingly simple provision into a comprehensive charter of rights.\n\nFrom the right to privacy (K.S. Puttaswamy judgment) to the right to a clean environment, the right to education, and the right to dignified living — Article 21 has become the foundation of modern Indian constitutional jurisprudence.\n\nCitizens should understand that these rights are enforceable directly through writ petitions under Article 32 (Supreme Court) and Article 226 (High Courts), providing a powerful mechanism for justice.",
    category: "Constitutional Law",
    date: "March 20, 2024",
    author: "Hanumantha Rao",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "landmark-judgment-analysis",
    title: "Analysis: Corporate Taxation Rulings 2024",
    summary: "How the latest tribunal decisions affect corporate tax planning and liability for tech companies.",
    content: "The 2024 series of tribunal rulings on corporate taxation have created a new framework for how technology companies are taxed in India. The rulings address the classification of software licensing fees, the applicability of equalisation levy, and transfer pricing norms for digital services.\n\nKey takeaway: companies with significant digital presence in India need to reassess their tax structures. The rulings suggest a trend toward substance-over-form taxation, meaning that the economic substance of transactions will take precedence over their legal characterisation.\n\nOur corporate litigation team has successfully represented several technology firms in related disputes, securing favourable interpretations of these evolving tax provisions.",
    category: "Corporate Law",
    date: "March 10, 2024",
    author: "Vikram Desai",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
];

export default function BlogListing() {
  const [expandedSlug, setExpandedSlug] = useState(null);

  return (
    <div className="bg-neutral-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Legal Insights</h1>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Stay informed with expert analysis on recent judgments, legal procedures, and your fundamental rights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article) => (
            <div key={article.slug} className="group flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">{article.category}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm text-neutral-400 mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {article.date}
                  <span className="mx-2">•</span>
                  <span>By {article.author}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-3">{article.title}</h2>
                <p className="text-neutral-600 mb-4 flex-grow">{article.summary}</p>

                <button
                  onClick={() => setExpandedSlug(expandedSlug === article.slug ? null : article.slug)}
                  className="text-secondary font-semibold inline-flex items-center cursor-pointer hover:text-[#ff5339] transition-colors"
                >
                  {expandedSlug === article.slug ? "Hide Article" : "Read Article"}
                  <svg className={`w-4 h-4 ml-1 transition-transform ${expandedSlug === article.slug ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {expandedSlug === article.slug && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-neutral-200 text-neutral-600 leading-relaxed whitespace-pre-line">
                        {article.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

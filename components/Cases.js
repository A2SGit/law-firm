"use client";
import { motion } from "framer-motion";

const cases = [
  {
    id: 1,
    title: "State of Telangana vs. Rao Corporation",
    category: "Constitutional Law",
    outcome: "Favorable Ruling (Supreme Court)",
    description: "Successfully challenged the constitutional validity of a state tax amendment, setting a nationwide precedent for corporate taxation limits.",
  },
  {
    id: 2,
    title: "In re: Cyberabad Financial Frauds",
    category: "Criminal Defense",
    outcome: "Full Acquittal",
    description: "Defended key executives in a high-profile multi-crore alleged financial fraud case. Demonstrated lack of evidence leading to complete exoneration.",
  },
  {
    id: 3,
    title: "Venkatesh vs. Horizon Developers",
    category: "Civil Litigation",
    outcome: "Settlement & Injunctive Relief",
    description: "Secured a critical stay order against illegal land acquisition and negotiated a highly favorable settlement for the landowners.",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold mb-4"
          >
            Landmark <span className="text-accent italic">Wins</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-secondary mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70"
          >
            Our track record speaks for itself. We have consistently secured favorable outcomes in some of the most complex legal battles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="mb-6">
                <span className="bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {caseItem.category}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{caseItem.title}</h3>
              <p className="text-success font-medium mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {caseItem.outcome}
              </p>
              <p className="text-white/60">{caseItem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

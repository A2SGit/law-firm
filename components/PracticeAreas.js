"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const areas = [
  {
    slug: "corporate-law",
    title: "Corporate Law",
    description:
      "Company formations, shareholder agreements, mergers & acquisitions, regulatory compliance, and board-level advisory for businesses operating across Telangana.",
    icon: CorporateIcon,
  },
  {
    slug: "property-real-estate",
    title: "Property & Real Estate",
    description:
      "Title verification, sale deed drafting, landlord–tenant disputes, RERA matters, encumbrance clearance, and registration guidance for properties in Hyderabad.",
    icon: PropertyIcon,
  },
  {
    slug: "criminal-defence",
    title: "Criminal Defence",
    description:
      "Anticipatory bail, regular bail applications, trial representation, and appeals in economic offences, NDPS, PMLA, and general criminal matters before Telangana courts.",
    icon: CriminalIcon,
  },
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    description:
      "Injunctions, stay orders, recovery suits, specific performance, and contract disputes handled with precision from the trial court through the High Court.",
    icon: CivilIcon,
  },
  {
    slug: "family-law",
    title: "Family Law",
    description:
      "Divorce, maintenance, child custody, domestic violence protection orders, and succession matters — managed with sensitivity and full confidentiality.",
    icon: FamilyIcon,
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-primary mb-4"
          >
            Areas of Practice
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-0.5 w-16 bg-secondary mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-2xl mx-auto text-base text-neutral-600 leading-relaxed"
          >
            We provide specialised counsel across five practice areas, combining
            senior expertise with the diligence of a dedicated associate team.
          </motion.p>
        </div>

        {/* Grid — 3 top, 2 centred bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-white border border-neutral-200 rounded-lg p-8 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                  index === 3 ? "md:col-start-1 lg:col-start-auto" : ""
                }`}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/5 group-hover:bg-primary group-hover:text-secondary text-primary rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  {area.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed flex-grow mb-6">
                  {area.description}
                </p>

                {/* Link */}
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary transition-colors group/link"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            );
          })}

          {/* Consultation prompt card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-primary rounded-lg p-8 flex flex-col justify-between text-white"
          >
            <div>
              <p className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3">
                Not sure where to begin?
              </p>
              <h3 className="text-xl font-serif font-bold mb-3">
                Speak to a Senior Counsel First
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Our senior advocates will listen to your matter and guide you to the right
                area of law — with no commitment required.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold py-2.5 rounded text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent("Namaste, I would like to speak to a senior counsel about my matter.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold py-2.5 rounded text-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Practice area SVG icons ── */

function CorporateIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
      <path d="M2 12h20" />
    </svg>
  );
}

function PropertyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

function CriminalIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

function CivilIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M5 7h14M5 7L3 13a5 5 0 0010 0L11 7M19 7l-2 6a5 5 0 01-10 0" />
    </svg>
  );
}

function FamilyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

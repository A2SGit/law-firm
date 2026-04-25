"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "VR",
    name: "Venkata Rao S.",
    location: "Secunderabad",
    matter: "Corporate Law",
    quote:
      "Hanumanta rao & Associates handled our company's shareholder dispute with exceptional competence. Adv. Hanumanta Rao understood the commercial realities of our situation from the very first meeting. The matter was resolved in our favour within four months — faster than we had ever anticipated.",
    color: "bg-primary",
  },
  {
    initials: "PD",
    name: "Priya Lakshmi D.",
    location: "Kukatpally, Hyderabad",
    matter: "Family Law",
    quote:
      "Going through a family matter is never easy, but the team at Hanumanta rao & Associates treated me with genuine dignity and care. They explained each step patiently, kept me informed, and ensured my children's interests were protected throughout. I am truly grateful.",
    color: "bg-secondary",
  },
  {
    initials: "MS",
    name: "Mohammed Saleem A.",
    location: "Himayatnagar, Hyderabad",
    matter: "Property Dispute",
    quote:
      "A long-standing property dispute that had troubled our family for seven years was finally resolved after we engaged Adv. Ramarao. His thoroughness in examining the title chain and his persuasive arguments before the High Court made all the difference. Highly recommended.",
    color: "bg-primary",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-4 h-4 text-secondary" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Client Voices
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-primary mb-4"
          >
            What Our Clients Say
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
            className="max-w-xl mx-auto text-base text-neutral-600"
          >
            Our reputation is built on results, discretion, and the trust of the
            families and businesses we have served across Hyderabad.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <StarRating />

              {/* Quote */}
              <svg className="w-8 h-8 text-secondary/30 mb-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-neutral-700 text-sm leading-relaxed italic flex-grow mb-6">
                {`"${t.quote}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                  <p className="text-xs text-neutral-400">{t.location} · {t.matter}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-neutral-400 mt-8">
          Testimonials are illustrative. Client identities are withheld to protect confidentiality.
        </p>
      </div>
    </section>
  );
}

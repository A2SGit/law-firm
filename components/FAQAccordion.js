"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/lib/BookingContext";
import { homepageFaqs as faqs } from "@/lib/homepage-faqs";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(null);
  const { openWidget } = useBooking();

  return (
    <section className="py-24 bg-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-primary mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-secondary mx-auto mb-6"
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="font-semibold text-primary text-lg pr-8">{faq.question}</span>
                <span className={`transform transition-transform duration-300 flex-shrink-0 ${openId === faq.id ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-0 text-neutral-600 border-t border-neutral-100 mt-2">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">Still have questions?</p>
          <button
            onClick={openWidget}
            className="text-primary font-bold hover:text-secondary underline underline-offset-4 transition-colors cursor-pointer"
          >
            Book a free consultation
          </button>
        </div>
      </div>
    </section>
  );
}

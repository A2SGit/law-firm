"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/lib/BookingContext";
import { faqSchema } from "@/lib/schema";

const WA_NUMBER = "919876543210";
const WA_MESSAGE = encodeURIComponent(
  "Namaste, I would like to schedule a consultation with Hanumanta rao & Associates."
);
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const PHONE_HREF = "tel:+919876543210";
const PHONE_DISPLAY = "+91 98765 43210";
const EMAIL = "contact@sharmaandassociates.in";

const CASE_TYPES = [
  "Corporate Law",
  "Property & Real Estate",
  "Criminal Defence",
  "Civil Litigation",
  "Family Law",
  "Other / Not Sure",
];

const CONTACT_PREFERENCE = ["Phone Call", "WhatsApp", "Email", "In-Person Visit"];

const faqs = [
  {
    id: 1,
    q: "What should I expect during the initial consultation?",
    a: "We will listen carefully to your situation, review any relevant documents you bring, and give you an honest, plain-language assessment of your legal position. We will outline the likely strategy, realistic timelines, and our fee structure — with full transparency.",
  },
  {
    id: 2,
    q: "How do you charge for your legal services?",
    a: "Our fees depend on the nature and complexity of the matter. We offer hourly rates, fixed fees for well-defined matters, and in select civil cases, contingency arrangements. A detailed written fee agreement is provided before we commence work.",
  },
  {
    id: 3,
    q: "Do you handle urgent matters — such as bail applications or urgent injunctions?",
    a: "Yes. We prioritise urgent matters including anticipatory bail applications, arrest situations, and injunctions against imminent harm. WhatsApp or call us directly for urgent assistance — we respond on priority.",
  },
  {
    id: 4,
    q: "Do you handle cases outside of Hyderabad?",
    a: "Yes. Our Senior Counsel appear before the Supreme Court of India, various High Courts, and specialised tribunals including NCLT and NGT. We represent clients across Telangana and beyond.",
  },
  {
    id: 5,
    q: "What documents should I bring to my first consultation?",
    a: "A government-issued ID for verification, any legal notices, court orders, or documents you have received, a written timeline of events if the matter is complex, and any specific questions you wish to have answered.",
  },
  {
    id: 6,
    q: "Is my consultation confidential?",
    a: "Absolutely. Everything you share with us — from the moment you make first contact — is protected by attorney-client privilege and professional confidentiality. We do not share client information under any circumstances.",
  },
];

export default function ContactPage() {
  const { openWidget } = useBooking();
  const [openId, setOpenId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    preference: "",
    description: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const faqJsonLd = faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="bg-background min-h-screen">

        {/* ── Hero ── */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1A3A6B 0%, #2A5298 100%)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
              We Are Here to Help
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Get in Touch
            </h1>
            <div className="h-0.5 w-16 bg-secondary mx-auto mb-6" />
            <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Whether you need urgent legal counsel, wish to discuss a pending matter,
              or simply have a question — our team is ready to assist.
              First consultations are always free and confidential.
            </p>

            {/* Quick contact bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-6 py-3 rounded-lg transition-all font-medium text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: {PHONE_DISPLAY}
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1dbd5a] text-white px-6 py-3 rounded-lg transition-all font-medium text-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>

        {/* ── Office info strip ── */}
        <div className="bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-primary text-xs uppercase tracking-wide mb-0.5">Office</p>
                  <p className="text-neutral-600 leading-snug">3rd Floor, Krishe Sapphire,<br />Hitech City, Hyderabad – 500081</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-primary text-xs uppercase tracking-wide mb-0.5">Phone</p>
                  <a href={PHONE_HREF} className="text-neutral-600 hover:text-secondary transition-colors">{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary text-xs uppercase tracking-wide mb-0.5">WhatsApp</p>
                  <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-[#25D366] transition-colors">{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-primary text-xs uppercase tracking-wide mb-0.5">Hours</p>
                  <p className="text-neutral-600">Mon – Sat · 10 AM – 6 PM</p>
                  <p className="text-neutral-400 text-xs">Closed on court holidays</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ── Contact form (3 cols) ── */}
            <div className="lg:col-span-3 space-y-8">

              {/* WhatsApp prompt banner */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-5 flex items-start gap-4">
                <WhatsAppIcon className="w-8 h-8 text-[#25D366] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-neutral-800 mb-1">
                    Prefer WhatsApp? Most clients do.
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    WhatsApp is the fastest way to reach our team for a first response.
                    Send us a message and a senior advocate will respond within 2 business hours.
                  </p>
                  <a
                    href={WA_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 bg-[#25D366] hover:bg-[#1dbd5a] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Open WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-serif font-bold text-primary mb-1">
                  Send Us an Enquiry
                </h2>
                <p className="text-sm text-neutral-500 mb-7">
                  We respond to all enquiries within one business day.
                </p>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">
                      Enquiry Received
                    </h3>
                    <p className="text-neutral-600 text-sm max-w-xs mx-auto">
                      Thank you, {form.name || "valued client"}. We will respond within one
                      business day. For urgent matters, please WhatsApp or call us directly.
                    </p>
                    <div className="flex gap-3 justify-center mt-6">
                      <a
                        href={PHONE_HREF}
                        className="text-sm font-semibold text-primary border border-primary/20 px-4 py-2 rounded hover:bg-primary hover:text-white transition-all"
                      >
                        Call Now
                      </a>
                      <a
                        href={WA_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold bg-[#25D366] text-white px-4 py-2 rounded hover:bg-[#1dbd5a] transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-name" className="block text-sm font-medium text-neutral-800 mb-1.5">
                          Full Name <span className="text-secondary">*</span>
                        </label>
                        <input
                          id="c-name" type="text" required
                          value={form.name} onChange={set("name")}
                          placeholder="e.g. Ravi Kumar"
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="c-phone" className="block text-sm font-medium text-neutral-800 mb-1.5">
                          Mobile Number <span className="text-secondary">*</span>
                        </label>
                        <input
                          id="c-phone" type="tel" required
                          value={form.phone} onChange={set("phone")}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-email" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="c-email" type="email"
                        value={form.email} onChange={set("email")}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-type" className="block text-sm font-medium text-neutral-800 mb-1.5">
                          Area of Law
                        </label>
                        <select
                          id="c-type"
                          value={form.caseType} onChange={set("caseType")}
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-white"
                        >
                          <option value="">Select area</option>
                          {CASE_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="c-pref" className="block text-sm font-medium text-neutral-800 mb-1.5">
                          Preferred Contact Method
                        </label>
                        <select
                          id="c-pref"
                          value={form.preference} onChange={set("preference")}
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-white"
                        >
                          <option value="">Select preference</option>
                          {CONTACT_PREFERENCE.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-desc" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        Brief Description of Your Matter
                      </label>
                      <textarea
                        id="c-desc" rows={4}
                        value={form.description} onChange={set("description")}
                        placeholder="Please describe your situation briefly. The more detail you provide, the better we can prepare for your consultation."
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors shadow-sm cursor-pointer"
                    >
                      Send Enquiry
                    </button>
                    <p className="text-xs text-neutral-400 text-center">
                      Your enquiry is confidential and protected by attorney-client privilege.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* ── Sidebar (2 cols) ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* CTA card */}
              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Book a Consultation</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Prefer to schedule a specific date and time with one of our senior
                  advocates? Use our booking tool below.
                </p>
                <button
                  onClick={openWidget}
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 rounded-lg transition-colors cursor-pointer mb-3 text-sm"
                >
                  Book Free Consultation
                </button>
                <div className="flex gap-2">
                  <a
                    href={PHONE_HREF}
                    className="flex-1 flex items-center justify-center gap-1.5 border border-white/20 hover:bg-white/10 text-white py-2.5 rounded text-xs font-semibold transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call
                  </a>
                  <a
                    href={WA_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1dbd5a] text-white py-2.5 rounded text-xs font-semibold transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
                <div className="relative">
                  <HitechCityMapPlaceholder />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-serif font-bold text-base leading-tight">Krishe Sapphire, Hitech City</p>
                    <p className="text-xs text-white/80 mt-0.5">3rd Floor · Madhapur · Near HITEC City Metro</p>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 border-t border-neutral-200">
                  <a
                    href="https://maps.google.com/?q=Krishe+Sapphire+Hitech+City+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>

              {/* Office details */}
              <div className="bg-white border border-neutral-200 rounded-xl p-5 space-y-4 text-sm">
                <h4 className="font-serif font-bold text-primary">Office Details</h4>
                <div className="space-y-3 text-neutral-600">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-neutral-800 block">Address</span>
                    3rd Floor, Krishe Sapphire<br />
                    Hitech City, Madhapur<br />
                    Hyderabad – 500081, Telangana
                  </p>
                  <p>
                    <span className="font-semibold text-neutral-800 block">Nearest Metro</span>
                    HITEC City Station (Blue Line)
                  </p>
                  <p>
                    <span className="font-semibold text-neutral-800 block">Parking</span>
                    Basement parking available at Krishe Sapphire
                  </p>
                  <p>
                    <span className="font-semibold text-neutral-800 block">Email</span>
                    <a href={`mailto:${EMAIL}`} className="text-secondary hover:underline">{EMAIL}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── FAQ Section ── */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <div className="h-0.5 w-14 bg-secondary mx-auto" />
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  >
                    <span className="font-semibold text-primary pr-8 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <span className={`transform transition-transform duration-300 flex-shrink-0 ${openId === faq.id ? "rotate-180" : ""}`}>
                      <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <div className="px-6 pb-5 text-neutral-600 border-t border-neutral-100 text-sm leading-relaxed">
                          <p className="pt-4">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-neutral-500 text-sm mb-4">
                Have a question not answered here?
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary hover:text-white px-5 py-2.5 rounded transition-all"
                >
                  Call Us
                </a>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold bg-[#25D366] hover:bg-[#1dbd5a] text-white px-5 py-2.5 rounded transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── SVG map placeholder for Hitech City ── */
function HitechCityMapPlaceholder() {
  return (
    <div className="bg-[#e8edf2] h-52 flex items-center justify-center relative overflow-hidden">
      <svg
        viewBox="0 0 400 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="400" height="200" fill="#e8edf2" />

        {/* Street grid */}
        <g stroke="#c8d0da" strokeWidth="1" fill="none">
          <line x1="0" y1="60" x2="400" y2="60" />
          <line x1="0" y1="100" x2="400" y2="100" />
          <line x1="0" y1="140" x2="400" y2="140" />
          <line x1="80" y1="0" x2="80" y2="200" />
          <line x1="160" y1="0" x2="160" y2="200" />
          <line x1="240" y1="0" x2="240" y2="200" />
          <line x1="320" y1="0" x2="320" y2="200" />
        </g>

        {/* Main roads */}
        <g stroke="#b0bbc8" strokeWidth="3" fill="none">
          <line x1="0" y1="100" x2="400" y2="100" />
          <line x1="200" y1="0" x2="200" y2="200" />
        </g>

        {/* Blocks / buildings */}
        <g fill="#d0d8e4" stroke="#c0c8d4" strokeWidth="0.5">
          <rect x="85" y="65" width="70" height="30" rx="2" />
          <rect x="85" y="105" width="70" height="30" rx="2" />
          <rect x="165" y="65" width="30" height="30" rx="2" />
          <rect x="245" y="65" width="70" height="30" rx="2" />
          <rect x="245" y="105" width="70" height="30" rx="2" />
          <rect x="165" y="105" width="30" height="30" rx="2" />
          <rect x="10" y="65" width="65" height="65" rx="2" />
          <rect x="325" y="65" width="65" height="65" rx="2" />
        </g>

        {/* HITEC City label */}
        <text x="120" y="145" fontSize="8" fill="#8a96a4" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1">
          HITECH CITY
        </text>
        <text x="280" y="145" fontSize="8" fill="#8a96a4" textAnchor="middle" fontFamily="sans-serif" letterSpacing="1">
          MADHAPUR
        </text>

        {/* Highlighted building — Krishe Sapphire */}
        <rect x="168" y="68" width="28" height="26" rx="2" fill="#1A3A6B" />
        <text x="182" y="84" fontSize="5" fill="white" textAnchor="middle" fontFamily="sans-serif">
          Krishe
        </text>

        {/* Pin */}
        <g transform="translate(182, 52)">
          <circle cx="0" cy="0" r="10" fill="#C9A84C" />
          <path d="M0 -6 C-3 -6 -5 -3 -5 0 C-5 4 0 9 0 9 C0 9 5 4 5 0 C5 -3 3 -6 0 -6 Z" fill="#1A3A6B" />
          <circle cx="0" cy="0" r="2.5" fill="white" />
        </g>

        {/* Metro station marker */}
        <g transform="translate(130, 100)">
          <rect x="-12" y="-7" width="24" height="14" rx="3" fill="#2A5298" />
          <text x="0" y="4" fontSize="6" fill="white" textAnchor="middle" fontFamily="sans-serif">Metro</text>
        </g>
      </svg>
    </div>
  );
}

/* ── Icon ── */
function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

"use client";
import { motion } from "framer-motion";
import { useBooking } from "@/lib/BookingContext";

const WA_NUMBER = "919876543210";
const WA_MESSAGE = encodeURIComponent(
  "Namaste, I would like to schedule a consultation with Hanumanta rao & Associates."
);
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const PHONE_HREF = "tel:+919876543210";
const PHONE_DISPLAY = "+91 98765 43210";

export default function Hero() {
  const { openWidget } = useBooking();

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg, #1A3A6B 0%, #2A5298 60%, #1A3A6B 100%)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0L0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-white/80 tracking-wide">
              Registered · Bar Council of Telangana
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Trusted Legal Counsel{" "}
            <span className="text-secondary italic">in Hyderabad.</span>
          </h1>

          <p className="text-lg text-white/75 mb-10 max-w-xl leading-relaxed font-sans">
            Sharma &amp; Associates has served individuals, families, and businesses across
            Telangana for over two decades — with honesty, rigour, and the personal
            attention every client deserves.
          </p>

          {/* Primary CTA */}
          <div className="mb-5">
            <button
              onClick={openWidget}
              className="bg-secondary hover:bg-secondary-dark text-white font-bold px-8 py-4 rounded transition-all transform hover:-translate-y-0.5 shadow-lg cursor-pointer text-base"
            >
              Book Free Consultation
            </button>
          </div>

          {/* Contact options — phone + WhatsApp */}
          <p className="text-white/50 text-sm mb-3">Or reach us directly:</p>
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 border border-white/25 hover:border-white/60 hover:bg-white/10 px-5 py-2.5 rounded transition-all font-medium text-sm"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {PHONE_DISPLAY}
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#25D366]/50 hover:border-[#25D366] hover:bg-[#25D366]/10 px-5 py-2.5 rounded transition-all font-medium text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Social proof row */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex -space-x-2.5">
              {["HR", "MR", "VS", "PA", "KR"].map((initials) => (
                <div
                  key={initials}
                  className="w-10 h-10 rounded-full border-2 border-primary bg-white/20 flex items-center justify-center text-xs font-bold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-white text-lg leading-tight">500+ Matters</p>
              <p className="text-sm text-white/60">resolved across Telangana courts</p>
            </div>
            <div className="h-8 w-px bg-white/20 hidden sm:block" />
            <div>
              <p className="font-bold text-white text-lg leading-tight">20+ Years</p>
              <p className="text-sm text-white/60">of courtroom experience</p>
            </div>
          </div>
        </motion.div>

        {/* Right — animated scales of justice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center relative w-full aspect-square max-w-md mx-auto"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-secondary/10 blur-3xl" />

          <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl relative z-10">
            {/* Pillar */}
            <motion.path
              d="M250 60 L250 430"
              stroke="#C9A84C"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
            {/* Cross bar */}
            <motion.path
              d="M140 170 L360 170"
              stroke="#C9A84C"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
            {/* Left pan chains */}
            <motion.path
              d="M140 170 L100 280 M140 170 L180 280"
              stroke="#C9A84C" strokeWidth="2.5" fill="none"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
            />
            {/* Right pan chains */}
            <motion.path
              d="M360 170 L320 270 M360 170 L400 270"
              stroke="#C9A84C" strokeWidth="2.5" fill="none"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
            />
            {/* Left pan (slightly lower — balanced) */}
            <motion.path
              d="M90 280 Q140 296 190 280"
              stroke="#C9A84C" strokeWidth="4" fill="#C9A84C" fillOpacity="0.15"
              strokeLinecap="round"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            />
            {/* Right pan */}
            <motion.path
              d="M310 270 Q360 286 410 270"
              stroke="#C9A84C" strokeWidth="4" fill="#C9A84C" fillOpacity="0.15"
              strokeLinecap="round"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            />
            {/* Base */}
            <motion.path
              d="M200 430 L300 430 L285 390 L215 390 Z"
              fill="#C9A84C" fillOpacity="0.8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
            {/* Crown */}
            <motion.circle
              cx="250" cy="60" r="14"
              fill="#C9A84C"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            {/* Decorative ring */}
            <motion.circle
              cx="250" cy="250" r="160"
              stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.06"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F5F5F0" />
        </svg>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

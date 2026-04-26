"use client";
import { motion } from "framer-motion";

const badges = [
  {
    icon: ShieldIcon,
    title: "Bar Council of Telangana",
    sub: "Registered Advocates",
  },
  {
    icon: CourtIcon,
    title: "Telangana High Court",
    sub: "Empanelled Advocates",
  },
  {
    icon: SupremeIcon,
    title: "Supreme Court of India",
    sub: "Senior Counsel Appearances",
  },
  {
    icon: CalendarIcon,
    title: "Established 2004",
    sub: "20+ Years in Hyderabad",
  },
  {
    icon: LockIcon,
    title: "Client Confidentiality",
    sub: "Strict professional privilege",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-secondary text-xs font-semibold tracking-widest uppercase mb-10"
        >
          Credentials &amp; Memberships
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-14 h-14 rounded-full border border-secondary/30 bg-white/5 flex items-center justify-center group-hover:border-secondary/70 group-hover:bg-white/10 transition-all duration-300">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{badge.title}</p>
                  <p className="text-white/50 text-xs mt-0.5">{badge.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-10 border-t border-white/10 text-center"
        >
          <p className="text-white/60 text-base italic font-serif max-w-2xl mx-auto">
            {`"Fiat justitia ruat caelum — Let justice be done though the heavens fall."`}
          </p>
          <p className="text-white/30 text-xs mt-2 font-sans">
            The guiding principle of every advocate at Hanumanta rao &amp; Associates
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Icon components ── */

function ShieldIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function CourtIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
    </svg>
  );
}

function SupremeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

function LockIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Team data — 2 Senior Counsel + 5 Associates
───────────────────────────────────────────── */

const seniorCounsel = [
  {
    slug: "hanumanta-rao",
    initials: "HR",
    name: "Adv. Hanumanta Rao",
    designation: "Senior Counsel",
    enrollment: "Bar Council of Telangana · Enrl. No. TG/0001/1998",
    specialisation: "Constitutional Law & Public Interest Litigation",
    bio: "With over 25 years at the Telangana High Court and frequent appearances before the Supreme Court of India, Adv. Hanumanta Rao is one of Hyderabad's most respected constitutional lawyers. A former Additional Advocate General, he has successfully argued over 150 writ petitions and PILs — many of which have set binding precedents across Telangana.",
    highlights: [
      "Former Additional Advocate General, Telangana",
      "150+ Writ Petitions & PILs argued",
      "Supreme Court — Senior Designation",
    ],
    avatarBg: "bg-primary",
    accentColor: "border-secondary",
  },
  {
    slug: "ramarao",
    initials: "RR",
    name: "Adv. Ramarao",
    designation: "Senior Counsel",
    enrollment: "Bar Council of Telangana · Enrl. No. TG/0047/2001",
    specialisation: "Criminal Defence & Financial Crimes",
    bio: "Adv. Ramarao commands 22 years of experience in criminal trial advocacy, anticipatory bail jurisprudence, and the defence of complex PMLA and economic offence cases. Known for his incisive cross-examinations and command of forensic evidence, he has secured acquittals and bail relief in some of Telangana's most high-profile criminal matters.",
    highlights: [
      "22+ years in criminal trial advocacy",
      "PMLA, NDPS & Economic Offences specialist",
      "100+ bail matters — High Court & Supreme Court",
    ],
    avatarBg: "bg-neutral-800",
    accentColor: "border-secondary",
  },
];

const associates = [
  {
    slug: "priya-sharma",
    initials: "PS",
    name: "Adv. Priya Sharma",
    designation: "Associate",
    specialisation: "Property & Real Estate",
    experience: "6 years",
    avatarBg: "bg-primary/80",
  },
  {
    slug: "kiran-reddy",
    initials: "KR",
    name: "Adv. Kiran Reddy",
    designation: "Associate",
    specialisation: "Civil Litigation",
    experience: "5 years",
    avatarBg: "bg-primary",
  },
  {
    slug: "meghana-rao",
    initials: "MR",
    name: "Adv. Meghana Rao",
    designation: "Associate",
    specialisation: "Family Law",
    experience: "4 years",
    avatarBg: "bg-neutral-700",
  },
  {
    slug: "suresh-kumar",
    initials: "SK",
    name: "Adv. Suresh Kumar",
    designation: "Associate",
    specialisation: "Corporate Law",
    experience: "7 years",
    avatarBg: "bg-primary-dark",
  },
  {
    slug: "anitha-devi",
    initials: "AD",
    name: "Adv. Anitha Devi",
    designation: "Associate",
    specialisation: "Criminal Defence",
    experience: "3 years",
    avatarBg: "bg-neutral-600",
  },
];

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */

export default function Team() {
  return (
    <section className="py-24 bg-neutral-100 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #1A3A6B 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Heading ── */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3"
          >
            The People Behind Your Case
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-primary mb-4"
          >
            Our Team of 7 Advocates
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
            Led by two Senior Counsel with over four decades of combined experience,
            our associates bring focused specialisation across all five practice areas.
          </motion.p>
        </div>

        {/* ── Senior Counsel — featured 2-col ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {seniorCounsel.map((member, i) => (
            <motion.div
              key={member.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-white rounded-xl shadow-md border-t-4 ${member.accentColor} overflow-hidden group hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="p-8">
                {/* Top row: avatar + name + designation */}
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className={`w-20 h-20 rounded-xl ${member.avatarBg} flex items-center justify-center text-white text-2xl font-bold font-serif flex-shrink-0 shadow-md`}
                  >
                    {member.initials}
                  </div>
                  <div className="pt-1">
                    <span className="inline-block text-xs font-bold tracking-widest text-secondary uppercase mb-1">
                      {member.designation}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-primary leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">{member.enrollment}</p>
                  </div>
                </div>

                {/* Specialisation pill */}
                <div className="inline-flex items-center gap-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-5">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {member.specialisation}
                </div>

                {/* Bio */}
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-7">
                  {member.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Profile link */}
                <Link
                  href={`/attorneys/${member.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/20 hover:border-primary hover:bg-primary hover:text-white px-5 py-2.5 rounded transition-all duration-200 group/btn"
                >
                  View Full Profile
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Associates — 5-col compact grid ── */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-neutral-400 uppercase text-center mb-8"
          >
            Associate Advocates
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {associates.map((member, i) => (
              <motion.div
                key={member.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-neutral-200 rounded-xl p-5 text-center hover:shadow-md hover:border-secondary/30 transition-all duration-200 group"
              >
                {/* Avatar */}
                <div
                  className={`w-14 h-14 rounded-full ${member.avatarBg} flex items-center justify-center text-white text-base font-bold font-serif mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform duration-200`}
                >
                  {member.initials}
                </div>

                <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">
                  {member.designation}
                </p>
                <h4 className="text-sm font-serif font-bold text-primary leading-tight mb-1">
                  {member.name}
                </h4>
                <p className="text-xs text-neutral-500 mb-1">{member.specialisation}</p>
                <p className="text-xs text-neutral-400 mb-4">{member.experience} exp.</p>

                <Link
                  href={`/attorneys/${member.slug}`}
                  className="text-xs font-semibold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Profile
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Join the team nudge ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 bg-primary/5 border border-primary/10 rounded-xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm font-semibold text-primary">Interested in joining the chamber?</p>
            <p className="text-xs text-neutral-500 mt-0.5">
              We occasionally welcome applications from dedicated law graduates and junior advocates.
            </p>
          </div>
          <a
            href="mailto:careers@hanumantarao.in"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary hover:text-white px-5 py-2.5 rounded transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Your CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}

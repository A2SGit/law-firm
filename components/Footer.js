import Link from "next/link";

const WA_NUMBER = "919876543210";
const WA_MESSAGE = encodeURIComponent(
  "Namaste, I would like to schedule a consultation with Hanumanta rao & Associates."
);
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const PHONE_DISPLAY = "+91 98765 43210";
const PHONE_HREF = "tel:+919876543210";
const EMAIL = "contact@hanumantarao.in";

const practiceAreas = [
  { label: "Corporate Law", href: "/practice-areas/corporate-law" },
  { label: "Property & Real Estate", href: "/practice-areas/property-real-estate" },
  { label: "Criminal Defence", href: "/practice-areas/criminal-defence" },
  { label: "Civil Litigation", href: "/practice-areas/civil-litigation" },
  { label: "Family Law", href: "/practice-areas/family-law" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Team", href: "/attorneys" },
  { label: "Legal Insights", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* ── Bar Council trust strip ── */}
      <div className="border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BarCouncilBadge />
            <div>
              <p className="text-sm font-semibold text-secondary leading-tight">Bar Council of Telangana</p>
              <p className="text-xs text-white/60">Registered Advocates · Telangana High Court</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ScalesIcon />
            <div>
              <p className="text-sm font-semibold text-secondary leading-tight">20+ Years of Practice</p>
              <p className="text-xs text-white/60">Hyderabad · Telangana · Supreme Court of India</p>
            </div>
          </div>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1dbd5a] text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors flex-shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-xl font-bold tracking-tight leading-tight">
                Hanumanta<span className="text-secondary">&nbsp;rao&nbsp;&amp;&nbsp;</span>Associates
              </span>
              <span className="block text-[10px] tracking-widest text-white/50 uppercase font-sans mt-0.5">
                Advocates &amp; Legal Consultants
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              A trusted law firm serving clients across Hyderabad and Telangana for over two decades. We combine senior-level expertise with a commitment to personalised, honest counsel.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block" />
              Available on WhatsApp for urgent matters
            </div>
          </div>

          {/* Column 2 — Practice Areas */}
          <div>
            <h4 className="font-serif font-bold text-base mb-5 text-white">Practice Areas</h4>
            <ul className="space-y-2.5">
              {practiceAreas.map((pa) => (
                <li key={pa.href}>
                  <Link
                    href={pa.href}
                    className="text-sm text-white/60 hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary/60 flex-shrink-0" />
                    {pa.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-base mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((ql) => (
                <li key={ql.href}>
                  <Link
                    href={ql.href}
                    className="text-sm text-white/60 hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary/60 flex-shrink-0" />
                    {ql.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="font-serif font-bold text-base mb-3 text-white">Office Hours</h4>
              <p className="text-sm text-white/60">Monday – Saturday</p>
              <p className="text-sm text-white/80 font-medium">10:00 AM – 6:00 PM</p>
              <p className="text-xs text-white/40 mt-1">Closed on court holidays</p>
            </div>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-serif font-bold text-base mb-5 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white/60 leading-relaxed">
                  3rd Floor, Krishe Sapphire,<br />
                  Hitech City, Hyderabad – 500081<br />
                  <span className="text-white/40 text-xs">Madhapur, near HITEC City Metro</span>
                </span>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-secondary transition-colors group"
                >
                  <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-[#25D366] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-secondary transition-colors"
                >
                  <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Hanumanta rao &amp; Associates — Advocates &amp; Legal Consultants. All rights reserved.
          </p>
          <p className="text-xs text-white/30 text-center sm:text-right max-w-sm">
            This website is for informational purposes only and does not constitute legal advice. Contacting us does not create an attorney–client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── Icon components ── */

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function BarCouncilBadge() {
  return (
    <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center flex-shrink-0">
      <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    </div>
  );
}

function ScalesIcon() {
  return (
    <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center flex-shrink-0">
      <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M5 6h14M5 6l-2 6a4 4 0 008 0L9 6M19 6l-2 6a4 4 0 008 0l-2-6M9 18h6" />
      </svg>
    </div>
  );
}

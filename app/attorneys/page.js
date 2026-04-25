import Link from "next/link";
import { attorneys } from "@/lib/attorneys-data";
import BookingButton from "@/components/BookingButton";

export const metadata = {
  title: "Our Advocates",
  description:
    "Meet the 7-member team at Sharma & Associates, Hyderabad — 2 Senior Counsel and 5 Associates covering corporate law, property, criminal defence, civil litigation, and family law.",
};

const seniorCounsel = attorneys.filter((a) => a.designation === "Senior Counsel");
const associates = attorneys.filter((a) => a.designation === "Associate");

const WA_HREF = `https://wa.me/919876543210?text=${encodeURIComponent("Namaste, I would like to speak to a senior counsel about my matter.")}`;

export default function AttorneysIndex() {
  return (
    <div className="bg-background min-h-screen">

      {/* ── Hero ── */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A3A6B 0%, #2A5298 100%)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4">
            The People Behind Your Case
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Team of 7 Advocates
          </h1>
          <div className="h-0.5 w-16 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Every client at Sharma &amp; Associates is assigned a dedicated advocate
            — and every matter is personally reviewed by a Senior Counsel.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* ── Senior Counsel ── */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">Senior Counsel</h2>
          <div className="h-0.5 w-10 bg-secondary mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {seniorCounsel.map((attorney) => (
              <AttorneyCard key={attorney.slug} attorney={attorney} featured />
            ))}
          </div>
        </div>

        {/* ── Associates ── */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">Associate Advocates</h2>
          <div className="h-0.5 w-10 bg-secondary mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {associates.map((attorney) => (
              <AttorneyCard key={attorney.slug} attorney={attorney} />
            ))}
          </div>
        </div>

        {/* ── CTA banner ── */}
        <div className="bg-primary rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Speak with Our Team?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Our senior advocates offer a free first consultation — in person at our
            Hitech City office, or immediately via phone or WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-8 py-3 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1dbd5a] text-white font-bold px-8 py-3 rounded transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
            <BookingButton className="border border-white/25 hover:bg-white/10 text-white font-bold px-8 py-3 rounded transition-colors">
              Book Consultation
            </BookingButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function AttorneyCard({ attorney, featured = false }) {
  return (
    <div className={`bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col ${featured ? "border-t-4 border-t-secondary" : ""}`}>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start gap-4 mb-5">
          <div
            className="rounded-xl flex items-center justify-center text-white font-bold font-serif flex-shrink-0 shadow"
            style={{
              backgroundColor: attorney.avatarBg,
              width: featured ? "72px" : "52px",
              height: featured ? "72px" : "52px",
              fontSize: featured ? "1.5rem" : "1rem",
            }}
          >
            {attorney.initials}
          </div>
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              {attorney.designation}
            </span>
            <h3 className={`font-serif font-bold text-primary leading-tight ${featured ? "text-xl" : "text-base"}`}>
              {attorney.name}
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">{attorney.experience} experience</p>
          </div>
        </div>

        <p className="text-xs font-semibold text-primary/60 uppercase tracking-wide mb-2">
          {attorney.specialisation}
        </p>

        <p className="text-sm text-neutral-600 leading-relaxed flex-grow mb-5 line-clamp-3">
          {attorney.bio}
        </p>

        {featured && (
          <ul className="space-y-1.5 mb-5">
            {attorney.highlights.slice(0, 2).map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-neutral-600">
                <svg className="w-3.5 h-3.5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {h}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={`/attorneys/${attorney.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary transition-colors"
        >
          View Profile →
        </Link>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

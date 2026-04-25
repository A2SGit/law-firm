import Link from "next/link";
import { practiceAreas } from "@/lib/practice-areas-data";
import BookingButton from "@/components/BookingButton";

export const metadata = {
  title: "Practice Areas",
  description:
    "Sharma & Associates offers full-service legal representation across five practice areas in Hyderabad: corporate law, property & real estate, criminal defence, civil litigation, and family law.",
};

const WA_HREF = `https://wa.me/919876543210?text=${encodeURIComponent("Namaste, I would like to speak to a senior counsel about my matter.")}`;

export default function PracticeAreasIndex() {
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
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Practice Areas
          </h1>
          <div className="h-0.5 w-16 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Sharma &amp; Associates provides senior-led legal counsel across five
            specialised areas of law — serving individuals, families, and businesses
            across Hyderabad and Telangana.
          </p>
        </div>
      </section>

      {/* ── Practice Area Cards ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practiceAreas.map((area, i) => (
              <div
                key={area.slug}
                className="bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group flex flex-col"
              >
                <div className="p-8 flex flex-col flex-grow">
                  {/* Number badge */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary font-bold font-serif text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {area.title}
                  </h2>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-5 flex-grow">
                    {area.shortDescription}
                  </p>

                  {/* Top 3 handles */}
                  <ul className="space-y-1.5 mb-7">
                    {area.whatWeHandle.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-neutral-600">
                        <svg className="w-3.5 h-3.5 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                    <li className="text-xs text-neutral-400 pl-5">
                      +{area.whatWeHandle.length - 3} more areas of assistance
                    </li>
                  </ul>

                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary hover:text-white px-5 py-2.5 rounded transition-all duration-200 self-start"
                  >
                    Full Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div className="bg-primary rounded-xl p-8 text-white flex flex-col justify-between">
              <div>
                <p className="text-secondary text-sm font-semibold tracking-wider uppercase mb-3">
                  Not sure which area applies?
                </p>
                <h2 className="text-2xl font-serif font-bold mb-4">
                  Speak to a Senior Counsel First
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  We offer a free first consultation where our senior advocates will review
                  your matter, identify the relevant area of law, and recommend a course of
                  action — with no obligation to proceed.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 rounded text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: +91 98765 43210
                </a>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1dbd5a] text-white font-semibold py-3 rounded text-sm transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <BookingButton className="border border-white/20 hover:bg-white/10 text-white font-semibold py-3 rounded text-sm transition-colors">
                  Book Free Consultation
                </BookingButton>
              </div>
            </div>
          </div>
        </div>
      </section>
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

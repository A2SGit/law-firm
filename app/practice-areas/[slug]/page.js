import { notFound } from "next/navigation";
import Link from "next/link";
import { practiceAreas, getPracticeAreaBySlug } from "@/lib/practice-areas-data";
import { getAttorneyBySlug } from "@/lib/attorneys-data";
import BookingButton from "@/components/BookingButton";
import { faqSchema } from "@/lib/schema";

const WA_HREF = `https://wa.me/919876543210?text=${encodeURIComponent("Namaste, I would like to schedule a consultation with Hanumanta rao & Associates.")}`;

export async function generateStaticParams() {
  return practiceAreas.map((pa) => ({ slug: pa.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
  };
}

export default async function PracticeAreaPage({ params }) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) notFound();

  const lead = getAttorneyBySlug(area.leadAdvocate);

  const faqJsonLd = faqSchema(area.faqs.map((f) => ({ question: f.q, answer: f.a })));

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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Practice Areas
            </Link>
            <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
              Hanumanta rao & Associates
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              {area.title}
            </h1>
            <div className="h-0.5 w-16 bg-secondary mb-6" />
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed italic font-serif">
              {`"${area.tagline}"`}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── Main content ── */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Overview</h2>
                <div className="h-0.5 w-10 bg-secondary mb-5" />
                <p className="text-neutral-700 leading-relaxed text-base">{area.overview}</p>
              </div>

              {/* What we handle */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">What We Handle</h2>
                <div className="h-0.5 w-10 bg-secondary mb-5" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {area.whatWeHandle.map((item) => (
                    <li key={item} className="flex items-start gap-3 bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-700">
                      <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our approach */}
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-8">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Our Approach</h2>
                <p className="text-neutral-700 leading-relaxed">{area.ourApproach}</p>
              </div>

              {/* Lead advocate */}
              {lead && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4">Lead Advocate</h2>
                  <div className="h-0.5 w-10 bg-secondary mb-5" />
                  <div className="bg-white border border-neutral-200 rounded-xl p-6 flex items-start gap-5">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-xl font-bold font-serif flex-shrink-0 shadow"
                      style={{ backgroundColor: lead.avatarBg }}
                    >
                      {lead.initials}
                    </div>
                    <div className="flex-grow">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">{lead.designation}</span>
                      <h3 className="text-xl font-serif font-bold text-primary mt-0.5">{lead.name}</h3>
                      <p className="text-sm text-neutral-500 mb-3">{lead.specialisation} · {lead.experience}</p>
                      <Link
                        href={`/attorneys/${lead.slug}`}
                        className="text-sm font-semibold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        View Full Profile →
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="h-0.5 w-10 bg-secondary mb-5" />
                <div className="space-y-4">
                  {area.faqs.map((faq, i) => (
                    <div key={i} className="bg-white border border-neutral-200 rounded-lg p-6">
                      <h3 className="font-semibold text-primary mb-2">{faq.q}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">

              {/* CTA card */}
              <div className="bg-primary text-white rounded-xl p-6 sticky top-28">
                <h3 className="text-xl font-serif font-bold mb-2">Speak to Our Team</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Our senior advocates are available for a free, confidential first consultation — by phone, WhatsApp, or in person at our Hitech City office.
                </p>
                <div className="space-y-3">
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
                  <BookingButton className="w-full border border-white/20 hover:bg-white/10 text-white font-semibold py-3 rounded text-sm transition-colors">
                    Book Free Consultation
                  </BookingButton>
                </div>

                {/* Office info */}
                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-white/50 space-y-1">
                  <p>3rd Floor, Krishe Sapphire, Hitech City</p>
                  <p>Hyderabad – 500081, Telangana</p>
                  <p className="mt-2">Mon – Sat · 10 AM – 6 PM</p>
                </div>
              </div>

              {/* Other practice areas */}
              <div className="bg-white border border-neutral-200 rounded-xl p-5">
                <h4 className="text-sm font-bold text-neutral-600 uppercase tracking-wide mb-4">
                  Other Practice Areas
                </h4>
                <ul className="space-y-2">
                  {practiceAreas
                    .filter((pa) => pa.slug !== slug)
                    .map((pa) => (
                      <li key={pa.slug}>
                        <Link
                          href={`/practice-areas/${pa.slug}`}
                          className="flex items-center gap-2 text-sm text-neutral-700 hover:text-secondary transition-colors py-1"
                        >
                          <span className="w-1 h-1 rounded-full bg-secondary/60 flex-shrink-0" />
                          {pa.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

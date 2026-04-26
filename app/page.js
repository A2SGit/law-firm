import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PracticeAreas from "@/components/PracticeAreas";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import Cases from "@/components/Cases";
import BlogPreview from "@/components/BlogPreview";
import FAQAccordion from "@/components/FAQAccordion";
import CallToAction from "@/components/CallToAction";
import { faqSchema } from "@/lib/schema";
import { homepageFaqs } from "@/lib/homepage-faqs";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hanumanta rao & Associates — Advocates & Legal Consultants",
  "image": "https://hanumantarao.in/og-image.jpg",
  "priceRange": "₹₹",
  "telephone": "+919876543210",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3rd Floor, Krishe Sapphire, Hitech City",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500081",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4469,
    "longitude": 78.3794,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "18:00",
    },
  ],
  "url": "https://hanumantarao.in",
  "sameAs": [],
};

export default function Home() {
  const faqJsonLd = faqSchema(homepageFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <StatsBar />
      <PracticeAreas />
      <Team />
      <Testimonials />
      <TrustBadges />
      <Cases />
      <BlogPreview />
      <FAQAccordion />
      <CallToAction />
    </>
  );
}

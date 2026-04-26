export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Hanumanta rao & Associates — Advocates & Legal Consultants",
  "description": "Full-service law firm in Hyderabad specialising in corporate law, property disputes, criminal defence, civil litigation, and family law.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3rd Floor, Krishe Sapphire, Hitech City",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500081",
    "addressCountry": "IN"
  },
  "telephone": "+919876543210",
  "email": "contact@hanumantarao.in",
  "url": "https://hanumantarao.in",
  "areaServed": ["Hyderabad", "Telangana", "India"],
  "serviceArea": {
    "@type": "State",
    "name": "Telangana"
  },
  "knowsAbout": [
    "Corporate Law",
    "Property & Real Estate Law",
    "Criminal Defence",
    "Civil Litigation",
    "Family Law",
    "Constitutional Law"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Bar Council of Telangana"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Law" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property & Real Estate" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Criminal Defence" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Civil Litigation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Family Law" } }
    ]
  }
};

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question || faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer || faq.a,
    },
  })),
});

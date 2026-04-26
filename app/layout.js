import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import { BookingProvider } from "@/lib/BookingContext";
import { organizationSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Hanumanta rao & Associates | Advocates & Legal Consultants | Hyderabad",
    template: "%s | Hanumanta rao & Associates",
  },
  description:
    "Hanumanta rao & Associates is a full-service law firm in Hyderabad, Telangana, with over 20 years of experience in corporate law, property disputes, criminal defence, civil litigation, and family law. Registered with the Bar Council of Telangana.",
  keywords: [
    "lawyer hyderabad",
    "advocate hyderabad",
    "law firm hyderabad",
    "criminal lawyer hyderabad",
    "property lawyer telangana",
    "corporate lawyer hitech city",
    "civil litigation hyderabad",
    "family law hyderabad",
    "bar council telangana",
    "telangana high court advocate",
  ],
  metadataBase: new URL("https://hanumantarao.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Hanumanta rao & Associates",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <BookingProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <BookingWidget />
        </BookingProvider>
      </body>
    </html>
  );
}

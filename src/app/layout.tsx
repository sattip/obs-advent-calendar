import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OBS Advent Calendar 2024 | AI Tips & Χριστουγεννιάτικες Προσφορές",
  description:
    "Ανακαλύψτε 24 ημέρες γεμάτες AI tips, χριστουγεννιάτικες προσφορές και εκπλήξεις από την OBS. Ένα ψηφιακό ημερολόγιο αντίστροφης μέτρησης με καθημερινές συμβουλές τεχνητής νοημοσύνης και ειδικές εκπτώσεις για τις γιορτές.",
  keywords: [
    "OBS",
    "Advent Calendar",
    "AI Tips",
    "Τεχνητή Νοημοσύνη",
    "Χριστούγεννα 2024",
    "Προσφορές",
    "Digital Marketing",
    "AI Tools",
  ],
  authors: [{ name: "OBS Business School" }],
  creator: "OBS Business School",
  publisher: "OBS Business School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://advent.obs.edu"),
  alternates: {
    canonical: "/",
    languages: {
      "el-GR": "/",
    },
  },
  openGraph: {
    title: "OBS Advent Calendar 2024 | AI Tips & Χριστουγεννιάτικες Προσφορές",
    description:
      "Ανακαλύψτε 24 ημέρες γεμάτες AI tips, χριστουγεννιάτικες προσφορές και εκπλήξεις από την OBS. Ένα ψηφιακό ημερολόγιο αντίστροφης μέτρησης με καθημερινές συμβουλές τεχνητής νοημοσύνης.",
    url: "https://advent.obs.edu",
    siteName: "OBS Advent Calendar",
    locale: "el_GR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OBS Advent Calendar 2024 - AI Tips & Χριστουγεννιάτικες Προσφορές",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBS Advent Calendar 2024 | AI Tips & Χριστουγεννιάτικες Προσφορές",
    description:
      "24 ημέρες AI tips και χριστουγεννιάτικες προσφορές από την OBS",
    images: ["/images/twitter-image.jpg"],
    creator: "@OBSBusinessSchool",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

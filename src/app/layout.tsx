import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Ahmad Qomaruddin - Developer Portfolio",
  description:
    "Portfolio website of Ahmad Qomaruddin, a Frontend Developer with expertise in React.js, Next.js, and Laravel. Over 5 years of experience in web development.",
  keywords: [
    "Ahmad Qomaruddin",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Ahmad Qomaruddin" }],
  creator: "Ahmad Qomaruddin",
  publisher: "Ahmad Qomaruddin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmadqomaruddin.com",
    title: "Ahmad Qomaruddin - Frontend Developer Portfolio",
    description:
      "Frontend Developer with expertise in React.js, Next.js, and Laravel. Over 5 years of experience in web development.",
    siteName: "Ahmad Qomaruddin Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmad Qomaruddin - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Qomaruddin - Frontend Developer Portfolio",
    description:
      "Frontend Developer with expertise in React.js, Next.js, and Laravel. Over 5 years of experience in web development.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

// Note: Anda perlu:
// Mengganti your-google-verification-code dengan kode verifikasi Google Search Console Anda
// Membuat dan menambahkan og-image.png (1200x630px) di folder public
// Update URL https://ahmadqomaruddin.com dengan domain Anda yang sebenarnya

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={jakarta.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          storageKey="portfolio-theme"
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

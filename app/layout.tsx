import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://emeraldofaris.com'),
  title: {
    default: "Emeraldo Faris",
    template: "%s | Emeraldo Faris",
  },
  description: "Personal portfolio of Emeraldo Faris - Digital Marketer & Aspiring Software Engineer",
  keywords: ["Emeraldo Faris", "Digital Marketing", "Software Engineer", "Portfolio", "Web Development"],
  authors: [{ name: "Emeraldo Faris" }],
  creator: "Emeraldo Faris",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emeraldofaris.com",
    title: "Emeraldo Faris",
    description: "Personal portfolio of Emeraldo Faris - Digital Marketer & Aspiring Software Engineer",
    siteName: "Emeraldo Faris",
    images: [
      {
        url: "/icon", // Next.js will resolve this to the generated icon
        width: 512,
        height: 512,
        alt: "Emeraldo Faris Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Emeraldo Faris",
    description: "Personal portfolio of Emeraldo Faris - Digital Marketer & Aspiring Software Engineer",
    creator: "@emeraldofaris",
    images: ["/icon"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

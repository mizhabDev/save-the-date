import type { Metadata } from "next";
import { Cormorant_Garamond, Amiri } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fathima Mizbaha & Mohammed Irfan | Wedding",
  description: "Together with faith, love, and family. Join us in celebrating our wedding on 15 February 2026.",
  keywords: ["wedding", "Fathima Mizbaha", "Mohammed Irfan", "islamic wedding"],
  openGraph: {
    title: "Fathima Mizbaha & Mohammed Irfan | Wedding",
    description: "Together with faith, love, and family. Join us in celebrating our wedding on 15 February 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${amiri.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

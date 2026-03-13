import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cabinetGrotesk = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Irmansyah — Frontend Developer",
  description:
    "Frontend developer & UI engineer crafting fast, beautiful, and accessible web experiences with Next.js and the modern React ecosystem.",
  keywords: [
    "frontend developer",
    "Next.js",
    "React",
    "TypeScript",
    "UI engineer",
  ],
  authors: [{ name: "Irmansyah" }],
  openGraph: {
    title: "Irmansyah — Frontend Developer",
    description: "Frontend developer crafting digital experiences that matter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${dmMono.variable} ${cabinetGrotesk.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

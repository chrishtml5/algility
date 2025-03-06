import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://algility.com'),
  title: 'Algility - Autonomous Growth Systems',
  description: 'Automate your business with Autonomous Growth Systems',
  openGraph: {
    title: 'Algility - Autonomous Growth Systems',
    description: 'Automate your business with Autonomous Growth Systems',
    url: 'https://algility.com',
    siteName: 'Algility',
    images: [
      {
        url: 'https://algility.com/images/algility.jpeg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}
        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}

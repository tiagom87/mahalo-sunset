import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thank You | Mahalo",
  description: "A heartfelt thank you and farewell message from Mahalo, as we wind down our operations.",
  openGraph: {
    type: "website",
    url: "https://mahalo.so/",
    title: "Thank You | Mahalo",
    description: "A heartfelt thank you and farewell message from Mahalo, as we wind down our operations.",
    images: [{ url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Full%20Logo%20-%20Black-p2SERfYM0Ek5lfRt3sts1MlADvG23V.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | Mahalo",
    description: "A heartfelt thank you and farewell message from Mahalo, as we wind down our operations.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Full%20Logo%20-%20Black-p2SERfYM0Ek5lfRt3sts1MlADvG23V.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

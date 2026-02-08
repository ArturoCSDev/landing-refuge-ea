import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esperanza Animal | Desfile de Adopción",
  description:
    "Únete al gran desfile de adopción de Esperanza Animal. Encuentra a tu compañero perfecto entre nuestros perritos rescatados que buscan un hogar lleno de amor.",
  keywords: [
    "adopción",
    "perros",
    "rescate animal",
    "albergue",
    "esperanza animal",
    "desfile de adopción",
  ],
  openGraph: {
    title: "Esperanza Animal | Desfile de Adopción",
    description:
      "Encuentra a tu compañero perfecto entre nuestros perritos rescatados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

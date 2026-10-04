import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Outfit, Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/Chrome";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "variable",
  axes: ["SOFT", "WONK"],
});

const body = Outfit({ subsets: ["latin"], variable: "--font-body" });
const support = Source_Sans_3({ subsets: ["latin"], variable: "--font-support" });

export const metadata: Metadata = {
  metadataBase: new URL("https://peters-custom-homes-44.vercel.app"),
  title: {
    default: "Custom Home Builders Charlotte NC | Peters Custom Homes",
    template: "%s | Peters Custom Homes",
  },
  description:
    "Charlotte home builders for luxury custom homes: founder-led, BBB A+, 8–10 estates a year with one point of accountability, Myers Park to Lake Norman.",
  openGraph: {
    siteName: "Peters Custom Homes",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${support.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          src="https://genesis-web-woad.vercel.app/genesis-feedback.js"
          data-job="44"
          defer
        ></script>
      </body>
    </html>
  );
}

/* LAYOUT_FONTS.tsx — wire on <html> via app/layout.tsx. Geist deleted. */
import { Fraunces, Outfit, Source_Sans_3 } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
});

const body = Outfit({ subsets: ["latin"], variable: "--font-body" });
const support = Source_Sans_3({ subsets: ["latin"], variable: "--font-support" });

export { display, body, support };

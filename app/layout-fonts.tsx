/* LAYOUT_FONTS.tsx — copy the imports into app/layout.tsx.
   Apply display.variable + body.variable on <html>. Delete Geist. */
import { Outfit, Source_Sans_3 } from "next/font/google";

const display = Outfit({ subsets: ["latin"], variable: "--font-display" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });
export { display, body };

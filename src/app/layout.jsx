import Navbar from "@/components/Navbar";
import "./globals.css";
import { Abril_Fatface, Montserrat, Raleway } from "next/font/google";

import { ReactLenis } from "lenis/react";
import { LenisProvider } from "@/components/LenisProvider";
import Script from "next/script";

const abril_fatface = Abril_Fatface({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-abril",
});
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

// const Boska = boska({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-boska",
// });
export const metadata = {
  title: "Story of Being",
  description:
    "Two worlds—one journey: cinematic storytelling as an accomplished film director, and deep connection with nature as an animal and Nature whisperer, all part of the Story of Being.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H2HX0D857B"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H2HX0D857B');
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} ${raleway.variable} ${abril_fatface.variable} antialiased`}
      >
        {/* <ReactLenis root /> */}
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

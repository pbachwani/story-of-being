import "./globals.css";
import { Abril_Fatface, Montserrat, Raleway } from "next/font/google";

const abril_fatface = Abril_Fatface({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-abril",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});
export const metadata = {
  title: "Story of Being",
  description:
    "Two worlds—one journey: cinematic storytelling as an accomplished film director, and deep connection with nature as an animal and Nature whisperer, all part of the Story of Being.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${montserrat.variable} ${raleway.variable} ${abril_fatface.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

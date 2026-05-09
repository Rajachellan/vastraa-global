import type { Metadata } from "next";
import { Outfit, Playfair_Display, Vollkorn } from "next/font/google";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vastraa Global | Premium Textile Design & Custom Fabric Printing",
  description: "Design your fabric, define your style. Vastraa Global offers premium custom fabric printing and textile design services for designers and individuals.",
};

import { StoreProvider } from "@/context/StoreContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${sans.variable} ${serif.variable} ${vollkorn.variable} font-sans min-h-full flex flex-col antialiased`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}



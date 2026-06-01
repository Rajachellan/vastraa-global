import type { Metadata } from "next";
import { Outfit, Playfair_Display, Vollkorn } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
      <head>
        <Script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "x03qfweos7");`}
        </Script>
      </head>
      <body className={`${sans.variable} ${serif.variable} ${vollkorn.variable} font-sans min-h-full flex flex-col antialiased`}>
         {/* Google Analytics */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-1G73ZKW4F5"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1G73ZKW4F5');
    `}
  </Script>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}



"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { NewsletterSignup } from "@/components/NewsletterSignup";

function FooterLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

export const Footer = () => {
  return (
    <footer className="bg-accent text-primary pt-20 3xl:pt-24 pb-12 relative overflow-hidden">
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="space-y-8">
           <div className="grid grid-cols-2 items-center gap-3">
  <div className="flex justify-center sm:justify-start">
    <FooterLink href="/" className="inline-block">
        <Image
                        src="/images/logo.png"
                        alt="Vastraa Global"
                        width={70}
                        height={70}
                        priority
                        unoptimized
                        style={{ width: "auto", height: "auto", maxHeight: 70 }}
                      />
    </FooterLink>
  </div>

  <div className="flex items-center h-full">
    <p className="text-xl md:text-2xl font-bold leading-tight font-serif tracking-wide text-primary/70">
      Vastraa <br />
      Global
    </p>
  </div>
</div>
            
            <p className="text-sm text-primary/50 leading-relaxed max-w-xs">
              Custom Fabric Printing for Every Brand. Premium Textile Solutions Tailored for You. Decades of expertise in digital printing and fabric consultation.
            </p>
         <div className="flex gap-4">
  {/* Instagram */}
  <Link
    href="https://www.instagram.com/vastraa_global/"
    target="_blank"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  </Link>

  {/* LinkedIn */}
  <Link
    href="https://linkedin.com"
    target="_blank"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.7 1.8-2.7 3.7V24h-4V8z" />
    </svg>
  </Link>

  {/* Facebook */}
  <Link
    href="https://www.facebook.com/profile.php?id=61591124932718"
    target="_blank"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.1V12h2.1V9.8c0-2.1 1.2-3.3 3.1-3.3.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z" />
    </svg>
  </Link>

  {/* Twitter / X */}
  <Link
    href="https://twitter.com"
    target="_blank"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.348-6.993L3.5 22H1l7.02-8.02L2 2h7l4.84 6.35L18.244 2zm-1.197 18h1.885L7.02 4H5.01l12.037 16z" />
    </svg>
  </Link>
</div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-secondary">Services</h4>
            <ul className="space-y-4 text-sm text-primary/50">
              <li><FooterLink href="/how-we-print" className="hover:text-secondary transition-colors">Custom Printing Solutions</FooterLink></li>
              {/* <li><FooterLink href="/how-we-print/digital-pigment" className="hover:text-secondary transition-colors">Premium Fabric Consultation</FooterLink></li> */}
              <li><FooterLink href="/contact-us" className="hover:text-secondary transition-colors">Tailored Textile Services</FooterLink></li>
              <li><a
  href="https://wa.me/919361394323"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white"
>
  Contact Fabric Export
</a></li>
              <li><FooterLink href="/designs" className="hover:text-secondary transition-colors">Design Studio</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-secondary">Policies</h4>
            <ul className="space-y-4 text-sm text-primary/50">
              <li><FooterLink href="/terms-conditions" className="hover:text-secondary transition-colors">Terms & Conditions</FooterLink></li>
              <li><FooterLink href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</FooterLink></li>
              <li><FooterLink href="/security-policy" className="hover:text-secondary transition-colors">Security Policy</FooterLink></li>
            </ul>
          </div>

          <div>
            <NewsletterSignup
              source="footer"
              variant="footer"
              description="Monthly fabric trends, B2B pricing updates, and technical reports."
            />
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-secondary">Contact Us</h4>
            <ul className="space-y-6 text-sm text-primary/50">
              <li className="flex gap-4">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>
                  <strong>UK:</strong> 101 Astwick Road, Lincoln, Lincolnshire, United Kingdom , LN6 7LL  <br />
                  <strong>India:</strong> 74A, Attayampalayam, Chithode, Erode 638102
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>+44 7776698505 / +91 93613 94323</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>info@vastraaglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

      <div className="border-t border-white/5 pt-12 flex flex-col items-center justify-center text-center gap-6">
  <p className="text-[10px] uppercase tracking-widest text-primary/30">
    © {new Date().getFullYear()} Vastraa Global. All rights reserved by{" "}
    <Link
      href="https://rankraze.com/"
      className="font-bold underline"
    >
      @RankRaze
    </Link>
  </p>
</div>
      </div>
    </footer>
  );
};


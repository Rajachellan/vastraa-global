"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, FileText, Gavel, Scale } from "lucide-react";
import Link from "next/link";
export default function TermsConditionsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-bg-ivory">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center text-accent mx-auto mb-8">
              <Gavel size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-accent mb-6">Terms & <span className="text-secondary italic">Conditions</span></h1>
            <p className="text-accent/60 leading-relaxed">
              Last updated: June, 2026. Welcome to <Link href="/" className="font-bold underline">Vastraa Global</Link>. By using our website, submitting an enquiry, requesting a quote, or contacting our team, you agree to the following Terms & Conditions. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-accent">
            <h2 className="text-3xl font-serif text-accent mb-8">1. About Vastraa Global</h2>
            <p className="text-accent/70 mb-12 text-justify">
              Vastraa Global provides custom digital fabric printing, bulk fabric printing, fabric sampling, and export-ready production support for fashion brands, home textile companies, garment manufacturers, boutique owners, designers, sourcing teams, and global buyers. 
<br />
Our website is created to help customers understand our services, fabrics, printing process, production capabilities, certifications, and export support. 
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">2. Website Use</h2>
            <p className="text-accent/70 mb-12 text-justify">
              You may use this website to learn about our services, contact our team, request a quote, or submit a fabric printing enquiry. 
<br />
You should not copy, misuse, reproduce, or modify any website content, images, designs, logos, or brand materials without written permission from Vastraa Global. 
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">3. Enquiries and Quotations</h2>
            <p className="text-accent/70 mb-12 text-justify">
             Submitting a contact form, quote request, or sample request does not confirm an order. 
 <br />
After receiving your enquiry, our team may contact you to understand your requirement, including fabric type, design file, order quantity, timeline, packing needs, and delivery location. 
 <br />
Final pricing, production timeline, payment terms, and order confirmation will be shared only after reviewing the complete requirement. 
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">4. Samples and Bulk Production</h2>
            <p className="text-accent/70 mb-12 text-justify">
           Fabric samples may be provided based on the customer’s requirement and approval process. 
<br />
Bulk production will begin only after important details are confirmed, including fabric selection, design approval, quantity, pricing, payment terms, timeline, and dispatch details. 
<br />
Any delay in design approval, artwork submission, payment confirmation, or required information may affect the production timeline. 
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">5.  Design Files and Artwork</h2>
            <p className="text-accent/70 mb-12 text-justify">
             Customers are responsible for sharing correct and usable design files, artwork, patterns, logos, or print references. 
<br />
Customers must make sure they own or have permission to use any design, artwork, logo, or creative file shared with Vastraa Global. 
<br />
Vastraa Global is not responsible for copyright, trademark, ownership, or legal issues related to customer-provided designs. 
            </p>
             <h2 className="text-3xl font-serif text-accent mb-8">6. Colour and Print Variation</h2>
            <p className="text-accent/70 mb-12 text-justify">
          Custom fabric printing may have slight colour differences due to fabric type, screen display, lighting, print method, pigment behaviour, and production conditions. 
 <br />
Vastraa Global makes every effort to maintain print quality, colour consistency, and finishing standards. However, small variations are common in textile printing and should be considered part of the production process. 
            </p>
             <h2 className="text-3xl font-serif text-accent mb-8">7.Quality Checking</h2>
            <p className="text-accent/70 mb-12 text-justify">
           Vastraa Global follows quality checks during fabric preparation, printing, inspection, packing, and dispatch. 
<br />
If there is any quality concern, it must be reported within the agreed review period after receiving the goods. Any claim will be reviewed based on the approved sample, order details, production terms, and nature of the issue. 
            </p>
             <h2 className="text-3xl font-serif text-accent mb-8">8.Production Timeline</h2>
            <p className="text-accent/70 mb-12 text-justify">
            Production timelines depend on fabric availability, design complexity, order quantity, sample approval, production schedule, quality checking, packing, and dispatch requirements. 
<br />
We make reasonable efforts to follow confirmed timelines. However, delays may happen due to fabric availability, production issues, logistics delays, customs procedures, transport delays, or other situations beyond our control.  
            </p>
             <h2 className="text-3xl font-serif text-accent mb-8">9. Shipping and Export Suppor</h2>
            <p className="text-accent/70 mb-12 text-justify">
           Vastraa Global supports domestic and international dispatch based on order requirements. 

Shipping cost, customs duties, import taxes, destination charges, documentation, and delivery timelines may vary depending on the buyer’s country and logistics partner. 
<br />
Unless agreed separately, the buyer is responsible for destination-side customs clearance, duties, taxes, and import-related requirements.nsible for copyright, trademark, ownership, or legal issues related to customer-provided designs. 
            </p>
             <h2 className="text-3xl font-serif text-accent mb-8">10. Returns and Cancellations </h2>
            <p className="text-accent/70 mb-12 text-justify">
       
Most Vastraa Global orders are custom-made based on the customer’s fabric, design, colour, quantity, and production requirement. 
<br />
Because of this, returns or cancellations may not be accepted once sampling, printing, or bulk production has started. 
<br />
Any cancellation, replacement, or correction request will be reviewed based on the order stage, approved sample, production status, and agreed business terms. 
            </p>
            <h2 className="text-3xl font-serif text-accent mb-8">11. Payments  </h2>
            <p className="text-accent/70 mb-12 text-justify">
       
Payment terms, advance amount, balance payment, currency, bank charges, and payment timeline will be confirmed before order processing. 
<br />
Orders may not move to sampling, production, or dispatch stage until the required payment confirmation is received.  
            </p>
            <h2 className="text-3xl font-serif text-accent mb-8">12. Intellectual Property  </h2>
            <p className="text-accent/70 mb-12 text-justify">
       
All website content, including text, images, graphics, logos, icons, layouts, designs, and brand materials, belongs to Vastraa Global unless otherwise stated. 
<br />
Visitors are not allowed to copy, reproduce, modify, distribute, or use any website content without written permission from Vastraa Global. 
            </p>
            <h2 className="text-3xl font-serif text-accent mb-8">13. Limitation of Liability  </h2>
            <p className="text-accent/70 mb-12 text-justify">
 Vastraa Global will not be responsible for losses caused by incorrect customer information, poor-quality artwork files, delayed approvals, logistics delays, customs issues, import restrictions, misuse of printed fabrics, or unauthorized use of customer-provided designs.  
            </p>
            <h2 className="text-3xl font-serif text-accent mb-8">14. Changes to These Terms  </h2>
            <p className="text-accent/70 mb-12 text-justify">
  Vastraa Global may update these Terms & Conditions from time to time. Any changes will be published on this page with the updated date. 
            </p>
            <h2 className="text-3xl font-serif text-accent mb-8"> 15.Contact Us</h2>
            <p className="text-accent/70 mb-12 text-justify">
       
For any questions about these Terms & Conditions, please contact us: 
            </p>
            <table>
              <tr>
                <td className="font-bold">Email:</td>
                <td className="text-accent/70">info@vastraaglobal.com</td>
              </tr>
              <tr>
                <td className="font-bold">Phone:</td>
                <td className="text-accent/70">+44 7776698505 / +91 93613 94323</td>
              </tr><tr>
                <td className="font-bold pr-5">Location:</td>
                <td className="text-accent/70"> India-74A, Attayampalayam, Chithode, Erode 638102</td>
              </tr>
              
            </table>


            <div className="mt-20 p-12 bg-bg-ivory rounded-[3rem] border border-accent/5">
              <div className="flex gap-6 items-start">
                <Shield className="text-secondary shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-serif text-accent mb-4">Legal Questions?</h4>
                  <p className="text-sm text-accent/50 mb-6">
                    If you have any questions about our Terms & Conditions, please contact our legal department.
                  </p>
                  <a href="mailto:info@vastraaglobal.com" className="text-secondary font-bold uppercase tracking-widest text-xs hover:underline">Contact Legal →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";

import residenceExterior from "@/assets/images/residence-exterior.jpg";
import { ContactBlock, PageHero, QuoteSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact: Get a Free Interior Design Quote",
  description:
    "Call or WhatsApp HAS Interiors on +91 74116 40330, email sales@hasinteriors.in, or visit our office at MB Green Court, Bhiwandi, Thane.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your space"
        lead="Share a few details on WhatsApp or give us a call. We'll set up a consultation and a tailored quote."
        image={residenceExterior}
      />
      <QuoteSection />
      <ContactBlock />
    </>
  );
}

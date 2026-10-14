import type { Metadata } from "next";
import Link from "next/link";

import openKitchen from "@/assets/images/open-kitchen.jpg";
import JsonLd from "@/components/JsonLd";
import { CtaBanner, FaqList, PageHero } from "@/components/sections";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ: Interior Design, Custom Furniture & Quotes",
  description:
    "Answers to common questions about HAS Interiors: where we work, custom furniture, interiors and exteriors, our Bengaluru showrooms and how to get a quote.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        lead="Everything you might want to know before starting a project with us."
        image={openKitchen}
      />
      <section className="section faq">
        <div className="container faq-grid">
          <div className="section-head section-head--left reveal">
            <p className="eyebrow">Still curious?</p>
            <h2>Can&apos;t find what you need?</h2>
            <p>
              <Link className="inline-link" href="/contact">
                Get in touch
              </Link>
              . We&apos;re happy to help.
            </p>
          </div>
          <FaqList />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

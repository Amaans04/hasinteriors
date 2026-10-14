import type { Metadata } from "next";
import Link from "next/link";

import residenceConstruction from "@/assets/images/residence-construction.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import {
  BuildProcess,
  BuildTypes,
  ConstructionProjects,
  FaqList,
  PageHero,
  PricingApproach,
  QuoteSection,
  SectionHead,
  VideoStory,
} from "@/components/sections";
import { constructionAreas, constructionFaqs } from "@/lib/construction";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Building Construction Contractors in Bangalore",
  description:
    "Building contractors in Bangalore for houses and multi-storey buildings on your plot. Now building in MLA Layout, Electronic City and Devanahalli. Get a quote.",
  alternates: { canonical: "/construction" },
};

export default function ConstructionPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/construction#service`,
          name: "Building construction in Bangalore",
          serviceType: "Building construction",
          url: `${SITE_URL}/construction`,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: { "@type": "City", name: "Bengaluru" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: constructionFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="Building Construction · Bangalore"
        title="Building contractors in Bangalore, from plot to finished building"
        lead="We build homes and multi-storey buildings on your plot, then finish them with interiors by the same team. Three buildings are going up right now in MLA Layout, Electronic City and Devanahalli."
        image={residenceConstruction}
        imageAlt="A residence under construction at night with façade lighting being installed"
        actions
        breadcrumbs={<Breadcrumbs items={[{ name: "Construction", href: "/construction" }]} />}
      />
      <ConstructionProjects />
      <BuildTypes />
      <BuildProcess />
      <VideoStory />
      <PricingApproach />

      <section className="section areas" aria-labelledby="build-areas-title">
        <div className="container">
          <SectionHead eyebrow="Where We Build" title={<span id="build-areas-title">Construction across Bengaluru</span>}>
            Our office is in MLA Layout, Bannerghatta Road. We build across the city.
          </SectionHead>
          <ul className="area-grid area-grid--3">
            {constructionAreas.map((a) => (
              <li className="reveal" key={a.slug}>
                <Link className="area-card" href={`/construction/${a.slug}`}>
                  <span className="area-card-label">Building contractors in</span>
                  <span className="area-card-name">{a.name}</span>
                  <span className="area-card-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section faq" aria-labelledby="build-faq-title">
        <div className="container faq-grid">
          <SectionHead align="left" eyebrow="FAQ" title={<span id="build-faq-title">Building with us: your questions</span>} />
          <FaqList items={constructionFaqs} />
        </div>
      </section>

      <QuoteSection title="Planning to build on your plot? Get a quote." />
    </>
  );
}

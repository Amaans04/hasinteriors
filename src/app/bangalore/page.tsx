import type { Metadata } from "next";

import residenceLounge from "@/assets/images/residence-lounge.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

import {
  AreasServed,
  ConstructionProjects,
  PageHero,
  PricingApproach,
  Process,
  QuoteSection,
  SectionHead,
  ServicesGrid,
  VideoStory,
  WhyUs,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Interior Designers in South Bangalore",
  description:
    "HAS Interiors, MLA Layout, Bannerghatta Road: home interiors, modular kitchens and construction across Gottigere, Bohra Layout, JP Nagar & Jayanagar.",
  alternates: { canonical: "/bangalore" },
};

export default function BangalorePage() {
  return (
    <>
      <PageHero
        eyebrow="Bangalore"
        title="Interior designers & builders in Bangalore, with 50 years of craft behind every home"
        lead="From our office in MLA Layout, Bannerghatta Road, we design and build across South Bengaluru: complete interiors, modular kitchens, wardrobes, custom furniture and whole buildings on your plot."
        image={residenceLounge}
        actions
        breadcrumbs={<Breadcrumbs items={[{ name: "Bangalore", href: "/bangalore" }]} />}
      />
      <AreasServed />
      <VideoStory />
      <WhyUs />
      <ServicesGrid />
      <ConstructionProjects teaser />
      <section className="section" aria-labelledby="hub-new-homes">
        <div className="container">
          <SectionHead eyebrow="New Homes" title={<span id="hub-new-homes">Moving into a new apartment nearby?</span>}>
            We design for owners in Casagrand Hazen and the other new projects around Gottigere,
            Bohra Layout and Bannerghatta Road.{" "}
            <Link className="inline-link" href="/new-homes">
              See interiors for new homes
            </Link>
            .
          </SectionHead>
        </div>
      </section>
      <Process />
      <PricingApproach />
      <QuoteSection />
    </>
  );
}

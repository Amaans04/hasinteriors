import type { Metadata } from "next";

import openKitchen from "@/assets/images/open-kitchen.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  NewHomesList,
  PageHero,
  PricingApproach,
  Process,
  QuoteSection,
  SectionHead,
  ServicesGrid,
  VideoStory,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "New Apartment Interiors, Gottigere & BG Road",
  description:
    "Getting possession in Gottigere, Bohra Layout or Bannerghatta Road? Complete interiors for Casagrand Hazen and other new projects nearby. Free quote.",
  alternates: { canonical: "/new-homes" },
};

export default function NewHomesPage() {
  return (
    <>
      <PageHero
        eyebrow="New Homes · South Bengaluru"
        title="Interiors for new apartments around Gottigere & Bannerghatta Road"
        lead="Got your keys, or getting them soon? We design and build complete interiors for the new projects near our MLA Layout office, so you move into a finished home, not an empty shell."
        image={openKitchen}
        actions
        breadcrumbs={<Breadcrumbs items={[{ name: "New Homes", href: "/new-homes" }]} />}
      />
      <section className="section" aria-labelledby="newhomes-title">
        <div className="container">
          <SectionHead eyebrow="Near Us" title={<span id="newhomes-title">New projects we design for</span>}>
            Own a home in one of these? Message us your unit type and we&apos;ll share layout ideas for
            your exact floor plan.
          </SectionHead>
          <NewHomesList />
          <p className="newhomes-note reveal">
            HAS Interiors is an independent firm and is not affiliated with these builders. Project
            names belong to their developers.
          </p>
        </div>
      </section>
      <VideoStory />
      <ServicesGrid />
      <PricingApproach />
      <Process />
      <QuoteSection title="Getting possession soon? Plan your interiors now." />
    </>
  );
}

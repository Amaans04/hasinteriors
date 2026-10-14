import type { Metadata } from "next";

import collectionKitchen from "@/assets/images/collection-kitchen.jpg";
import {
  Collections,
  CtaBanner,
  PageHero,
  PricingApproach,
  Process,
  ServicesGrid,
  VideoStory,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Interior Design Services in Bangalore",
  description:
    "Full-home interiors, modular kitchens, wardrobes and bespoke furniture by HAS Interiors, Bannerghatta Road, Bangalore. No fixed packages: priced to your home.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your home needs, designed and made by one team"
        lead="From a single statement piece to a complete home, inside and out, we design, build and install it all."
        image={collectionKitchen}
      />
      <ServicesGrid />
      <VideoStory />
      <Collections />
      <Process />
      <PricingApproach />
      <CtaBanner />
    </>
  );
}

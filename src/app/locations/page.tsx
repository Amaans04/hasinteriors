import type { Metadata } from "next";

import customTable from "@/assets/images/custom-table.jpg";
import { CtaBanner, Locations, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Bengaluru Office & Experience Centres",
  description:
    "HAS Interiors' Bengaluru office is in MLA Layout, Bannerghatta Road. See our furniture and finishes at experience centres in Siddapura, Whitefield & Kadugodi.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Our Bengaluru office & experience centres"
        lead="Our Bengaluru office is in MLA Layout, Bannerghatta Road. To see and feel our furniture and finishes in person, visit an experience centre run by our sister brand, FeatherWood."
        image={customTable}
      />
      <Locations />
      <CtaBanner />
    </>
  );
}

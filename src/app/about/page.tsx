import type { Metadata } from "next";

import livingRoom from "@/assets/images/living-room.jpg";
import { AboutStory, CtaBanner, PageHero, Process, Stats } from "@/components/sections";

export const metadata: Metadata = {
  title: "Our Story: 50+ Years of Bespoke Interiors",
  description:
    "From a furniture workshop to a full-service interior design studio: how HAS Interiors has served 10,000+ clients over five decades with bespoke, built-to-last design.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Five decades of craft, one family of makers"
        lead="Over 50 years and 10,000+ clients, HAS Interiors has grown from a furniture workshop into a full-service design studio. The belief behind it hasn't changed."
        image={livingRoom}
      />
      <AboutStory />
      <Stats />
      <Process />
      <CtaBanner />
    </>
  );
}

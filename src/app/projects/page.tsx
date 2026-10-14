import type { Metadata } from "next";

import residenceLounge from "@/assets/images/residence-lounge.jpg";
import { CtaBanner, PageHero, ProjectsGallery } from "@/components/sections";

export const metadata: Metadata = {
  title: "Projects: Residential Interiors & Exteriors",
  description:
    "See a complete HAS Interiors residence, from façade and construction to custom furniture and a warmly lit lounge, all designed as one continuous story.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Studio stories, from structure to styling"
        lead="A look inside the homes we design and build, and the details that make each one personal."
        image={residenceLounge}
        imageAlt=""
      />
      <ProjectsGallery />
      <CtaBanner />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import residenceConstruction from "@/assets/images/residence-construction.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import {
  BuildProcess,
  BuildTypes,
  FaqList,
  PageHero,
  PricingApproach,
  QuoteSection,
  SectionHead,
  VideoStory,
} from "@/components/sections";
import { constructionAreas, constructionFaqs, getConstructionArea } from "@/lib/construction";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return constructionAreas.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getConstructionArea((await params).slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: `/construction/${area.slug}` },
  };
}

export default async function ConstructionAreaPage({ params }: Props) {
  const area = getConstructionArea((await params).slug);
  if (!area) notFound();
  const url = `${SITE_URL}/construction/${area.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: `Building construction in ${area.name}, Bengaluru`,
          serviceType: "Building construction",
          url,
          description: area.description,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: { "@type": "Place", name: `${area.name}, Bengaluru, Karnataka` },
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
        eyebrow={`Construction · ${area.name}`}
        title={area.title.replace(", Bangalore", "")}
        lead={area.lead}
        image={residenceConstruction}
        actions
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Construction", href: "/construction" },
              { name: area.name, href: `/construction/${area.slug}` },
            ]}
          />
        }
      />

      <section className="section area-intro" aria-labelledby="build-area-intro">
        <div className="container area-intro-grid">
          <div className="reveal">
            <p className="eyebrow">Building in {area.name}</p>
            <h2 id="build-area-intro">Build on your plot in {area.name}</h2>
            <div className="live-project">
              <span className="build-status">
                <span className="build-dot" aria-hidden="true" /> Under construction now
              </span>
              <h3>{area.project.title}</h3>
              <p>{area.project.text}</p>
            </div>
          </div>
          <div className="area-intro-copy reveal">
            {area.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p>We also build in {area.nearby.join(", ")} and the surrounding areas.</p>
            <p>
              See all{" "}
              <Link className="inline-link" href="/construction">
                building construction in Bangalore
              </Link>{" "}
              or our{" "}
              <Link className="inline-link" href="/bangalore">
                interior design work in Bangalore
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <BuildTypes />
      <BuildProcess />
      <VideoStory />
      <PricingApproach />

      <section className="section faq" aria-labelledby="build-area-faq">
        <div className="container faq-grid">
          <SectionHead align="left" eyebrow="FAQ" title={<span id="build-area-faq">Building in {area.name}: your questions</span>} />
          <FaqList items={constructionFaqs} />
        </div>
      </section>

      <QuoteSection defaultArea="Other part of Bengaluru" title={`Building in ${area.name}? Get a quote.`} />
    </>
  );
}

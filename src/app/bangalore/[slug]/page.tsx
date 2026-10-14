import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";

import residenceExterior from "@/assets/images/residence-exterior.jpg";
import customTable from "@/assets/images/custom-table.jpg";
import livingRoom from "@/assets/images/living-room.jpg";
import openKitchen from "@/assets/images/open-kitchen.jpg";
import collectionKitchen from "@/assets/images/collection-kitchen.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import {
  AreasServed,
  FaqList,
  PageHero,
  Process,
  ProjectsGallery,
  PricingApproach,
  QuoteSection,
  SectionHead,
  ServicesGrid,
  VideoStory,
  WhyUs,
} from "@/components/sections";
import { areas, getArea } from "@/lib/areas";
import { SITE_URL, contact } from "@/lib/site";

const heroImages = {
  "bannerghatta-road": livingRoom,
  gottigere: openKitchen,
  "mla-layout": residenceExterior,
  "bohra-layout": livingRoom,
  "jp-nagar": collectionKitchen,
  jayanagar: customTable,
} as const;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getArea((await params).slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: `/bangalore/${area.slug}` },
    openGraph: { title: `${area.title} | HAS Interiors`, description: area.description },
  };
}

export default async function AreaPage({ params }: Props) {
  const area = getArea((await params).slug);
  if (!area) notFound();

  const url = `${SITE_URL}/bangalore/${area.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: `Interior design in ${area.name}, Bengaluru`,
          serviceType: "Interior design",
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
          mainEntity: area.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <PageHero
        eyebrow={`${area.name} · South Bengaluru`}
        title={area.title.replace(", Bangalore", "")}
        lead={area.heroLead}
        image={heroImages[area.slug as keyof typeof heroImages] ?? livingRoom}
        actions
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "Bangalore", href: "/bangalore" },
              { name: area.name, href: `/bangalore/${area.slug}` },
            ]}
          />
        }
      />

      <section className="section area-intro" aria-labelledby="area-intro-title">
        <div className="container area-intro-grid">
          <div className="reveal">
            <p className="eyebrow">Homes in {area.name}</p>
            <h2 id="area-intro-title">Interiors designed for {area.name} homes</h2>
          </div>
          <div className="area-intro-copy reveal">
            {area.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p>
              Nearby, we also work in{" "}
              {area.nearby.map((n, i) => {
                const linked = areas.find((a) => a.name === n);
                const sep = i === area.nearby.length - 1 ? "" : i === area.nearby.length - 2 ? " and " : ", ";
                return (
                  <span key={n}>
                    {linked ? (
                      <Link className="inline-link" href={`/bangalore/${linked.slug}`}>
                        {n}
                      </Link>
                    ) : (
                      n
                    )}
                    {sep}
                  </span>
                );
              })}
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section area-homes" aria-labelledby="area-homes-title">
        <div className="container">
          <SectionHead
            eyebrow="What we do here"
            title={<span id="area-homes-title">Popular projects in {area.name}</span>}
          />
          <ul className="why-grid why-grid--3">
            {area.homes.map((h, i) => (
              <li className="why-card reveal" key={h.title} style={{ "--i": i } as CSSProperties}>
                <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <VideoStory />
      <WhyUs />
      <ServicesGrid />
      <ProjectsGallery teaser />
      <Process />
      <PricingApproach />

      <section className="section faq" aria-labelledby="area-faq-title">
        <div className="container faq-grid">
          <SectionHead
            align="left"
            eyebrow="FAQ"
            title={<span id="area-faq-title">Interior design in {area.name}: your questions</span>}
          >
            Prefer to talk?{" "}
            <a className="inline-link" href={contact.phoneHref}>
              Call {contact.phoneDisplay}
            </a>
            .
          </SectionHead>
          <FaqList items={area.faqs} />
        </div>
      </section>

      <QuoteSection defaultArea={area.name} title={`Get a quote for your ${area.name} home`} />
      <AreasServed current={area.slug} />
    </>
  );
}

import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import livingRoom from "@/assets/images/living-room.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import {
  FaqList,
  PageHero,
  PricingApproach,
  Process,
  QuoteSection,
  SectionHead,
  VideoStory,
} from "@/components/sections";
import { getNewHome, newHomes } from "@/lib/newHomes";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newHomes.filter((h) => h.page).map((h) => ({ slug: h.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const home = getNewHome((await params).slug);
  if (!home) return {};
  const title = `${home.name} Interior Design, ${home.locality.split(", ").pop()}`;
  const description = `Interiors for ${home.name}, ${home.locality.split(", ").pop()}: modular kitchens, wardrobes and complete ${home.configs} interiors, minutes away on Bannerghatta Road.`;
  return {
    title,
    description,
    alternates: { canonical: `/new-homes/${home.slug}` },
  };
}

export default async function NewHomePage({ params }: Props) {
  const home = getNewHome((await params).slug);
  if (!home) notFound();
  const url = `${SITE_URL}/new-homes/${home.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: `Interior design for ${home.name}`,
          serviceType: "Interior design",
          url,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: { "@type": "Place", name: `${home.locality}, Bengaluru` },
        }}
      />
      {home.faqs && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: home.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
      <PageHero
        eyebrow={`${home.locality}${home.pin ? ` · ${home.pin}` : ""}`}
        title={`Interiors for ${home.name} homes`}
        lead={`${home.configs} · ${home.units ?? "New homes"}. We design around your exact floor plan and build with our own craftsmen, a few minutes away.`}
        image={livingRoom}
        actions
        breadcrumbs={
          <Breadcrumbs
            items={[
              { name: "New Homes", href: "/new-homes" },
              { name: home.name, href: `/new-homes/${home.slug}` },
            ]}
          />
        }
      />

      <section className="section area-intro" aria-labelledby="nh-intro">
        <div className="container area-intro-grid">
          <div className="reveal">
            <p className="eyebrow">{home.name}</p>
            <h2 id="nh-intro">From empty shell to finished home</h2>
          </div>
          <div className="area-intro-copy reveal">
            {home.intro?.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            <p>
              See more{" "}
              <Link className="inline-link" href="/bangalore/gottigere">
                interior design in Gottigere
              </Link>{" "}
              and{" "}
              <Link className="inline-link" href="/new-homes">
                other new projects near us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {home.plan && (
        <section className="section area-homes" aria-labelledby="nh-plan">
          <div className="container">
            <SectionHead eyebrow="Ideas by unit" title={<span id="nh-plan">How we&apos;d approach your {home.name} home</span>} />
            <ul className="why-grid why-grid--3">
              {home.plan.map((p, i) => (
                <li className="why-card reveal" key={p.title} style={{ "--i": i } as CSSProperties}>
                  <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <VideoStory />
      <PricingApproach />
      <Process />

      {home.faqs && (
        <section className="section faq" aria-labelledby="nh-faq">
          <div className="container faq-grid">
            <SectionHead align="left" eyebrow="FAQ" title={<span id="nh-faq">{home.name} interiors: your questions</span>} />
            <FaqList items={home.faqs} />
          </div>
        </section>
      )}

      <QuoteSection defaultArea="Gottigere" title={`Plan your ${home.name} interiors`} />
      <div className="container">
        <p className="newhomes-note">
          HAS Interiors is an independent firm and is not affiliated with {home.builder}. &ldquo;{home.name}&rdquo; is
          the name of the developer&apos;s project.
        </p>
      </div>
    </>
  );
}

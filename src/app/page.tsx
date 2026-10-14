import Link from "next/link";
import type { CSSProperties } from "react";

import {
  AboutStory,
  AreasServed,
  Collections,
  ConstructionProjects,
  PricingApproach,
  VideoStory,
  FaqList,
  Process,
  ProjectsGallery,
  QuoteSection,
  SectionHead,
  ServicesGrid,
  Stats,
  WhyUs,
} from "@/components/sections";
import { contact, faqs } from "@/lib/site";

const d = (n: number) => ({ "--d": n }) as CSSProperties;

export default function HomePage() {
  return (
    <>
      {/* 1. Promise */}
      <section className="hero" aria-labelledby="hero-title">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow eyebrow--light hero-anim" style={d(0)}>
            Interiors &amp; Construction · Bengaluru
          </p>
          <h1 id="hero-title">
            <span className="hero-line hero-anim" style={d(1)}>
              Bespoke interiors,
            </span>{" "}
            <em className="hero-line hero-anim" style={d(2)}>
              crafted to be lived in.
            </em>
          </h1>
          <p className="hero-lead hero-anim" style={d(3)}>
            Five decades of craft, now designing and building homes across South Bengaluru, from
            our office on Bannerghatta Road. Interiors, custom furniture and complete buildings,
            made by our own team.
          </p>
          <div className="hero-actions hero-anim" style={d(4)}>
            <a className="btn btn--accent" href={contact.whatsapp} target="_blank" rel="noopener">
              Get a Free Quote
            </a>
            <a className="btn btn--ghost" href={contact.phoneHref}>
              Call {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Proof */}
      <Stats />

      {/* 3. Proof you can see */}
      <VideoStory />

      {/* 4. Story */}
      <AboutStory teaser />

      {/* 4. Why us */}
      <WhyUs />

      {/* 5. What we do */}
      <ServicesGrid teaser />
      <Collections />

      {/* 6. Proof of work */}
      <ProjectsGallery teaser />
      <ConstructionProjects teaser />

      {/* 7. How it works, and what it costs */}
      <Process />
      <PricingApproach />

      {/* 8. Near you */}
      <AreasServed />


      {/* 9. Objections */}
      <section className="section faq" aria-labelledby="home-faq-title">
        <div className="container faq-grid">
          <SectionHead
            align="left"
            eyebrow="FAQ"
            title={<span id="home-faq-title">Questions before you start</span>}
          >
            More answers on our <Link className="inline-link" href="/faq">FAQ page</Link>.
          </SectionHead>
          <FaqList items={faqs.slice(0, 4)} />
        </div>
      </section>

      {/* 10. Action */}
      <QuoteSection />
    </>
  );
}

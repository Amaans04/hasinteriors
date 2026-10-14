import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

import collectionDecor from "@/assets/images/collection-decor.jpg";
import collectionKitchen from "@/assets/images/collection-kitchen.jpg";
import collectionLiving from "@/assets/images/collection-living.jpg";
import customTable from "@/assets/images/custom-table.jpg";
import featherwoodLogo from "@/assets/images/featherwood-logo.jpg";
import livingRoom from "@/assets/images/living-room.jpg";
import livingSeaView from "@/assets/images/living-sea-view.jpg";
import logo from "@/assets/images/logo.png";
import openKitchen from "@/assets/images/open-kitchen.jpg";
import residenceConstruction from "@/assets/images/residence-construction.jpg";
import residenceExterior from "@/assets/images/residence-exterior.jpg";
import residenceLounge from "@/assets/images/residence-lounge.jpg";

import CountUp from "@/components/CountUp";
import QuotePlanner from "@/components/QuotePlanner";
import { areas, moreAreas } from "@/lib/areas";
import { buildSteps, buildTypes } from "@/lib/construction";
import { newHomes } from "@/lib/newHomes";
import {
  bangaloreBase,
  constructionProjects,
  contact,
  faqs,
  featherwood,
  pricingPoints,
  processSteps,
  reasons,
  services,
  stats,
  stores,
} from "@/lib/site";

/* ---------- Building blocks ---------- */

/** Delays each item in a grid slightly so they arrive one after another. */
function stagger(i: number) {
  return { "--i": i } as CSSProperties;
}

export function SectionHead({
  eyebrow,
  title,
  children,
  light = false,
  align = "center",
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  light?: boolean;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const cls = ["section-head", "reveal", light && "section-head--light", align === "left" && "section-head--left"]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls}>
      <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{eyebrow}</p>
      <Heading>{title}</Heading>
      {children && <p>{children}</p>}
    </div>
  );
}

/** Banner at the top of every inner page; holds the page's single <h1>. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
  breadcrumbs,
  actions = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  image: StaticImageData;
  imageAlt?: string;
  breadcrumbs?: ReactNode;
  actions?: boolean;
}) {
  return (
    <section className="page-hero">
      <Image
        className="page-hero-img"
        src={image}
        alt={imageAlt}
        fill
        priority
        placeholder="blur"
        sizes="100vw"
      />
      <div className="container page-hero-content">
        {breadcrumbs}
        <p className="eyebrow eyebrow--light hero-anim" style={{ "--d": 0 } as CSSProperties}>
          {eyebrow}
        </p>
        <h1 className="hero-anim" style={{ "--d": 1 } as CSSProperties}>
          {title}
        </h1>
        <p className="page-hero-lead hero-anim" style={{ "--d": 2 } as CSSProperties}>
          {lead}
        </p>
        {actions && (
          <div className="hero-actions hero-anim" style={{ "--d": 3 } as CSSProperties}>
            <a className="btn btn--accent" href={contact.phoneHref}>
              Call now
            </a>
            <a className="btn btn--ghost" href={contact.whatsapp} target="_blank" rel="noopener">
              WhatsApp us
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Sections ---------- */

export function Stats() {
  return (
    <section className="stats" aria-label="HAS Interiors at a glance">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <CountUp value={s.value} />
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutStory({ teaser = false }: { teaser?: boolean }) {
  return (
    <section className="section about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-media reveal reveal--image">
          <Image
            className="about-img-main"
            src={livingRoom}
            alt="Light grey living room with a beige sofa, gallery wall and herringbone wooden floor"
            placeholder="blur"
            sizes="(max-width: 960px) 90vw, 45vw"
          />
          <Image
            className="about-img-accent"
            src={openKitchen}
            alt="Bright open-plan white kitchen with breakfast counter and acrylic chairs"
            placeholder="blur"
            sizes="(max-width: 960px) 50vw, 25vw"
          />
        </div>
        <div className="about-copy reveal">
          <p className="eyebrow">Our Story</p>
          <h2 id="about-title">Five decades of designing spaces people love coming home to</h2>
          <p>
            HAS Interiors started as a furniture workshop and grew into a full-service interior
            design studio. Through more than <strong>50 years</strong> and over{" "}
            <strong>10,000 clients</strong>, one belief has stayed the same: a good space should
            look beautiful, work for everyday life and be built to last.
          </p>
          <p>
            We design every project from scratch around how you live. We then build it with
            carefully chosen materials and finish it with the attention to detail that only comes
            from long experience. Whether it&apos;s a single statement piece or a whole home, inside
            and out, we treat it as our own.
          </p>
          <ul className="checklist">
            <li>Custom designs with no off-the-shelf templates</li>
            <li>Quality materials and skilled in-house craftsmanship</li>
            <li>One team from concept to final styling</li>
          </ul>
          {teaser ? (
            <Link className="text-link" href="/about">
              Read our story
            </Link>
          ) : (
            <Link className="text-link" href="/contact">
              Start your project
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ teaser = false }: { teaser?: boolean }) {
  return (
    <section className="section services" aria-labelledby="services-title">
      <div className="container">
        <SectionHead eyebrow="What We Do" title={<span id="services-title">Interior design, furniture &amp; décor under one roof</span>}>
          From a single room refresh to a complete home, inside and out, we handle design, making
          and installation, so you deal with one accountable team.
        </SectionHead>
        <ul className="services-grid">
          {services.map((s, i) => (
            <li className="service-card reveal" key={s.title} style={stagger(i)}>
              <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
        {teaser && (
          <div className="section-more reveal">
            <Link className="text-link" href="/services">
              Explore our services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

const collections = [
  {
    title: "Best in Class",
    text: "Timeless designs that pair refined style with lasting durability.",
    image: collectionLiving,
    alt: "Monochrome living room with black leather armchair, sofa and glass coffee table",
  },
  {
    title: "Beyond the Box",
    text: "Innovative, space-smart furniture made for modern living.",
    image: collectionKitchen,
    alt: "Contemporary handleless grey kitchen with built-in ovens and wine storage",
  },
  {
    title: "Trendy yet Classy",
    text: "Elegant pieces and décor that make comfort feel luxurious.",
    image: collectionDecor,
    alt: "Three white taper candles in black metal holders against a soft grey wall",
  },
];

export function Collections() {
  return (
    <section className="section collections" aria-labelledby="collections-title">
      <div className="container">
        <SectionHead
          light
          eyebrow="Studio Collections"
          title={<span id="collections-title">Three signatures, endless possibilities</span>}
        />
        <div className="collections-grid">
          {collections.map((c, i) => (
            <article className="collection-card reveal reveal--image" key={c.title} style={stagger(i)}>
              <Image
                src={c.image}
                alt={c.alt}
                fill
                placeholder="blur"
                sizes="(max-width: 640px) 90vw, (max-width: 960px) 45vw, 30vw"
              />
              <div className="collection-body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const projectTiles = [
  {
    title: "From Interiors to Exteriors",
    text: "A clean, modern façade that sets the tone for the home inside.",
    image: residenceExterior,
    alt: "Completed residence façade with grey cladding, planted terrace and covered parking",
    wide: true,
  },
  {
    title: "Unique Designs",
    text: "A one-of-a-kind lattice coffee table, made in-house.",
    image: customTable,
    alt: "Custom geometric wooden lattice coffee table in a lounge with floral armchairs",
  },
  {
    title: "Tailored Themes",
    text: "Warm lighting and bespoke art that reflect the owners' personality.",
    image: residenceLounge,
    alt: "Warmly lit lounge with green sofa and a sculpted horse wall art installation",
  },
  {
    title: "Behind the Build",
    text: "We stay on site from structure to final lighting, so every detail matches the design.",
    image: residenceConstruction,
    alt: "The same residence during construction at night with façade lighting being installed",
    wide: true,
  },
];

export function ProjectsGallery({ teaser = false }: { teaser?: boolean }) {
  const tiles = teaser ? projectTiles.slice(0, 3) : projectTiles;
  return (
    <section className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          eyebrow="Studio Stories"
          title={<span id="projects-title">Featured project: a private residence, inside &amp; out</span>}
        >
          A complete transformation from structure to styling. We designed the façade, the lounge
          and the custom furniture as one continuous story.
        </SectionHead>
        <div className="projects-grid">
          {tiles.map((t, i) => (
            <figure
              className={`project-tile reveal reveal--image${t.wide ? " project-tile--wide" : ""}`}
              key={t.title}
              style={stagger(i % 2)}
            >
              <Image
                src={t.image}
                alt={t.alt}
                placeholder="blur"
                sizes={t.wide ? "(max-width: 640px) 90vw, 1100px" : "(max-width: 640px) 90vw, 550px"}
              />
              <figcaption>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {teaser && (
          <div className="section-more reveal">
            <Link className="text-link" href="/projects">
              See the full project
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead eyebrow="How We Work" title={<span id="process-title">A clear, four-step process</span>} />
        <ol className="process-grid">
          {processSteps.map((step, i) => (
            <li className="process-step reveal" key={step.title} style={stagger(i)}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FamilyIntro() {
  return (
    <div className="family reveal">
      <div className="family-copy">
        <p className="eyebrow">The HAS Family</p>
        <h2>Our office, and where to see our work</h2>
        <p>
          Our Bengaluru office is in MLA Layout, Bannerghatta Road, and our work is focused on South
          Bengaluru. To see furniture and finishes in person, visit one of the experience centres run
          by FeatherWood, our sister brand. Same five decades of craft, same in-house makers.
        </p>
        <a className="text-link" href={featherwood.url} target="_blank" rel="noopener">
          Visit featherwood.in
        </a>
      </div>
      <div className="family-logos" aria-label="Our brands">
        <figure>
          <Image src={logo} alt="HAS Interiors logo" width={120} height={120} />
          <figcaption>
            HAS Interiors
            <span>Bengaluru office: MLA Layout, Bannerghatta Road</span>
          </figcaption>
        </figure>
        <span className="family-plus" aria-hidden="true">
          &amp;
        </span>
        <figure>
          <Image className="fw-logo" src={featherwoodLogo} alt="FeatherWood logo" />
          <figcaption>
            FeatherWood
            <span>Experience centres in Bengaluru</span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export function StoresGrid() {
  return (
    <ul className="stores-grid">
      {stores.map((s, i) => (
        <li className="store-card reveal" key={s.schemaName} style={stagger(i)}>
          <p className="store-tag">{s.tag}</p>
          <h3>{s.name}</h3>
          <p className="store-address">
            {s.addressLines[0]}
            <br />
            {s.addressLines[1]}
          </p>
          <p className="store-meta">
            <a href={s.phoneHref}>{s.phoneDisplay}</a>
            {s.hours && (
              <>
                <br />
                {s.hours}
              </>
            )}
          </p>
          <a className="store-link" href={s.mapsHref} target="_blank" rel="noopener">
            Get directions
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Locations({ teaser = false }: { teaser?: boolean }) {
  return (
    <section className="section locations" aria-label="Our locations">
      <div className="container">
        <FamilyIntro />
        <StoresGrid />
        {teaser && (
          <div className="section-more reveal">
            <Link className="text-link" href="/locations">
              All locations
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-title">
      <Image src={livingSeaView} alt="" fill placeholder="blur" sizes="100vw" />
      <div className="container cta-inner reveal">
        <h2 id="cta-title">Let&apos;s bring your vision to life.</h2>
        <p>Tell us about your space. We&apos;ll share ideas and a tailored quote, with no obligation.</p>
        <a className="btn btn--accent" href={contact.whatsapp} target="_blank" rel="noopener">
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

export function FaqList({ items = faqs }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="faq-list reveal">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ContactBlock({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section className="section contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-intro reveal">
          <p className="eyebrow eyebrow--light">Contact</p>
          <Heading id="contact-title">Connect with HAS Interiors</Heading>
          <p>
            Planning a new home, a renovation or a single statement piece? Reach out and we&apos;ll
            get back to you quickly.
          </p>
          <div className="hero-actions">
            <a className="btn btn--accent" href={contact.whatsapp} target="_blank" rel="noopener">
              WhatsApp Us
            </a>
            <a className="btn btn--ghost" href={contact.phoneHref}>
              Call Now
            </a>
          </div>
        </div>
        <address className="contact-details reveal">
          <div>
            <h3>Bengaluru Office</h3>
            <a href={bangaloreBase.mapsHref} target="_blank" rel="noopener">
              {bangaloreBase.lines[0]}
              <br />
              {bangaloreBase.lines[1]}
            </a>
          </div>
          <div>
            <h3>Head Office</h3>
            <a href={contact.mapsHref} target="_blank" rel="noopener">
              {contact.address[0]}
              <br />
              {contact.address[1]}
            </a>
          </div>
          <div>
            <h3>Email</h3>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div>
            <h3>Phone / WhatsApp</h3>
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          </div>
          <div className="contact-details-wide">
            <h3>Areas We Serve</h3>
            <p>
              Bannerghatta Road · MLA Layout · Gottigere · Bohra Layout · JP Nagar · Jayanagar ·
              Electronic City · Devanahalli
            </p>
          </div>
        </address>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section why" aria-labelledby="why-title">
      <div className="container">
        <SectionHead eyebrow="Why HAS Interiors" title={<span id="why-title">Why families trust us with their homes</span>}>
          Interiors are a big investment. Here&apos;s what you get when you work with a team that has
          been doing this for over five decades.
        </SectionHead>
        <ul className="why-grid">
          {reasons.map((r, i) => (
            <li className="why-card reveal" key={r.title} style={stagger(i)}>
              <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AreasServed({ current }: { current?: string }) {
  const marquee = [...areas.map((a) => a.name), ...moreAreas];
  return (
    <section className="section areas" aria-labelledby="areas-title">
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((name, i) => (
            <span key={i}>{name}</span>
          ))}
        </div>
      </div>
      <div className="container">
        <SectionHead eyebrow="South Bengaluru" title={<span id="areas-title">Interior designers near you in South Bengaluru</span>}>
          We design and build homes across Bannerghatta Road, Gottigere, MLA Layout, JP Nagar,
          Jayanagar and the neighbourhoods around them. Pick your area to see how we can help.
        </SectionHead>
        <ul className="area-grid">
          {areas
            .filter((a) => a.slug !== current)
            .map((a, i) => (
              <li className="reveal" key={a.slug} style={stagger(i)}>
                <Link className="area-card" href={`/bangalore/${a.slug}`}>
                  <span className="area-card-label">Interior designers in</span>
                  <span className="area-card-name">{a.name}</span>
                  <span className="area-card-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
        </ul>
        <p className="areas-more reveal">
          Also serving {moreAreas.join(", ")} and the rest of Bengaluru.{" "}
          <Link className="inline-link" href="/bangalore">
            Interior design in Bangalore
          </Link>
        </p>
      </div>
    </section>
  );
}

export function QuoteSection({
  defaultArea,
  title = "Get a quote in under a minute",
}: {
  defaultArea?: string;
  title?: string;
}) {
  return (
    <section className="section quote" id="quote" aria-labelledby="quote-title">
      <div className="container quote-grid">
        <div className="quote-copy reveal">
          <p className="eyebrow eyebrow--light">Free Consultation</p>
          <h2 id="quote-title">{title}</h2>
          <p>
            Tell us three things about your home and we&apos;ll reply on WhatsApp with next steps: a
            visit to measure your space, design ideas and a clear, tailored quote.
          </p>
          <ul className="checklist checklist--light">
            <li>Home visit and measurement</li>
            <li>Design ideas built around your budget</li>
            <li>Clear quote before any work starts</li>
          </ul>
        </div>
        <div className="reveal">
          <QuotePlanner defaultArea={defaultArea} />
        </div>
      </div>
    </section>
  );
}

/** The walkthrough of a finished client home: our strongest proof, so it gets its own section. */
export function VideoStory() {
  return (
    <section className="section video-story" aria-labelledby="video-story-title">
      <div className="container video-story-grid">
        <div className="video-story-copy reveal">
          <p className="eyebrow eyebrow--light">Client Story</p>
          <h2 id="video-story-title">Don&apos;t take our word for it. Walk through a finished home.</h2>
          <p>
            This is a real client home we designed and built, filmed on handover: the walnut entrance
            door, the custom lattice screens, every bedroom and every built-in. Nothing staged, nothing
            rendered. It&apos;s the best way we know to show you what working with us looks like.
          </p>
          <ul className="checklist checklist--light">
            <li>Designed, built and finished by our own team</li>
            <li>Custom doors, screens and furniture made in-house</li>
            <li>Handed over ready to move in</li>
          </ul>
        </div>
        <div className="video-frame reveal reveal--image">
          <video
            controls
            playsInline
            preload="none"
            poster="/media/hero-poster.jpg"
            aria-label="Video walkthrough of a finished client home by HAS Interiors"
          >
            <source src="/media/walkthrough.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export function PricingApproach() {
  return (
    <section className="section pricing" aria-labelledby="pricing-title">
      <div className="container">
        <SectionHead eyebrow="Pricing" title={<span id="pricing-title">No fixed packages. Pricing that fits you.</span>}>
          We don&apos;t believe one price fits every home. Your quote is shaped around your space,
          your needs and your budget, and you see every line of it before we start.
        </SectionHead>
        <ul className="why-grid why-grid--3">
          {pricingPoints.map((p, i) => (
            <li className="why-card reveal" key={p.title} style={stagger(i)}>
              <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
        <div className="section-more reveal">
          <a className="btn btn--accent" href={contact.whatsapp} target="_blank" rel="noopener">
            Share your budget on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function ConstructionProjects({ teaser = false }: { teaser?: boolean }) {
  return (
    <section className="section build-projects" aria-labelledby="build-projects-title">
      <div className="container">
        <SectionHead
          light
          eyebrow="Building Now"
          title={<span id="build-projects-title">Three buildings rising across Bengaluru</span>}
        >
          Beyond interiors, we build on our clients&apos; plots. These are under construction right
          now, and the owners are happy with both the quote and the work.
        </SectionHead>
        <ul className="build-grid">
          {constructionProjects.map((p, i) => (
            <li className="build-card reveal" key={p.title} style={stagger(i)}>
              <span className="build-status">
                <span className="build-dot" aria-hidden="true" /> Under construction
              </span>
              <h3>{p.title}</h3>
              <p className="build-place">{p.place}</p>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
        {teaser && (
          <div className="section-more reveal">
            <Link className="text-link text-link--light" href="/construction">
              Building construction in Bangalore
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function BuildTypes() {
  return (
    <section className="section services" aria-labelledby="build-types-title">
      <div className="container">
        <SectionHead eyebrow="What We Build" title={<span id="build-types-title">From your plot to a finished building</span>} />
        <ul className="services-grid services-grid--4">
          {buildTypes.map((b, i) => (
            <li className="service-card reveal" key={b.title} style={stagger(i)}>
              <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function BuildProcess() {
  return (
    <section className="section process" aria-labelledby="build-process-title">
      <div className="container">
        <SectionHead eyebrow="How We Build" title={<span id="build-process-title">Five clear stages, no surprises</span>} />
        <ol className="process-grid process-grid--5">
          {buildSteps.map((step, i) => (
            <li className="process-step reveal" key={step.title} style={stagger(i)}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function NewHomesList() {
  return (
    <ul className="newhomes-grid">
      {newHomes.map((h, i) => (
        <li className="newhome-card reveal" key={h.slug} style={stagger(i % 3)}>
          <p className="store-tag">{h.locality}</p>
          <h3>{h.name}</h3>
          <p className="newhome-meta">
            {h.configs}
            {h.units && ` · ${h.units}`}
          </p>
          <p>{h.summary}</p>
          {h.page ? (
            <Link className="store-link" href={`/new-homes/${h.slug}`}>
              Interiors for {h.name}
            </Link>
          ) : (
            <a className="store-link" href={contact.whatsapp} target="_blank" rel="noopener">
              Ask about your unit
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

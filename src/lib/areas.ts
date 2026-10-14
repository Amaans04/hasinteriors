/**
 * South Bengaluru localities we target. Each gets its own page at /bangalore/<slug>.
 * Keep the copy specific to the area: thin, find-and-replace pages don't rank and
 * read as spam to Google.
 */
export type Area = {
  slug: string;
  name: string;
  /** Short phrase used in titles, e.g. "JP Nagar" */
  short: string;
  title: string;
  description: string;
  heroLead: string;
  intro: string[];
  homes: { title: string; text: string }[];
  nearby: string[];
  faqs: { q: string; a: string }[];
};

export const areas: Area[] = [
  {
    slug: "bannerghatta-road",
    name: "Bannerghatta Road",
    short: "Bannerghatta Road",
    title: "Interior Designers on Bannerghatta Road, Bangalore",
    description:
      "Interiors, modular kitchens, wardrobes and custom furniture for apartments and villas on Bannerghatta Road, Bangalore. 50+ years of craft. Free consultation.",
    heroLead:
      "Gated apartments, villas and independent homes along BG Road deserve more than catalogue interiors. We design and build them to fit the way you live.",
    intro: [
      "Bannerghatta Road has grown into one of South Bengaluru's busiest residential corridors, lined with gated communities, new apartment towers and established independent homes. Most of the homes we're asked about here are new handovers that need a complete fit-out, or 10 to 15 year old apartments ready for a modern kitchen and better storage.",
      "Our team plans every room around your floor plan, then builds the kitchen, wardrobes and furniture with our own craftsmen. You get one accountable team from the first measurement to the final styling, rather than juggling separate carpenters, kitchen vendors and decorators.",
    ],
    homes: [
      {
        title: "New apartment handovers",
        text: "Full fit-outs for 2 and 3 BHK apartments: modular kitchen, wardrobes, TV units, false ceilings, lighting and décor, planned together.",
      },
      {
        title: "Villa & independent homes",
        text: "Larger, multi-level homes with custom staircases, foyers, pooja units and statement furniture made to measure.",
      },
      {
        title: "Kitchen & wardrobe upgrades",
        text: "Replace tired laminate kitchens and wardrobes with durable, well-planned modular units, without redoing the whole home.",
      },
    ],
    nearby: ["Gottigere", "Bohra Layout", "Arekere", "Hulimavu", "MLA Layout", "JP Nagar"],
    faqs: [
      {
        q: "Do you take on projects along Bannerghatta Road?",
        a: "Yes. We work across the Bannerghatta Road corridor, from Dairy Circle down to Gottigere and the NICE Road junction, including the apartments and layouts on either side.",
      },
      {
        q: "Can you design just a modular kitchen or wardrobes?",
        a: "Yes. Many BG Road clients start with a kitchen or wardrobes. We design them to match the rest of your home, so it's easy to add more rooms later.",
      },
      {
        q: "Will you visit my apartment on Bannerghatta Road?",
        a: "Yes. Share your location on WhatsApp or call us, and we'll arrange a visit to measure and understand the space before we design anything.",
      },
    ],
  },
  {
    slug: "gottigere",
    name: "Gottigere",
    short: "Gottigere",
    title: "Interior Designers in Gottigere, Bangalore",
    description:
      "Home interiors, modular kitchens and wardrobes for new apartments and houses in Gottigere, Bangalore. One team from design to installation. Free quote.",
    heroLead:
      "Moving into a new home in Gottigere? We design and build complete interiors, from kitchen and wardrobes to the last light fitting, so you can move in to a finished home.",
    intro: [
      "Gottigere, at the southern end of Bannerghatta Road near Kembathalli Main Road and the NICE Road, has changed quickly over the last decade. New apartment projects sit alongside independent homes and builder floors, and many families moving in want their first home designed properly from day one.",
      "That's where we come in. We plan the whole home around your budget and routine, then build the kitchen, wardrobes and furniture with our own craftsmen, so finishes match and nothing is left half-done between different vendors.",
    ],
    homes: [
      {
        title: "First-home interiors",
        text: "Practical, good-looking 2 and 3 BHK interiors that make the most of every square foot, delivered as one complete package.",
      },
      {
        title: "Independent houses & builder floors",
        text: "Custom layouts, staircases, kitchens and storage for independent homes, built around how your family actually lives.",
      },
      {
        title: "Rental-ready upgrades",
        text: "Durable, easy-to-maintain kitchens and wardrobes for homes you plan to rent out, without cutting corners on quality.",
      },
    ],
    nearby: ["Bohra Layout", "Bannerghatta Road", "Hulimavu", "Kalena Agrahara", "MLA Layout", "JP Nagar"],
    faqs: [
      {
        q: "Do you design homes in Gottigere?",
        a: "Yes. We take on apartments, independent houses and builder floors in Gottigere and the surrounding Bannerghatta Road area.",
      },
      {
        q: "Can you do the full home, not just the kitchen?",
        a: "Yes. Most Gottigere clients choose a complete package: kitchen, wardrobes, living and bedroom furniture, ceilings, lighting and décor, designed and built together.",
      },
      {
        q: "How do I start?",
        a: "Call or WhatsApp us with your floor plan or a few photos. We'll set up a home visit and share design ideas with a clear, tailored quote.",
      },
    ],
  },
  {
    slug: "bohra-layout",
    name: "Bohra Layout",
    short: "Bohra Layout",
    title: "Interior Designers in Bohra Layout, Gottigere",
    description:
      "Interiors, modular kitchens and wardrobes for homes in Bohra Layout, Gottigere (560083). Minutes from our Bannerghatta Road office. Free home visit.",
    heroLead:
      "Minutes from our Bannerghatta Road office. Whether you're moving into one of the new apartment projects or upgrading an independent home, we design and build interiors that fit your space and your budget.",
    intro: [
      "Bohra Layout sits in Gottigere, between Bannerghatta Road and the neighbourhoods of Jyothi Nagar and Pavamana Nagar. It mixes established independent homes with a wave of new apartment projects, so we're asked about everything from first-home fit-outs to full renovations.",
      "Our Bengaluru office is just up the road in MLA Layout, so a home visit is easy to arrange. We measure, listen and then design every room around your floor plan, and our own craftsmen build the kitchen, wardrobes and furniture. One team, one point of contact, from the first sketch to handover.",
    ],
    homes: [
      {
        title: "New apartment fit-outs",
        text: "Complete interiors for new 2 and 3 BHK handovers: kitchen, wardrobes, TV unit, ceilings, lighting and décor, ready before you move in.",
      },
      {
        title: "Independent home upgrades",
        text: "Modern kitchens, better storage and refreshed living spaces for existing homes in and around the layout.",
      },
      {
        title: "Build on your plot",
        text: "Planning a new house or a rental building on your plot? We take on construction too, with interiors done by the same team.",
      },
    ],
    nearby: ["Gottigere", "Bannerghatta Road", "Kalena Agrahara", "Hulimavu", "MLA Layout", "Arekere"],
    faqs: [
      {
        q: "Do you work in Bohra Layout, Gottigere?",
        a: "Yes. Bohra Layout is a few minutes from our MLA Layout office and right in our focus area. We take on apartments, independent homes and new construction across Gottigere and Bannerghatta Road.",
      },
      {
        q: "Can you finish my interiors before I move in?",
        a: "Yes. If you share your floor plan before handover, we can design in advance and start work as soon as you get the keys, so you move into a finished home.",
      },
      {
        q: "Do you also construct buildings?",
        a: "Yes. We build homes and multi-storey buildings on clients' plots, and we're currently building in MLA Layout on Bannerghatta Road, Electronic City and Devanahalli.",
      },
    ],
  },
  {
    slug: "mla-layout",
    name: "MLA Layout",
    short: "MLA Layout",
    title: "Interior Designers in MLA Layout, Bangalore",
    description:
      "Interior design, renovations and custom furniture in MLA Layout, Bannerghatta Road, home to our Bengaluru office. Kitchens, wardrobes & full homes.",
    heroLead:
      "Our Bengaluru office is right here in MLA Layout. Independent homes in the layout often need more than a refresh. We redesign and rebuild interiors that suit a modern family, while respecting the home you already love.",
    intro: [
      "MLA Layout, off Bannerghatta Road, is a settled residential neighbourhood of independent homes and low-rise buildings. Many of the homes here were built years ago and are now ready for a thoughtful renovation: a modern kitchen, better storage, brighter lighting and furniture that fits.",
      "Renovating an independent home is different from fitting out a new apartment. Walls are not always straight, older wiring and plumbing need planning around, and every room has its own shape. Five decades of custom work means we're used to designing to the room, not forcing standard modules into it.",
    ],
    homes: [
      {
        title: "Whole-home renovation",
        text: "Re-planned kitchens, wardrobes, living spaces and bedrooms, designed together so the home feels new and consistent.",
      },
      {
        title: "Custom furniture to fit",
        text: "Made-to-measure units for alcoves, staircases and irregular rooms that off-the-shelf furniture can't fill.",
      },
      {
        title: "Exteriors & entrances",
        text: "Façade, gate and entrance updates that match the new interiors and lift the whole property.",
      },
    ],
    nearby: ["Bannerghatta Road", "Arekere", "Hulimavu", "Gottigere", "JP Nagar", "BTM Layout"],
    faqs: [
      {
        q: "Where exactly are you based?",
        a: "Our Bengaluru office is in MLA Layout, Bannerghatta Road. We're also building a 6-storey building in the layout, so we're on the ground here every day.",
      },
      {
        q: "Do you work on older independent homes in MLA Layout?",
        a: "Yes. Renovating older independent homes is a large part of our work. We plan around existing walls, wiring and plumbing and design everything to fit the actual room.",
      },
      {
        q: "Can you handle exteriors too?",
        a: "Yes. We design façades, entrances and gates as well as interiors, so the whole property is updated in one consistent style.",
      },
      {
        q: "How do I get a quote?",
        a: "Call or WhatsApp us. We'll visit, measure and talk through what you want, then share a tailored quote.",
      },
    ],
  },
  {
    slug: "jp-nagar",
    name: "JP Nagar",
    short: "JP Nagar",
    title: "Interior Designers in JP Nagar, Bangalore",
    description:
      "Home interiors, modular kitchens, wardrobes and custom furniture across all JP Nagar phases, Bangalore. 50+ years of craft. Free consultation.",
    heroLead:
      "From older independent homes in the early phases to new apartments further south, we design JP Nagar interiors that look personal and are built to last.",
    intro: [
      "JP Nagar stretches across many phases, from established independent homes near Jayanagar to newer apartment communities towards Bannerghatta Road and Kanakapura Road. That range means every project here is different: one week it's a full renovation of a 25 year old house, the next it's a fresh fit-out for a new 3 BHK.",
      "We design each home from scratch around how you live, and our own craftsmen build the kitchen, wardrobes and furniture. With over 50 years of experience and more than 10,000 clients, we know how to get the details right the first time.",
    ],
    homes: [
      {
        title: "Independent home renovations",
        text: "Modern kitchens, storage and living spaces for older JP Nagar homes, planned around the existing structure.",
      },
      {
        title: "Apartment fit-outs",
        text: "Complete interiors for new apartments: kitchen, wardrobes, TV units, study corners, ceilings and lighting.",
      },
      {
        title: "Statement furniture",
        text: "One-of-a-kind dining tables, sofas, beds and display units made in-house to your size and taste.",
      },
    ],
    nearby: ["Jayanagar", "Bannerghatta Road", "BTM Layout", "Banashankari", "Arekere", "Uttarahalli"],
    faqs: [
      {
        q: "Do you cover every phase of JP Nagar?",
        a: "Yes. We take on projects across all JP Nagar phases, as well as neighbouring Jayanagar, BTM Layout and Bannerghatta Road.",
      },
      {
        q: "Do you renovate older independent houses?",
        a: "Yes. Renovations of independent homes are a large part of our work in JP Nagar. We design to the actual room and plan around existing walls, wiring and plumbing.",
      },
      {
        q: "Can I see your work before deciding?",
        a: "Yes. You can browse our projects online, and visit our FeatherWood experience centres in Bengaluru to see and feel the furniture and finishes in person.",
      },
    ],
  },
  {
    slug: "jayanagar",
    name: "Jayanagar",
    short: "Jayanagar",
    title: "Interior Designers in Jayanagar, Bangalore",
    description:
      "Interior design, renovations, modular kitchens and custom furniture for Jayanagar homes, Bangalore. Craftsmanship that suits classic homes.",
    heroLead:
      "Jayanagar homes have character worth keeping. We modernise kitchens, storage and living spaces with bespoke craftsmanship that suits a classic Bengaluru home.",
    intro: [
      "Jayanagar is one of Bengaluru's oldest planned neighbourhoods, known for its tree-lined blocks and spacious independent homes. Many families here want to bring their home up to date without losing the warmth and character that made them love it in the first place.",
      "That calls for real craftsmanship rather than flat-pack modules. We design each room around its proportions, then build solid, made-to-measure kitchens, wardrobes and furniture with our own team, finished to last for decades, just as our own work has for over 50 years.",
    ],
    homes: [
      {
        title: "Heritage-sensitive renovations",
        text: "Modern comfort for classic homes: new kitchens, smarter storage and better lighting that respect the original character.",
      },
      {
        title: "Bespoke wood furniture",
        text: "Solid, made-to-measure dining sets, beds, wardrobes and display units built by our in-house craftsmen.",
      },
      {
        title: "Kitchens for joint families",
        text: "Large, practical kitchens with generous storage, designed for families that cook a lot and cook together.",
      },
    ],
    nearby: ["JP Nagar", "BTM Layout", "Banashankari", "Basavanagudi", "Bannerghatta Road", "Wilson Garden"],
    faqs: [
      {
        q: "Do you take on interior projects in Jayanagar?",
        a: "Yes. We design and build interiors across all Jayanagar blocks, as well as neighbouring JP Nagar, BTM Layout and Banashankari.",
      },
      {
        q: "Can you keep the character of an older home?",
        a: "Yes. We often work with older independent homes. We modernise kitchens, storage and lighting while keeping the proportions and details that make the home special.",
      },
      {
        q: "Do you make solid wood furniture?",
        a: "Yes. Custom furniture is where HAS Interiors began. We design and build made-to-measure pieces in-house, to your size, style and choice of finish.",
      },
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}

/** Localities we mention as served but don't (yet) have their own page. */
export const moreAreas = ["Arekere", "Hulimavu", "Kalena Agrahara", "Begur", "BTM Layout", "Banashankari"];

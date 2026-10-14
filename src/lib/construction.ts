/**
 * Building construction content. The main page lives at /construction and each
 * locality with a live project gets /construction/<slug>.
 */

export const buildTypes = [
  {
    title: "Independent houses",
    text: "Your family home on your own plot, designed around how you live, from the foundation to the final coat of paint.",
  },
  {
    title: "Multi-storey rental buildings",
    text: "G+2 to G+5 buildings planned for steady rental income, with practical layouts tenants want and finishes that last.",
  },
  {
    title: "Mixed-use buildings",
    text: "Shops or offices on the ground floor with homes above, laid out so both work well.",
  },
  {
    title: "Construction + interiors",
    text: "Hand over the keys to a fully finished building: kitchens, wardrobes and furniture by the same team that built the walls.",
  },
];

export const buildSteps = [
  {
    title: "Plot visit & brief",
    text: "We visit your plot, understand what you want to build and why, whether that's a family home or rental income, and talk budget honestly.",
  },
  {
    title: "Planning & design",
    text: "Floor plans and elevations that make the most of your plot, plus a detailed quote item by item, before any work starts.",
  },
  {
    title: "Structure",
    text: "Foundation, columns, slabs and walls built by our site team under daily supervision, with regular updates and site visits for you.",
  },
  {
    title: "Finishing & interiors",
    text: "Plumbing, electricals, flooring and paint, then interiors by our in-house craftsmen if you want a move-in-ready building.",
  },
  {
    title: "Handover",
    text: "A clean, finished building handed over with a walkthrough, so you know every part of what you've built.",
  },
];

export const constructionFaqs = [
  {
    q: "Do you build on my own plot in Bangalore?",
    a: "Yes. We construct independent houses and multi-storey buildings on clients' plots across Bengaluru. We're currently building a 6-storey building in MLA Layout (Bannerghatta Road), a 5-storey building in Devanahalli near the airport and a 4-storey building in Electronic City.",
  },
  {
    q: "What does construction cost per square foot?",
    a: "We don't work from a fixed per-square-foot rate. Cost depends on your plot, soil, number of floors, structure and the finishes you choose, so we visit, understand your plans and give you a detailed, item-by-item quote. Tell us your budget and we'll plan the building to fit it.",
  },
  {
    q: "Can you do the interiors as well?",
    a: "Yes, and it's one of the biggest advantages of working with us. The same team that builds your structure can design and make your kitchens, wardrobes and furniture, so the whole building is planned together and handed over ready to live in or rent out.",
  },
  {
    q: "Do you build rental buildings?",
    a: "Yes. Several of our current projects are multi-storey buildings planned for rental income. We design layouts that rent well and finishes that stand up to tenants.",
  },
  {
    q: "Which areas of Bangalore do you build in?",
    a: "We build across Bengaluru. Our office is in MLA Layout, Bannerghatta Road, and we're active in South Bengaluru (Bannerghatta Road, Gottigere, Bohra Layout, JP Nagar, Jayanagar), Electronic City and North Bengaluru around Devanahalli.",
  },
];

export type ConstructionArea = {
  slug: string;
  name: string;
  title: string;
  description: string;
  lead: string;
  project: { title: string; text: string };
  intro: string[];
  nearby: string[];
};

export const constructionAreas: ConstructionArea[] = [
  {
    slug: "bannerghatta-road",
    name: "Bannerghatta Road",
    title: "Building Contractors on Bannerghatta Road, Bangalore",
    description:
      "House & building construction on Bannerghatta Road, MLA Layout, Gottigere and JP Nagar. Now building a 6-storey building in MLA Layout. Get a quote.",
    lead: "Our Bengaluru office is in MLA Layout, where we're building a 6-storey building right now. If you own a plot along Bannerghatta Road, we can build on it.",
    project: {
      title: "6-storey building, MLA Layout",
      text: "Under construction in MLA Layout, Bannerghatta Road: a six-storey building on the client's own plot.",
    },
    intro: [
      "Plots along Bannerghatta Road and the layouts around it (MLA Layout, Gottigere, Bohra Layout, Arekere and Hulimavu) are in demand, and many owners are rebuilding old houses into multi-storey homes or rental buildings. With the metro line coming to Bannerghatta Road, well-planned buildings here are a strong long-term investment.",
      "We handle the whole build: planning, structure, finishing and, if you want it, interiors. Our office is in MLA Layout, so we're on site often and easy to reach.",
    ],
    nearby: ["MLA Layout", "Gottigere", "Bohra Layout", "Arekere", "Hulimavu", "JP Nagar", "Jayanagar"],
  },
  {
    slug: "electronic-city",
    name: "Electronic City",
    title: "Building Contractors in Electronic City, Bangalore",
    description:
      "House and rental building construction in Electronic City, Bangalore. Now building a 4-storey building there. Construction plus interiors, one team.",
    lead: "We're building a 4-storey building in Electronic City right now. If you have a plot here, we can plan and build a home or rental building that suits it.",
    project: {
      title: "4-storey building, Electronic City",
      text: "Under construction in Electronic City: a four-storey building planned for strong rental demand from the tech parks nearby.",
    },
    intro: [
      "Electronic City's tech parks keep rental demand high, which makes it one of Bengaluru's most popular places to build multi-storey rental buildings on private plots. Getting the layout right (unit sizes, parking, light and ventilation) decides how well a building rents for years to come.",
      "We plan the building around your plot and your goals, build the structure with our own supervised site team and can deliver it fully finished, interiors included, ready for tenants.",
    ],
    nearby: ["Electronic City Phase 1", "Electronic City Phase 2", "Hosa Road", "Begur", "Hebbagodi", "Bommasandra"],
  },
  {
    slug: "devanahalli",
    name: "Devanahalli",
    title: "Building Contractors in Devanahalli, Bangalore",
    description:
      "House and building construction in Devanahalli, near Bangalore airport. Now building a 5-storey building there. Construction plus interiors, one team.",
    lead: "We're building a 5-storey building in Devanahalli, close to Kempegowda International Airport. If you own a plot in North Bengaluru, we can build on it.",
    project: {
      title: "5-storey building, Devanahalli",
      text: "Under construction in Devanahalli, near the airport: a five-storey building on the client's plot.",
    },
    intro: [
      "Devanahalli and the airport corridor are among the fastest-growing parts of Bengaluru, and plot owners here are building homes and rental buildings to match the demand. A building that's planned well from day one is worth far more as the area develops.",
      "We handle planning, structure and finishing, and can hand over a move-in or rent-ready building with interiors by our own craftsmen.",
    ],
    nearby: ["Devanahalli", "Airport Road", "Yelahanka", "Bagalur", "Chikkajala", "Hebbal"],
  },
];

export function getConstructionArea(slug: string) {
  return constructionAreas.find((a) => a.slug === slug);
}

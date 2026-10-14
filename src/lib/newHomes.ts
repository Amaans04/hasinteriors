/**
 * New residential projects near our South Bengaluru focus area. Owners getting
 * handover are the warmest interior leads, so each project with enough detail gets
 * its own page at /new-homes/<slug>.
 *
 * We are NOT affiliated with these builders; pages say so. Keep facts to what's
 * public (locality, unit mix) and avoid possession dates, which change often.
 */
export type NewHome = {
  slug: string;
  name: string;
  builder: string;
  locality: string;
  pin?: string;
  units?: string;
  configs: string;
  /** One-line hook shown on the listing */
  summary: string;
  /** Has a dedicated page */
  page: boolean;
  intro?: string[];
  plan?: { title: string; text: string }[];
  faqs?: { q: string; a: string }[];
};

export const newHomes: NewHome[] = [
  {
    slug: "casagrand-hazen",
    name: "Casagrand Hazen",
    builder: "Casagrand",
    locality: "Mahaganapathy Nagar, Gottigere",
    pin: "560076",
    units: "622 homes on about 9 acres",
    configs: "1, 2, 3 & 4 BHK",
    summary: "Gottigere's large gated community off Bannerghatta Road, minutes from our MLA Layout office.",
    page: true,
    intro: [
      "Casagrand Hazen in Mahaganapathy Nagar, Gottigere is one of the larger communities off Bannerghatta Road, with around 622 homes from 1 to 4 BHK. If you own a home here, you're a few minutes from us: our Bengaluru office is in MLA Layout, Bannerghatta Road.",
      "New apartments come as a blank shell. The kitchen, wardrobes, storage and lighting are what turn it into a home, and getting them planned before you move in saves months of living in boxes. We design around your actual floor plan, build with our own craftsmen and install everything as one team.",
    ],
    plan: [
      {
        title: "2 BHK: smart and compact",
        text: "A modular kitchen with full-height storage, wardrobes in both bedrooms, a slim TV unit and a foyer shoe cabinet that keeps the entrance clutter-free.",
      },
      {
        title: "3 BHK: room to grow",
        text: "Kid-friendly bedroom storage, a study or work-from-home corner, a pooja unit and a dining-side crockery unit, designed to match.",
      },
      {
        title: "4 BHK: statement living",
        text: "Feature walls, layered ceiling lighting, a premium kitchen with appliances built in and bespoke furniture made to your size.",
      },
    ],
    faqs: [
      {
        q: "Can you design interiors for my Casagrand Hazen apartment?",
        a: "Yes. Share your unit type and floor plan, or let us visit, and we'll design around your exact layout. Our Bengaluru office is in MLA Layout, Bannerghatta Road, a few minutes away.",
      },
      {
        q: "Can work start as soon as I get possession?",
        a: "Yes. We can finish the design and quote before handover, so making starts right away and you move into a finished home sooner.",
      },
      {
        q: "Are you connected with Casagrand?",
        a: "No. HAS Interiors is an independent interior design and construction firm. We simply work with home owners in and around Gottigere, including Casagrand Hazen.",
      },
    ],
  },
  {
    slug: "esteem-south-park",
    name: "Esteem South Park",
    builder: "Esteem",
    locality: "Gottigere, Bannerghatta Road",
    units: "About 410 homes",
    configs: "2 & 2.5 BHK",
    summary: "New 2 and 2.5 BHK homes in Gottigere, close to Bohra Layout.",
    page: false,
  },
  {
    slug: "grc-sapphire-spring",
    name: "GRC Sapphire Spring",
    builder: "GRC",
    locality: "Bohra Layout, Gottigere",
    configs: "2, 3 & 4 BHK",
    summary: "A new launch right in Bohra Layout.",
    page: false,
  },
  {
    slug: "arvind-skycrest",
    name: "Arvind Skycrest",
    builder: "Arvind",
    locality: "Gottigere",
    units: "About 333 homes",
    configs: "Apartments",
    summary: "A 2026 launch in Gottigere.",
    page: false,
  },
  {
    slug: "godrej-bannerghatta-road",
    name: "Godrej projects on Bannerghatta Road",
    builder: "Godrej Properties",
    locality: "Off Bannerghatta Road, near Gottigere",
    configs: "2, 3 & 4.5 BHK",
    summary: "Large new gated communities launched off Bannerghatta Road.",
    page: false,
  },
  {
    slug: "prestige-park-grove",
    name: "Prestige Park Grove",
    builder: "Prestige",
    locality: "Begur Road",
    configs: "1 to 4 BHK & villas",
    summary: "A very large township on Begur Road.",
    page: false,
  },
  {
    slug: "prestige-elysian",
    name: "Prestige Elysian",
    builder: "Prestige",
    locality: "Kalena Agrahara, Bannerghatta Road",
    configs: "Apartments",
    summary: "Next to the upcoming Kalena Agrahara metro station.",
    page: false,
  },
];

export function getNewHome(slug: string) {
  return newHomes.find((h) => h.slug === slug && h.page);
}

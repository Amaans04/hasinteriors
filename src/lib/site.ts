import { areas } from "@/lib/areas";

export const SITE_URL = "https://hasinteriors.in";

export const contact = {
  phoneDisplay: "+91 74116 40330",
  phoneHref: "tel:+917411640330",
  phoneSchema: "+91-7411640330",
  email: "sales@hasinteriors.in",
  whatsapp:
    "https://wa.me/917411640330?text=Hi%20HAS%20Interiors%2C%20I%27d%20like%20a%20quote.",
  address: ["MB Green Court, Bhiwandi,", "Thane, Maharashtra"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=MB+Green+Court+Bhiwandi+Thane+Maharashtra",
  areas: ["Maharashtra", "Karnataka", "Tamil Nadu"],
};

export const featherwood = {
  name: "FeatherWood",
  url: "https://www.featherwood.in/",
  email: "featherwoodblr@gmail.com",
};

export const navLinks = [
  { href: "/services", label: "Interiors" },
  { href: "/construction", label: "Construction" },
  { href: "/projects", label: "Projects" },
  { href: "/bangalore", label: "Bangalore" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

/** Extra routes that aren't in the main nav but belong in the footer and sitemap. */
export const footerLinks = [
  ...navLinks,
  { href: "/new-homes", label: "New Homes" },
  { href: "/locations", label: "Experience Centres" },
  { href: "/faq", label: "FAQ" },
];

/**
 * Main Bengaluru office. Keep this identical to the Google Business Profile once it's live
 * (same spelling, same order); add the street/door number when available.
 */
export const bangaloreBase = {
  name: "HAS Interiors, Bengaluru",
  street: "MLA Layout, Bannerghatta Road",
  city: "Bengaluru",
  region: "Karnataka",
  lines: ["MLA Layout, Bannerghatta Road,", "Bengaluru, Karnataka"],
  mapsHref: "https://www.google.com/maps/search/?api=1&query=MLA+Layout+Bannerghatta+Road+Bengaluru",
};

export const constructionProjects = [
  {
    title: "6-storey building",
    place: "MLA Layout, Bannerghatta Road",
    text: "A six-storey building on the client's plot, in the same layout as our Bengaluru office.",
  },
  {
    title: "5-storey building",
    place: "Devanahalli, near the airport",
    text: "A five-storey building in fast-growing North Bengaluru, close to Kempegowda International Airport.",
  },
  {
    title: "4-storey building",
    place: "Electronic City",
    text: "A four-storey building for a client in Electronic City, planned for strong rental demand from the tech parks nearby.",
  },
];

export const pricingPoints = [
  {
    title: "Priced to your home",
    text: "Every home, plot and family is different, so we don't sell fixed packages. Your quote is built around your space, the materials you choose and what you actually need.",
  },
  {
    title: "Your budget, respected",
    text: "Tell us your budget up front. We'll show you where to spend for impact and where to save, and design within it rather than upselling.",
  },
  {
    title: "Clear before we start",
    text: "You see a detailed quote, item by item, before any work begins. No surprises halfway through.",
  },
];

/** Builds a WhatsApp link with a prefilled message. */
export function whatsappLink(message: string) {
  return `https://wa.me/917411640330?text=${encodeURIComponent(message)}`;
}

export const reasons = [
  {
    title: "Five decades of craft",
    text: "Over 50 years and 10,000+ clients. We've solved almost every space problem a home can throw at us.",
  },
  {
    title: "Made by our own craftsmen",
    text: "Furniture, kitchens and wardrobes are built by our in-house team, not passed on to the lowest bidder.",
  },
  {
    title: "One team, start to finish",
    text: "Design, making, installation and styling under one roof, with one point of contact for you.",
  },
  {
    title: "See it before you buy",
    text: "Watch our finished homes on video, then visit our FeatherWood experience centres to touch the finishes yourself.",
  },
];

export const stats = [
  { value: "50+", label: "Years of craft" },
  { value: "10,000+", label: "Clients served" },
  { value: "3", label: "States: MH · KA · TN" },
  { value: "3", label: "Buildings under construction" },
];

export const services = [
  {
    title: "Full-Home Interior Design",
    text: "Planned layouts, lighting, materials and finishes that make the whole home feel like one design.",
  },
  {
    title: "Bespoke Furniture",
    text: "Sofas, tables, beds and storage made to measure for your room, your routine and your style.",
  },
  {
    title: "Modular Kitchens",
    text: "Practical, good-looking kitchens with smart storage, durable surfaces and well-planned workflow.",
  },
  {
    title: "Wardrobes & Storage",
    text: "Built-in wardrobes and cabinetry that make full use of every wall, nook and corner.",
  },
  {
    title: "Décor & Styling",
    text: "Lighting, accents, art and soft furnishings that complete a space and make it feel like yours.",
  },
  {
    title: "Exteriors & Façades",
    text: "Entrances, façades and outdoor areas designed to match the character of the interiors.",
  },
];

export const processSteps = [
  {
    title: "Consult",
    text: "We listen to how you live, what you love and what you need, then visit and measure your space.",
  },
  {
    title: "Design",
    text: "You receive layouts, material palettes and a clear quote. We refine everything together until it's right.",
  },
  {
    title: "Craft",
    text: "Our craftsmen build your furniture and fittings with quality materials and close attention to finish.",
  },
  {
    title: "Deliver",
    text: "We install, style and hand over a finished space that's ready to enjoy.",
  },
];

export type Store = {
  tag: string;
  name: string;
  schemaName: string;
  addressLines: string[];
  streetAddress: string;
  locality: string;
  region: string;
  postalCode?: string;
  phoneDisplay: string;
  phoneHref: string;
  phoneSchema: string;
  hours?: string;
  mapsHref: string;
  geo?: { lat: number; lng: number };
  featherwood: boolean;
};

export const stores: Store[] = [
  {
    tag: "Bengaluru Office · HAS Interiors",
    name: "MLA Layout, Bannerghatta Road",
    schemaName: "HAS Interiors, Bengaluru",
    addressLines: ["MLA Layout, Bannerghatta Road,", "Bengaluru, Karnataka"],
    streetAddress: "MLA Layout, Bannerghatta Road",
    locality: "Bengaluru",
    region: "Karnataka",
    phoneDisplay: contact.phoneDisplay,
    phoneHref: contact.phoneHref,
    phoneSchema: contact.phoneSchema,
    mapsHref: "https://www.google.com/maps/search/?api=1&query=MLA+Layout+Bannerghatta+Road+Bengaluru",
    featherwood: false,
  },
  {
    tag: "Experience Centre · FeatherWood",
    name: "Siddapura, Varthur Road",
    schemaName: "FeatherWood Interiors & Furniture, Siddapura",
    addressLines: ["#11/45, Opposite D-Mart Siddapura,", "Varthur Main Road, Bengaluru 560066"],
    streetAddress: "#11/45, Opposite D-Mart Siddapura, Varthur Main Road",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560066",
    phoneDisplay: "+91 88502 19287",
    phoneHref: "tel:+918850219287",
    phoneSchema: "+91-8850219287",
    hours: "10:30 AM to 9:30 PM, all week",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=12.956107148951224,77.72821025974845",
    geo: { lat: 12.956107, lng: 77.72821 },
    featherwood: true,
  },
  {
    tag: "Experience Centre · FeatherWood",
    name: "Whitefield",
    schemaName: "FeatherWood Studio, Whitefield",
    addressLines: ["Opposite Sumadhura Folium,", "Borewell Road, Whitefield, Bengaluru 560066"],
    streetAddress: "Opposite Sumadhura Folium, Borewell Road, Whitefield",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560066",
    phoneDisplay: "+91 63668 20888",
    phoneHref: "tel:+916366820888",
    phoneSchema: "+91-6366820888",
    hours: "10:30 AM to 9:30 PM, all week",
    mapsHref: "https://www.google.com/maps/search/?api=1&query=12.966457,77.742944",
    geo: { lat: 12.966457, lng: 77.742944 },
    featherwood: true,
  },
  {
    tag: "Experience Centre · FeatherWood",
    name: "Kadugodi",
    schemaName: "FeatherWood Interiors, Kadugodi",
    addressLines: [
      "Shop #01, Opposite Sai Garden, next to Miracle Hospital,",
      "Seegehalli, Kadugodi, Bengaluru 560066",
    ],
    streetAddress:
      "Shop #01, Opposite Sai Garden, next to Miracle Hospital, Seegehalli, Kadugodi",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560066",
    phoneDisplay: "+91 63668 30888",
    phoneHref: "tel:+916366830888",
    phoneSchema: "+91-6366830888",
    hours: "10:30 AM to 9:30 PM, all week",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=13.00897588290264,77.7588814254467",
    geo: { lat: 13.008976, lng: 77.758881 },
    featherwood: true,
  },
];

export const faqs = [
  {
    q: "Which areas does HAS Interiors work in?",
    a: "In Bengaluru we focus on the south of the city: Bannerghatta Road, MLA Layout, Gottigere, Bohra Layout, JP Nagar and Jayanagar, and we take on construction across Bengaluru, including Electronic City and Devanahalli. We also work across Maharashtra (head office in Thane) and Tamil Nadu.",
  },
  {
    q: "Do you make custom furniture to fit my space?",
    a: "Yes. Every piece is designed around your room, your routine and your taste, from statement tables and sofas to wardrobes and kitchen cabinetry.",
  },
  {
    q: "Can you handle both interiors and exteriors?",
    a: "Yes. We design complete homes, from the façade and entrance through to living spaces, kitchens and bedrooms, so the whole property feels like one considered design.",
  },
  {
    q: "Where is your Bengaluru office?",
    a: "Our Bengaluru office is in MLA Layout, Bannerghatta Road, and we focus on South Bengaluru: Bannerghatta Road, Gottigere, Bohra Layout, JP Nagar and Jayanagar. To see furniture and finishes in person, you can also visit our FeatherWood experience centres in Siddapura, Whitefield and Kadugodi.",
  },
  {
    q: "How much do interiors cost?",
    a: "We don't believe in fixed packages. Every home and family is different, so we price each project around your space, the materials you choose and your budget. Tell us what you have in mind and we'll design within it, with a clear, item-by-item quote before any work starts.",
  },
  {
    q: "Do you construct buildings as well?",
    a: "Yes. Alongside interiors, we take on construction for clients building on their own plots, from independent homes to multi-storey buildings. We're currently building a 6-storey building in MLA Layout (Bannerghatta Road), a 5-storey building in Devanahalli and a 4-storey building in Electronic City.",
  },
  {
    q: "How do I get a quote?",
    a: "Message us on WhatsApp or call +91 74116 40330 with a few details about your space. We will arrange a consultation and share a tailored quote.",
  },
];

/** Organisation-wide structured data, rendered once in the root layout. */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "HAS Interiors",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/brand/logo.png`,
    image: `${SITE_URL}/media/hero-poster.jpg`,
    description:
      "Interior designers and building contractors in Bengaluru. Bespoke home interiors, modular kitchens, custom furniture and turnkey building construction, with over five decades of experience.",
    telephone: contact.phoneSchema,
    email: contact.email,
    // Bengaluru is the main market, so the Bengaluru office is the primary address
    address: {
      "@type": "PostalAddress",
      streetAddress: bangaloreBase.street,
      addressLocality: bangaloreBase.city,
      addressRegion: bangaloreBase.region,
      addressCountry: "IN",
    },
    areaServed: [
      ...contact.areas.map((name) => ({ "@type": "State", name })),
      ...areas.map((a) => ({
        "@type": "Place",
        name: `${a.name}, Bengaluru`,
        url: `${SITE_URL}/bangalore/${a.slug}`,
      })),
    ],
    subOrganization: {
      "@type": "Organization",
      name: featherwood.name,
      url: featherwood.url,
      logo: `${SITE_URL}/brand/featherwood-logo.jpg`,
      email: featherwood.email,
    },
    department: stores
      .filter((s) => s.featherwood)
      .map((s) => ({
        "@type": "FurnitureStore",
        name: s.schemaName,
        brand: { "@type": "Brand", name: featherwood.name },
        telephone: s.phoneSchema,
        openingHours: "Mo-Su 10:30-21:30",
        address: {
          "@type": "PostalAddress",
          streetAddress: s.streetAddress,
          addressLocality: s.locality,
          addressRegion: s.region,
          postalCode: s.postalCode,
          addressCountry: "IN",
        },
        geo: s.geo && {
          "@type": "GeoCoordinates",
          latitude: s.geo.lat,
          longitude: s.geo.lng,
        },
      })),
    location: {
      "@type": "Place",
      name: "HAS Interiors Head Office, Thane",
      address: {
        "@type": "PostalAddress",
        streetAddress: "MB Green Court",
        addressLocality: "Bhiwandi",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    knowsAbout: [
      "Building construction",
      "Turnkey house construction",
      "Interior design",
      "Custom furniture",
      "Modular kitchens",
      "Home décor",
      "Exterior and façade design",
    ],
  };
}

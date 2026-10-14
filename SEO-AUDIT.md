# SEO audit: ranking in South Bengaluru

**Goal:** win interior and construction clients from Bannerghatta Road, MLA Layout, Gottigere, Bohra Layout, JP Nagar and Jayanagar, plus construction clients across Bengaluru.
**Bengaluru office (primary address everywhere):** MLA Layout, Bannerghatta Road.

## Update, round 2

- **Construction:** `/construction` plus `/construction/bannerghatta-road`, `/electronic-city` and `/devanahalli`, each built around a real building under way (6-storey MLA Layout, 4-storey Electronic City, 5-storey Devanahalli).
- **New-home buyers:** `/new-homes` lists the new projects near Gottigere and Bannerghatta Road. `/new-homes/casagrand-hazen` targets Casagrand Hazen (Mahaganapathy Nagar, Gottigere, about 622 homes from 1 to 4 BHK), with a no-affiliation note.
- **New area page:** `/bangalore/bohra-layout`.
- **Client story:** the full walkthrough video is now the testimonial section on every key page.
- **Pricing:** a "no fixed packages" section on every key page and in the FAQs.
- **Primary address:** the Bengaluru office (MLA Layout) is now the main address in the structured data; the Thane head office is listed as a second location.
- **Audit:** all 20 sitemap URLs crawled. 0 issues: one main heading per page, correct canonical links, unique titles and descriptions, valid structured data, every internal link in the sitemap. Lighthouse mobile scored 100 on SEO, accessibility, best practices and agentic browsing for the home, construction, Casagrand Hazen and area pages.
- **Google Business Profile:** when it goes live, the name, address and phone must match the site *exactly*. To change the address in one place, edit `bangaloreBase` in `src/lib/site.ts`.
- **Testimonials:** the site has none written in, by design. Record 30–60 second phone videos from the 3 construction clients, and put real Google reviews on the GBP. Those are the strongest assets you can add next.
**Audited:** 14 Oct 2026, local production build.

## 1. Where the site stands

| Check | Before this round | Now |
|---|---|---|
| Lighthouse SEO (mobile) | 100 | 100 |
| Lighthouse Accessibility / Best practices | 100 / 100 | 100 / 100 |
| Main content on screen, throttled phone (local) | – | 0.38 s, no layout shift |
| Pages targeting South Bengaluru | 0 | 6 (Bangalore hub + 5 area pages) |
| Structured data | Business, FAQ | + Service per area, Breadcrumbs, local FAQ, areaServed |
| Ways to convert | WhatsApp | Call + WhatsApp floating, quote planner, call buttons in every hero |

Technical SEO was already clean. **The gap was never technical. It's local relevance, local presence and reviews.** Those are what the competitors have.

## 2. Who ranks today, and why

Searches for these areas are dominated by two kinds of result:

1. **Directories:** Justdial, Sulekha, NoBroker and Livspace list pages per locality. These are hard to outrank directly; the play is to *be listed on them* with strong reviews.
2. **Studios with a page per locality:** e.g. Vibgyor Interiors (`/interior-designers-jp-nagar/`), Houzlook, Pancham Interiors, Elvenwood and The Artful Abode.

What those locality pages have in common:

- H1 and title in the form **"Interior Designers in {Area}, Bangalore"**
- 700–2,000 words of copy, an area FAQ, "areas we serve nearby" links to sibling pages
- Trust numbers (Google rating, project count, warranty, delivery timeline)
- Call, WhatsApp and "book free consultation" CTAs on every screen
- A physical experience centre, plus a Google Business Profile with reviews

**Watch out:** Vibgyor also claims *"serving South Bangalore since 1975 / 50+ years"*, the same story as ours. Our edge has to be proof: real projects, reviews, and visible craftsmanship.

## 3. What's been built

- `/bangalore`: Bangalore hub page.
- `/bangalore/bannerghatta-road`, `/gottigere`, `/mla-layout`, `/jp-nagar`, `/jayanagar`: each has unique copy about the kind of homes in that area, its own FAQ (with FAQ schema), links to nearby area pages and a quote form with the area pre-selected.
- Every area page is in `sitemap.xml`, has its own canonical link and title, and is linked from the home page, the hub and the footer.
- Business schema lists every target locality under `areaServed`, and FeatherWood is linked as a sub-brand.
- **Conversion:** floating Call and WhatsApp buttons, a 3-tap quote planner that opens WhatsApp with a ready-made message, and Call/WhatsApp buttons in the hero of every page.
- **Home page restructured as a story:** promise → proof → story → why us → services → work → process → near you → FAQ → quote.

To add an area, add an entry to `src/lib/areas.ts`. The page, sitemap, footer links and quote form pick it up automatically.

## 4. What the website alone can't do (do these, in order)

These decide **map-pack** ranking ("interior designers near me"), which is most of the local clicks:

1. **Google Business Profile.** The FeatherWood showrooms are in East Bengaluru (Varthur Road / Whitefield / Kadugodi), roughly 15–25 km from Bannerghatta Road. Google's map results weigh distance heavily, so they will struggle to appear for "near me" searches made *in* JP Nagar or Gottigere.
   - Claim or verify each showroom's GBP, and add the South Bengaluru localities as **service areas**.
   - The single biggest lever is a **real, staffed address in South Bengaluru** (studio, display unit or office). Never list a virtual or fake address: Google suspends those.
2. **Reviews.** Competitors show 4.5–4.9★ with 100–600 reviews. Ask every past and current Bengaluru client for a Google review that mentions the area and the work ("modular kitchen in JP Nagar").
3. **Directory listings.** Create or claim Justdial, Sulekha, NoBroker Interiors, UrbanClap/Urban Company and IndiaMART profiles. Keep the name, address and phone identical everywhere.
4. **Real local projects.** Photograph finished homes in these areas and add them as project case studies titled by area (e.g. "3 BHK, Bannerghatta Road"). This is the strongest content signal and the best sales tool.
5. **Google Search Console.** After deploying, verify the domain, submit `/sitemap.xml`, and request indexing for the 6 Bangalore pages.
6. **Backlinks.** Get mentions from local builders, apartment associations (RWA newsletters), suppliers and local blogs and news.

## 5. Decisions needed from the business

- ~~Brand in Bengaluru~~ Decided: **HAS Interiors**. FeatherWood locations are presented as experience centres only.
- ~~"Bhora layout"~~ Done: Bohra Layout, Gottigere has its own page.
- **Numbers to add if true:** warranty period, typical delivery timeline, starting price (e.g. "modular kitchens from ₹X"), Google rating. Competitors use these and they convert well. I haven't invented any.
- **Testimonials:** none are on the site because we don't have real ones yet. Add genuine quotes (with name and area) once collected.

## 6. Expectations

New pages usually take **weeks to a few months** to be indexed and start ranking, and how far they climb depends mostly on items 1–4 above. Nobody can guarantee a #1 position. The site is now set up properly, and the off-site work is what moves rankings from here.

### Sources (competitor research)
- Sulekha: Bannerghatta Road / Gottigere interior designer directories
- Justdial: Gottigere listings (e.g. Houz Craft, 4.9★ from 151 reviews)
- vibgyorinteriors.com/interior-designers-jp-nagar/
- houzlook.com/interior-designers-jp-nagar/
- panchaminteriors.com/interior-designers-bannerghatta-road-bangalore
- elvenwood.in/interior-designers-jp-nagar, theartfulabode.com, livspace.com (JP Nagar)
- BrightLocal: Google local algorithm and ranking factors

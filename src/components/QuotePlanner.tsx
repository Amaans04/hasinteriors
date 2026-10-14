"use client";

import { useState } from "react";

import { areas, moreAreas } from "@/lib/areas";
import { contact, whatsappLink } from "@/lib/site";

const homeTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK+", "Independent house", "Plot / new building", "Commercial"];
const needs = [
  "Full home interiors",
  "Modular kitchen",
  "Wardrobes",
  "Custom furniture",
  "Renovation",
  "Build on my plot",
];

/**
 * Three quick choices, then opens WhatsApp with a ready-to-send message.
 * No backend needed, and the enquiry lands where the sales team already works.
 */
export default function QuotePlanner({ defaultArea = "" }: { defaultArea?: string }) {
  const [area, setArea] = useState(defaultArea);
  const [home, setHome] = useState("");
  const [need, setNeed] = useState<string[]>([]);
  const [name, setName] = useState("");

  const toggleNeed = (n: string) =>
    setNeed((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n]));

  const message = [
    `Hi HAS Interiors${name ? `, I'm ${name}` : ""}. I'd like a quote.`,
    area && `Area: ${area}`,
    home && `Home: ${home}`,
    need.length > 0 && `Looking for: ${need.join(", ")}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <form
      className="planner"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(whatsappLink(message), "_blank", "noopener");
      }}
    >
      <div className="planner-field">
        <label htmlFor="planner-area">Where is your home?</label>
        <select id="planner-area" value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="">Select your area</option>
          <optgroup label="South Bengaluru">
            {areas.map((a) => (
              <option key={a.slug} value={a.name}>
                {a.name}
              </option>
            ))}
            {moreAreas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </optgroup>
          <optgroup label="Rest of Bengaluru">
            <option value="Electronic City">Electronic City</option>
            <option value="Devanahalli">Devanahalli</option>
          </optgroup>
          <optgroup label="Elsewhere">
            <option value="Other part of Bengaluru">Other part of Bengaluru</option>
            <option value="Mumbai / Thane">Mumbai / Thane</option>
            <option value="Other city">Other city</option>
          </optgroup>
        </select>
      </div>

      <fieldset className="planner-field">
        <legend>Type of home</legend>
        <div className="chips">
          {homeTypes.map((h) => (
            <button
              type="button"
              key={h}
              className="chip"
              aria-pressed={home === h}
              onClick={() => setHome(home === h ? "" : h)}
            >
              {h}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="planner-field">
        <legend>What do you need? (pick any)</legend>
        <div className="chips">
          {needs.map((n) => (
            <button
              type="button"
              key={n}
              className="chip"
              aria-pressed={need.includes(n)}
              onClick={() => toggleNeed(n)}
            >
              {n}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="planner-field">
        <label htmlFor="planner-name">Your name (optional)</label>
        <input
          id="planner-name"
          type="text"
          autoComplete="given-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Priya"
        />
      </div>

      <div className="planner-actions">
        <button className="btn btn--accent btn--block" type="submit">
          Get my quote on WhatsApp
        </button>
        <a className="btn btn--outline btn--block" href={contact.phoneHref}>
          Or call {contact.phoneDisplay}
        </a>
      </div>
      <p className="planner-note">Free consultation · No obligation · We reply quickly</p>
    </form>
  );
}

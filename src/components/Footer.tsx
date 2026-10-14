import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { areas } from "@/lib/areas";
import { constructionAreas } from "@/lib/construction";
import { featherwood, footerLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-brands">
        <Link className="footer-logo" href="/" aria-label="HAS Interiors home">
          <Image src={logo} alt="" width={72} height={72} />
        </Link>
        <p>
          HAS Interiors · Interiors, furniture &amp; construction for over five decades.
          <br />
          Bengaluru office: MLA Layout, Bannerghatta Road · Experience centres by{" "}
          <a href={featherwood.url} target="_blank" rel="noopener">
            FeatherWood
          </a>
          .
        </p>
        <nav className="footer-nav" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container footer-areas">
        <p>Interior designers in Bangalore:</p>
        <ul>
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/bangalore/${a.slug}`}>{a.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container footer-areas">
        <p>Building contractors in Bangalore:</p>
        <ul>
          {constructionAreas.map((a) => (
            <li key={a.slug}>
              <Link href={`/construction/${a.slug}`}>{a.name}</Link>
            </li>
          ))}
          <li>
            <Link href="/new-homes/casagrand-hazen">Casagrand Hazen interiors</Link>
          </li>
        </ul>
      </div>
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} HAS Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
}

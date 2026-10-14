import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This page has moved or doesn&apos;t exist</h1>
        <p>Let&apos;s get you back somewhere beautiful.</p>
        <Link className="btn btn--accent" href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}

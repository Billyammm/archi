import Link from "next/link";

import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="section container" style={{ minHeight: "68vh", display: "grid", placeItems: "center" }}>
          <div
            style={{
              width: "min(760px, 100%)",
              padding: "clamp(2rem, 5vw, 4rem)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--panel-border)",
              background: "linear-gradient(180deg, var(--panel-bg-top), var(--panel-bg-bottom))",
              boxShadow: "var(--shadow-soft)",
              textAlign: "center",
            }}
          >
            <p className="eyebrow">404</p>
            <h1 style={{ marginTop: "0.75rem" }}>Page not found</h1>
            <p className="lead" style={{ maxWidth: "42rem", margin: "1rem auto 0" }}>
              The page you are looking for does not exist or has been moved.
            </p>

            <div className="hero-actions" style={{ justifyContent: "center", marginTop: "2rem" }}>
              <Link className="btn btn-primary" href="/">
                Return home
              </Link>
              <Link className="btn btn-outline" href="/projects">
                View projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
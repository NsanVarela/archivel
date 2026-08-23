import Link from "next/link";
import Archipelago from "@/components/Archipelago";
import SubscribeForm from "@/components/SubscribeForm";
import { articles } from "@/lib/articles";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", color: "#0b0b0b" }}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 48px",
        borderBottom: "0.5px solid rgba(11,11,11,0.1)",
      }}>
        <span style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: 400, letterSpacing: "-0.5px" }}>
          ar<span style={{ color: "#c8930a" }}>C</span>hi<span style={{ color: "#c8930a" }}>V</span>el
        </span>
        <div style={{ display: "flex", gap: "32px" }}>
          <Link href="/articles" style={{ fontSize: "13px", color: "rgba(11,11,11,0.5)", textDecoration: "none", fontFamily: "sans-serif" }}>Lettres</Link>
          <Link href="/a-propos" style={{ fontSize: "13px", color: "rgba(11,11,11,0.5)", textDecoration: "none", fontFamily: "sans-serif" }}>À propos</Link>
        </div>
      </nav>

      <section style={{ position: "relative", padding: "80px 48px 100px", maxWidth: "720px", margin: "0 auto", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: -80, width: "500px", opacity: 0.06, pointerEvents: "none" }}>
          <Archipelago />
        </div>
        <p style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(11,11,11,0.35)", marginBottom: "24px", fontFamily: "sans-serif" }}>
          Diaspora · Tech · Cap-Vert
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "28px" }}>
          Pour ceux qui ont<br />entendu l&apos;appel.
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(11,11,11,0.55)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "480px", fontFamily: "Georgia, serif" }}>
          <em>Uma letra</em> par mois. Un point de vue sur ce qui se construit entre Paris et Praia. Des opportunités, des profils, de l&apos;intelligence de terrain. Pas de bruit.
        </p>
        <SubscribeForm />
      </section>

      <div style={{ borderTop: "0.5px solid rgba(11,11,11,0.08)", margin: "0 48px" }} />

      <section style={{ padding: "64px 48px", maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(11,11,11,0.35)", marginBottom: "32px", fontFamily: "sans-serif" }}>Les 4 piliers</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(11,11,11,0.08)", border: "0.5px solid rgba(11,11,11,0.08)" }}>
          {[
            { num: "01", title: "La lettre", desc: "Mensuelle. Un point de vue, une opportunité, un profil, une ressource." },
            { num: "02", title: "À mesa", desc: "Dîner trimestriel à Paris. 15 personnes max. Sur invitation." },
            { num: "03", title: "Dispatch terrain", desc: "Après chaque voyage — ce qui existe, ce qui manque, ce qui se construit." },
            { num: "04", title: "Connexions", desc: "Mises en relation ciblées. Pas un annuaire — un connecteur humain." },
          ].map((p) => (
            <div key={p.num} style={{ background: "#ffffff", padding: "28px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "1px", color: "rgba(11,11,11,0.3)", marginBottom: "10px", fontFamily: "sans-serif" }}>{p.num}</p>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "#0b0b0b", marginBottom: "8px", fontFamily: "Georgia, serif" }}>{p.title}</p>
              <p style={{ fontSize: "13px", color: "rgba(11,11,11,0.5)", lineHeight: 1.6, fontFamily: "sans-serif" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid rgba(11,11,11,0.08)", margin: "0 48px" }} />

      <section style={{ padding: "64px 48px", maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(11,11,11,0.35)", marginBottom: "32px", fontFamily: "sans-serif" }}>Dernières lettres</p>
        <div>
          {articles.map((article, i) => (
            <div key={article.slug} style={{ borderTop: i === 0 ? "0.5px solid rgba(11,11,11,0.12)" : "none", borderBottom: "0.5px solid rgba(11,11,11,0.08)", padding: "24px 0" }}>
              <Link href={`/articles/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <p style={{ fontSize: "12px", color: "rgba(11,11,11,0.35)", marginBottom: "8px", fontFamily: "sans-serif" }}>{article.date}</p>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 400, color: "#0b0b0b", marginBottom: "8px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{article.title}</h2>
                <p style={{ fontSize: "14px", color: "rgba(11,11,11,0.5)", lineHeight: 1.65, fontFamily: "Georgia, serif", fontStyle: "italic" }}>{article.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: "0.5px solid rgba(11,11,11,0.1)", padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: "rgba(11,11,11,0.4)" }}>
          ar<span style={{ color: "#c8930a" }}>C</span>hi<span style={{ color: "#c8930a" }}>V</span>el
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="https://www.instagram.com/archivel.cv" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(11,11,11,0.4)", textDecoration: "none", fontFamily: "sans-serif" }}>Instagram</a>
          <a href="https://www.linkedin.com/company/archivel" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(11,11,11,0.4)", textDecoration: "none", fontFamily: "sans-serif" }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

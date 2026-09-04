import Link from "next/link";
import { articles } from "@/lib/articles";

export default function ArticlesPage() {
  const articlesList = articles.filter(a => a.type === "article");
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", color: "#0b0b0b" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", borderBottom: "0.5px solid rgba(11,11,11,0.1)" }}>
        <Link href="/" style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: 400, letterSpacing: "-0.5px", textDecoration: "none", color: "#0b0b0b" }}>
          ar<span style={{ color: "#c8930a" }}>C</span>hi<span style={{ color: "#c8930a" }}>V</span>el
        </Link>
      </nav>
      <section style={{ padding: "64px 48px", maxWidth: "720px", margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: 400, marginBottom: "48px", letterSpacing: "-0.02em" }}>Articles</h1>
        <div>
          {[...articlesList].reverse().map((article, i) => (
            <div key={article.slug} style={{ borderTop: i === 0 ? "0.5px solid rgba(11,11,11,0.12)" : "none", borderBottom: "0.5px solid rgba(11,11,11,0.08)", padding: "28px 0" }}>
              <Link href={`/articles/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <p style={{ fontSize: "12px", color: "rgba(11,11,11,0.35)", marginBottom: "10px", fontFamily: "sans-serif" }}>{article.date}</p>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 400, color: "#0b0b0b", marginBottom: "10px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{article.title}</h2>
                <p style={{ fontSize: "15px", color: "rgba(11,11,11,0.5)", lineHeight: 1.65, fontFamily: "Georgia, serif", fontStyle: "italic" }}>{article.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <footer style={{ borderTop: "0.5px solid rgba(11,11,11,0.1)", padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: "rgba(11,11,11,0.4)" }}>ar<span style={{ color: "#c8930a" }}>C</span>hi<span style={{ color: "#c8930a" }}>V</span>el</span>
        <a href="https://www.instagram.com/archivel.cv" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(11,11,11,0.4)", textDecoration: "none", fontFamily: "sans-serif" }}>@archivel.cv</a>
      </footer>
    </div>
  );
}
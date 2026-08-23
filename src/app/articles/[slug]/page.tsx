import { getArticleBySlug, articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

function renderContent(content: string) {
  return content.split("\n").map((line, i) => {
    if (line === "---") {
      return <hr key={i} style={{ border: "none", borderTop: "0.5px solid rgba(11,11,11,0.1)", margin: "40px 0" }} />;
    }
    if (line.startsWith("**") && line.endsWith("**")) {
      return <h3 key={i} style={{ fontFamily: "Georgia, serif", fontSize: "17px", fontWeight: 500, margin: "32px 0 12px", color: "#0b0b0b" }}>{line.replace(/\*\*/g, "")}</h3>;
    }
    if (line === "") {
      return <br key={i} />;
    }
    // Render italic and bold inline
    const rendered = line
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return <p key={i} style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "4px" }} dangerouslySetInnerHTML={{ __html: rendered }} />;
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", color: "#0b0b0b" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", borderBottom: "0.5px solid rgba(11,11,11,0.1)" }}>
        <Link href="/" style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: 400, letterSpacing: "-0.5px", textDecoration: "none", color: "#0b0b0b" }}>
          ar<span style={{ color: "#c8930a" }}>C</span>hi<span style={{ color: "#c8930a" }}>V</span>el
        </Link>
        <Link href="/articles" style={{ fontSize: "13px", color: "rgba(11,11,11,0.5)", textDecoration: "none", fontFamily: "sans-serif" }}>← Lettres</Link>
      </nav>

      <article style={{ padding: "64px 48px", maxWidth: "640px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", color: "rgba(11,11,11,0.35)", marginBottom: "16px", fontFamily: "sans-serif", letterSpacing: "0.5px" }}>{article.date}</p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "48px", color: "#0b0b0b" }}>
          {article.title}
        </h1>
        <div>{renderContent(article.content)}</div>
      </article>

      <div style={{ borderTop: "0.5px solid rgba(11,11,11,0.08)", padding: "40px 48px", maxWidth: "640px", margin: "0 auto" }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "15px", color: "rgba(11,11,11,0.5)", marginBottom: "24px", fontStyle: "italic" }}>
          Pour recevoir chaque lettre directement dans votre boîte mail —
        </p>
        <Link href="/#subscribe" style={{ fontSize: "14px", color: "#0b0b0b", textDecoration: "none", borderBottom: "1px solid #c8930a", paddingBottom: "2px", fontFamily: "sans-serif" }}>
          S&apos;abonner à archivel
        </Link>
      </div>

      <footer style={{ borderTop: "0.5px solid rgba(11,11,11,0.1)", padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: "rgba(11,11,11,0.4)" }}>ar<span style={{ color: "#c8930a" }}>C</span>hi<span style={{ color: "#c8930a" }}>V</span>el</span>
        <a href="https://www.instagram.com/archivel.cv" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(11,11,11,0.4)", textDecoration: "none", fontFamily: "sans-serif" }}>@archivel.cv</a>
      </footer>
    </div>
  );
}

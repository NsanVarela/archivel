import { getArticleBySlug, articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

function renderContent(content: string) {
  return content.split("\n").map((line, i) => {
    if (line === "---") {
      return <hr key={i} style={{ border: "none", borderTop: "0.5px solid rgba(11,11,11,0.1)", margin: "40px 0" }} />;
    }
    // Blockquote pour les réponses
    if (line.startsWith(">")) {
      const blockquoteText = line.replace(/^>\s?/, "");
      return <blockquote key={i} style={{ borderLeft: "3px solid #c8930a", paddingLeft: "16px", marginLeft: "0", marginRight: "0", fontSize: "17px", fontFamily: "Georgia, serif", lineHeight: 1.85, color: "rgba(11,11,11,0.75)", fontStyle: "italic", marginBottom: "16px" }}>{blockquoteText}</blockquote>;
    }
    if (line.startsWith("**") && line.endsWith("**")) {
      return <h3 key={i} style={{ fontFamily: "Georgia, serif", fontSize: "19px", fontWeight: 600, margin: "32px 0 12px", color: "#0b0b0b" }}>{line.replace(/\*\*/g, "")}</h3>;
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
        <div style={{ marginBottom: "16px" }}>
          <p style={{ fontSize: "12px", color: "rgba(11,11,11,0.35)", marginBottom: "8px", fontFamily: "sans-serif", letterSpacing: "0.5px" }}>{article.date}</p>
          {article.tags && article.tags.length > 0 && (
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {article.tags.map((tag) => (
                <span key={tag} style={{ fontSize: "12px", color: "#c8930a", fontFamily: "sans-serif" }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "48px", color: "#0b0b0b" }}>
          {article.title}
        </h1>
        
        {article.image && (
          <div style={{ marginBottom: "48px", marginTop: "32px", position: "relative", width: "100%", aspectRatio: "16/9" }}>
            <Image
              src={article.image}
              alt={article.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}

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

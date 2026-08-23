import Link from "next/link";

export default function AProposPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", color: "#0b0b0b" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", borderBottom: "0.5px solid rgba(11,11,11,0.1)" }}>
        <Link href="/" style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: 400, letterSpacing: "-0.5px", textDecoration: "none", color: "#0b0b0b" }}>
          ar<span style={{ color: "#c8930a" }}>C</span>hi<span style={{ color: "#c8930a" }}>V</span>el
        </Link>
        <Link href="/articles" style={{ fontSize: "13px", color: "rgba(11,11,11,0.5)", textDecoration: "none", fontFamily: "sans-serif" }}>Lettres</Link>
      </nav>

      <article style={{ padding: "64px 48px", maxWidth: "640px", margin: "0 auto" }}>

        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", fontStyle: "italic", marginBottom: "32px" }}>Nos é así.</p>

        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>L'archipel n'est pas une métaphore.<br />C'est une façon d'être au monde.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Des îles séparées par l'océan qui ne se perdent jamais vraiment de vue.<br />C'est nous. Depuis Paris, Rotterdam, Lisbonne, Boston, Dakar.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Nous ne sommes pas nostalgiques.<br />Nous sommes fidèles.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "40px" }}>Il y a une différence.</p>

        <hr style={{ border: "none", borderTop: "0.5px solid rgba(11,11,11,0.1)", margin: "40px 0" }} />

        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Cesária chantait la distance, pas l'oubli.<br />Nos ancêtres ont traversé l'indicible sans jamais cesser de construire.<br />Nous portons cette mémoire comme une fondation, pas comme une chaîne.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Et aujourd'hui, quelque chose se passe au Cap-Vert.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Des startups qui s'internationalisent. Un pays qui se numérise. Un archipel de 530 000 habitants qui se positionne comme carrefour technologique de l'Atlantique.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Ce pays compte 530 000 habitants sur ses dix îles.<br />Sa diaspora, elle, en compte le double — éparpillée sur cinq continents, forgée ailleurs, enracinée là-bas.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>La diaspora a des réseaux, des compétences, une vision forgée ailleurs.<br />L'archipel a le terrain, l'élan, la matière.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "40px" }}>Le pont entre les deux — c'est archivel.</p>

        <hr style={{ border: "none", borderTop: "0.5px solid rgba(11,11,11,0.1)", margin: "40px 0" }} />

        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Pas une association. Pas un groupe WhatsApp.<br />Un espace éditorial. Une voix. Un réseau qui se construit dans la durée.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}><em>Uma letra</em> par mois — un point de vue, une opportunité concrète, un profil de la diaspora qui construit, de l'intelligence de terrain.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Des dîners à Paris, sur invitation, autour d'une table et d'une cuisine capverdienne.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Du terrain — après chaque voyage, ce qui se construit, ce qui manque, ce que les communiqués officiels ne disent pas.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "40px" }}>Des connexions one-to-one entre des gens qui ont quelque chose à bâtir ensemble.</p>

        <hr style={{ border: "none", borderTop: "0.5px solid rgba(11,11,11,0.1)", margin: "40px 0" }} />

        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Archivel a été fondé par Nicolas Sanches Varela.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Il a commencé par écrire, pas par coder. Le marketing avant la technique. Vietnam, puis Paris. Comprendre les gens avant de comprendre les machines.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Il a ensuite bâti Hostelp — une plateforme où des voyageurs échangeaient leurs compétences contre un toit. Vingt et un pays, quelques reconnaissances, beaucoup d'apprentissages.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Aujourd'hui il développe des applications à grande échelle pour des institutions publiques et privées. Le code que personne ne voit mais que tout le monde utilise.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "16px" }}>Et entre les deux — il a lancé archivel.</p>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", marginBottom: "40px" }}>Fils de parents nés au Cap-Vert.<br />Binational depuis peu.<br /><em>Fidju di tera</em> depuis toujours.</p>

        <hr style={{ border: "none", borderTop: "0.5px solid rgba(11,11,11,0.1)", margin: "40px 0" }} />

        <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", lineHeight: 1.85, color: "rgba(11,11,11,0.85)", fontStyle: "italic", marginBottom: "24px" }}>Djunta — on se retrouve.</p>
        <a href="https://www.instagram.com/archivel.cv" style={{ fontSize: "14px", color: "#c8930a", textDecoration: "none", fontFamily: "sans-serif" }}>@archivel.cv</a>

      </article>

      <footer style={{ borderTop: "0.5px solid rgba(11,11,11,0.1)", padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: "rgba(11,11,11,0.4)" }}>ar<span style={{ color: "#c8930a" }}>C</span>hi<span style={{ color: "#c8930a" }}>V</span>el</span>
        <a href="https://www.instagram.com/archivel.cv" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "rgba(11,11,11,0.4)", textDecoration: "none", fontFamily: "sans-serif" }}>@archivel.cv</a>
      </footer>
    </div>
  );
}
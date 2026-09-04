export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  type: "lettre" | "article";
  image?: string;
  tags?: string[];
}

export const articles: Article[] = [
  {
    slug: "archivel-un-nom-trois-secrets",
    title: "arChiVel. Un nom. Trois secrets.",
    date: "Août 2026",
    excerpt: "Il y a des noms qu'on choisit. Et des noms qui s'imposent. Celui-là s'est imposé.",
    type: "article",
    image: "/images/archivel.png",
    tags: ["diaspora", "identité"],
    content: `Il y a des noms qu'on choisit.
Et des noms qui s'imposent.

Celui-là s'est imposé.

---

Tout a commencé par *archipel.*

Dix îles dispersées dans l'Atlantique qui forment pourtant un seul pays.
La diaspora capverdienne ressemble à ça — éparpillée entre Paris, Rotterdam, Lisbonne, Boston, Dakar, sans jamais vraiment se perdre de vue.

L'archipel comme métaphore. Comme point de départ.

---

Puis j'ai regardé le mot autrement.

Le **C** et le **V** étaient là, cachés dans le nom.
CV — le code officiel de Cabo Verde dans le monde.

Je n'avais pas cherché ça.
C'est arrivé. Et quand c'est arrivé, j'ai su.

*Os melhores nomes têm sempre algo a revelar.*
Les meilleurs noms ont toujours quelque chose à révéler — à ceux qui regardent bien.

---

Et puis il y a *vel.*

*Vela* en portugais. La voile.
La traversée atlantique. Nos ancêtres, l'océan, ce qui a été traversé — pas toujours librement, pas toujours vers la lumière.

Mais traversé quand même.

Cette capacité de tenir malgré l'océan est peut-être la chose la plus profondément capverdienne qui soit.

Archivel se termine par cette image.
Parce qu'on ne construit rien sans traversée.

---

*Uma letra* par mois. Des dîners. Des connexions. De l'intelligence de terrain.
Pour ceux qui ont entendu l'appel de l'archipel.

*Djunta* — on se retrouve.`
  },
  {
    slug: "nos-e-asi",
    title: "Nos é así.",
    date: "Août 2026 — Lettre n°1",
    excerpt: "Nous sommes la diaspora qui ne se plaint pas. Qui construit. Qui connecte. Qui revient.",
    type: "lettre",
    image: "/images/diaspora.png",
    tags: ["diaspora"],
    content: `*Nos é así.*

Nous sommes la diaspora qui ne se plaint pas.

Nous avons grandi entre deux langues, deux cuisines, deux façons de compter le temps. Nous avons voyagé — parfois espéré que ce serait tel pays, telle ville. Et puis quelque chose s'est imposé. Pas un choix. Une évidence.

*O Cabo Verde ka ta spera.* Le Cap-Vert n'attend pas — il appelle.

Ma mère est née à Tarrafal, île de Santiago. J'y reviens. Et à chaque retour, ce sentiment se précise — pas la nostalgie, quelque chose de plus actif. L'intuition qu'il y a là-bas tout ce qu'il faut pour construire autrement.

Récemment, je suis devenu officiellement binational capverdien. Ma première envie a été simple : partager ça. Avec ceux qui sentent la même chose. Avec ceux qui se demandent si ça vaut le coup d'aller voir ce qui se passe au Cap-Vert.

---

**Archivel, c'est pour eux.**

*Uma letra* par mois. Un point de vue. Des opportunités concrètes, des profils de la diaspora qui construit, de l'intelligence de terrain. Pas de bruit.

Et autour de cette lettre — des dîners à Paris, des dispatches après chaque voyage, des connexions entre des gens qui ont quelque chose à bâtir ensemble.

*Djunta* — on se retrouve.

---

Dans quelques jours, je repars à Tarrafal.

*A próxima* lettre viendra de là-bas.

*Té logo,*
Nicolas`
  },
  {
    slug: "double-nationalite-cap-vert",
    title: "Bu ka ten inda bu nacionalidade?",
    date: "Août 2026",
    excerpt: "Les visages changent à chaque arrivée. Mais la question, elle, ne change pas.",
    type: "article",
    image: "/images/double-nationalite.png",
    tags: ["cap-vert", "ressource", "guide"],
    content: `**"Bu ka ten inda bu nacionalidade?"**

Les visages changent à chaque arrivée. Mais la question, elle, ne change pas.

Un regard. Parfois un sourire. Parfois juste les yeux qui disent ce que la bouche formule quand même :

*Fidju di tera. Tu n'as pas encore ta nationalité ?*

Je n'oubliais pas. Mais je ne savais pas par où commencer.

Jusqu'au jour où j'ai commencé.

---

**Ce qu'on ne nous dit pas.**

Le Cap-Vert ne vous demande pas de choisir. Il vous reconnaît.

Tout descendant d'un parent capverdien, né où que ce soit dans le monde, a droit à la nationalité d'origine. Par filiation. Pas par naturalisation, pas par résidence. Par le simple fait d'être là, d'être de là.

Et la double nationalité est autorisée. Votre passeport français reste intact.

Ce n'est pas une faveur. C'est un droit que beaucoup ignorent.

---

**La clé de tout : l'acte de naissance de votre parent.**

Un seul document conditionne tout le reste. L'acte de naissance capverdien de votre mère ou votre père. Si ce document n'est pas en votre possession — et c'est souvent le cas — il faut le demander à la *Conservatória do Registo Civil* de la commune de naissance au Cap-Vert.

---

**La démarche, sans détour.**

Rassemblez : votre acte de naissance français (copie intégrale), l'acte de naissance capverdien de votre parent, sa pièce d'identité, des photos d'identité.

Prenez rendez-vous à l'ambassade du Cap-Vert à Paris — 3 rue de Rigny, 75008 — 01 42 12 73 50.

Demandez le *reconhecimento de nacionalidade* par filiation. L'ambassade peut lancer simultanément la reconnaissance et la demande de passeport. Une seule visite. Environ un mois de délai.

---

**Pourquoi maintenant. Pourquoi ça compte.**

Le TechPark de Praia regroupe plus de 300 professionnels du numérique. Des startups qui cherchent à s'internationaliser. Un écosystème qui grandit et qui manque de ce que la diaspora a.

La nationalité capverdienne ouvre des portes concrètes : statut émigrant pour investir, entrée comme citoyen, capacité d'agir sur le terrain avec les mêmes droits qu'un national. Pour un développeur, un entrepreneur de la diaspora — c'est un levier. Pas un symbole. Un outil.

---

*Les visages à la frontière avaient raison.*

*Fidju di tera. Lancez-vous. L'archipel construit — et il a besoin de vous.*

*Djunta* — on se retrouve.`
  },
  {
    slug: "pendant-que-vous-lisez-depuis-paris",
    title: "Pendant que vous lisez ceci depuis Paris.",
    date: "Août 2026",
    excerpt: "Ils construisent. Pas dans dix ans. Maintenant — depuis Praia, depuis Mindelo.",
    type: "article",
    image: "/images/startup.png",
    tags: ["entrepreneuriat", "cap-vert", "tech"],
    content: `Ils construisent.

Pas dans dix ans. Pas quand les conditions seront meilleures. Maintenant — depuis Praia, depuis Mindelo, depuis un archipel que le monde commence à regarder autrement.

Voici quatre d'entre eux.

---

**Helga. Les événements, enfin dans l'archipel.**

Helga "Guita" Ortet n'a pas attendu qu'un investisseur étranger arrive pour digitaliser les événements capverdiens. Elle l'a fait elle-même, en 2017, avec SoldOut — une plateforme de vente de billets et de gestion d'événements en ligne.

Le défi n'est pas technique. Il est culturel. Dans un pays où les festivals de 30 000 personnes vendent encore leurs billets à la main, convaincre de passer au digital demande de la patience et de la ténacité. Helga en a.

En 2024, elle représentait le Cap-Vert au Web Summit Lisboa en catégorie Startup Alpha. Pas en touriste — en fondatrice avec un produit, une traction, une vision.

---

**NhaBex. Le quotidien, enfin fluide.**

Attendre. Faire la queue. Revenir demain.

C'est le quotidien de millions de personnes dans les administrations, les banques, les centres de santé de l'archipel. NhaBex, fondée en 2015, a décidé que ça pouvait changer.

Leur solution de gestion de files d'attente n'est pas glamour. Elle est utile — profondément, concrètement utile.

---

**Sintaxy. L'archipel, depuis New York et Londres.**

2014. Sintaxy naît au Cap-Vert comme entreprise de développement logiciel. Dix ans plus tard, elle opère aux États-Unis, au Portugal et en Angleterre.

C'est la preuve que le talent capverdien n'a pas besoin de quitter l'archipel pour travailler avec le monde — il peut rester et exporter.

---

**LENTiLHAS. La culture, enfin produit.**

Simone Spencer et Sandro Fonseca font de l'audiovisuel capverdien — avec les outils d'aujourd'hui. Depuis 2020, leur maison de production LENTiLHAS documente, crée, produit. En 2025, ils représentaient le Cap-Vert au Web Summit en Startup Alpha.

Dans un pays où la musique a déjà conquis le monde — Cesária Évora, le morna, la *saudade* — l'idée que la culture puisse aussi être une industrie tech n'est pas une métaphore. C'est un modèle.

---

**Ce qu'ils ont en commun.**

Ils construisent dans un marché de 530 000 habitants, sans capital-risque abondant, sans écosystème mature. Ils le font quand même.

Et ils cherchent ce que la diaspora a — des réseaux internationaux, une vision forgée ailleurs, des connexions avec des marchés plus grands.

*C'est là qu'archivel existe.*

*Djunta* — on se retrouve.`
  },
  {
    slug: "joanito-rocha-un-kriolu-qui-trahit",
    title: "Un kriolu qui trahit, une conversation qui s'engage",
    date: "Septembre 2026",
    excerpt: "À Tarrafal, une rencontre avec Joanito Rocha, entrepreneur capverdien qui construit par petites étapes.",
    type: "article",
    tags: ["entrepreneuriat", "cap-vert", "dépêche-de-terrain", "IA"],
    content: `*Tarrafal. Septembre 2026.*

Je déjeunais seul quand Joanito Rocha est arrivé avec un groupe de voyageurs français. Guide touristique, écrit sur son polo. Mar & Rocha Travel.

Quelques mots échangés ont suffi. Il a entendu mon kriolu — pas celui d'un local. Un sourire. Une remarque. La conversation s'est engagée naturellement, sans préambule. Deux personnes parlant d'expériences différentes du tourisme. Puis glissant progressivement vers quelque chose de plus profond : l'entrepreneuriat. La mentalité. Comment on construit.

C'est le genre de rencontre qu'Archivel existe pour documenter.

Je lui ai proposé une interview.

---

Joanito Rocha dirige Mar & Rocha Travel, une agence de tourisme basée à Praia, Santiago. Pas une structure massive. Une agence familiale qui grandit progressivement. Trekking, écotourisme, visites culturelles, tours nautiques. L'île de Santiago, Tarrafal, les environs. Des clients réguliers. Une présence croissante sur les plateformes touristiques — TripAdvisor, GetYourGuide.

Ce qui rend Joanito intéressant n'est pas la taille de son agence. C'est sa façon de penser.

---

**D'où tu viens ? Comment tu as commencé avant Mar & Rocha Travel ? Qu'est-ce qui t'a amené à lancer l'agence ?**

*Joanito :*

> Ceci est la réponse de Joanito en tant que citation avec une barre latérale dorée.

---

La première chose qu'il dit, c'est simple : la réussite entrepreneuriale n'est pas une question de ressources. C'est une question de mentalité.

Il ne le dit pas comme une phrase motivationnelle. Il le dit comme quelqu'un qui a observé le terrain, qui voit des opportunités là où d'autres voient des obstacles. Qui comprend que tu n'as pas besoin d'attendre que tout soit parfait. Tu commences. Tu franchis une étape. Tu en franchis une autre.

---

**Tu dis que la réussite entrepreneuriale est d'abord une question de mentalité. Qu'est-ce que tu entends exactement par là ?**

*Joanito :*

> Ceci est la réponse de Joanito en tant que citation avec une barre latérale dorée.

---

Regardez Mar & Rocha Travel. Il y a une progression claire.

Une agence locale d'abord. Construite sur la qualité et le bouche-à-oreille. Puis la présence sur les plateformes internationales — parce qu'il comprend que c'est là que les voyageurs cherchent. Puis les services qui s'ajoutent. Les guides qui se professionnalisent. L'équipe qui grandit.

Chaque étape a permis la suivante. Ce n'était pas un grand plan lancé une fois. C'était une succession de mouvements. Petits pas. Itération. Adaptation.

---

**Comment tu envisages la croissance de Mar & Rocha Travel ? Tu franchis les étapes comment — par petits pas ou tu cherches des sauts plus importants ? Donne un exemple concret.**

> Ceci est la réponse de Joanito en tant que citation avec une barre latérale dorée.

---

La conversation a glissé vers l'IA.

Il parle de l'IA pas comme un rêve futuriste. Comme quelque chose d'accessible maintenant. Surtout pour les entrepreneurs de pays sans les mêmes infrastructures que les pays développés. C'est là que l'IA change la donne.

Il ne dit pas qu'il a tout automatisé. Il dit qu'il voit des possibilités. Comment utiliser ces outils pour franchir des étapes plus vite. Comment ne pas attendre que tout soit parfait pour commencer à les intégrer. Comment l'IA peut être un levier quand les ressources massives ne sont pas disponibles.

---

**Vous aviez parlé de l'IA comme une opportunité pour les entrepreneurs de pays qui n'ont pas les mêmes infrastructures que les pays développés. Comment tu vois ça ? Et comment tu envisages de l'utiliser toi-même ?**

*Joanito :*

> Ceci est la réponse de Joanito en tant que citation avec une barre latérale dorée.

---

Puis on a parlé du Cap-Vert au-delà du tourisme.

Le grog de Fogo. Le fromage artisanal. Les produits qu'on n'exporte pas, qu'on ne transforme pas, qu'on laisse dormir. L'absence d'industrialisation sur des choses qui pourraient être des produits. Des opportunités.

Joanito voit ça. Il voit les secteurs où la même mentalité entrepreneuriale pourrait créer quelque chose. Où l'IA pourrait accélérer les choses. Où les petits pas pourraient aboutir à quelque chose.

---

**Quel conseil tu donnerais à d'autres entrepreneurs qui veulent lancer ? Et au-delà du tourisme, où tu vois du potentiel non exploité au Cap-Vert ?**

*Joanito :*

> Ceci est la réponse de Joanito en tant que citation avec une barre latérale dorée.

---

Cette interview ne s'arrête pas ici. Chaque entrepreneur inspire quelqu'un d'autre. Il y a une chaîne — une constellation d'idées, de visions, de gens qui construisent.

**Quel entrepreneur, quelle idée, quel profil — au Cap-Vert ou ailleurs — tu trouves intéressant et qu'on devrait documenter ?**

*Joanito :*

> Ceci est la réponse de Joanito en tant que citation avec une barre latérale dorée.

---

Archivel documente l'entrepreneuriat capverdien et diasporique à travers des parcours réels. Pas des théories abstraites. Des gens qui construisent maintenant, avec les défis, les obstacles, les choix concrets.

Joanito représente quelque chose d'important. L'idée que pour les entrepreneurs de pays sans les mêmes infrastructures que les pays développés, les outils et les mentalités importent plus que les ressources massives. Que l'IA n'est pas un rêve lointain, mais quelque chose d'accessible. Que les petites étapes fonctionnent.

Si tu es entrepreneur, ou si tu as rencontré quelqu'un d'intéressant dont la vision ou le parcours mérite d'être mis en avant — quelqu'un qui construit, qui pense différemment, qui voit des possibilités — je cherche ces histoires.

Le même format peut s'appliquer à d'autres profils, d'autres secteurs, d'autres visions.

*C'est comme ça que je bâtis une véritable archive de l'entrepreneuriat capverdien.*

*Djunta* — on se retrouve.`
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

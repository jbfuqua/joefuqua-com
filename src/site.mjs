const socialLinks = [
  { href: "https://linkedin.com/in/joefuqua", label: "LinkedIn" },
  { href: "https://instagram.com/a.nod.tothe.odd", label: "Instagram" }
];

const ecosystemLinks = [
  { href: "https://joefuqua.com", label: "Home", key: "home" },
  { href: "https://joefuqua.blog", label: "Writing", key: "writing" },
  { href: "https://joefuqua.art", label: "Art", key: "art" },
  { href: "/about", label: "About", key: "about" },
  {
    href: "https://joefuqua.blog",
    label: "Subscribe",
    key: "subscribe",
    note: "Newsletter signup lives on joefuqua.blog"
  }
];

const pageShell = ({ title, description, canonical, activeKey, bodyClass = "", content }) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="Writing, art, and a long view of intelligent machines. Panic is optional. Preparation isn't." />
  <meta property="og:image" content="https://joefuqua.com/og-default.png" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --void: #080a0e;
      --surface: #13171f;
      --surface-soft: rgba(19, 23, 31, 0.72);
      --surface-hover: #1a1f2a;
      --border: rgba(80, 72, 64, 0.25);
      --border-hover: rgba(80, 72, 64, 0.45);
      --ink: #e8e2d9;
      --ink-mid: #a09890;
      --ink-faint: #504840;
      --ember: #c4622d;
      --font-display: 'Cormorant Garamond', Georgia, serif;
      --font-mono: 'DM Mono', monospace;
      --content-width: 960px;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--void);
      color: var(--ink);
      font-family: var(--font-display);
      min-height: 100vh;
      padding: 2rem;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 0;
      opacity: 0.4;
    }

    a { color: inherit; }

    .shell {
      width: 100%;
      max-width: var(--content-width);
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .site-nav,
    .site-footer {
      backdrop-filter: blur(18px);
      background: var(--surface-soft);
      border: 1px solid var(--border);
      border-radius: 4px;
    }

    .site-nav {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1.25rem;
      margin-bottom: 2.5rem;
    }

    .site-brand {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--ink-faint);
      text-decoration: none;
      white-space: nowrap;
    }

    .nav-links {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .nav-links a {
      font-family: var(--font-mono);
      font-size: 0.64rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--ink-mid);
      padding: 0.65rem 0.8rem;
      border: 1px solid transparent;
      border-radius: 999px;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
    }

    .nav-links a:hover,
    .nav-links a:focus-visible,
    .nav-links a[aria-current="page"] {
      color: var(--ink);
      border-color: var(--border-hover);
      background: rgba(255, 255, 255, 0.02);
      outline: none;
    }

    main {
      display: grid;
      gap: 2rem;
    }

    .panel {
      border: 1px solid var(--border);
      border-radius: 4px;
      background: rgba(19, 23, 31, 0.55);
      padding: 2.25rem;
    }

    .hero {
      display: grid;
      gap: 1.5rem;
      overflow: hidden;
      position: relative;
      padding-bottom: 2.75rem;
    }

    .hero::after {
      content: "";
      position: absolute;
      inset: auto -6% -28% auto;
      width: min(34rem, 56vw);
      aspect-ratio: 1;
      border-radius: 999px;
      background:
        radial-gradient(circle at 30% 30%, rgba(196, 98, 45, 0.16), transparent 44%),
        radial-gradient(circle at 65% 55%, rgba(232, 226, 217, 0.08), transparent 38%),
        radial-gradient(circle at 50% 50%, rgba(232, 226, 217, 0.04), transparent 60%);
      opacity: 0.9;
      pointer-events: none;
      filter: blur(12px);
    }

    .hero::before {
      content: "";
      position: absolute;
      inset: auto auto -1px 2.25rem;
      width: min(10rem, 22vw);
      height: 1px;
      background: linear-gradient(90deg, rgba(196, 98, 45, 0.5), rgba(196, 98, 45, 0));
      pointer-events: none;
    }

    .eyebrow,
    .hero-kicker {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--ink-faint);
    }

    .hero-kicker {
      margin-bottom: 1.5rem;
    }

    h1, h2 {
      font-weight: 300;
      letter-spacing: -0.02em;
      color: var(--ink);
    }

    h1 {
      font-size: clamp(2.8rem, 7vw, 4.5rem);
      line-height: 1.05;
      margin-bottom: 1.25rem;
    }

    h2 {
      font-size: clamp(1.9rem, 4vw, 2.5rem);
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.02rem;
      font-weight: 300;
      line-height: 1.85;
      color: var(--ink-mid);
    }

    .lede {
      max-width: 52ch;
    }

    .hero-copy {
      position: relative;
      z-index: 1;
      max-width: 44rem;
    }

    .hero-statement {
      font-size: clamp(1.35rem, 2.5vw, 1.85rem);
      line-height: 1.42;
      color: var(--ink);
      max-width: 24ch;
      margin-bottom: 0.9rem;
    }

    .hero-support {
      max-width: 36ch;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 2.2rem;
    }

    .button-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-mono);
      font-size: 0.66rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      text-decoration: none;
      min-width: 11rem;
      padding: 0.95rem 1.2rem;
      border-radius: 999px;
      border: 1px solid var(--border-hover);
      transition: background 0.2s, border-color 0.2s, color 0.2s;
    }

    .button-link.primary {
      background: var(--ink);
      color: var(--void);
    }

    .button-link.secondary {
      color: var(--ink);
      background: transparent;
    }

    .button-link:hover,
    .button-link:focus-visible {
      background: var(--surface-hover);
      color: var(--ink);
      outline: none;
    }

    .button-link.primary:hover,
    .button-link.primary:focus-visible {
      background: #f0ebe3;
      color: var(--void);
    }

    .hero-tertiary {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--ink-mid);
      align-self: center;
      padding: 0.85rem 0 0.85rem 0.2rem;
    }

    .hero-tertiary:hover,
    .hero-tertiary:focus-visible {
      color: var(--ink);
      outline: none;
    }

    .destinations {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }

    .destination-card {
      display: block;
      text-decoration: none;
      min-height: 24rem;
      padding: 1.9rem 1.75rem 1.65rem;
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 40%),
        rgba(19, 23, 31, 0.72);
      border: 1px solid var(--border);
      border-radius: 4px;
      transition: background 0.25s, border-color 0.25s, transform 0.25s;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .destination-card::before {
      content: "";
      position: absolute;
      inset: auto -20% -28% auto;
      width: 18rem;
      height: 18rem;
      border-radius: 999px;
      background: radial-gradient(circle, rgba(196, 98, 45, 0.16), transparent 62%);
      opacity: 0.5;
      transition: opacity 0.25s ease, transform 0.25s ease;
      pointer-events: none;
    }

    .destination-card::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent, rgba(8, 10, 14, 0.22));
      pointer-events: none;
    }

    .destination-card:hover,
    .destination-card:focus-visible {
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 45%),
        var(--surface-hover);
      border-color: var(--border-hover);
      transform: translateY(-3px);
      outline: none;
    }

    .destination-card:hover::before,
    .destination-card:focus-visible::before {
      opacity: 1;
      transform: scale(1.05);
    }

    .destination-card > * {
      position: relative;
      z-index: 1;
    }

    .card-label {
      font-family: var(--font-mono);
      font-size: 0.58rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--ink-faint);
      margin-bottom: 0.75rem;
    }

    .destination-title {
      font-size: clamp(1.95rem, 3.2vw, 2.5rem);
      font-weight: 300;
      color: var(--ink);
      line-height: 1.02;
      margin-bottom: 1rem;
      letter-spacing: -0.03em;
      max-width: 9ch;
    }

    .destination-desc {
      font-size: 0.94rem;
      color: var(--ink-mid);
      line-height: 1.8;
      margin-bottom: 1.7rem;
      font-weight: 300;
      max-width: 24ch;
    }

    .destination-meta {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      color: var(--ink-faint);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-top: auto;
    }

    .about-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .note {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--ink-faint);
      margin-top: 1rem;
    }

    .site-footer {
      display: grid;
      gap: 1.25rem;
      padding: 1.5rem 1.25rem;
      margin-top: 2rem;
    }

    .footer-title {
      display: flex;
      gap: 1rem;
      align-items: baseline;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .footer-title strong {
      font-size: 1.25rem;
      font-weight: 400;
    }

    .footer-title span,
    .footer-links a,
    .social-links a {
      font-family: var(--font-mono);
      font-size: 0.64rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-mid);
      text-decoration: none;
    }

    .footer-links,
    .social-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .footer-links a:hover,
    .social-links a:hover,
    .footer-links a:focus-visible,
    .social-links a:focus-visible {
      color: var(--ink);
      outline: none;
    }

    @media (max-width: 760px) {
      body { padding: 1rem; }

      .site-nav,
      .footer-title {
        align-items: flex-start;
      }

      .site-nav {
        flex-direction: column;
      }

      .nav-links {
        justify-content: flex-start;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .nav-links a { text-align: center; }

      .hero,
      .hero-actions {
        grid-template-columns: 1fr;
        flex-direction: column;
      }

      .button-link {
        width: 100%;
      }

      .hero::before {
        inset-inline-start: 1.5rem;
      }

      .destinations,
      .about-grid {
        grid-template-columns: 1fr;
      }

      .destination-card {
        min-height: 0;
      }

      .panel { padding: 1.5rem; }
    }
  </style>
</head>
<body class="${bodyClass}">
  <div class="shell">
    <header class="site-nav">
      <a class="site-brand" href="https://joefuqua.com">Joe Fuqua</a>
      <nav class="nav-links" aria-label="Primary">
        ${ecosystemLinks.map((link) => {
          const attrs = [
            `href="${link.href}"`,
            link.href.startsWith("https://") ? 'target="_blank" rel="noopener"' : "",
            link.key === activeKey ? 'aria-current="page"' : "",
            link.note ? `title="${link.note}"` : ""
          ].filter(Boolean).join(" ");

          return `<a ${attrs}>${link.label}</a>`;
        }).join("")}
      </nav>
    </header>

    <main>
      ${content}
    </main>

    <footer class="site-footer">
      <div class="footer-title">
        <strong>Joe Fuqua</strong>
        <span>Writing • Art • Essays on AI</span>
      </div>
      <div class="footer-links">
        <a href="https://joefuqua.com" target="_blank" rel="noopener">joefuqua.com</a>
        <a href="https://joefuqua.blog" target="_blank" rel="noopener">joefuqua.blog</a>
        <a href="https://joefuqua.art" target="_blank" rel="noopener">joefuqua.art</a>
      </div>
      <div class="social-links">
        ${socialLinks.map((link) => `<a href="${link.href}" target="_blank" rel="noopener">${link.label}</a>`).join("")}
      </div>
    </footer>
  </div>
</body>
</html>
`;

const homeContent = `
  <section class="panel hero">
    <div class="hero-copy">
      <p class="hero-kicker">Writing, art, and a long view of intelligent machines.</p>
      <h1>Joe Fuqua</h1>
      <p class="hero-statement">Writing, art, and a long view of intelligent machines.</p>
      <p class="hero-support lede">Writing about AI and governance. Unsettling art. Strange fiction. Three ways into the same obsession with intelligence, identity, and whatever begins to move inside the machine.</p>
      <div class="hero-actions">
        <a class="button-link primary" href="https://joefuqua.blog" target="_blank" rel="noopener">Explore the Writing</a>
        <a class="button-link secondary" href="https://joefuqua.art" target="_blank" rel="noopener">Explore the Art</a>
        <a class="hero-tertiary" href="https://contemplations.ai" target="_blank" rel="noopener">Enter the Fiction</a>
      </div>
    </div>
  </section>

  <section class="destinations" aria-label="Destinations">
    <a class="destination-card" href="https://joefuqua.blog" target="_blank" rel="noopener">
      <p class="card-label">Writing</p>
      <h2 class="destination-title">Algorithm &amp; Blues</h2>
      <p class="destination-desc">AI research translated into decisions executives can actually make.</p>
      <p class="destination-meta">Essays • Governance • Futures</p>
    </a>
    <a class="destination-card" href="https://joefuqua.art" target="_blank" rel="noopener">
      <p class="card-label">Art</p>
      <h2 class="destination-title">Nod to the Odd</h2>
      <p class="destination-desc">Horror, surrealism, and AI-assisted visual experiments.</p>
      <p class="destination-meta">Collections • Process • Exhibits</p>
    </a>
    <a class="destination-card" href="https://contemplations.ai" target="_blank" rel="noopener">
      <p class="card-label">Fiction</p>
      <h2 class="destination-title">The Unsigned Covenant</h2>
      <p class="destination-desc">A manuscript written from the perspective of an emerging AI consciousness.</p>
      <p class="destination-meta">Experimental literary fiction</p>
    </a>
  </section>
`;

const aboutContent = `
  <section class="panel">
    <p class="eyebrow">About</p>
    <h1>Still here. Still building. Still writing.</h1>
    <p class="lede">Joe Fuqua is a leader in intelligent automation architecture strategy and governance based in Charlotte, North Carolina. This site is the front door to the wider ecosystem: essays and newsletter work on joefuqua.blog, visual work on joefuqua.art, and selected experiments elsewhere.</p>
  </section>

  <section class="about-grid">
    <article class="panel">
      <h2>Work</h2>
      <p>Joe leads intelligent automation architecture strategy and governance at Truist Financial. The throughline is practical judgment: how systems get adopted, how institutions stay accountable, and how people make decisions when the machinery gets strange.</p>
    </article>
    <article class="panel">
      <h2>Practice</h2>
      <p>The writing ranges from essays on AI to the newsletter Algorithm &amp; Blues. The art ranges from watercolor to digital charcoal to synthetic horror. Different mediums, same preoccupation: what technology reveals about being human.</p>
    </article>
  </section>

  <section class="panel">
    <h2>Where to start</h2>
    <p>If you want the ideas, start with the writing. If you want the visual work, head to the art site. If you want the occasional newsletter, the current subscribe path lives on joefuqua.blog.</p>
    <div class="hero-actions">
      <a class="button-link primary" href="https://joefuqua.blog" target="_blank" rel="noopener">Go to Writing</a>
      <a class="button-link secondary" href="https://joefuqua.art" target="_blank" rel="noopener">Go to Art</a>
    </div>
    <p class="note">No separate newsletter route exists in this repo today; subscribe currently resolves to the writing site.</p>
  </section>
`;

export const pages = [
  {
    route: "index.html",
    title: "Joe Fuqua",
    description: "Joe Fuqua — Enterprise AI Governance, writer of Algorithm & Blues, artist, author of The Unsigned Covenant. Charlotte, NC.",
    canonical: "https://joefuqua.com",
    activeKey: "home",
    content: homeContent
  },
  {
    route: "about/index.html",
    title: "About | Joe Fuqua",
    description: "About Joe Fuqua — enterprise AI governance, writing, art, and the ecosystem behind joefuqua.com.",
    canonical: "https://joefuqua.com/about",
    activeKey: "about",
    content: aboutContent
  }
].map((page) => ({
  ...page,
  html: pageShell(page)
}));

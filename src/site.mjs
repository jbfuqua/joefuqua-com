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

    .intro {
      margin-bottom: 1rem;
    }

    .eyebrow {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--ink-faint);
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

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .hero-actions .button-link {
      flex: 0 1 12rem;
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

    .hub-links {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .hub-link {
      display: block;
      text-decoration: none;
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 1.4rem 1.35rem;
      background: rgba(19, 23, 31, 0.55);
      transition: background 0.2s, border-color 0.2s;
    }

    .hub-link:hover,
    .hub-link:focus-visible {
      background: var(--surface-hover);
      border-color: var(--border-hover);
      outline: none;
    }

    .hub-link .card-label {
      margin-bottom: 0.55rem;
    }

    .hub-link-title {
      display: block;
      font-size: clamp(1.4rem, 3vw, 1.9rem);
      color: var(--ink);
      margin-bottom: 0.45rem;
    }

    .hub-link-copy {
      font-size: 0.92rem;
      line-height: 1.7;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      border: 1px solid var(--border);
      border-radius: 4px;
      overflow: hidden;
    }

    .card {
      display: block;
      text-decoration: none;
      padding: 1.75rem 1.5rem;
      background: var(--surface);
      border-right: 1px solid var(--border);
      transition: background 0.25s;
      position: relative;
    }

    .card:last-child { border-right: none; }
    .card:hover { background: var(--surface-hover); }

    .card-label {
      font-family: var(--font-mono);
      font-size: 0.58rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--ink-faint);
      margin-bottom: 0.75rem;
    }

    .card-url {
      font-size: 1rem;
      font-weight: 400;
      color: var(--ink);
      margin-bottom: 0.6rem;
      letter-spacing: -0.01em;
    }

    .card-url span { color: var(--ember); }

    .card-desc {
      font-size: 0.82rem;
      color: var(--ink-mid);
      line-height: 1.7;
      margin-bottom: 1.25rem;
      font-weight: 300;
    }

    .card-meta {
      font-family: var(--font-mono);
      font-size: 0.58rem;
      color: var(--ink-faint);
      letter-spacing: 0.08em;
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

      .hero-actions {
        flex-direction: column;
      }

      .hero-actions .button-link {
        width: 100%;
      }

      .cards,
      .about-grid,
      .hub-links {
        grid-template-columns: 1fr;
      }

      .card {
        border-right: none;
        border-bottom: 1px solid var(--border);
      }

      .card:last-child { border-bottom: none; }

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
  <section class="panel intro">
    <p class="eyebrow">Charlotte, NC · Est. 1988</p>
    <h1>Joe Fuqua</h1>
    <p class="lede">Forty years watching humans panic about intelligent machines. Head of Enterprise AI Governance at Truist Financial. Writer. Artist. Still at it.</p>
    <div class="hero-actions">
      <a class="button-link primary" href="https://joefuqua.blog" target="_blank" rel="noopener">Visit Writing</a>
      <a class="button-link secondary" href="https://joefuqua.art" target="_blank" rel="noopener">Visit Art</a>
    </div>
  </section>

  <section class="hub-links" aria-label="Primary destinations">
    <a class="hub-link" href="https://joefuqua.blog" target="_blank" rel="noopener">
      <p class="card-label">Writing</p>
      <span class="hub-link-title">joefuqua.blog</span>
      <p class="hub-link-copy">Essays, Algorithm &amp; Blues, and practical writing about AI for people who still have to make decisions.</p>
    </a>
    <a class="hub-link" href="https://joefuqua.art" target="_blank" rel="noopener">
      <p class="card-label">Art</p>
      <span class="hub-link-title">joefuqua.art</span>
      <p class="hub-link-copy">Watercolor, digital charcoal, and synthetic horror. Visual work made by hand, by algorithm, and between the two.</p>
    </a>
  </section>

  <section class="cards" aria-label="Ecosystem destinations">
    <a class="card" href="https://joefuqua.blog" target="_blank" rel="noopener">
      <p class="card-label">Writing</p>
      <p class="card-url">joefuqua<span>.blog</span></p>
      <p class="card-desc">Algorithm &amp; Blues, essays, and AI research translated into decisions executives can actually make.</p>
      <p class="card-meta">Essays · Newsletter · Analysis</p>
    </a>
    <a class="card" href="https://joefuqua.art" target="_blank" rel="noopener">
      <p class="card-label">Art</p>
      <p class="card-url">joefuqua<span>.art</span></p>
      <p class="card-desc">Watercolor, digital charcoal, and AI-generated horror made by hand, by algorithm, and whatever lives between.</p>
      <p class="card-meta">Collections · Process · Exhibits</p>
    </a>
    <a class="card" href="https://contemplations.ai" target="_blank" rel="noopener">
      <p class="card-label">Fiction</p>
      <p class="card-url">contemplations<span>.ai</span></p>
      <p class="card-desc">The Unsigned Covenant, an experimental manuscript written from the perspective of an emerging AI consciousness.</p>
      <p class="card-meta">Experimental literary fiction</p>
    </a>
  </section>
`;

const aboutContent = `
  <section class="panel">
    <p class="eyebrow">About</p>
    <h1>Writing, art, and a long view of intelligent machines.</h1>
    <p class="lede">Joe Fuqua is an enterprise AI governance leader based in Charlotte, North Carolina. This site is the front door to the wider ecosystem: essays and newsletter work on joefuqua.blog, visual work on joefuqua.art, and selected experiments elsewhere.</p>
  </section>

  <section class="about-grid">
    <article class="panel">
      <h2>Work</h2>
      <p>By day, Joe leads enterprise AI governance at Truist Financial. The throughline is practical judgment: how systems get adopted, how institutions stay accountable, and how people make decisions when the machinery gets strange.</p>
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

const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

/**
 * InternSafar Investor Pitch Deck — versioned builds
 * v06: validation (not vanity traction), bottom-up ₹ market,
 * venture-scale path, UGC why-now, AI, GTM wedge, team honesty
 */

const C = {
  cyan: "30C0D4",
  cyanSoft: "E8F8FA",
  red: "E73847",
  charcoal: "2F2F2F",
  dark: "1A1A1A",
  gray: "6E6E6E",
  grayMid: "3D3D3D",
  fog: "F4F6F7",
  white: "FFFFFF",
  panel: "151515",
  muted: "A8A8A8",
};

const DECK_DIR =
  "C:/Users/sandeep/Downloads/Claudes/investment/docs/Pitch Deck";
const SHOTS = path.join(DECK_DIR, "SS_IS");
const LOGO = path.join(DECK_DIR, "internsafar.png");
const LOGO_RATIO = 1536 / 1024;
const TOTAL = 14;

function shot(name) {
  return path.join(SHOTS, name);
}

function nextVersionPath() {
  const files = fs.readdirSync(DECK_DIR);
  let max = 0;
  for (const f of files) {
    const m = f.match(/^InternSafar Investor Pitch Deck v(\d+)\.pptx$/i);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  const ver = max + 1;
  const name = `InternSafar Investor Pitch Deck v${String(ver).padStart(2, "0")}.pptx`;
  return { ver, out: path.join(DECK_DIR, name), name };
}

function placeLogo(slide, pres, x, y, w, opts = {}) {
  const h = w / LOGO_RATIO;
  const padX = opts.padX != null ? opts.padX : 0.12;
  const padY = opts.padY != null ? opts.padY : 0.1;
  if (opts.plate !== false) {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x - padX,
      y: y - padY,
      w: w + padX * 2,
      h: h + padY * 2,
      fill: { color: opts.plateColor || "FFFFFF" },
      rectRadius: 0.08,
    });
  }
  slide.addImage({ path: LOGO, x, y, w, h });
  return h;
}

async function main() {
  const { ver, out, name } = nextVersionPath();
  const pres = new pptxgen();
  pres.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
  pres.layout = "WIDE";
  pres.author = "Sandeep Jain";
  pres.title = `InternSafar Investor Pitch Deck v${String(ver).padStart(2, "0")}`;
  pres.subject = "Pre-Seed — Internship-to-Career Marketplace";

  const footer = (slide, n) => {
    slide.addText("INTERNSAFAR", {
      x: 0.55,
      y: 7.1,
      w: 3.2,
      h: 0.24,
      fontFace: "Arial",
      fontSize: 10,
      bold: true,
      color: C.cyan,
      margin: 0,
      charSpacing: 2,
    });
    slide.addText(
      `${String(n).padStart(2, "0")}  /  ${String(TOTAL).padStart(2, "0")}`,
      {
        x: 11.0,
        y: 7.1,
        w: 1.8,
        h: 0.24,
        fontFace: "Arial",
        fontSize: 10,
        color: C.gray,
        align: "right",
        margin: 0,
      }
    );
  };

  const sectionLabel = (slide, text) => {
    slide.addText(text.toUpperCase(), {
      x: 0.55,
      y: 0.32,
      w: 11,
      h: 0.26,
      fontFace: "Arial",
      fontSize: 11,
      bold: true,
      color: C.cyan,
      margin: 0,
      charSpacing: 3,
    });
  };

  const pageTitle = (slide, text, h = 0.5) => {
    slide.addText(text, {
      x: 0.55,
      y: 0.58,
      w: 12.2,
      h,
      fontFace: "Arial",
      fontSize: 26,
      bold: true,
      color: C.charcoal,
      margin: 0,
    });
  };

  const whiteSlide = () => {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0,
      y: 0,
      w: 13.333,
      h: 7.5,
      fill: { color: C.white },
    });
    return s;
  };

  // ========== 01 COVER ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0,
      y: 0,
      w: 13.333,
      h: 7.5,
      fill: { color: C.dark },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0,
      y: 0,
      w: 0.12,
      h: 7.5,
      fill: { color: C.cyan },
    });

    const logoH = placeLogo(s, pres, 0.7, 0.85, 2.35);
    s.addText("PRE-SEED  ·  INVESTOR DECK", {
      x: 0.7,
      y: 0.85 + logoH + 0.35,
      w: 11,
      h: 0.28,
      fontFace: "Arial",
      fontSize: 12,
      bold: true,
      color: C.cyan,
      margin: 0,
      charSpacing: 3,
    });
    s.addText("InternSafar", {
      x: 0.7,
      y: 0.85 + logoH + 0.7,
      w: 11,
      h: 0.65,
      fontFace: "Arial",
      fontSize: 44,
      bold: true,
      color: C.white,
      margin: 0,
    });
    s.addText("Internship hiring is a workflow problem — not a listings problem.", {
      x: 0.7,
      y: 0.85 + logoH + 1.4,
      w: 11.5,
      h: 0.45,
      fontFace: "Arial",
      fontSize: 18,
      bold: true,
      color: "E8E8E8",
      margin: 0,
    });
    s.addText(
      "InternSafar is building the hiring infrastructure for India's internship-to-career journey.",
      {
        x: 0.7,
        y: 0.85 + logoH + 1.95,
        w: 11,
        h: 0.45,
        fontFace: "Arial",
        fontSize: 15,
        color: "B8B8B8",
        margin: 0,
      }
    );
    s.addText("Your Journey. Real Opportunities.", {
      x: 0.7,
      y: 5.55,
      w: 8,
      h: 0.3,
      fontFace: "Arial",
      fontSize: 13,
      italic: true,
      color: C.muted,
      margin: 0,
    });
    s.addText("Founder: Sandeep Jain  ·  internsafar.com", {
      x: 0.7,
      y: 6.15,
      w: 10,
      h: 0.3,
      fontFace: "Arial",
      fontSize: 14,
      color: "D0D0D0",
      margin: 0,
    });
  }

  // ========== 02 PROBLEM ==========
  {
    const s = whiteSlide();
    footer(s, 2);
    sectionLabel(s, "The Problem");
    pageTitle(s, "Internship hiring is still broken");
    s.addText(
      "Internship hiring is fragmented, inefficient and low-trust — a workflow gap Internshala-style listings never closed.",
      {
        x: 0.55,
        y: 1.15,
        w: 12.2,
        h: 0.35,
        fontFace: "Arial",
        fontSize: 14,
        italic: true,
        color: C.grayMid,
        margin: 0,
      }
    );

    const problems = [
      {
        t: "Opportunities are fragmented",
        d: "Students search across LinkedIn, WhatsApp, college groups and forms, with no single place to discover and manage internships.",
      },
      {
        t: "Hiring is fragmented",
        d: "Employers post, screen, message and make offers across disconnected tools, creating repetitive manual work.",
      },
      {
        t: "Trust is weak",
        d: "Fake postings, unclear stipends and unverified recruiters create friction for both candidates and employers.",
      },
      {
        t: "The hiring journey is disconnected",
        d: "Discovery, application, communication and offers rarely happen in one system — while referrals and reputation don't compound.",
      },
    ];

    problems.forEach((p, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 0.55 + col * 6.25;
      const y = 1.7 + row * 2.35;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y,
        w: 5.95,
        h: 2.15,
        fill: { color: C.fog },
        rectRadius: 0.06,
      });
      s.addText(String(i + 1).padStart(2, "0"), {
        x: x + 0.35,
        y: y + 0.3,
        w: 1.0,
        h: 0.3,
        fontFace: "Arial",
        fontSize: 14,
        bold: true,
        color: C.cyan,
        margin: 0,
      });
      s.addText(p.t, {
        x: x + 0.35,
        y: y + 0.7,
        w: 5.25,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 17,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
      s.addText(p.d, {
        x: x + 0.35,
        y: y + 1.2,
        w: 5.25,
        h: 0.7,
        fontFace: "Arial",
        fontSize: 13,
        color: C.grayMid,
        margin: 0,
      });
    });
  }

  // ========== 03 WHY NOW ==========
  {
    const s = whiteSlide();
    footer(s, 3);
    sectionLabel(s, "Why Now");
    pageTitle(s, "Policy force + AI screening = verification wins");

    const items = [
      {
        t: "UGC made internships mandatory",
        d: "UGC guidelines (2023/24): 60–120 hour credit-bearing internships after semester 4 for UG degrees. Demand for structured, verifiable internship workflows is no longer optional.",
      },
      {
        t: "AI made screening cheap — trust is scarce",
        d: "Matching and résumé screening are commoditizing. The scarce asset is verified employers, clear stipends, and an auditable apply → offer loop.",
      },
      {
        t: "Listings markets hit a ceiling",
        d: "Internshala’s ₹44.1 Cr FY25 revenue proves willingness to pay — and also that pure listings leave room for a workflow-first product with higher take-rate upside.",
      },
    ];
    items.forEach((it, i) => {
      const y = 1.35 + i * 1.75;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.55,
        y,
        w: 12.2,
        h: 1.55,
        fill: { color: C.fog },
        rectRadius: 0.06,
      });
      s.addText(String(i + 1).padStart(2, "0"), {
        x: 0.85,
        y: y + 0.35,
        w: 0.8,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 18,
        bold: true,
        color: C.cyan,
        margin: 0,
      });
      s.addText(it.t, {
        x: 1.8,
        y: y + 0.25,
        w: 10.5,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 17,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
      s.addText(it.d, {
        x: 1.8,
        y: y + 0.75,
        w: 10.5,
        h: 0.6,
        fontFace: "Arial",
        fontSize: 13,
        color: C.grayMid,
        margin: 0,
      });
    });
  }

  // ========== 04 MARKET (bottom-up ₹) ==========
  {
    const s = whiteSlide();
    footer(s, 4);
    sectionLabel(s, "Market Opportunity");
    pageTitle(s, "Bottom-up: a ₹1,000 Cr+ workflow opportunity");

    // Bottom-up math strip
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.55,
      y: 1.25,
      w: 12.2,
      h: 1.55,
      fill: { color: C.dark },
      rectRadius: 0.06,
    });
    s.addText(
      "50,000 digital-first internship employers  ×  ₹25,000 avg annual hiring spend  =  ₹1,250 Cr SAM",
      {
        x: 0.85,
        y: 1.55,
        w: 11.6,
        h: 0.45,
        fontFace: "Arial",
        fontSize: 16,
        bold: true,
        color: C.white,
        margin: 0,
      }
    );
    s.addText(
      "Conservative beachhead. Expandable via success fees, assessments, PPO conversion tools and stipend rails — not listings alone.",
      {
        x: 0.85,
        y: 2.15,
        w: 11.6,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 13,
        color: "D0D0D0",
        margin: 0,
      }
    );

    const cols = [
      {
        k: "Category proof",
        d: "Internshala ₹44.1 Cr FY25 shows employers already pay for internship distribution. That is the floor for listings — not the ceiling for workflow.",
      },
      {
        k: "Where value expands",
        d: "Hiring workflow · AI screening · verified stipend · PPO conversion · campus/enterprise packs · outcome-based fees.",
      },
      {
        k: "Path to ₹100 Cr+",
        d: "10,000 paying employers × ₹50k blended ARPU (credits + success + tools) ≈ ₹50 Cr. 20,000 × ₹50k ≈ ₹100 Cr.",
      },
    ];
    cols.forEach((c, i) => {
      const x = 0.55 + i * 4.15;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y: 3.1,
        w: 3.95,
        h: 3.3,
        fill: { color: C.fog },
        rectRadius: 0.06,
      });
      s.addText(c.k, {
        x: x + 0.25,
        y: 3.4,
        w: 3.45,
        h: 0.5,
        fontFace: "Arial",
        fontSize: 16,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
      s.addText(c.d, {
        x: x + 0.25,
        y: 4.1,
        w: 3.45,
        h: 2.0,
        fontFace: "Arial",
        fontSize: 13,
        color: C.grayMid,
        margin: 0,
      });
    });
  }

  // ========== 05 SOLUTION ==========
  {
    const s = whiteSlide();
    footer(s, 5);
    sectionLabel(s, "The Solution");
    pageTitle(s, "Infrastructure for the internship-to-career journey");

    const roles = [
      {
        kicker: "Discover → Apply → Get Hired",
        t: "Candidates",
        d: "Profile, match-scored discovery, apply, message, offers — one journey.",
        c: C.cyan,
      },
      {
        kicker: "Post → Screen → Hire",
        t: "Employers",
        d: "Verified onboarding, postings, applicant pipeline, messaging and offers.",
        c: C.red,
      },
      {
        kicker: "Match · Verify · Compound",
        t: "Platform",
        d: "AI-assisted matching, trust checks, referrals and reputation that compound.",
        c: "6B5B95",
      },
    ];
    roles.forEach((r, i) => {
      const x = 0.55 + i * 4.15;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y: 1.35,
        w: 3.95,
        h: 5.1,
        fill: { color: C.fog },
        rectRadius: 0.06,
      });
      s.addShape(pres.shapes.OVAL, {
        x: x + 1.5,
        y: 1.75,
        w: 0.95,
        h: 0.95,
        fill: { color: r.c },
      });
      s.addText(String(i + 1), {
        x: x + 1.5,
        y: 1.92,
        w: 0.95,
        h: 0.6,
        fontFace: "Arial",
        fontSize: 22,
        bold: true,
        color: C.white,
        align: "center",
        margin: 0,
      });
      s.addText(r.t, {
        x: x + 0.25,
        y: 2.95,
        w: 3.45,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 20,
        bold: true,
        color: C.charcoal,
        align: "center",
        margin: 0,
      });
      s.addText(r.kicker, {
        x: x + 0.25,
        y: 3.45,
        w: 3.45,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 12,
        bold: true,
        color: r.c,
        align: "center",
        margin: 0,
      });
      s.addText(r.d, {
        x: x + 0.3,
        y: 4.1,
        w: 3.35,
        h: 1.6,
        fontFace: "Arial",
        fontSize: 14,
        color: C.grayMid,
        align: "center",
        margin: 0,
      });
    });
  }

  // ========== 06 PRODUCT ==========
  {
    const s = whiteSlide();
    footer(s, 6);
    sectionLabel(s, "Product");
    pageTitle(s, "One workflow — with matching & trust built in");

    const cols = [
      {
        h: "For candidates",
        items: [
          "Verified professional profile",
          "Match-scored internship discovery",
          "Apply, message, track offers",
          "Refer & earn growth loop",
        ],
      },
      {
        h: "For employers",
        items: [
          "Verified onboarding & docs",
          "Post + applicant pipeline",
          "Invite, message, issue offers",
          "Analytics on hiring funnel",
        ],
      },
      {
        h: "Intelligence & trust",
        items: [
          "AI-assisted matching scores",
          "Employer verification gates",
          "Posting guidelines & checks",
          "Mutual ratings after offers",
        ],
      },
    ];
    cols.forEach((col, i) => {
      const x = 0.55 + i * 4.15;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y: 1.35,
        w: 3.95,
        h: 5.15,
        fill: { color: C.fog },
        rectRadius: 0.06,
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x,
        y: 1.35,
        w: 3.95,
        h: 0.7,
        fill: { color: C.dark },
      });
      s.addText(col.h, {
        x: x + 0.25,
        y: 1.5,
        w: 3.45,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 16,
        bold: true,
        color: C.white,
        margin: 0,
      });
      col.items.forEach((item, j) => {
        const y = 2.4 + j * 0.85;
        s.addShape(pres.shapes.OVAL, {
          x: x + 0.3,
          y: y + 0.08,
          w: 0.16,
          h: 0.16,
          fill: { color: C.cyan },
        });
        s.addText(item, {
          x: x + 0.6,
          y,
          w: 3.1,
          h: 0.7,
          fontFace: "Arial",
          fontSize: 14,
          color: C.charcoal,
          margin: 0,
        });
      });
    });
  }

  // ========== 07 SCREENSHOTS ==========
  {
    const s = whiteSlide();
    footer(s, 7);
    sectionLabel(s, "The Product");
    pageTitle(s, "Live product — discovery to offer in one workflow");

    const shots = [
      {
        img: shot("Screenshot 2026-09-14 165007.png"),
        n: "01",
        t: "Candidate Home",
        sub: "Dashboard and next actions",
      },
      {
        img: shot("Screenshot 2026-09-14 165200.png"),
        n: "02",
        t: "Internship Marketplace",
        sub: "Match-scored discovery & apply",
      },
      {
        img: shot("Screenshot 2026-09-14 165250.png"),
        n: "03",
        t: "Application Tracking",
        sub: "Applied → interview → offer",
      },
      {
        img: shot("Screenshot 2026-09-14 165318.png"),
        n: "04",
        t: "Refer & Earn",
        sub: "Liquidity loop via referrals",
      },
    ];
    shots.forEach((sh, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 0.55 + col * 6.3;
      const y = 1.25 + row * 2.75;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y,
        w: 6.05,
        h: 2.55,
        fill: { color: C.fog },
        rectRadius: 0.05,
      });
      s.addImage({
        path: sh.img,
        x: x + 0.15,
        y: y + 0.15,
        w: 5.75,
        h: 1.7,
      });
      s.addText(`${sh.n}  ${sh.t}`, {
        x: x + 0.2,
        y: y + 1.95,
        w: 5.65,
        h: 0.28,
        fontFace: "Arial",
        fontSize: 13,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
      s.addText(sh.sub, {
        x: x + 0.2,
        y: y + 2.22,
        w: 5.65,
        h: 0.22,
        fontFace: "Arial",
        fontSize: 11,
        color: C.grayMid,
        margin: 0,
      });
    });
  }

  // ========== 08 DIFFERENTIATION ==========
  {
    const s = whiteSlide();
    footer(s, 8);
    sectionLabel(s, "Differentiation");
    pageTitle(s, "Listings platforms distribute. InternSafar runs the hire.");

    const rows = [
      {
        who: "Internshala",
        gap: "Listings + training at scale; thin hire loop",
        us: "Apply → message → offer workflow + trust layer",
      },
      {
        who: "LinkedIn",
        gap: "General network; weak internship ops",
        us: "Internship-first UX with tracking & offers",
      },
      {
        who: "Naukri / Unstop",
        gap: "Jobs, contests, campus funnels",
        us: "End-to-end internship hiring system",
      },
      {
        who: "WhatsApp / forms",
        gap: "Scattered, no audit, no reputation",
        us: "Verified marketplace + referrals",
      },
    ];

    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.55,
      y: 1.35,
      w: 2.4,
      h: 0.5,
      fill: { color: C.dark },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 2.95,
      y: 1.35,
      w: 4.7,
      h: 0.5,
      fill: { color: "FDECEC" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 7.65,
      y: 1.35,
      w: 5.1,
      h: 0.5,
      fill: { color: C.cyanSoft },
    });
    s.addText("Competitor", {
      x: 0.7,
      y: 1.45,
      w: 2.1,
      h: 0.3,
      fontFace: "Arial",
      fontSize: 12,
      bold: true,
      color: C.white,
      margin: 0,
    });
    s.addText("Where they sit", {
      x: 3.1,
      y: 1.45,
      w: 4.4,
      h: 0.3,
      fontFace: "Arial",
      fontSize: 12,
      bold: true,
      color: C.red,
      margin: 0,
    });
    s.addText("InternSafar edge", {
      x: 7.8,
      y: 1.45,
      w: 4.8,
      h: 0.3,
      fontFace: "Arial",
      fontSize: 12,
      bold: true,
      color: C.charcoal,
      margin: 0,
    });

    rows.forEach((r, i) => {
      const y = 2.0 + i * 1.1;
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.55,
        y,
        w: 2.4,
        h: 0.95,
        fill: { color: C.fog },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 2.95,
        y,
        w: 4.7,
        h: 0.95,
        fill: { color: C.fog },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 7.65,
        y,
        w: 5.1,
        h: 0.95,
        fill: { color: C.fog },
      });
      s.addText(r.who, {
        x: 0.7,
        y: y + 0.3,
        w: 2.1,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 13,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
      s.addText(r.gap, {
        x: 3.1,
        y: y + 0.25,
        w: 4.4,
        h: 0.5,
        fontFace: "Arial",
        fontSize: 13,
        color: C.grayMid,
        margin: 0,
      });
      s.addText(r.us, {
        x: 7.8,
        y: y + 0.25,
        w: 4.8,
        h: 0.5,
        fontFace: "Arial",
        fontSize: 13,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
    });
  }

  // ========== 09 BUSINESS + PATH TO ₹100 Cr ==========
  {
    const s = whiteSlide();
    footer(s, 9);
    sectionLabel(s, "Business Model");
    pageTitle(s, "Candidates free. Employers pay. Expand the take rate.");

    const streams = [
      { t: "Credits (now)", d: "Per-post / per-action packs — same purchase habit as Internshala postings, but for a full hire loop" },
      { t: "Subscriptions", d: "Search, pipeline tools, priority visibility — convert power users from credits" },
      { t: "Success fees", d: "Outcome take on filled roles / PPO conversions as liquidity improves" },
      { t: "Trust & tools", d: "Verification, assessments, stipend rails, campus/enterprise packs" },
    ];
    streams.forEach((st, i) => {
      const x = 0.55 + (i % 4) * 3.15;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y: 1.25,
        w: 3.0,
        h: 2.35,
        fill: { color: C.fog },
        rectRadius: 0.05,
      });
      s.addText(st.t, {
        x: x + 0.18,
        y: 1.45,
        w: 2.65,
        h: 0.5,
        fontFace: "Arial",
        fontSize: 14,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
      s.addText(st.d, {
        x: x + 0.18,
        y: 2.1,
        w: 2.65,
        h: 1.25,
        fontFace: "Arial",
        fontSize: 12,
        color: C.grayMid,
        margin: 0,
      });
    });

    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.55,
      y: 3.85,
      w: 12.2,
      h: 2.55,
      fill: { color: C.dark },
      rectRadius: 0.06,
    });
    s.addText("HOW THIS BECOMES A ₹100 Cr+ BUSINESS", {
      x: 0.85,
      y: 4.1,
      w: 11.6,
      h: 0.35,
      fontFace: "Arial",
      fontSize: 13,
      bold: true,
      color: C.cyan,
      margin: 0,
      charSpacing: 1,
    });
    s.addText(
      "Year 1–2: prove fill rates with credits (₹15–40k ARPU anchors vs Internshala-style posting fees).\nYear 3–4: 10k+ paying employers × ₹50k blended ARPU (credits + subscription + success) ≈ ₹50 Cr.\nYear 5+: 20k employers + enterprise / stipend / assessment layers → ₹100 Cr+ revenue path.",
      {
        x: 0.85,
        y: 4.6,
        w: 11.6,
        h: 1.5,
        fontFace: "Arial",
        fontSize: 14,
        color: "E8E8E8",
        margin: 0,
      }
    );
  }

  // ========== 10 VALIDATION (not vanity traction) ==========
  {
    const s = whiteSlide();
    footer(s, 10);
    sectionLabel(s, "Early Validation");
    pageTitle(s, "Pilot-scale data. Learning the liquidity problem.");

    s.addText(
      "These are validation signals — not momentum metrics. Pre-seed honesty over vanity.",
      {
        x: 0.55,
        y: 1.15,
        w: 12.2,
        h: 0.3,
        fontFace: "Arial",
        fontSize: 13,
        italic: true,
        color: C.grayMid,
        margin: 0,
      }
    );

    const kpis = [
      { n: "35", l: "Employers", s: "Supply side seeding" },
      { n: "57", l: "Live postings", s: "of 90 total listed" },
      { n: "48", l: "Candidates", s: "Demand side lagging" },
      { n: "248", l: "Applications", s: "~4.4 apps / live posting*" },
    ];
    kpis.forEach((k, i) => {
      const x = 0.55 + i * 3.15;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y: 1.55,
        w: 3.0,
        h: 1.95,
        fill: { color: i === 2 ? "FDECEC" : C.fog },
        rectRadius: 0.05,
      });
      s.addText(k.n, {
        x: x + 0.2,
        y: 1.75,
        w: 2.6,
        h: 0.55,
        fontFace: "Arial",
        fontSize: 28,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
      s.addText(k.l, {
        x: x + 0.2,
        y: 2.4,
        w: 2.6,
        h: 0.35,
        fontFace: "Arial",
        fontSize: 14,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
      s.addText(k.s, {
        x: x + 0.2,
        y: 2.85,
        w: 2.6,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 12,
        color: C.grayMid,
        margin: 0,
      });
    });

    s.addText(
      "*Application density is early; the metrics that matter next are fill rate, median days-to-offer, and repeat employer rate — now being instrumented.",
      {
        x: 0.55,
        y: 3.65,
        w: 12.2,
        h: 0.35,
        fontFace: "Arial",
        fontSize: 12,
        color: C.gray,
        margin: 0,
      }
    );

    // Learnings
    const learns = [
      {
        t: "Employer supply outruns candidates",
        d: "90 postings vs 48 candidates — GTM must seed candidate liquidity in parallel, not employers-only.",
      },
      {
        t: "Offer acceptance is too thin to brag about",
        d: "Early offer volume is small-N / sandbox-skewed. We will not sell acceptance rate until stipend fit and posting quality are proven.",
      },
      {
        t: "What would persuade us (and you)",
        d: "Target: ≥50% of live postings filled within 14 days · rising repeat employers · credits converting to paid plans.",
      },
    ];
    learns.forEach((L, i) => {
      const x = 0.55 + i * 4.15;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x,
        y: 4.15,
        w: 3.95,
        h: 2.3,
        fill: { color: C.fog },
        rectRadius: 0.05,
      });
      s.addText(L.t, {
        x: x + 0.2,
        y: 4.4,
        w: 3.55,
        h: 0.55,
        fontFace: "Arial",
        fontSize: 13,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
      s.addText(L.d, {
        x: x + 0.2,
        y: 5.1,
        w: 3.55,
        h: 1.15,
        fontFace: "Arial",
        fontSize: 12,
        color: C.grayMid,
        margin: 0,
      });
    });
  }

  // ========== 11 GTM ==========
  {
    const s = whiteSlide();
    footer(s, 11);
    sectionLabel(s, "Go-To-Market");
    pageTitle(s, "Wedge: verified hiring where listings are weakest");

    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.55,
      y: 1.25,
      w: 12.2,
      h: 1.35,
      fill: { color: C.cyanSoft },
      rectRadius: 0.06,
    });
    s.addText(
      "Beachhead: startups & SMEs hiring interns from tier-2/3 talent pools — plus verified-stipend employers Internshala under-serves on workflow trust.",
      {
        x: 0.85,
        y: 1.55,
        w: 11.6,
        h: 0.8,
        fontFace: "Arial",
        fontSize: 15,
        bold: true,
        color: C.charcoal,
        margin: 0,
      }
    );

    const steps = [
      {
        n: "01",
        t: "Seed both sides in one city/category",
        d: "Fix the 57 postings / 48 candidates imbalance — employer cohorts only when candidate supply can fill them.",
      },
      {
        n: "02",
        t: "Win on fill rate, not listing volume",
        d: "Sell time-to-shortlist and verified applicants; instrument days-to-offer as the GTM proof.",
      },
      {
        n: "03",
        t: "Convert usage → credits → subscription",
        d: "Active posters buy packs first; power users graduate to plans with search + priority.",
      },
      {
        n: "04",
        t: "Expand via referrals & repeat employers",
        d: "Candidate refer loops + employer invites compound cheaper than paid acquisition.",
      },
    ];
    steps.forEach((st, i) => {
      const y = 2.9 + i * 0.95;
      s.addText(st.n, {
        x: 0.55,
        y: y,
        w: 0.7,
        h: 0.35,
        fontFace: "Arial",
        fontSize: 15,
        bold: true,
        color: C.cyan,
        margin: 0,
      });
      s.addText(st.t, {
        x: 1.4,
        y: y,
        w: 11,
        h: 0.35,
        fontFace: "Arial",
        fontSize: 15,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
      s.addText(st.d, {
        x: 1.4,
        y: y + 0.35,
        w: 11,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 13,
        color: C.grayMid,
        margin: 0,
      });
    });
  }

  // ========== 12 ASK ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0,
      y: 0,
      w: 13.333,
      h: 7.5,
      fill: { color: C.dark },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0,
      y: 0,
      w: 0.12,
      h: 7.5,
      fill: { color: C.cyan },
    });

    s.addText("THE ASK", {
      x: 0.7,
      y: 0.35,
      w: 12,
      h: 0.28,
      fontFace: "Arial",
      fontSize: 12,
      bold: true,
      color: C.cyan,
      margin: 0,
      charSpacing: 3,
    });
    s.addText("Raising ₹50 Lakh Pre-Seed", {
      x: 0.7,
      y: 0.7,
      w: 12,
      h: 0.45,
      fontFace: "Arial",
      fontSize: 28,
      bold: true,
      color: C.white,
      margin: 0,
    });
    s.addText(
      "≈ 12–18 months runway  ·  Buys liquidity proof — not vanity growth",
      {
        x: 0.7,
        y: 1.2,
        w: 12,
        h: 0.3,
        fontFace: "Arial",
        fontSize: 14,
        color: "D0D0D0",
        margin: 0,
      }
    );

    const uses = [
      { pct: "40%", t: "Product & Eng", d: "Matching, fill-rate tooling, monetization" },
      { pct: "30%", t: "Growth", d: "Candidate + employer beachhead" },
      { pct: "20%", t: "Ops / early hires", d: "Success + part-time eng capacity" },
      { pct: "10%", t: "Infra", d: "Hosting, security, tools" },
    ];
    uses.forEach((u, i) => {
      const x = 0.7 + i * 3.05;
      s.addShape(pres.shapes.RECTANGLE, {
        x,
        y: 1.7,
        w: 2.9,
        h: 1.7,
        fill: { color: C.panel },
      });
      s.addText(u.pct, {
        x: x + 0.15,
        y: 1.9,
        w: 2.6,
        h: 0.35,
        fontFace: "Arial",
        fontSize: 20,
        bold: true,
        color: C.cyan,
        margin: 0,
      });
      s.addText(u.t, {
        x: x + 0.15,
        y: 2.35,
        w: 2.6,
        h: 0.35,
        fontFace: "Arial",
        fontSize: 13,
        bold: true,
        color: C.white,
        margin: 0,
      });
      s.addText(u.d, {
        x: x + 0.15,
        y: 2.8,
        w: 2.6,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 12,
        color: "D0D0D0",
        margin: 0,
      });
    });

    s.addText("WHAT ₹50L UNLOCKS (PRE-SEED GATES)", {
      x: 0.7,
      y: 3.65,
      w: 12,
      h: 0.3,
      fontFace: "Arial",
      fontSize: 12,
      bold: true,
      color: C.cyan,
      margin: 0,
      charSpacing: 1,
    });
    const gates = [
      "≥50% live postings filled in ≤14 days",
      "Repeat employers month-over-month",
      "Paid credits converting to plans",
      "Clear CAC payback by channel",
    ];
    gates.forEach((g, i) => {
      const x = 0.7 + (i % 2) * 6.1;
      const y = 4.1 + Math.floor(i / 2) * 0.55;
      s.addText("→  " + g, {
        x,
        y,
        w: 5.9,
        h: 0.45,
        fontFace: "Arial",
        fontSize: 14,
        color: "E8E8E8",
        margin: 0,
      });
    });

    s.addText(
      "Next round (Seed): raise on liquidity + revenue proof — target ≥₹1 Cr ARR trajectory and technical co-founder / eng lead in place.",
      {
        x: 0.7,
        y: 5.45,
        w: 12,
        h: 0.55,
        fontFace: "Arial",
        fontSize: 14,
        color: "D0D0D0",
        margin: 0,
      }
    );
    s.addText(
      "₹50L is a validation raise toward a ₹100 Cr workflow business — not a path that tops out at ₹5–10L ARR.",
      {
        x: 0.7,
        y: 6.15,
        w: 12,
        h: 0.4,
        fontFace: "Arial",
        fontSize: 13,
        bold: true,
        color: C.cyan,
        margin: 0,
      }
    );
  }

  // ========== 13 TEAM ==========
  {
    const s = whiteSlide();
    footer(s, 13);
    sectionLabel(s, "Team");
    pageTitle(s, "Operator-founder. Technical capacity is the known gap.");

    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.55,
      y: 1.3,
      w: 5.5,
      h: 5.2,
      fill: { color: C.dark },
      rectRadius: 0.06,
    });
    s.addText("Sandeep Jain", {
      x: 0.9,
      y: 1.7,
      w: 4.8,
      h: 0.4,
      fontFace: "Arial",
      fontSize: 22,
      bold: true,
      color: C.white,
      margin: 0,
    });
    s.addText("Founder", {
      x: 0.9,
      y: 2.15,
      w: 4.8,
      h: 0.3,
      fontFace: "Arial",
      fontSize: 14,
      color: C.cyan,
      margin: 0,
    });
    s.addText("30+ years", {
      x: 0.9,
      y: 2.75,
      w: 4.8,
      h: 0.5,
      fontFace: "Arial",
      fontSize: 28,
      bold: true,
      color: C.cyan,
      margin: 0,
    });
    s.addText(
      "Staffing, recruitment and early-career talent. Shipped InternSafar to production — not slideware.",
      {
        x: 0.9,
        y: 3.45,
        w: 4.8,
        h: 1.2,
        fontFace: "Arial",
        fontSize: 14,
        color: "D0D0D0",
        margin: 0,
      }
    );
    s.addText("linkedin.com/in/jain35", {
      x: 0.9,
      y: 5.7,
      w: 4.8,
      h: 0.3,
      fontFace: "Arial",
      fontSize: 13,
      color: C.cyan,
      margin: 0,
    });

    const right = [
      {
        h: "Why this can ship today",
        d: "Live product on internsafar.com with candidate + employer workflows, verification ops and referral loops already running.",
      },
      {
        h: "Honest gap: technical co-founder",
        d: "Pre-seed plan: part-time eng capacity from the raise; Seed requires a technical co-founder / eng lead before scaling capital.",
      },
      {
        h: "What the raise buys on people",
        d: "Employer success coverage + contracted eng to accelerate matching, fill-rate analytics and monetization — not a bloated team.",
      },
    ];
    right.forEach((b, i) => {
      const y = 1.3 + i * 1.75;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 6.3,
        y,
        w: 6.45,
        h: 1.55,
        fill: { color: C.fog },
        rectRadius: 0.05,
      });
      s.addText(b.h, {
        x: 6.65,
        y: y + 0.25,
        w: 5.9,
        h: 0.35,
        fontFace: "Arial",
        fontSize: 14,
        bold: true,
        color: C.charcoal,
        margin: 0,
      });
      s.addText(b.d, {
        x: 6.65,
        y: y + 0.7,
        w: 5.9,
        h: 0.65,
        fontFace: "Arial",
        fontSize: 13,
        color: C.grayMid,
        margin: 0,
      });
    });
  }

  // ========== 14 CLOSE ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0,
      y: 0,
      w: 13.333,
      h: 7.5,
      fill: { color: C.dark },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0,
      y: 0,
      w: 0.12,
      h: 7.5,
      fill: { color: C.cyan },
    });

    const closeLogoH = placeLogo(s, pres, 0.7, 0.9, 2.35);
    s.addText("Win the hire — not the listing.", {
      x: 0.7,
      y: 0.9 + closeLogoH + 0.4,
      w: 11.5,
      h: 0.55,
      fontFace: "Arial",
      fontSize: 30,
      bold: true,
      color: C.white,
      margin: 0,
    });
    s.addText(
      "InternSafar is building the workflow layer for India's internship-to-career market — where Internshala proved willingness to pay, and where fill rate wins.",
      {
        x: 0.7,
        y: 0.9 + closeLogoH + 1.15,
        w: 11.5,
        h: 0.7,
        fontFace: "Arial",
        fontSize: 15,
        color: "D0D0D0",
        margin: 0,
      }
    );

    s.addText("SEEKING", {
      x: 0.7,
      y: 5.0,
      w: 11,
      h: 0.28,
      fontFace: "Arial",
      fontSize: 12,
      bold: true,
      color: C.cyan,
      margin: 0,
      charSpacing: 2,
    });
    s.addText(
      "Employer pilots  ·  Technical co-founder intros  ·  ₹50 Lakh pre-seed partners",
      {
        x: 0.7,
        y: 5.4,
        w: 11.5,
        h: 0.35,
        fontFace: "Arial",
        fontSize: 15,
        color: "E8E8E8",
        margin: 0,
      }
    );
    s.addText("internsafar.com", {
      x: 0.7,
      y: 6.05,
      w: 11,
      h: 0.35,
      fontFace: "Arial",
      fontSize: 18,
      bold: true,
      color: C.cyan,
      margin: 0,
    });
    s.addText("Sandeep Jain  ·  linkedin.com/in/jain35", {
      x: 0.7,
      y: 6.5,
      w: 11,
      h: 0.3,
      fontFace: "Arial",
      fontSize: 14,
      color: "E8E8E8",
      margin: 0,
    });
  }

  await pres.writeFile({ fileName: out });
  console.log(`Wrote v${String(ver).padStart(2, "0")}: ${name}`);
  console.log(out);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

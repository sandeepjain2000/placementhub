const pptxgen = require("pptxgenjs");

/**
 * PlacementHub Implementation Roadmap
 * Visual language: Motagua multipurpose template
 * Palette: Sky Blue Motagua (#30C0D4) + charcoal + Motagua red accent
 */

const C = {
  cyan: "30C0D4",
  cyanDark: "1FA8BA",
  cyanSoft: "E8F8FA",
  red: "E73847",
  charcoal: "2F2F2F",
  dark: "1A1A1A",
  gray: "8B8B8B",
  grayMid: "555555",
  grayLight: "C6C6C6",
  fog: "F4F6F7",
  white: "FFFFFF",
  soft: "F7F9FA",
};

const OUT =
  "C:/Users/sandeep/Downloads/Claudes/placementhubwebsite/decks/PlacementHub-Implementation-Roadmap.pptx";

const TOTAL = 15;

async function main() {
  const pres = new pptxgen();
  pres.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
  pres.layout = "WIDE";
  predAuth(pres);
  pres.title = "PlacementHub Implementation Roadmap";
  predSubject(pres);

  // Motagua motif helpers
  const leftRail = (slide, color = C.cyan) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 0.14, h: 7.5,
      fill: { color }, line: { color },
    });
  };

  const footer = (slide, n, opts = {}) => {
    const brandX = opts.brandX != null ? opts.brandX : 0.55;
    const brandColor = opts.brandColor || C.cyan;
    slide.addText("PLACEMENTHUB", {
      x: brandX, y: 7.08, w: 3, h: 0.26,
      fontFace: "Arial", fontSize: 10, bold: true,
      color: brandColor,
      margin: 0, charSpacing: 2,
    });
    slide.addText(`${String(n).padStart(2, "0")}  /  ${String(TOTAL).padStart(2, "0")}`, {
      x: 11.0, y: 7.08, w: 1.8, h: 0.26,
      fontFace: "Arial", fontSize: 10,
      color: opts.numColor || C.gray,
      align: "right", margin: 0,
    });
  };

  const footerPhase = (slide, n) =>
    footer(slide, n, { brandX: 0.5, brandColor: C.cyan, numColor: C.gray });

  const sectionLabel = (slide, text, x = 0.55, y = 0.35) => {
    slide.addText(text.toUpperCase(), {
      x, y, w: 6, h: 0.28,
      fontFace: "Arial", fontSize: 11, bold: true,
      color: C.cyan, margin: 0, charSpacing: 3,
    });
  };

  const pageTitle = (slide, text, y = 0.62) => {
    slide.addText(text, {
      x: 0.55, y, w: 12.2, h: 0.55,
      fontFace: "Arial", fontSize: 28, bold: true,
      color: C.charcoal, margin: 0,
    });
  };

  // ========== 1 TITLE ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.dark },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: C.cyan },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 9.6, y: 0, w: 3.733, h: 7.5, fill: { color: "151515" },
    });
    // geometric Motagua-style blocks
    s.addShape(pres.shapes.RECTANGLE, {
      x: 10.0, y: 1.3, w: 2.8, h: 1.6, fill: { color: C.cyan },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 10.0, y: 3.1, w: 1.3, h: 1.3, fill: { color: C.red },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 11.5, y: 3.1, w: 1.3, h: 1.3, fill: { color: "3A3A3A" },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 10.0, y: 4.6, w: 2.8, h: 0.9, fill: { color: "2A2A2A" },
    });

    s.addText("IMPLEMENTATION ROADMAP", {
      x: 0.7, y: 2.05, w: 8.5, h: 0.35,
      fontFace: "Arial", fontSize: 13, bold: true,
      color: C.cyan, margin: 0, charSpacing: 4,
    });
    s.addText("PlacementHub", {
      x: 0.7, y: 2.5, w: 8.5, h: 0.85,
      fontFace: "Arial", fontSize: 48, bold: true,
      color: C.white, margin: 0,
    });
    s.addText("A phased, low-risk path for colleges to adopt PlacementHub\nwithout disrupting existing placement processes.", {
      x: 0.7, y: 3.55, w: 8.2, h: 0.9,
      fontFace: "Arial", fontSize: 16,
      color: "B8B8B8", margin: 0,
    });
    s.addText("8-week rollout  ·  7 phases  ·  Continuous improvement", {
      x: 0.7, y: 5.8, w: 8, h: 0.35,
      fontFace: "Arial", fontSize: 13,
      color: C.grayLight, margin: 0,
    });
  }

  // ========== 2 OBJECTIVE ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.white },
    });
    leftRail(s);
    footer(s, 2);
    sectionLabel(s, "Purpose");
    pageTitle(s, "Implementation Objective");

    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.55, y: 1.5, w: 12.2, h: 1.7,
      fill: { color: C.cyanSoft }, rectRadius: 0.08,
    });
    s.addText("Enable colleges to adopt PlacementHub in a phased, low-risk manner — with quick adoption, measurable outcomes, and continuous improvement.", {
      x: 0.85, y: 1.75, w: 11.6, h: 1.2,
      fontFace: "Arial", fontSize: 20, color: C.charcoal, margin: 0, valign: "middle",
    });

    const pillars = [
      { n: "01", t: "Quick adoption", d: "Clear weekly milestones from kickoff to go-live" },
      { n: "02", t: "Low operational risk", d: "Pilot first, then expand — no big-bang cutover" },
      { n: "03", t: "Measurable outcomes", d: "Adoption, operations, and quality tracked from day one" },
    ];
    pillars.forEach((p, i) => {
      const x = 0.55 + i * 4.15;
      s.addShape(pres.shapes.RECTANGLE, {
        x, y: 3.6, w: 3.9, h: 2.7, fill: { color: C.fog },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x, y: 3.6, w: 3.9, h: 0.1, fill: { color: C.cyan },
      });
      s.addText(p.n, {
        x: x + 0.3, y: 3.9, w: 3.3, h: 0.4,
        fontFace: "Arial", fontSize: 22, bold: true, color: C.cyan, margin: 0,
      });
      s.addText(p.t, {
        x: x + 0.3, y: 4.45, w: 3.3, h: 0.4,
        fontFace: "Arial", fontSize: 18, bold: true, color: C.charcoal, margin: 0,
      });
      s.addText(p.d, {
        x: x + 0.3, y: 5.0, w: 3.3, h: 0.9,
        fontFace: "Arial", fontSize: 14, color: C.grayMid, margin: 0,
      });
    });
  }

  // ========== 3 TIMELINE OVERVIEW ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.white },
    });
    leftRail(s);
    footer(s, 3);
    sectionLabel(s, "Overview");
    pageTitle(s, "Seven-Phase Implementation Timeline");

    const phases = [
      { p: "01", w: "Week 1", t: "Discovery & Kickoff", d: "Demo, plan, nominate coordinator" },
      { p: "02", w: "Week 2", t: "Platform Config", d: "College, users, depts, courses" },
      { p: "03", w: "Week 3", t: "Student Onboarding", d: "Import, verify, train students" },
      { p: "04", w: "Week 4", t: "Employer Setup", d: "Recruiters & company database" },
      { p: "05", w: "Weeks 5–6", t: "Pilot Drive", d: "First live placement drive" },
      { p: "06", w: "Weeks 7–8", t: "Campus Rollout", d: "Full placement activities" },
    ];

    phases.forEach((ph, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 0.55 + col * 4.2;
      const y = 1.4 + row * 2.2;
      s.addShape(pres.shapes.RECTANGLE, {
        x, y, w: 4.0, h: 2.0, fill: { color: C.fog },
      });
      s.addText(ph.p, {
        x: x + 0.25, y: y + 0.2, w: 3.5, h: 0.4,
        fontFace: "Arial", fontSize: 24, bold: true, color: C.cyan, margin: 0,
      });
      s.addText(ph.w, {
        x: x + 0.25, y: y + 0.65, w: 3.5, h: 0.25,
        fontFace: "Arial", fontSize: 12, bold: true, color: C.gray, margin: 0, charSpacing: 1,
      });
      s.addText(ph.t, {
        x: x + 0.25, y: y + 1.0, w: 3.5, h: 0.35,
        fontFace: "Arial", fontSize: 15, bold: true, color: C.charcoal, margin: 0,
      });
      s.addText(ph.d, {
        x: x + 0.25, y: y + 1.4, w: 3.5, h: 0.4,
        fontFace: "Arial", fontSize: 13, color: C.grayMid, margin: 0,
      });
    });

    // Phase 07 full-width bar
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.55, y: 5.85, w: 12.2, h: 0.9, fill: { color: C.charcoal },
    });
    s.addText("07", {
      x: 0.8, y: 6.05, w: 0.8, h: 0.5,
      fontFace: "Arial", fontSize: 22, bold: true, color: C.cyan, margin: 0, valign: "middle",
    });
    s.addText("Ongoing  ·  Continuous Improvement", {
      x: 1.7, y: 6.05, w: 6, h: 0.5,
      fontFace: "Arial", fontSize: 16, bold: true, color: C.white, margin: 0, valign: "middle",
    });
    s.addText("Training, analytics, AI enhancements", {
      x: 8.0, y: 6.05, w: 4.4, h: 0.5,
      fontFace: "Arial", fontSize: 14, color: "A8A8A8", margin: 0, valign: "middle", align: "right",
    });
  }

  // ========== phase helper ==========
  function phaseSlide(num, pageNum, week, title, subtitle, activities, deliverables) {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.white },
    });
    leftRail(s);

    // left dark panel with phase number
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.14, y: 0, w: 3.6, h: 7.5, fill: { color: C.charcoal },
    });
    footerPhase(s, pageNum);
    s.addText("PHASE", {
      x: 0.5, y: 1.8, w: 2.9, h: 0.3,
      fontFace: "Arial", fontSize: 12, bold: true,
      color: C.cyan, margin: 0, charSpacing: 3,
    });
    s.addText(num, {
      x: 0.5, y: 2.15, w: 2.9, h: 1.1,
      fontFace: "Arial", fontSize: 72, bold: true,
      color: C.white, margin: 0,
    });
    s.addText(week, {
      x: 0.5, y: 3.4, w: 2.9, h: 0.35,
      fontFace: "Arial", fontSize: 14, bold: true,
      color: C.grayLight, margin: 0,
    });
    s.addText(title, {
      x: 0.5, y: 4.1, w: 2.9, h: 1.2,
      fontFace: "Arial", fontSize: 20, bold: true,
      color: C.white, margin: 0,
    });

    s.addText(subtitle, {
      x: 4.15, y: 0.45, w: 8.6, h: 0.55,
      fontFace: "Arial", fontSize: 22, bold: true,
      color: C.charcoal, margin: 0,
    });

    s.addText("ACTIVITIES", {
      x: 4.15, y: 1.25, w: 4.5, h: 0.28,
      fontFace: "Arial", fontSize: 11, bold: true,
      color: C.cyan, margin: 0, charSpacing: 2,
    });

    activities.forEach((a, i) => {
      const y = 1.65 + i * 0.48;
      s.addShape(pres.shapes.OVAL, {
        x: 4.15, y: y + 0.08, w: 0.18, h: 0.18,
        fill: { color: C.cyan },
      });
      s.addText(a, {
        x: 4.5, y, w: 4.3, h: 0.4,
        fontFace: "Arial", fontSize: 13, color: C.charcoal, margin: 0, valign: "middle",
      });
    });

    s.addShape(pres.shapes.RECTANGLE, {
      x: 9.15, y: 1.25, w: 3.7, h: 5.2, fill: { color: C.fog },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 9.15, y: 1.25, w: 3.7, h: 0.1, fill: { color: C.red },
    });
    s.addText("DELIVERABLES", {
      x: 9.4, y: 1.55, w: 3.2, h: 0.3,
      fontFace: "Arial", fontSize: 11, bold: true,
      color: C.red, margin: 0, charSpacing: 2,
    });
    deliverables.forEach((d, i) => {
      s.addText(d, {
        x: 9.4, y: 2.1 + i * 0.85, w: 3.2, h: 0.75,
        fontFace: "Arial", fontSize: 14, bold: true,
        color: C.charcoal, margin: 0,
      });
    });

    return s;
  }

  // ========== 4–10 PHASES ==========
  phaseSlide(
    "01", 4, "Week 1",
    "Discovery &\nKickoff",
    "Introduction & Planning",
    [
      "Conduct online product demonstration",
      "Map current placement workflow",
      "Identify TPOs and faculty coordinators",
      "Finalize implementation timeline",
      "Nominate PlacementHub coordinator",
    ],
    [
      "Kickoff meeting completed",
      "Implementation schedule approved",
      "Admin credentials shared",
    ]
  );

  phaseSlide(
    "02", 5, "Week 2",
    "Platform\nConfiguration",
    "College setup & user model",
    [
      "College profile & academic years",
      "Departments, courses, branches",
      "Placement eligibility rules",
      "Placement policies",
      "Administrator & faculty accounts",
    ],
    [
      "Platform configured",
      "User accounts created",
      "Initial validation completed",
    ]
  );

  phaseSlide(
    "03", 6, "Week 3",
    "Student\nOnboarding",
    "Import, verify, activate the student portal",
    [
      "Import student database",
      "Verify student information",
      "Upload resumes & complete profiles",
      "Verify email addresses",
      "Train students on PlacementHub",
    ],
    [
      "Student database imported",
      "Student portal activated",
      "Onboarding completed",
    ]
  );

  phaseSlide(
    "04", 7, "Week 4",
    "Employer\nSetup",
    "Recruiters, companies, job templates",
    [
      "Create recruiter accounts",
      "Add existing recruiters",
      "Configure employer database",
      "Create company profiles",
      "Configure job posting templates",
    ],
    [
      "Recruiter portal activated",
      "Employer database configured",
    ]
  );

  phaseSlide(
    "05", 8, "Weeks 5–6",
    "Pilot\nPlacement Drive",
    "One or two live drives through PlacementHub",
    [
      "Publish company requirements",
      "Student registrations",
      "Eligibility verification & shortlisting",
      "Interview scheduling",
      "Offer management & reporting",
    ],
    [
      "Successful pilot drive",
      "User feedback collected",
      "Improvements documented",
    ]
  );

  // ========== 9 PHASE 6 ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.white },
    });
    leftRail(s);

    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.14, y: 0, w: 3.6, h: 7.5, fill: { color: C.charcoal },
    });
    footerPhase(s, 9);
    s.addText("PHASE", {
      x: 0.5, y: 1.8, w: 2.9, h: 0.3,
      fontFace: "Arial", fontSize: 12, bold: true, color: C.cyan, margin: 0, charSpacing: 3,
    });
    s.addText("06", {
      x: 0.5, y: 2.15, w: 2.9, h: 1.1,
      fontFace: "Arial", fontSize: 72, bold: true, color: C.white, margin: 0,
    });
    s.addText("Weeks 7–8", {
      x: 0.5, y: 3.4, w: 2.9, h: 0.35,
      fontFace: "Arial", fontSize: 14, bold: true, color: C.grayLight, margin: 0,
    });
    s.addText("Campus-wide\nRollout", {
      x: 0.5, y: 4.1, w: 2.9, h: 1.2,
      fontFace: "Arial", fontSize: 20, bold: true, color: C.white, margin: 0,
    });

    s.addText("Transition all placement activities to PlacementHub", {
      x: 4.15, y: 0.35, w: 8.6, h: 0.4,
      fontFace: "Arial", fontSize: 18, bold: true, color: C.charcoal, margin: 0,
    });

    const mods = [
      "Student Management", "Recruiter Management", "Placement Drives",
      "Internship Management", "Resume Database", "Interview Scheduling",
      "Offer Tracking", "Placement Reports", "Analytics Dashboard",
      "Communication Portal",
    ];
    mods.forEach((m, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 4.15 + col * 4.4;
      const y = 0.95 + row * 0.78;
      s.addShape(pres.shapes.RECTANGLE, {
        x, y, w: 4.15, h: 0.65, fill: { color: C.fog },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x, y, w: 0.1, h: 0.65, fill: { color: C.cyan },
      });
      s.addText(m, {
        x: x + 0.3, y, w: 3.7, h: 0.65,
        fontFace: "Arial", fontSize: 13, bold: true,
        color: C.charcoal, margin: 0, valign: "middle",
      });
    });

    s.addShape(pres.shapes.RECTANGLE, {
      x: 4.15, y: 5.05, w: 8.55, h: 1.55, fill: { color: C.cyanSoft },
    });
    s.addText("DELIVERABLES", {
      x: 4.4, y: 5.25, w: 8, h: 0.28,
      fontFace: "Arial", fontSize: 11, bold: true, color: C.cyanDark, margin: 0, charSpacing: 2,
    });
    s.addText("Complete rollout completed   ·   Operational support initiated", {
      x: 4.4, y: 5.7, w: 8, h: 0.5,
      fontFace: "Arial", fontSize: 15, bold: true, color: C.charcoal, margin: 0,
    });
  }

  // ========== 10 PHASE 7 ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.white },
    });
    leftRail(s);

    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.14, y: 0, w: 3.6, h: 7.5, fill: { color: C.charcoal },
    });
    footerPhase(s, 10);
    s.addText("PHASE", {
      x: 0.5, y: 1.6, w: 2.9, h: 0.3,
      fontFace: "Arial", fontSize: 12, bold: true, color: C.cyan, margin: 0, charSpacing: 3,
    });
    s.addText("07", {
      x: 0.5, y: 1.95, w: 2.9, h: 1.0,
      fontFace: "Arial", fontSize: 64, bold: true, color: C.white, margin: 0,
    });
    s.addText("Ongoing", {
      x: 0.5, y: 3.1, w: 2.9, h: 0.35,
      fontFace: "Arial", fontSize: 14, bold: true, color: C.grayLight, margin: 0,
    });
    s.addText("Continuous\nImprovement", {
      x: 0.5, y: 3.7, w: 2.9, h: 1.1,
      fontFace: "Arial", fontSize: 20, bold: true, color: C.white, margin: 0,
    });
    s.addText("Quarterly roadmap · Adoption reports · Usage analytics", {
      x: 0.5, y: 5.3, w: 2.9, h: 1.2,
      fontFace: "Arial", fontSize: 12, color: C.grayLight, margin: 0,
    });

    s.addText("Monthly cadence after go-live", {
      x: 4.15, y: 0.4, w: 8.6, h: 0.4,
      fontFace: "Arial", fontSize: 20, bold: true, color: C.charcoal, margin: 0,
    });

    const months = [
      { t: "Review meetings", d: "Alignment on progress and blockers" },
      { t: "User feedback", d: "Collect insights from teams & students" },
      { t: "Feature enhancements", d: "Prioritize and ship improvements" },
      { t: "AI-powered upgrades", d: "Adopt smarter placement tooling" },
      { t: "Product updates", d: "Stay current with platform releases" },
      { t: "User training", d: "Keep campus teams confident" },
    ];
    months.forEach((m, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 4.15 + col * 2.95;
      const y = 1.1 + row * 2.55;
      s.addShape(pres.shapes.RECTANGLE, {
        x, y, w: 2.8, h: 2.35, fill: { color: C.fog },
      });
      s.addText(String(i + 1).padStart(2, "0"), {
        x: x + 0.2, y: y + 0.25, w: 2.4, h: 0.35,
        fontFace: "Arial", fontSize: 18, bold: true, color: C.cyan, margin: 0,
      });
      s.addText(m.t, {
        x: x + 0.2, y: y + 0.8, w: 2.4, h: 0.55,
        fontFace: "Arial", fontSize: 14, bold: true, color: C.charcoal, margin: 0,
      });
      s.addText(m.d, {
        x: x + 0.2, y: y + 1.45, w: 2.4, h: 0.65,
        fontFace: "Arial", fontSize: 12, color: C.grayMid, margin: 0,
      });
    });
  }

  // ========== 11 RESPONSIBILITIES ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.white },
    });
    leftRail(s);
    footer(s, 11);
    sectionLabel(s, "Partnership");
    pageTitle(s, "Shared Responsibilities");

    // PlacementHub column
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.55, y: 1.4, w: 5.95, h: 5.2, fill: { color: C.charcoal },
    });
    s.addText("PLACEMENTHUB TEAM", {
      x: 0.85, y: 1.65, w: 5.35, h: 0.35,
      fontFace: "Arial", fontSize: 13, bold: true, color: C.cyan, margin: 0, charSpacing: 2,
    });
    const phTeam = [
      "Product setup",
      "Platform configuration",
      "Training",
      "Technical support",
      "Product updates",
      "Bug fixes",
      "Feature enhancements",
    ];
    phTeam.forEach((t, i) => {
      s.addText(t, {
        x: 0.85, y: 2.25 + i * 0.52, w: 5.35, h: 0.45,
        fontFace: "Arial", fontSize: 16, color: C.white, margin: 0,
      });
    });

    // College column
    s.addShape(pres.shapes.RECTANGLE, {
      x: 6.8, y: 1.4, w: 5.95, h: 5.2, fill: { color: C.fog },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 6.8, y: 1.4, w: 5.95, h: 0.1, fill: { color: C.cyan },
    });
    s.addText("COLLEGE", {
      x: 7.1, y: 1.65, w: 5.35, h: 0.35,
      fontFace: "Arial", fontSize: 13, bold: true, color: C.cyan, margin: 0, charSpacing: 2,
    });
    const college = [
      "Nominate implementation coordinator",
      "Share student database",
      "Define placement policies",
      "Coordinate faculty members",
      "Student onboarding",
      "Recruiter engagement",
      "Feedback and testing",
    ];
    college.forEach((t, i) => {
      s.addText(t, {
        x: 7.1, y: 2.25 + i * 0.52, w: 5.35, h: 0.45,
        fontFace: "Arial", fontSize: 16, color: C.charcoal, margin: 0,
      });
    });
  }

  // ========== 12 8-WEEK TIMELINE ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.white },
    });
    leftRail(s);
    footer(s, 12);
    sectionLabel(s, "Schedule");
    pageTitle(s, "Suggested 8-Week Timeline");

    const weeks = [
      { w: "W1", t: "Kickoff & Planning", accent: C.cyan },
      { w: "W2", t: "Platform Configuration", accent: C.cyan },
      { w: "W3", t: "Student Import & Training", accent: C.cyan },
      { w: "W4", t: "Recruiter Setup", accent: C.cyan },
      { w: "W5", t: "Pilot Placement Drive", accent: C.red },
      { w: "W6", t: "Pilot Review", accent: C.red },
      { w: "W7", t: "Campus Rollout", accent: C.charcoal },
      { w: "W8", t: "Go Live", accent: C.charcoal },
    ];

    weeks.forEach((wk, i) => {
      const y = 1.35 + i * 0.68;
      s.addShape(pres.shapes.RECTANGLE, {
        x: 0.55, y, w: 1.3, h: 0.55, fill: { color: wk.accent },
      });
      s.addText(wk.w, {
        x: 0.55, y, w: 1.3, h: 0.55,
        fontFace: "Arial", fontSize: 16, bold: true, color: C.white,
        align: "center", valign: "middle", margin: 0,
      });
      // progress bar length grows
      const barW = 2.5 + i * 0.95;
      s.addShape(pres.shapes.RECTANGLE, {
        x: 2.05, y: y + 0.12, w: barW, h: 0.32,
        fill: { color: i < 4 ? C.cyanSoft : i < 6 ? "FDECEF" : "ECECEC" },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 2.05, y: y + 0.12, w: Math.min(barW, 0.35 + i * 0.35), h: 0.32,
        fill: { color: wk.accent },
      });
      s.addText(wk.t, {
        x: 2.05 + barW + 0.25, y, w: 5, h: 0.55,
        fontFace: "Arial", fontSize: 15, bold: true,
        color: C.charcoal, margin: 0, valign: "middle",
      });
    });
  }

  // ========== 13 SUCCESS METRICS ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.white },
    });
    leftRail(s);
    footer(s, 13);
    sectionLabel(s, "Outcomes");
    pageTitle(s, "Success Metrics");

    // Adoption column with big stats
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.55, y: 1.4, w: 4.0, h: 5.2, fill: { color: C.charcoal },
    });
    s.addText("ADOPTION", {
      x: 0.8, y: 1.65, w: 3.5, h: 0.3,
      fontFace: "Arial", fontSize: 12, bold: true, color: C.cyan, margin: 0, charSpacing: 2,
    });
    const stats = [
      { v: "100%", l: "Placement team onboarded" },
      { v: "100%", l: "Student records imported" },
      { v: ">90%", l: "Student profile completion" },
      { v: ">80%", l: "Recruiter onboarding" },
    ];
    stats.forEach((st, i) => {
      s.addText(st.v, {
        x: 0.8, y: 2.2 + i * 1.0, w: 3.5, h: 0.45,
        fontFace: "Arial", fontSize: 28, bold: true, color: C.white, margin: 0,
      });
      s.addText(st.l, {
        x: 0.8, y: 2.65 + i * 1.0, w: 3.5, h: 0.35,
        fontFace: "Arial", fontSize: 13, color: "A8A8A8", margin: 0,
      });
    });

    // Operational
    s.addShape(pres.shapes.RECTANGLE, {
      x: 4.8, y: 1.4, w: 4.0, h: 5.2, fill: { color: C.fog },
    });
    s.addText("OPERATIONAL", {
      x: 5.05, y: 1.65, w: 3.5, h: 0.3,
      fontFace: "Arial", fontSize: 12, bold: true, color: C.cyan, margin: 0, charSpacing: 2,
    });
    const ops = [
      "First drive completed successfully",
      "Less spreadsheet dependency",
      "Faster student communication",
      "Faster recruiter coordination",
      "Automated reporting",
    ];
    ops.forEach((o, i) => {
      s.addShape(pres.shapes.OVAL, {
        x: 5.1, y: 2.3 + i * 0.75, w: 0.18, h: 0.18, fill: { color: C.cyan },
      });
      s.addText(o, {
        x: 5.45, y: 2.2 + i * 0.75, w: 3.1, h: 0.45,
        fontFace: "Arial", fontSize: 14, color: C.charcoal, margin: 0, valign: "middle",
      });
    });

    // Quality
    s.addShape(pres.shapes.RECTANGLE, {
      x: 9.05, y: 1.4, w: 3.75, h: 5.2, fill: { color: C.cyanSoft },
    });
    s.addText("QUALITY", {
      x: 9.3, y: 1.65, w: 3.25, h: 0.3,
      fontFace: "Arial", fontSize: 12, bold: true, color: C.cyanDark, margin: 0, charSpacing: 2,
    });
    const qual = [
      "User satisfaction",
      "Drive success rate",
      "System adoption rate",
      "Active recruiters",
      "Student applications",
      "Admin time saved",
    ];
    qual.forEach((q, i) => {
      s.addText(q, {
        x: 9.3, y: 2.25 + i * 0.65, w: 3.25, h: 0.5,
        fontFace: "Arial", fontSize: 14, bold: true, color: C.charcoal, margin: 0,
      });
    });
  }

  // ========== 14 LONG-TERM VISION ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.white },
    });
    leftRail(s);
    footer(s, 14);
    sectionLabel(s, "Next Horizon");
    pageTitle(s, "Long-Term Vision — 3 to 6 Months");
    s.addText("After core platform success, progressively adopt advanced modules.", {
      x: 0.55, y: 1.2, w: 12, h: 0.35,
      fontFace: "Arial", fontSize: 14, color: C.grayMid, margin: 0,
    });

    const cols = [
      {
        title: "AI Features",
        color: C.cyan,
        items: [
          "AI Resume Analysis",
          "AI Resume Builder",
          "AI Interview Prep",
          "AI Career Guidance",
          "AI Skill Gap Analysis",
        ],
      },
      {
        title: "Placement",
        color: C.red,
        items: [
          "Internship Management",
          "Placement Analytics",
          "Employer CRM",
          "Alumni Engagement",
          "Drive Automation",
        ],
      },
      {
        title: "Academic",
        color: C.charcoal,
        items: [
          "Industry Projects",
          "Hackathons",
          "Skill Assessments",
          "Student Portfolio",
          "NAAC / NBA Support",
        ],
      },
    ];
    cols.forEach((col, i) => {
      const x = 0.55 + i * 4.2;
      s.addShape(pres.shapes.RECTANGLE, {
        x, y: 1.75, w: 4.0, h: 4.85, fill: { color: C.fog },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x, y: 1.75, w: 4.0, h: 0.7, fill: { color: col.color },
      });
      s.addText(col.title.toUpperCase(), {
        x: x + 0.25, y: 1.9, w: 3.5, h: 0.4,
        fontFace: "Arial", fontSize: 15, bold: true, color: C.white, margin: 0,
      });
      col.items.forEach((item, j) => {
        s.addText(item, {
          x: x + 0.25, y: 2.75 + j * 0.65, w: 3.5, h: 0.5,
          fontFace: "Arial", fontSize: 15, color: C.charcoal, margin: 0,
        });
      });
    });
  }

  // ========== 15 BENEFITS + PHILOSOPHY (closing) ==========
  {
    const s = pres.addSlide();
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.333, h: 7.5, fill: { color: C.dark },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 0.18, h: 7.5, fill: { color: C.cyan },
    });

    s.addText("IMPLEMENTATION PHILOSOPHY", {
      x: 0.7, y: 0.45, w: 12, h: 0.3,
      fontFace: "Arial", fontSize: 12, bold: true, color: C.cyan, margin: 0, charSpacing: 3,
    });
    s.addText("Phased adoption. Minimal disruption.\nMaximum long-term success.", {
      x: 0.7, y: 0.9, w: 12, h: 1.1,
      fontFace: "Arial", fontSize: 28, bold: true, color: C.white, margin: 0,
    });

    const benefits = [
      "End-to-end digitization",
      "Centralized student database",
      "Improved employer engagement",
      "Faster placement operations",
      "Better analytics & transparency",
      "Reduced manual effort",
      "Better student experience",
      "AI-assisted management",
    ];
    benefits.forEach((b, i) => {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const x = 0.7 + col * 3.1;
      const y = 2.5 + row * 1.55;
      s.addShape(pres.shapes.RECTANGLE, {
        x, y, w: 2.9, h: 1.3, fill: { color: "222222" },
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x, y, w: 2.9, h: 0.08, fill: { color: C.cyan },
      });
      s.addText(b, {
        x: x + 0.2, y: y + 0.35, w: 2.5, h: 0.7,
        fontFace: "Arial", fontSize: 14, bold: true, color: C.white, margin: 0,
      });
    });

    s.addText("Start with a pilot · prove value · expand with confidence", {
      x: 0.7, y: 6.7, w: 12, h: 0.35,
      fontFace: "Arial", fontSize: 14, color: C.grayLight, margin: 0,
    });
  }

  await pres.writeFile({ fileName: OUT });
  console.log("Wrote", OUT);
}

function predAuth(pres) {
  pres.author = "PlacementHub";
}
function predSubject(pres) {
  pres.subject = "College implementation roadmap — Motagua-inspired";
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

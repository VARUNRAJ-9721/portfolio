import React, { useState, useEffect } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiAward,
  FiBriefcase,
  FiTool,
  FiCpu,
  FiUsers,
  FiMenu,
  FiX,
  FiLinkedin,
} from "react-icons/fi";
import { FaGraduationCap, FaTrophy } from "react-icons/fa";

/* ---------------------------------------------------------
   COLOR PALETTE: RGB (6, 114, 201)
   Primary Blue: #0672C9
   Light Blue: #3B9AE0
   Dark Blue: #054A85
   Background: #0A1628
--------------------------------------------------------- */
const C = {
  // Main palette based on RGB (6, 114, 201)
  primary: "#0672C9",        // rgb(6, 114, 201)
  primaryLight: "#3B9AE0",   // lighter version
  primaryDark: "#054A85",    // darker version
  primaryBg: "#0A1628",      // very dark blue background
  primaryBgLight: "#0F2240", // slightly lighter bg
  primaryBgSoft: "#142D4F",  // softer bg

  // Supporting colors
  white: "#FFFFFF",
  ink: "#E8F0FE",
  inkMute: "#8BB3D9",
  inkFaint: "#5A8BB5",
  line: "#1A3D66",
  lineSoft: "#0F2A4A",
  accent: "#0672C9",
  cyan: "#4AA8E8",
  heroBlue: "#0672C9",
};

const nav = [
  { href: "#about", label: "About", n: "01" },
  { href: "#experience", label: "Experience", n: "02" },
  { href: "#projects", label: "Projects", n: "03" },
  { href: "#skills", label: "Skills", n: "04" },
  { href: "#achievements", label: "Leadership", n: "05" },
  { href: "#contact", label: "Contact", n: "06" },
];

const experiences = [
  {
    company: "BHEL",
    role: "Intern — Heavy Engineering",
    location: "Tiruchirappalli",
    date: "June 2026",
    tag: "Manufacturing",
    points: [
      "Gained hands-on exposure to conventional and CNC machining operations.",
      "Learned welding, fabrication, and quality inspection techniques used in heavy engineering.",
      "Developed practical knowledge of manufacturing processes, quality inspection, and industrial safety practices.",
    ],
  },
  {
    company: "NLC India Ltd.",
    role: "Intern — Mobile Transfer Conveyor",
    location: "Neyveli",
    date: "June 2025",
    tag: "Mining Equipment",
    points: [
      "Conducted a case study on frequent failures of the cable winding machine in the Mobile Transfer Conveyor (MTC) at NLC Neyveli.",
      "Analyzed root causes of mechanical and electrical failures and evaluated preventive maintenance to improve equipment reliability.",
      "Proposed corrective measures to reduce downtime, enhance operational efficiency, and improve machine availability.",
    ],
  },
];

const projects = [
  {
    title: "ACCIDENT PREVENTION SYSTEM",
    context: "THIRAN '25 · Technical Symposium",
    sheet: "SHEET 01",
    description:
      "An accident-prevention system that detects driver drowsiness and activates alert mechanisms — engineered to cut down night-time accidents caused by fatigue at the wheel.",
    tags: ["Safety", "Sensors", "Automotive", "Embedded"],
  },
];

const technicalSkills = ["SolidWorks", "CREO", "CATIA", "AutoCAD", "Ansys Workbench", "MS Office Suite"];
const certifications = ["SolidWorks & CATIA Training — TVS Training Services Ltd."];
const softSkills = ["Team Leadership", "Problem-Solving", "Project Management", "Teamwork"];

const achievements = [
  "Winner — Craft It, Intra College Symposium, ACGCET",
  "Runner-up — AutoCAD Drawing Competition, Intra College Symposium, ACGCET",
];

const leadership = [
  { role: "Class Representative", org: "ACGCET, Karaikudi", period: "2023 – Present" },
  { role: "Vice President", org: "SDG Club of ACGCET", period: "2025 – 2026" },
  { role: "Chief Designer", org: "Mechanical Association of ACGCET", period: "2026 – 2027" },
  { role: "Chief Designer", org: "LEO Club of ACGCET", period: "2024 – 2026" },
  { role: "Member", org: "ISTE Club of ACGCET", period: "2024 – 2026" },
];

const education = [
  { degree: "B.E., Mechanical Engineering", school: "ACGCET, Karaikudi", score: "CGPA 8.42", year: "Expected 2027" },
  { degree: "HSC", school: "Little Flower Hr. Sec. School, Kumbakonam", score: "83.5%", year: "2023" },
  { degree: "SSLC", school: "Little Flower Hr. Sec. School, Kumbakonam", score: "100%", year: "2021" },
];

const Section = ({ id, eyebrow, title, children }) => {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ marginBottom: 44 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.2em", color: C.primary, textTransform: "uppercase" }}>
          {eyebrow}
        </div>
        <h2
          className="disp"
          style={{
            marginTop: 10,
            fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: C.white,
            textTransform: "uppercase",
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};

const SkillCard = ({ icon, title, children }) => {
  return (
    <div
      className="card-hover"
      style={{ border: `1px solid ${C.line}`, borderRadius: 10, padding: 24, background: C.primaryBgLight }}
    >
      <div className="flex items-center gap-3" style={{ marginBottom: 18 }}>
        <div
          style={{
            display: "flex",
            height: 38,
            width: 38,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            background: "rgba(6, 114, 201, 0.15)",
            color: C.primary,
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <h3 className="disp" style={{ fontSize: 16, fontWeight: 700, color: C.white, textTransform: "uppercase" }}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
};

const ContactCard = ({ icon, label, value, href }) => {
  const style = {
    display: "block",
    borderRadius: 10,
    border: `1px solid ${C.line}`,
    background: C.primaryBgLight,
    padding: 22,
    textAlign: "center",
  };
  const inner = (
    <>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          height: 38,
          width: 38,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "rgba(6, 114, 201, 0.15)",
          color: C.primary,
        }}
      >
        {icon}
      </div>
      <div className="mono" style={{ marginTop: 12, fontSize: 10, letterSpacing: "0.1em", color: C.inkFaint, textTransform: "uppercase" }}>
        {label}
      </div>
      <div style={{ marginTop: 4, fontSize: 13, fontWeight: 600, wordBreak: "break-word", color: C.white }}>
        {value}
      </div>
    </>
  );
  return href ? (
    <a href={href} className="card-hover" style={style}>
      {inner}
    </a>
  ) : (
    <div className="card-hover" style={style}>
      {inner}
    </div>
  );
};

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest && e.target.closest("a[href^='#']");
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    const ids = ["top", ...nav.map((n) => n.href.slice(1))];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        background: C.primaryBg,
        color: C.ink,
        fontFamily: "'Cambria', Georgia, serif",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <style>{`
        /* Kill any white flash: overscroll bounce, resize, or unpainted edges
           should always reveal the same dark theme color, never the browser default white. */
        html, body, #root, #__next {
          background: ${C.primaryBg} !important;
          margin: 0;
          padding: 0;
        }
        html {
          scroll-behavior: smooth;
          overscroll-behavior-y: none;
        }
        * { box-sizing: border-box; font-family: 'Cambria', Georgia, serif; }

        .disp { font-family: 'Cambria', Georgia, serif; }
        .mono { font-family: 'Cambria', Georgia, serif; }

        .accent-text { color: ${C.primary}; }

        h1, h2, h3, h4, h5, h6 { text-transform: uppercase; }

        .corner::before, .corner::after {
          content: '';
          position: absolute;
          width: 14px;
          height: 14px;
          border-color: ${C.primary};
          opacity: .8;
        }
        .corner::before {
          top: -1px;
          left: -1px;
          border-top: 2px solid;
          border-left: 2px solid;
        }
        .corner::after {
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid;
          border-right: 2px solid;
        }

        .card-hover {
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
        }
        .card-hover:hover {
          transform: translateY(-3px);
          border-color: ${C.primary}80 !important;
          box-shadow: 0 12px 40px -12px rgba(6, 114, 201, 0.35);
        }

        a { text-decoration: none; }

        .nav-link { position: relative; color: ${C.inkMute}; transition: color .2s ease; }
        .nav-link:hover { color: ${C.white}; }
        .nav-link.active { color: ${C.white}; }
        .nav-link.active .nav-dot { opacity: 1; }
        .nav-dot { opacity: 0; transition: opacity .2s ease; }

        a:focus-visible, button:focus-visible {
          outline: 2px solid ${C.cyan};
          outline-offset: 3px;
          border-radius: 4px;
        }

        ::selection {
          background: ${C.primary}55;
          color: ${C.white};
        }

        /* Responsive Grid Classes */
        .grid { display: grid; gap: 1.5rem; }
        .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        .space-y-3 > * + * { margin-top: 0.75rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-10 { gap: 2.5rem; }
        .flex { display: flex; }
        .flex-wrap { flex-wrap: wrap; }
        .items-center { align-items: center; }
        .items-start { align-items: flex-start; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .flex-col { flex-direction: column; }
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-6xl { max-width: 72rem; }
        .max-w-4xl { max-width: 56rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .w-full { width: 100%; }
        .md\\:col-span-2 { grid-column: span 2; }
        .md\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
        .md\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        .md\\:flex-row { flex-direction: row; }
        .md\\:text-left { text-align: left; }

        /* Mobile Responsive */
        @media (max-width: 640px) {
          .grid-cols-2 { grid-template-columns: 1fr; }
          .grid-cols-3 { grid-template-columns: 1fr; }
          .md\\:grid-cols-4 { grid-template-columns: 1fr 1fr; }
          .md\\:grid-cols-3 { grid-template-columns: 1fr; }
          .md\\:grid-cols-2 { grid-template-columns: 1fr; }
          .md\\:col-span-2 { grid-column: span 1; }
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .md\\:grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .card-hover, .card-hover:hover { transition: none; transform: none; }
        }
      `}</style>

      {/* Desktop top nav */}
      <nav
        className="desktop-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          padding: "16px 24px",
          background: "rgba(10, 22, 40, 0.75)",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${C.line}`,
        }}
      >
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className={`nav-link mono${activeSection === n.href.slice(1) ? " active" : ""}`}
            style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase" }}
          >
            <span className="nav-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: C.cyan }} />
            {n.label}
          </a>
        ))}
      </nav>

      {/* Floating menu button (mobile) */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 42,
          height: 42,
          borderRadius: 8,
          border: "none",
          background: C.primary,
          color: C.white,
          cursor: "pointer",
          boxShadow: "0 6px 20px -6px rgba(6, 114, 201, 0.6)",
        }}
      >
        {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 72,
            left: 20,
            zIndex: 50,
            borderRadius: 10,
            border: `1px solid ${C.line}`,
            background: C.primaryBgLight,
            padding: "10px 0",
            minWidth: 190,
            boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
          }}
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="mono nav-link"
              style={{
                display: "block",
                padding: "10px 18px",
                fontSize: 13,
                textTransform: "uppercase",
              }}
            >
              <span style={{ color: C.primary }}>{n.n}</span> {n.label}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section
        id="top"
        style={{
          position: "relative",
          background: `linear-gradient(135deg, ${C.primaryDark} 0%, ${C.primary} 100%)`,
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
          overflow: "hidden",
        }}
      >
        {/* subtle grid texture, purely decorative */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="mono"
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid rgba(255,255,255,0.28)",
            borderRadius: 999,
            padding: "7px 16px",
            fontSize: 11,
            letterSpacing: "0.06em",
            color: "#EAF2FF",
            marginBottom: 28,
            background: "rgba(255,255,255,0.06)",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#7CF29C",
              boxShadow: "0 0 0 3px rgba(124, 242, 156, 0.25)",
            }}
          />
          OPEN TO DESIGN &amp; MANUFACTURING ROLES · GRAD 2027
        </div>

        <h1
          className="disp"
          style={{
            position: "relative",
            fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
            fontWeight: 700,
            letterSpacing: "0.01em",
            color: C.white,
          }}
        >
          VARUNRAJ V
        </h1>
        <p
          style={{
            position: "relative",
            marginTop: 14,
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 500,
            color: "#EAF2FF",
          }}
        >
          Mechanical Engineering Student
        </p>
        <p
          className="mono"
          style={{
            position: "relative",
            marginTop: 8,
            fontSize: 13,
            color: "#C7DBFF",
          }}
        >
          B.E. Mechanical Engineering &nbsp;|&nbsp; ACGCET, Karaikudi
        </p>

        <div
          style={{
            position: "relative",
            marginTop: 36,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          <a
            href="#contact"
            className="mono"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 8,
              padding: "12px 22px",
              fontSize: 13,
              fontWeight: 600,
              color: C.primaryDark,
              background: C.white,
              textTransform: "uppercase",
            }}
          >
            <FiMail size={16} /> Contact Me
          </a>
          <a
            href="tel:+919344877687"
            className="mono"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 8,
              padding: "12px 22px",
              fontSize: 13,
              fontWeight: 600,
              color: C.white,
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <FiPhone size={16} /> +91-9344877687
          </a>
        </div>

        <a
          href="https://www.linkedin.com/in/varunraj-v-5263b02a6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          aria-label="LinkedIn profile"
          style={{
            position: "relative",
            marginTop: 32,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            color: C.white,
          }}
        >
          <FiLinkedin size={19} />
        </a>

        <div
          style={{
            position: "relative",
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            width: "100%",
            maxWidth: 640,
          }}
          className="md:grid-cols-4"
        >
          {[
            { k: "2", v: "Internships" },
            { k: "8.42", v: "B.E. CGPA" },
            { k: "83.5%", v: "12TH HSC score" },
            { k: "6", v: "CAD / CAE tools" },
          ].map((s) => (
            <div
              key={s.v}
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 10,
                padding: 16,
                background: "rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="disp"
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: C.white,
                }}
              >
                {s.k}
              </div>
              <div
                className="mono"
                style={{
                  marginTop: 4,
                  fontSize: 10,
                  color: "#DCE8FF",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career intro strip */}
      <section
        style={{
          borderBottom: `1px solid ${C.line}`,
          padding: "40px 24px",
          background: C.primaryBgLight,
        }}
      >
        <p
          className="mx-auto"
          style={{
            maxWidth: 720,
            fontSize: 15,
            lineHeight: 1.8,
            color: C.inkMute,
            textAlign: "center",
          }}
        >
          I'm <span style={{ color: C.white, fontWeight: 600 }}>Varunraj V</span> — a Mechanical
          Engineering student at ACGCET, Karaikudi with a strong passion for design and
          manufacturing. Hands-on with CAD tools like SolidWorks, CREO and CATIA, with
          internship experience at BHEL and NLC.
        </p>
      </section>

      {/* About Section */}
      <Section id="about" eyebrow="01 — About" title="Career objective">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p style={{ fontSize: 17, lineHeight: 1.8, color: C.inkMute }}>
              Aspiring Mechanical Engineer with a strong passion for{" "}
              <span style={{ color: C.white }}>design and manufacturing</span>. Seeking an
              opportunity to apply my engineering knowledge, develop practical skills, and
              contribute to the design of innovative products and efficient manufacturing
              processes. Eager to learn new technologies, work collaboratively, and support the
              organization's growth through continuous improvement.
            </p>
          </div>
          <div className="space-y-3">
            {education.map((e) => (
              <div
                key={e.degree}
                className="card-hover"
                style={{
                  border: `1px solid ${C.line}`,
                  borderRadius: 10,
                  padding: 16,
                  background: C.primaryBgLight,
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <FaGraduationCap className="h-5 w-5" style={{ color: C.primary }} />
                  <span className="mono" style={{ fontSize: 10, color: C.inkFaint }}>
                    {e.year}
                  </span>
                </div>
                <div style={{ marginTop: 8, fontSize: 14, fontWeight: 600, color: C.white }}>{e.degree}</div>
                <div style={{ marginTop: 4, fontSize: 12, color: C.inkMute }}>{e.school}</div>
                <div className="mono accent-text" style={{ marginTop: 8, fontSize: 13, fontWeight: 600 }}>
                  {e.score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" eyebrow="02 — Experience" title="Internship experience">
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="corner card-hover"
              style={{
                position: "relative",
                border: `1px solid ${C.line}`,
                borderRadius: 10,
                padding: 28,
                background: C.primaryBgLight,
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      display: "flex",
                      height: 42,
                      width: 42,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 8,
                      background: "rgba(6, 114, 201, 0.15)",
                      color: C.primary,
                      flexShrink: 0,
                    }}
                  >
                    <FiBriefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="disp" style={{ fontSize: 20, fontWeight: 700, color: C.white }}>
                      {exp.company}
                    </h3>
                    <div style={{ fontSize: 13, color: C.inkMute }}>
                      {exp.role} · {exp.location}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className="mono"
                    style={{
                      borderRadius: 999,
                      border: `1px solid ${C.primary}55`,
                      background: "rgba(6, 114, 201, 0.1)",
                      padding: "4px 12px",
                      fontSize: 10,
                      color: C.cyan,
                      textTransform: "uppercase",
                    }}
                  >
                    {exp.tag}
                  </span>
                  <span className="mono" style={{ fontSize: 11, color: C.inkFaint }}>
                    {exp.date}
                  </span>
                </div>
              </div>
              <ul
                style={{
                  marginTop: 20,
                  borderTop: `1px solid ${C.line}`,
                  paddingTop: 20,
                }}
                className="space-y-3"
              >
                {exp.points.map((p) => (
                  <li
                    key={p}
                    style={{
                      display: "flex",
                      gap: 12,
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: C.inkMute,
                    }}
                  >
                    <span
                      style={{
                        marginTop: 8,
                        height: 4,
                        width: 4,
                        flexShrink: 0,
                        borderRadius: "50%",
                        background: C.primary,
                      }}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" eyebrow="03 — Projects" title="Things I've built">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="corner card-hover"
              style={{
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${C.line}`,
                borderRadius: 10,
                padding: 28,
                background: C.primaryBgLight,
              }}
            >
              <div className="flex items-center justify-between">
                <FiCpu className="h-8 w-8" style={{ color: C.primary }} />
                <span
                  className="mono"
                  style={{
                    fontSize: 10,
                    color: C.inkFaint,
                    border: `1px solid ${C.line}`,
                    borderRadius: 4,
                    padding: "3px 8px",
                  }}
                >
                  {p.sheet}
                </span>
              </div>
              <div
                className="mono"
                style={{
                  marginTop: 18,
                  fontSize: 11,
                  color: C.inkFaint,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {p.context}
              </div>
              <h3 className="disp" style={{ marginTop: 4, fontSize: 24, fontWeight: 700, color: C.white }}>
                {p.title}
              </h3>
              <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.7, color: C.inkMute }}>{p.description}</p>
              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="mono"
                    style={{
                      borderRadius: 4,
                      background: C.primaryBgSoft,
                      border: `1px solid ${C.line}`,
                      padding: "5px 10px",
                      fontSize: 11,
                      color: C.inkMute,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" eyebrow="04 — Toolbox" title="Skills & certifications">
        <div className="grid gap-6 md:grid-cols-3">
          <SkillCard icon={<FiTool className="h-5 w-5" />} title="Technical">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {technicalSkills.map((s) => (
                <span
                  key={s}
                  className="mono"
                  style={{
                    borderRadius: 6,
                    border: `1px solid ${C.line}`,
                    background: C.primaryBgSoft,
                    padding: "7px 12px",
                    fontSize: 12,
                    fontWeight: 500,
                    color: C.inkMute,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </SkillCard>
          <SkillCard icon={<FiAward className="h-5 w-5" />} title="Certifications">
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li
                  key={c}
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: C.cyan, marginTop: 1 }}>✓</span>
                  <span style={{ color: C.inkMute }}>{c}</span>
                </li>
              ))}
            </ul>
          </SkillCard>
          <SkillCard icon={<FiUsers className="h-5 w-5" />} title="Soft skills">
            <ul className="space-y-3">
              {softSkills.map((s) => (
                <li
                  key={s}
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: C.primary }}>◆</span>
                  <span style={{ color: C.inkMute }}>{s}</span>
                </li>
              ))}
            </ul>
          </SkillCard>
        </div>
      </Section>

      {/* Achievements + Leadership */}
      <Section id="achievements" eyebrow="Recognition" title="Achievements & leadership">
        <div className="grid gap-6 md:grid-cols-2">
          <div
            className="card-hover"
            style={{
              border: `1px solid ${C.line}`,
              borderRadius: 10,
              padding: 28,
              background: C.primaryBgLight,
            }}
          >
            <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: "flex",
                  height: 40,
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  background: "rgba(6, 114, 201, 0.15)",
                  color: C.primary,
                  flexShrink: 0,
                }}
              >
                <FaTrophy className="h-5 w-5" />
              </div>
              <h3 className="disp" style={{ fontSize: 19, fontWeight: 700, color: C.white }}>
                Achievements
              </h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li
                  key={a}
                  style={{
                    display: "flex",
                    gap: 12,
                    fontSize: 13,
                    color: C.inkMute,
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: C.cyan }}>▹</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="card-hover"
            style={{
              border: `1px solid ${C.line}`,
              borderRadius: 10,
              padding: 28,
              background: C.primaryBgLight,
            }}
          >
            <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: "flex",
                  height: 40,
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  background: "rgba(6, 114, 201, 0.15)",
                  color: C.primary,
                  flexShrink: 0,
                }}
              >
                <FiUsers className="h-5 w-5" />
              </div>
              <h3 className="disp" style={{ fontSize: 19, fontWeight: 700, color: C.white }}>
                Leadership
              </h3>
            </div>
            <ul className="space-y-4">
              {leadership.map((l) => (
                <li
                  key={l.role + l.period}
                  style={{
                    borderLeft: `2px solid ${C.primary}66`,
                    paddingLeft: 14,
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.white }}>{l.role}</div>
                  <div style={{ fontSize: 12, color: C.inkMute }}>{l.org}</div>
                  <div className="mono" style={{ marginTop: 2, fontSize: 11, color: C.cyan }}>
                    {l.period}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <section id="contact" style={{ position: "relative", padding: "96px 0", background: C.primaryBg }}>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.2em", color: C.primary, textTransform: "uppercase" }}>
            06 — Let's connect
          </div>
          <h2
            className="disp"
            style={{
              marginTop: 16,
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: C.white,
            }}
          >
            Ready to design and build for your <span className="accent-text">next project.</span>
          </h2>
          <p
            style={{
              margin: "16px auto 0",
              maxWidth: 520,
              fontSize: 15,
              color: C.inkMute,
              lineHeight: 1.7,
            }}
          >
            Actively seeking internships and opportunities in design and manufacturing. Reach out
            — I'd love to talk.
          </p>
          <div style={{ marginTop: 40, display: "grid", gap: 16 }} className="md:grid-cols-3">
            <ContactCard
              icon={<FiMail className="h-5 w-5" />}
              label="Email"
              value="varunraj9721@gmail.com"
              href="mailto:varunraj9721@gmail.com"
            />
            <ContactCard
              icon={<FiPhone className="h-5 w-5" />}
              label="Phone"
              value="+91 93448 77687"
              href="tel:+919344877687"
            />
            <ContactCard icon={<FiMapPin className="h-5 w-5" />} label="Location" value="Kumbakonam, Tamil Nadu" />
          </div>
          <a
            href="#"
            className="mono"
            style={{
              marginTop: 32,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: C.primary,
              fontSize: 12,
              textTransform: "uppercase",
            }}
          >
            <FiLinkedin className="h-4 w-4" /> LinkedIn profile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${C.line}`, padding: "28px 0", background: C.primaryBgLight }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center md:flex-row md:text-left">
          <div className="mono" style={{ fontSize: 11, color: C.inkFaint, textTransform: "uppercase" }}>
            © 2026 Varunraj V — All rights reserved
          </div>
          <div className="mono" style={{ fontSize: 11, color: C.inkFaint, textTransform: "uppercase" }}>
            Mechanical engineering · ACGCET Karaikudi
          </div>
        </div>
      </footer>
    </div>
  );
}
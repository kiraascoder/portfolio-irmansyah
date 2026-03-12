import Navbar from "../components/navbar";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  href: string;
  featured?: boolean;
  accentColor: string;
};

const projects: Project[] = [
  {
    title: "Dashboard Analytics",
    desc: "Full-featured analytics dashboard with real-time data visualization, interactive charts, and role-based access control built with Next.js App Router.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    href: "#",
    featured: true,
    accentColor: "#C8B89A",
  },
  {
    title: "Personal Finance Tracker",
    desc: "Budget management app with visual spending breakdowns and savings goal tracking.",
    tags: ["React", "Recharts", "Zustand"],
    href: "#",
    accentColor: "#7B9E87",
  },
  {
    title: "3D Lanyard Card",
    desc: "Interactive physics-based 3D business card with realistic cloth simulation and custom shaders.",
    tags: ["Three.js", "R3F", "WebGL"],
    href: "#",
    accentColor: "#B5826A",
  },
  {
    title: "Developer Blog",
    desc: "Technical writing platform with MDX-powered posts, syntax highlighting, and newsletter integration.",
    tags: ["Next.js", "MDX", "Vercel"],
    href: "#",
    accentColor: "#D4A853",
  },
];

export default function ProjectPage() {
  return (
    <>
      <Navbar />

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "160px 48px 140px",
        }}
      >
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "60px" }}>
          <div className="section-eyebrow">Selected Work</div>
          <h1 className="section-title">
            Projects I&apos;ve <em>built</em>
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "var(--text-muted)",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            A curated selection of projects spanning frontend architecture,
            interactive 3D experiences, and data visualization.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.href}
              className="reveal"
              style={{
                gridColumn: project.featured ? "span 2" : undefined,
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                textDecoration: "none",
                display: "block",
                transition: "border-color var(--transition), transform var(--transition)",
                transitionDelay: `${i * 0.06}s`,
              }}
            >
              {/* Thumb */}
              <div
                style={{
                  height: project.featured ? "260px" : "200px",
                  background: "var(--bg3)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Abstract art placeholder */}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 260"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: "absolute", inset: 0 }}
                >
                  <rect width="400" height="260" fill="#1F1F1F" />
                  <circle
                    cx="200"
                    cy="130"
                    r="80"
                    fill="none"
                    stroke={`${project.accentColor}18`}
                    strokeWidth="60"
                  />
                  <circle
                    cx="200"
                    cy="130"
                    r="80"
                    fill="none"
                    stroke={project.accentColor}
                    strokeWidth="2"
                    strokeDasharray="180 322"
                    strokeLinecap="round"
                    transform="rotate(-90 200 130)"
                  />
                  <circle cx="200" cy="130" r="4" fill={project.accentColor} />
                  <rect
                    x="40"
                    y="200"
                    width="320"
                    height="1"
                    fill={`${project.accentColor}20`}
                  />
                </svg>

                {/* Project number watermark */}
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "80px",
                    color: `${project.accentColor}08`,
                    fontWeight: 700,
                    position: "relative",
                    zIndex: 1,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  0{i + 1}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginBottom: "12px",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        borderRadius: "100px",
                        background: "var(--surface)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    color: "var(--text)",
                    letterSpacing: "-0.01em",
                    marginBottom: "8px",
                  }}
                >
                  {project.title}
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {project.desc}
                </p>
              </div>

              {/* Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 24px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "var(--font-mono)",
                    color: project.accentColor,
                    letterSpacing: "0.06em",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  View Project →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const reveals = document.querySelectorAll('.reveal');
            const observer = new IntersectionObserver(entries => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08 });
            reveals.forEach(el => observer.observe(el));

            document.querySelectorAll('a[style]').forEach(el => {
              el.addEventListener('mouseenter', () => {
                el.style.borderColor = 'var(--border-hover)';
                el.style.transform = 'translateY(-4px)';
              });
              el.addEventListener('mouseleave', () => {
                el.style.borderColor = 'var(--border)';
                el.style.transform = 'none';
              });
            });
          `,
        }}
      />
    </>
  );
}

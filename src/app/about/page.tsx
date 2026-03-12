import Navbar from "../components/navbar";

const skills = [
  { name: "React / Next.js", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Node.js", color: "#68A063" },
  { name: "Framer Motion", color: "#FF4785" },
  { name: "Three.js / R3F", color: "#FF7F50" },
  { name: "Figma", color: "#9B59B6" },
];

const stats = [
  {
    num: "15+",
    label: "Projects Completed",
    desc: "From landing pages to full-stack apps",
  },
  {
    num: "2+",
    label: "Years of Experience",
    desc: "Building with the modern web stack",
  },
  {
    num: "∞",
    label: "Cups of Coffee",
    desc: "Fueling late-night debugging sessions",
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "140px",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "160px 48px 140px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* LEFT — Text */}
          <div className="reveal">
            <div className="section-eyebrow">About Me</div>
            <h1 className="section-title">
              Developer who <em>thinks</em> in design
            </h1>

            <p
              style={{
                fontSize: "16px",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "18px",
              }}
            >
              I&apos;m a frontend developer passionate about building interfaces
              that are both performant and beautiful. My work lives at the
              intersection of{" "}
              <strong style={{ color: "var(--text)", fontWeight: 700 }}>
                engineering precision
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--text)", fontWeight: 700 }}>
                thoughtful design
              </strong>
              .
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "18px",
              }}
            >
              I specialize in{" "}
              <strong style={{ color: "var(--text)", fontWeight: 700 }}>
                Next.js
              </strong>{" "}
              and the modern React ecosystem, crafting experiences that feel
              intuitive and responsive across every device. I care deeply about
              the details — from micro-interactions to accessibility.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              When I&apos;m not coding, I explore 3D web experiences, contribute
              to open-source, and continuously push the boundaries of what&apos;s
              possible on the web.
            </p>

            {/* Skills */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 16px",
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    transition: "border-color var(--transition), color var(--transition)",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: skill.color,
                      flexShrink: 0,
                    }}
                  />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Stats */}
          <div
            className="reveal"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              transitionDelay: "0.15s",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "24px",
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  transition: "border-color var(--transition), transform var(--transition)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "48px",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: "var(--accent)",
                    minWidth: "80px",
                  }}
                >
                  {stat.num}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: "4px",
                    }}
                  >
                    {stat.label}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                    {stat.desc}
                  </div>
                </div>
              </div>
            ))}

            {/* Quote */}
            <div
              style={{
                padding: "24px",
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "20px",
                  fontFamily: "var(--font-display)",
                  fontSize: "100px",
                  color: "var(--accent)",
                  opacity: 0.08,
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                &quot;
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "18px",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  position: "relative",
                }}
              >
                Clean code is not written by following a set of rules. You
                don&apos;t become a software craftsman by learning a list of
                heuristics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const reveals = document.querySelectorAll('.reveal');
            const observer = new IntersectionObserver(entries => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.12 });
            reveals.forEach(el => observer.observe(el));
          `,
        }}
      />
    </>
  );
}

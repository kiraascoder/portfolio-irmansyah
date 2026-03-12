import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "80px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Cursor glow handled client-side via script below */}
        <div
          id="cursor-glow"
          style={{
            position: "fixed",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,184,154,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          className="container"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 48px",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent2)",
                  background: "rgba(123,158,135,0.1)",
                  border: "1px solid rgba(123,158,135,0.2)",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  marginBottom: "28px",
                  animation: "fadeUp 0.8s ease both",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    background: "var(--accent2)",
                    borderRadius: "50%",
                    animation: "pulse 2s infinite",
                    display: "inline-block",
                  }}
                />
                Available for freelance
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(52px, 6vw, 80px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: "20px",
                  animation: "fadeUp 0.8s 0.1s ease both",
                }}
              >
                Crafting digital
                <br />
                <em style={{ color: "var(--accent)" }}>experiences</em>
                <br />
                that matter.
              </h1>

              <p
                style={{
                  fontSize: "17px",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  maxWidth: "440px",
                  marginBottom: "40px",
                  animation: "fadeUp 0.8s 0.2s ease both",
                }}
              >
                Hi, I&apos;m <strong style={{ color: "var(--text)" }}>Irmansyah</strong> — a
                frontend developer &amp; UI engineer who builds fast, beautiful, and
                accessible web applications with modern technologies.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  animation: "fadeUp 0.8s 0.3s ease both",
                }}
              >
                <Link
                  href="/project"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "var(--accent)",
                    color: "var(--bg)",
                    padding: "14px 28px",
                    borderRadius: "100px",
                    fontWeight: 700,
                    fontSize: "14px",
                    letterSpacing: "0.02em",
                    transition: "transform var(--transition), box-shadow var(--transition)",
                  }}
                >
                  View Work →
                </Link>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--text-muted)",
                    padding: "14px 28px",
                    borderRadius: "100px",
                    fontWeight: 500,
                    fontSize: "14px",
                    border: "1px solid var(--border-hover)",
                    transition: "color var(--transition), border-color var(--transition)",
                  }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* RIGHT — Avatar */}
            <div style={{ animation: "fadeIn 1s 0.4s ease both" }}>
              <div
                style={{
                  position: "relative",
                  width: "380px",
                  height: "460px",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "200px 200px 160px 160px",
                    background:
                      "linear-gradient(160deg, rgba(200,184,154,0.12) 0%, rgba(123,158,135,0.06) 100%)",
                    border: "1px solid rgba(200,184,154,0.1)",
                  }}
                />

                {/* Replace with <Image> component pointing to /img/me.jpg */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "340px",
                    height: "420px",
                    borderRadius: "180px 180px 140px 140px",
                    background: "var(--bg3)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    color: "var(--text-dim)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                  }}
                >
                  <span style={{ fontSize: "48px", opacity: 0.3 }}>🧑‍💻</span>
                  <span>me.jpg</span>
                </div>

                {/* Floating cards */}
                <div
                  style={{
                    position: "absolute",
                    left: "-20px",
                    bottom: "80px",
                    background: "var(--surface)",
                    border: "1px solid var(--border-hover)",
                    borderRadius: "var(--radius)",
                    padding: "14px 18px",
                    backdropFilter: "blur(10px)",
                    animation: "float 4s 1s ease-in-out infinite",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--text-dim)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.08em",
                      marginBottom: "4px",
                    }}
                  // eslint-disable-next-line react/jsx-no-comment-textnodes
                  >
                    // experience
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700 }}>2+ Years</div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    right: "-20px",
                    top: "100px",
                    background: "var(--surface)",
                    border: "1px solid var(--border-hover)",
                    borderRadius: "var(--radius)",
                    padding: "14px 18px",
                    backdropFilter: "blur(10px)",
                    animation: "float 4s 2s ease-in-out infinite",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--text-dim)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.08em",
                      marginBottom: "4px",
                    }}
                  // eslint-disable-next-line react/jsx-no-comment-textnodes
                  >
                    // status
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--accent2)",
                    }}
                  >
                    Open to work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.4,
            animation: "fadeUp 1s 1s ease both",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, var(--accent), transparent)",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee">
          <span>
            Next.js <em>✦</em> React <em>✦</em> TypeScript <em>✦</em> Tailwind CSS{" "}
            <em>✦</em> Node.js <em>✦</em> UI/UX Design <em>✦</em> REST APIs <em>✦</em>{" "}
            Git <em>✦</em> Next.js <em>✦</em> React <em>✦</em> TypeScript <em>✦</em>{" "}
            Tailwind CSS <em>✦</em> Node.js <em>✦</em> UI/UX Design <em>✦</em> REST APIs{" "}
            <em>✦</em> Git
          </span>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const glow = document.getElementById('cursor-glow');
            if (glow) {
              document.addEventListener('mousemove', e => {
                glow.style.left = e.clientX + 'px';
                glow.style.top = e.clientY + 'px';
              });
            }
            // Scroll reveal
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

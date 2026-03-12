"use client";

import Navbar from "../components/navbar";
import { useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@irmansyah",
    href: "https://github.com",
    bgColor: "rgba(255,255,255,0.05)",
    iconColor: "var(--text)",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.21.66-.47v-1.65c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.16.56.67.47A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Irmansyah",
    href: "https://linkedin.com",
    bgColor: "rgba(10,102,194,0.15)",
    iconColor: "#0A66C2",
    icon: (
      <svg width="18" height="18" fill="#0A66C2" viewBox="0 0 24 24">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 01-.01 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "hello@irmansyah.dev",
    href: "mailto:hello@irmansyah.dev",
    bgColor: "rgba(200,184,154,0.1)",
    iconColor: "var(--accent)",
    icon: (
      <svg
        width="18"
        height="18"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* LEFT — Form */}
          <div className="reveal">
            <div className="section-eyebrow">Contact</div>
            <h1 className="section-title">
              Let&apos;s build something <em>together</em>
            </h1>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                {
                  id: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "john@example.com",
                },
              ].map(({ id, label, type, placeholder }) => (
                <div
                  key={id}
                  style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <label
                    htmlFor={id}
                    style={{
                      fontSize: "12px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-dim)",
                    }}
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={form[id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    style={{
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--text)",
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      padding: "14px 18px",
                      outline: "none",
                      transition: "border-color var(--transition)",
                      width: "100%",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border)")
                    }
                  />
                </div>
              ))}

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label
                  htmlFor="message"
                  style={{
                    fontSize: "12px",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-dim)",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text)",
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    padding: "14px 18px",
                    outline: "none",
                    transition: "border-color var(--transition)",
                    resize: "none",
                    width: "100%",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border)")
                  }
                />
              </div>

              <button
                type="submit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: sent ? "var(--accent2)" : "var(--accent)",
                  color: "var(--bg)",
                  padding: "16px 32px",
                  borderRadius: "100px",
                  fontWeight: 700,
                  fontSize: "14px",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform var(--transition), box-shadow var(--transition), background var(--transition)",
                  alignSelf: "flex-start",
                  fontFamily: "var(--font-body)",
                  marginTop: "8px",
                }}
              >
                {sent ? "Message Sent ✓" : "Send Message →"}
              </button>
            </form>
          </div>

          {/* RIGHT — Info */}
          <div
            className="reveal"
            style={{ paddingTop: "48px", transitionDelay: "0.15s" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                letterSpacing: "-0.02em",
                color: "var(--text)",
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              Always open to{" "}
              <em style={{ color: "var(--accent)" }}>new opportunities.</em>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              Whether you have a project in mind, want to collaborate, or just
              want to say hello — my inbox is always open.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 20px",
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    textDecoration: "none",
                    transition: "border-color var(--transition), transform var(--transition)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--accent)";
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--border)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: link.bgColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: link.iconColor,
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "14px",
                          color: "var(--text)",
                        }}
                      >
                        {link.name}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "var(--text-muted)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {link.handle}
                      </div>
                    </div>
                  </div>
                  <span style={{ color: "var(--text-dim)", fontSize: "16px" }}>
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

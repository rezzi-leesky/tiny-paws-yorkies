import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { CSSProperties } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Puppies", href: "#puppies" },
  { label: "Contact", href: "#contact" },
];

const lunaImages = [
  "/images/luna/photo_1_2026-10-07_10-46-30.jpg",
  "/images/luna/photo_2_2026-10-07_10-46-30.jpg",
  "/images/luna/photo_3_2026-10-07_10-46-30.jpg",
  "/images/luna/photo_4_2026-10-07_10-46-30.jpg",
  "/images/luna/photo_5_2026-10-07_10-46-30.jpg",
];

const maxImages = [
  "/images/max/photo_1_2026-10-07_10-50-35.jpg",
  "/images/max/photo_2_2026-10-07_10-50-35.jpg",
  "/images/max/photo_3_2026-10-07_10-50-35.jpg",
  "/images/max/photo_4_2026-10-07_10-50-35.jpg",
  "/images/max/photo_5_2026-10-07_10-50-35.jpg",
];

const bellaImages = [
  "/images/bella/photo_4_2026-10-07_10-32-46.jpg",
];

const linkStyle: CSSProperties = {
  color: "#f7f1e6",
  textDecoration: "none",
  marginLeft: "clamp(12px, 2vw, 28px)",
  fontWeight: 600,
  letterSpacing: "0.04em",
  fontSize: "clamp(0.82rem, 1.6vw, 0.96rem)",
  textTransform: "uppercase",
};

const containerStyle: CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  paddingLeft: "20px",
  paddingRight: "20px",
};

const sectionTitleStyle: CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
  fontWeight: 700,
  letterSpacing: "-0.04em",
  margin: "0 0 12px",
  textAlign: "center",
  color: "#1d1d1b",
};

const subtitleStyle: CSSProperties = {
  fontSize: "clamp(1rem, 2vw, 1.2rem)",
  textAlign: "center",
  color: "#5e5a54",
  maxWidth: "680px",
  margin: "0 auto",
  lineHeight: 1.7,
};

const cardStyle: CSSProperties = {
  background: "#fffdf9",
  border: "1px solid rgba(25, 25, 24, 0.08)",
  borderRadius: "18px",
  overflow: "hidden",
  boxShadow: "0 12px 32px rgba(22, 22, 20, 0.08)",
};

const classicButtonStyle: CSSProperties = {
  display: "inline-block",
  textDecoration: "none",
  background: "#c9a46d",
  color: "#1a1a18",
  padding: "14px 30px",
  borderRadius: "999px",
  fontWeight: 700,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  fontSize: "0.82rem",
  boxShadow: "0 12px 22px rgba(201, 164, 109, 0.25)",
};

const featuredCardStyle: CSSProperties = {
  background: "#fffdf9",
  border: "1px solid rgba(25, 25, 24, 0.08)",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 16px 48px rgba(22, 22, 20, 0.12)",
};

export default async function Home() {
  const { data: puppies, error } = await supabase.from("puppies").select();

  if (error) {
    return (
      <main style={{ padding: "40px 20px", textAlign: "center" }}>
        <p style={{ color: "#8b1e1e", fontSize: "18px" }}>Error loading puppies: {error.message}</p>
      </main>
    );
  }

  const puppyList = puppies ?? [];

  const getPuppyImage = (puppyName: string, index: number) => {
    const name = puppyName?.toLowerCase() || "";

    if (name.includes("luna")) return lunaImages[index % lunaImages.length];
    if (name.includes("max")) return maxImages[index % maxImages.length];
    if (name.includes("bella")) return bellaImages[index % bellaImages.length];

    return lunaImages[index % lunaImages.length];
  };

  return (
    <main
      style={{
        fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
        background: "#f4f0ea",
        color: "#1d1d1b",
      }}
    >
      <header
        style={{
          backgroundColor: "#171614",
          color: "#f7f1e6",
          padding: "18px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "0.04em",
            }}
          >
            Tiny Paws Yorkies
          </h2>

          <nav aria-label="Main navigation" style={{ display: "flex", flexWrap: "wrap" }}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} style={linkStyle}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(17,15,13,0.68) 0%, rgba(67,58,49,0.52) 100%), url('/images/luna/photo_1_2026-10-07_10-46-30.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "680px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ ...containerStyle, color: "#fffdf9", paddingTop: "40px", paddingBottom: "40px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p
              style={{
                margin: "0 0 18px",
                fontSize: "0.8rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#e6d7b5",
              }}
            >
              Premium Yorkshire Terrier Breeders
            </p>
            <h1
              style={{
                margin: "0 0 18px",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.05em",
                fontWeight: 700,
              }}
            >
              Beautiful puppies for forever homes.
            </h1>
            <p
              style={{
                fontSize: "clamp(1.02rem, 2vw, 1.5rem)",
                lineHeight: 1.7,
                maxWidth: "720px",
                margin: "0 auto 28px",
                color: "rgba(255,255,255,0.88)",
              }}
            >
              Healthy, lovingly raised Yorkshire Terriers with exceptional temperament, care, and pedigree.
            </p>
            <a href="#puppies" style={classicButtonStyle}>
              Explore our puppies
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          background:
            "linear-gradient(180deg, #fbf8f4 0%, rgba(251,248,244,0.95) 100%), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 100%22><path d=%22M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z%22 fill=%22%23f4eee8%22 /></svg>')",
          backgroundSize: "100% 100%, cover",
          padding: "80px 20px",
        }}
      >
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>Meet our featured puppies</h2>
          <p style={subtitleStyle}>Handpicked companions raised with love and care, ready for their forever homes.</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
              marginTop: "48px",
            }}
          >
            {[
              { name: "Luna", image: lunaImages[0], desc: "Graceful & affectionate" },
              { name: "Max", image: maxImages[0], desc: "Spirited & playful" },
              { name: "Bella", image: bellaImages[0], desc: "Gentle & loving" },
            ].map((pup) => (
              <article key={pup.name} style={featuredCardStyle}>
                <div
                  style={{
                    position: "relative",
                    height: "300px",
                    backgroundColor: "#e6dfd3",
                    backgroundImage: `url('${pup.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.25) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "14px",
                      right: "14px",
                      backgroundColor: "#3d7f59",
                      color: "#ffffff",
                      padding: "8px 14px",
                      borderRadius: "999px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Available
                  </div>
                </div>

                <div style={{ padding: "28px 24px" }}>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "2.2rem",
                      color: "#1b1a18",
                    }}
                  >
                    {pup.name}
                  </h3>
                  <p
                    style={{
                      margin: "0 0 14px",
                      color: "#c9a46d",
                      fontSize: "0.9rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {pup.desc}
                  </p>
                  <p style={{ margin: 0, color: "#66615d", fontSize: "1rem", lineHeight: 1.7 }}>
                    8 weeks old • Health certified • Contact for details
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        style={{
          background:
            "linear-gradient(180deg, #fbf8f4 0%, #faf6f0 100%), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><pattern id=%22dots%22 x=%220%22 y=%220%22 width=%226%22 height=%226%22 patternUnits=%22userSpaceOnUse%22><circle cx=%221%22 cy=%221%22 r=%220.9%22 fill=%22%23d8c9af%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23dots)%22 /></svg>')",
          backgroundSize: "100% 100%, 200px 200px",
          padding: "90px 20px",
        }}
      >
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>A classic approach to thoughtful breeding</h2>
          <p style={subtitleStyle}>
            At Tiny Paws Yorkies, we believe the best puppies are raised with patience, care, and a deep commitment to health and temperament.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "36px",
              alignItems: "center",
              marginTop: "42px",
            }}
          >
            <div
              style={{
                minHeight: "360px",
                borderRadius: "20px",
                backgroundImage: "url('/images/bella/photo_4_2026-10-07_10-32-46.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 20px 50px rgba(32,35,28,0.18)",
              }}
            />

            <div style={{ display: "grid", gap: "22px" }}>
              {[
                "Each puppy is raised in a nurturing home environment with gentle socialization from day one.",
                "We prioritize the health, temperament, and structure of every Yorkie, ensuring our families receive a confident and happy companion.",
                "From early veterinary care to lifetime breeder support, we stand beside our families long after adoption.",
              ].map((text, idx) => (
                <div
                  key={idx}
                  style={{
                    ...cardStyle,
                    padding: "22px 24px",
                    borderLeft: "4px solid #c9a46d",
                  }}
                >
                  <p style={{ margin: 0, color: "#433f3a", lineHeight: 1.8, fontSize: "1.02rem" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background:
            "linear-gradient(180deg, #f0e7dc 0%, #ebe1d5 100%), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 100%22><path d=%22M0,50 Q300,25 600,50 T1200,50 L1200,100 L0,100 Z%22 fill=%22%23e8dac1%22 /></svg>')",
          backgroundSize: "100% 100%, 100% 100%",
          padding: "90px 20px",
        }}
      >
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>Why families choose us</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            {[
              { icon: "🏆", title: "Champion Bloodlines", desc: "Thoughtful genetics and excellent lineage" },
              { icon: "💉", title: "Health First", desc: "Vet checked, vaccinated, and well cared for" },
              { icon: "🤝", title: "Lifetime Support", desc: "Guidance and care for the long term" },
              { icon: "👶", title: "Socialized Early", desc: "Raised to be confident and adaptable" },
              { icon: "🏠", title: "Home Environment", desc: "Warm, calm, and family-centered upbringing" },
              { icon: "📋", title: "Certified Quality", desc: "Meticulous breeding standards and care" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  ...cardStyle,
                  padding: "28px 20px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.4rem", marginBottom: "10px" }}>{item.icon}</div>
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.35rem",
                    color: "#201f1d",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ margin: 0, lineHeight: 1.7, color: "#5f5a56" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="puppies"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(25,25,24,0.72) 0%, rgba(52,48,44,0.68) 100%), url('/images/luna/photo_2_2026-10-07_10-46-30.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "90px 20px",
        }}
      >
        <div style={containerStyle}>
          <h2 style={{ ...sectionTitleStyle, color: "#fffdf9" }}>Available puppies</h2>
          <p style={{ ...subtitleStyle, color: "rgba(255,255,255,0.8)" }}>
            Thoughtfully bred companions ready to join their forever families.
          </p>

          {puppyList.length === 0 ? (
            <div
              style={{
                marginTop: "26px",
                padding: "38px 20px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "18px",
                textAlign: "center",
                color: "#f7f1e6",
                fontSize: "1.05rem",
              }}
            >
              Check back soon for our newest litter.
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "26px",
                marginTop: "36px",
              }}
            >
              {puppyList.map((puppy: any, index: number) => (
                <Link
                  key={puppy.id}
                  href={`/puppies/${encodeURIComponent(puppy.id)}`}
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                  <article style={{ ...cardStyle, background: "#fffdf9", cursor: "pointer", height: "100%" }}>
                    <div style={{ position: "relative", height: "280px", backgroundColor: "#e6dfd3" }}>
                      <img
                        src={getPuppyImage(puppy.name, index)}
                        alt={puppy.name || "Yorkshire Terrier puppy"}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "14px",
                          right: "14px",
                          backgroundColor: puppy.available ? "#3d7f59" : "#a25050",
                          color: "#ffffff",
                          padding: "8px 14px",
                          borderRadius: "999px",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {puppy.available ? "Available" : "Sold"}
                      </div>
                    </div>

                    <div style={{ padding: "22px 20px 24px" }}>
                      <h3
                        style={{
                          margin: "0 0 14px",
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontSize: "1.9rem",
                          color: "#1b1a18",
                        }}
                      >
                        {puppy.name}
                      </h3>

                      <div style={{ display: "grid", gap: "8px", marginBottom: "14px" }}>
                        <p style={{ margin: 0, color: "#544f4b", fontSize: "1rem" }}>
                          <strong style={{ color: "#1b1a18" }}>Age:</strong> {puppy.age}
                        </p>
                        <p style={{ margin: 0, color: "#544f4b", fontSize: "1rem" }}>
                          <strong style={{ color: "#1b1a18" }}>Price:</strong> ${puppy.price?.toLocaleString() || "Contact"}
                        </p>
                      </div>

                      <p style={{ margin: 0, color: "#66615d", fontSize: "0.9rem", lineHeight: 1.7, borderTop: "1px solid #ece3d8", paddingTop: "12px" }}>
                        Health certified • Vaccinated • Microchipped
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#fbf8f4",
          background:
            "linear-gradient(180deg, #fbf8f4 0%, #faf6f0 100%), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 100%22><path d=%22M0,30 Q300,60 600,30 T1200,30 L1200,100 L0,100 Z%22 fill=%22%23f3ebdf%22 /></svg>')",
          backgroundSize: "100% 100%, 100% 100%",
          padding: "90px 20px",
        }}
      >
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>Happy families</h2>
          <p style={subtitleStyle}>The heartfelt trust families place in us is the greatest compliment.</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "22px",
              marginTop: "40px",
            }}
          >
            {[
              "Absolutely wonderful experience from start to finish. Our puppy is healthy, beautiful, and so well-socialized!",
              "The best decision we made. Tiny Paws Yorkies provided exceptional support throughout the entire process.",
              "Our little Yorkie has brought so much joy to our family. We can't thank you enough for such a premium puppy!",
            ].map((testimonial, idx) => (
              <div key={idx} style={{ ...cardStyle, padding: "28px 22px", fontStyle: "italic", color: "#3f3d3a", lineHeight: 1.8 }}>
                <div style={{ color: "#c9a46d", fontSize: "1.3rem", marginBottom: "10px" }}>★★★★★</div>
                <p style={{ margin: 0 }}>"{testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(17,15,13,0.85) 0%, rgba(52,48,44,0.8) 100%), url('/images/max/photo_3_2026-10-07_10-50-35.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#f7f1e6",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <div style={containerStyle}>
          <h2 style={{ ...sectionTitleStyle, color: "#f7f1e6" }}>Get in touch</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "620px", margin: "0 auto 36px", lineHeight: 1.8, fontSize: "1.1rem" }}>
            Ready to welcome a premium Yorkshire Terrier into your family? We would love to hear from you.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
              maxWidth: "760px",
              margin: "0 auto 30px",
            }}
          >
            <div>
              <p style={{ margin: "0 0 8px", color: "#dbc79a", fontSize: "0.76rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Email</p>
              <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600 }}>info@tinypawsyorkies.com</p>
            </div>
            <div>
              <p style={{ margin: "0 0 8px", color: "#dbc79a", fontSize: "0.76rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Phone</p>
              <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600 }}>+237 679 409 897</p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a href="mailto:info@tinypawsyorkies.com" style={classicButtonStyle}>
              Email us
            </a>
            <a
              href="https://wa.me/237679409897"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...classicButtonStyle,
                background: "#25D366",
                color: "#fff",
                boxShadow: "0 12px 22px rgba(37, 211, 102, 0.25)",
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/237679409897"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "22px",
          right: "22px",
          backgroundColor: "#25D366",
          color: "#fff",
          padding: "12px 18px",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "0.04em",
          boxShadow: "0 16px 32px rgba(37, 211, 102, 0.3)",
          zIndex: 100,
        }}
      >
        WhatsApp
      </a>

      <footer
        style={{
          backgroundColor: "#0e0d0b",
          color: "#c7c0b5",
          textAlign: "center",
          padding: "22px 20px",
          fontSize: "0.82rem",
        }}
      >
        <p style={{ margin: 0 }}>© 2024 Tiny Paws Yorkies. All rights reserved.</p>
      </footer>
    </main>
  );
}

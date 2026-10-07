import { supabase } from "@/lib/supabase";
import type { CSSProperties } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Puppies", href: "#puppies" },
  { label: "Contact", href: "#contact" },
];

// Luna images
const lunaImages = [
  "/images/luna/photo_1_2026-10-07_10-46-30.jpg",
  "/images/luna/photo_2_2026-10-07_10-46-30.jpg",
  "/images/luna/photo_3_2026-10-07_10-46-30.jpg",
  "/images/luna/photo_4_2026-10-07_10-46-30.jpg",
  "/images/luna/photo_5_2026-10-07_10-46-30.jpg",
];

// Max images
const maxImages = [
  "/images/max/photo_1_2026-10-07_10-50-35.jpg",
  "/images/max/photo_2_2026-10-07_10-50-35.jpg",
  "/images/max/photo_3_2026-10-07_10-50-35.jpg",
  "/images/max/photo_4_2026-10-07_10-50-35.jpg",
  "/images/max/photo_5_2026-10-07_10-50-35.jpg",
];

// Bella images
const bellaImages = [
  "/images/bella/photo_4_2026-10-07_10-32-46.jpg",
];

const linkStyle: CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
  marginLeft: "clamp(12px, 3vw, 28px)",
  fontWeight: 600,
  fontSize: "clamp(14px, 2vw, 16px)",
};

const testimonialStyle: CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "clamp(20px, 5vw, 32px)",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  fontSize: "clamp(1rem, 2vw, 1.1rem)",
  lineHeight: 1.8,
  fontStyle: "italic",
  color: "#2d3748",
  borderLeft: "4px solid #d4a574",
};

const sectionTitleStyle: CSSProperties = {
  fontSize: "clamp(2rem, 7vw, 3rem)",
  fontWeight: 700,
  marginBottom: "16px",
  textAlign: "center",
  color: "#1a202c",
  letterSpacing: "-0.5px",
};

const subtitleStyle: CSSProperties = {
  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
  textAlign: "center",
  color: "#718096",
  margin: "0 auto clamp(30px, 8vw, 48px)",
  maxWidth: "600px",
};

const containerStyle: CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  paddingLeft: "20px",
  paddingRight: "20px",
};

const puppyCardStyle: CSSProperties = {
  background: "#ffffff",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
  cursor: "pointer",
};

export default async function Home() {
  const { data: puppies, error } = await supabase.from("puppies").select();

  if (error) {
    return (
      <main style={{ padding: "40px 20px", textAlign: "center" }}>
        <p style={{ color: "#e53e3e", fontSize: "18px" }}>Error loading puppies: {error.message}</p>
      </main>
    );
  }

  const puppyList = puppies ?? [];

  const getPuppyImage = (puppyName: string, index: number) => {
    const name = puppyName?.toLowerCase() || "";

    if (name.includes("luna")) {
      return lunaImages[index % lunaImages.length];
    }
    if (name.includes("max")) {
      return maxImages[index % maxImages.length];
    }
    if (name.includes("bella")) {
      return bellaImages[index % bellaImages.length];
    }

    return lunaImages[index % lunaImages.length];
  };

  return (
    <main style={{ fontFamily: "'Segoe UI', 'Trebuchet MS', sans-serif", background: "#fafaf9", color: "#1a202c" }}>
      <header
        style={{
          backgroundColor: "#1a202c",
          color: "#ffffff",
          padding: "clamp(16px, 4vw, 24px) clamp(20px, 5vw, 40px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "clamp(12px, 3vw, 20px)",
            flexWrap: "wrap",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "clamp(20px, 5vw, 28px)", fontWeight: 700, letterSpacing: "0.5px" }}>
            ✨ Tiny Paws Yorkies
          </h2>

          <nav aria-label="Main navigation" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(8px, 2vw, 12px)" }}>
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
          backgroundImage: "linear-gradient(135deg, rgba(26, 32, 44, 0.7) 0%, rgba(107, 114, 128, 0.6) 100%), url('/images/luna/photo_1_2026-10-07_10-46-30.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "clamp(500px, 80vh, 750px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, color: "white", maxWidth: "900px", padding: "clamp(30px, 5vw, 40px)" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 8vw, 5rem)",
              fontWeight: 800,
              margin: "0 0 clamp(16px, 4vw, 24px) 0",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Premium Yorkshire Terrier Puppies
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 1.8rem)",
              marginTop: "clamp(16px, 3vw, 20px)",
              marginBottom: "clamp(30px, 5vw, 40px)",
              fontWeight: 300,
              opacity: 0.95,
            }}
          >
            Exceptionally bred, health-certified, and raised with premium care
          </p>

          <a
            href="#puppies"
            style={{
              display: "inline-block",
              backgroundColor: "#d4a574",
              color: "#1a202c",
              padding: "clamp(12px, 3vw, 16px) clamp(30px, 5vw, 48px)",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "clamp(14px, 2vw, 18px)",
              boxShadow: "0 8px 24px rgba(212, 165, 116, 0.3)",
              border: "2px solid #d4a574",
            }}
          >
            Explore Our Puppies
          </a>
        </div>
      </section>

      <section id="about" style={{ padding: "clamp(60px, 12vw, 120px) 20px", backgroundColor: "#ffffff" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>About Tiny Paws Yorkies</h2>
          <div style={subtitleStyle}>Dedicated to excellence in Yorkshire Terrier breeding</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(24px, 5vw, 48px)",
              alignItems: "center",
              marginTop: "clamp(40px, 8vw, 60px)",
            }}
          >
            <div
              style={{
                backgroundImage: "url('/images/bella/photo_4_2026-10-07_10-32-46.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "300px",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            />

            <div>
              <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)", lineHeight: 1.9, color: "#4a5568", marginBottom: "20px" }}>
                At Tiny Paws Yorkies, we're passionate about breeding exceptional Yorkshire Terriers with perfect health, vibrant temperament, and beautiful conformation.
              </p>
              <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)", lineHeight: 1.9, color: "#4a5568", marginBottom: "20px" }}>
                Every puppy is born from champion bloodlines, vet-checked from day one, vaccinated, microchipped, and given early socialization to ensure they're ready for their forever families.
              </p>
              <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)", lineHeight: 1.9, color: "#4a5568" }}>
                We provide lifetime breeder support and a health guarantee because we stand behind every puppy we raise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(60px, 12vw, 120px) 20px", backgroundColor: "#f7fafc" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>Why Choose Tiny Paws Yorkies</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "clamp(20px, 4vw, 32px)",
              marginTop: "clamp(40px, 8vw, 60px)",
            }}
          >
            {[
              { icon: "🏆", title: "Champion Bloodlines", desc: "Puppies from award-winning parents" },
              { icon: "💉", title: "Health Guaranteed", desc: "Full vet checks and current vaccinations" },
              { icon: "🤝", title: "Lifetime Support", desc: "Breeder guidance for life" },
              { icon: "👶", title: "Early Socialization", desc: "Puppies ready to bond immediately" },
              { icon: "🏠", title: "Loving Environment", desc: "Raised in our family home" },
              { icon: "📋", title: "Certified Quality", desc: "CKC & AKC registered" },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  padding: "clamp(20px, 5vw, 32px)",
                  borderRadius: "16px",
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ fontSize: "clamp(32px, 8vw, 48px)", marginBottom: "16px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 700, marginBottom: "12px", color: "#1a202c" }}>{item.title}</h3>
                <p style={{ color: "#718096", fontSize: "clamp(0.9rem, 1.8vw, 1rem)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="puppies"
        style={{
          backgroundImage: "url('/images/luna/photo_2_2026-10-07_10-46-30.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#2d3748",
          padding: "clamp(60px, 12vw, 120px) 20px",
        }}
      >
        <div style={containerStyle}>
          <h2 style={{ ...sectionTitleStyle, color: "#ffffff" }}>Available Puppies</h2>
          <div style={{ ...subtitleStyle, color: "#cbd5e0" }}>Each puppy is bred for health, temperament, and beauty</div>

          {puppyList.length === 0 ? (
            <div style={{ textAlign: "center", color: "#cbd5e0", fontSize: "clamp(16px, 3vw, 18px)", padding: "clamp(40px, 8vw, 60px) 20px" }}>
              Check back soon for our latest litter!
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "clamp(20px, 4vw, 32px)",
                marginTop: "clamp(30px, 6vw, 40px)",
              }}
            >
              {puppyList.map((puppy: any, index: number) => (
                <article key={puppy.id} style={puppyCardStyle}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "clamp(220px, 50vw, 280px)",
                      overflow: "hidden",
                      backgroundColor: "#e2e8f0",
                    }}
                  >
                    <img
                      src={getPuppyImage(puppy.name, index)}
                      alt={puppy.name || "Yorkshire Terrier puppy"}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        backgroundColor: puppy.available ? "#48bb78" : "#f56565",
                        color: "#ffffff",
                        padding: "clamp(6px, 1.5vw, 8px) clamp(12px, 2vw, 16px)",
                        borderRadius: "20px",
                        fontSize: "clamp(12px, 1.5vw, 14px)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      {puppy.available ? "✓ Available" : "✗ Sold"}
                    </div>
                  </div>

                  <div style={{ padding: "clamp(16px, 4vw, 28px)" }}>
                    <h3 style={{ margin: "0 0 12px", fontSize: "clamp(1.4rem, 4vw, 1.8rem)", fontWeight: 700, color: "#1a202c" }}>
                      {puppy.name}
                    </h3>

                    <div style={{ display: "grid", gap: "8px", marginBottom: "16px" }}>
                      <p style={{ margin: "0", fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "#718096" }}>
                        <span style={{ fontWeight: 600, color: "#1a202c" }}>Age:</span> {puppy.age}
                      </p>
                      <p style={{ margin: "0", fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "#718096" }}>
                        <span style={{ fontWeight: 600, color: "#1a202c" }}>Price:</span> ${puppy.price?.toLocaleString() || "Contact"}
                      </p>
                    </div>

                    <p style={{ margin: "12px 0 0", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", color: "#a0aec0", borderTop: "1px solid #e2e8f0", paddingTop: "12px" }}>
                      ✓ Health Certified • ✓ Vaccinated • ✓ Microchipped
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section style={{ backgroundColor: "#ffffff", padding: "clamp(60px, 12vw, 120px) 20px" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>Happy Families</h2>
          <div style={subtitleStyle}>What our families say about their new companions</div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "clamp(20px, 4vw, 32px)",
              marginTop: "clamp(40px, 8vw, 60px)",
            }}
          >
            {[
              "Absolutely wonderful experience from start to finish. Our puppy is healthy, beautiful, and so well-socialized!",
              "The best decision we made. Tiny Paws Yorkies provided exceptional support throughout the entire process.",
              "Our little Yorkie has brought so much joy to our family. We can't thank you enough for such a premium puppy!",
            ].map((testimonial, idx) => (
              <div key={idx} style={testimonialStyle}>
                ⭐⭐⭐⭐⭐
                <p style={{ margin: "16px 0 0" }}>&quot;{testimonial}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          backgroundColor: "#1a202c",
          color: "#ffffff",
          padding: "clamp(60px, 12vw, 120px) 20px",
          textAlign: "center",
        }}
      >
        <div style={containerStyle}>
          <h2 style={{ margin: "0 0 16px", fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 700 }}>Get in Touch</h2>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#cbd5e0", marginBottom: "40px" }}>
            Ready to welcome a premium Yorkshire Terrier into your family?
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "clamp(16px, 3vw, 24px)",
              marginBottom: "clamp(30px, 6vw, 48px)",
              marginTop: "clamp(30px, 6vw, 40px)",
            }}
          >
            <div>
              <p style={{ fontSize: "clamp(12px, 1.5vw, 14px)", color: "#a0aec0", marginBottom: "8px" }}>EMAIL</p>
              <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.2rem)", fontWeight: 600 }}>info@tinypawsyorkies.com</p>
            </div>
            <div>
              <p style={{ fontSize: "clamp(12px, 1.5vw, 14px)", color: "#a0aec0", marginBottom: "8px" }}>PHONE</p>
              <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.2rem)", fontWeight: 600 }}>+237 679 409 897</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "clamp(12px, 2vw, 16px)", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:info@tinypawsyorkies.com"
              style={{
                display: "inline-block",
                backgroundColor: "#d4a574",
                color: "#1a202c",
                padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "clamp(14px, 2vw, 16px)",
                boxShadow: "0 8px 24px rgba(212, 165, 116, 0.3)",
              }}
            >
              Email Us
            </a>
            <a
              href="https://wa.me/237679409897"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#25D366",
                color: "#ffffff",
                padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 40px)",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "clamp(14px, 2vw, 16px)",
                boxShadow: "0 8px 24px rgba(37, 211, 102, 0.3)",
              }}
            >
              WhatsApp Message
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
          bottom: "clamp(16px, 3vw, 24px)",
          right: "clamp(16px, 3vw, 24px)",
          backgroundColor: "#25D366",
          color: "white",
          padding: "clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px)",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "clamp(12px, 1.8vw, 14px)",
          boxShadow: "0 12px 40px rgba(37, 211, 102, 0.4)",
          zIndex: 50,
        }}
      >
        💬 WhatsApp
      </a>

      <footer
        style={{
          backgroundColor: "#0f1419",
          color: "#a0aec0",
          textAlign: "center",
          padding: "clamp(16px, 3vw, 24px) 20px",
          fontSize: "clamp(12px, 1.5vw, 14px)",
        }}
      >
        <p style={{ margin: 0 }}>© 2024 Tiny Paws Yorkies. All rights reserved. | Premium Yorkshire Terrier Breeding</p>
      </footer>
    </main>
  );
}

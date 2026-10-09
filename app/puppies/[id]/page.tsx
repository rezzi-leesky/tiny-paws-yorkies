import { supabase } from "@/lib/supabase";
import Link from "next/link";
import PuppyGallery from "@/components/PuppyGallery";
import InquiryForm from "@/components/InquiryForm";
import type { CSSProperties } from "react";

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

const containerStyle: CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  paddingLeft: "20px",
  paddingRight: "20px",
};

const buttonStyle: CSSProperties = {
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
  textAlign: "center" as const,
};

const getPuppyImages = (puppyName: string) => {
  const name = puppyName?.toLowerCase() || "";
  if (name.includes("luna")) return lunaImages;
  if (name.includes("max")) return maxImages;
  if (name.includes("bella")) return bellaImages;
  return lunaImages;
};

const buildDescription = (name: string) => {
  const cleanName = name || "This puppy";
  return `${cleanName} is a sweet, well-socialized Yorkshire Terrier raised in a loving home environment. He or she is healthy, confident, and ready to become a cherished family companion with a gentle temperament, bright personality, and cute little character.`;
};

export default async function PuppyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data: puppy, error } = await supabase.from("puppies").select().eq("id", id).single();

  if (error || !puppy) {
    return (
      <main style={{ padding: "40px 20px", textAlign: "center", minHeight: "100vh" }}>
        <h1 style={{ color: "#8b1e1e", fontSize: "24px", marginBottom: "20px" }}>Puppy not found</h1>
        <Link href="/#puppies" style={{ color: "#c9a46d", textDecoration: "underline" }}>
          Back to all puppies
        </Link>
      </main>
    );
  }

  const puppyImages = getPuppyImages(puppy.name);
  const description = puppy.description || buildDescription(puppy.name);
  const facts = [
    { label: "Age", value: puppy.age },
    { label: "Price", value: `$${puppy.price?.toLocaleString() || "Contact"}` },
    ...(puppy.gender ? [{ label: "Gender", value: puppy.gender }] : []),
    ...(puppy.color ? [{ label: "Color", value: puppy.color }] : []),
  ];

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
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <h2
              style={{
                margin: 0,
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "0.04em",
                color: "#f7f1e6",
              }}
            >
              Tiny Paws Yorkies
            </h2>
          </Link>
          <Link href="/#puppies" style={{ color: "#f7f1e6", textDecoration: "none" }}>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>← Back to puppies</p>
          </Link>
        </div>
      </header>

      <section style={{ padding: "52px 20px 28px" }}>
        <div style={containerStyle}>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(201,164,109,0.12), rgba(255,255,255,0.7))",
              border: "1px solid rgba(25,25,24,0.08)",
              borderRadius: "26px",
              padding: "22px 18px",
              marginBottom: "28px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#7a6d5d",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontSize: "0.72rem",
                fontWeight: 700,
              }}
            >
              Puppy profile
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "36px",
              alignItems: "start",
            }}
          >
            <div>
              <PuppyGallery images={puppyImages} puppyName={puppy.name} />
            </div>

            <div>
              <div style={{ marginBottom: "24px" }}>
                <h1
                  style={{
                    margin: "0 0 16px",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(2.6rem, 6vw, 4rem)",
                    color: "#1b1a18",
                    lineHeight: 1,
                  }}
                >
                  {puppy.name}
                </h1>

                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: puppy.available ? "#3d7f59" : "#a25050",
                    color: "#ffffff",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {puppy.available ? "Available" : "Sold"}
                </div>
              </div>

              <div
                style={{
                  background: "#fffdf9",
                  border: "1px solid rgba(25, 25, 24, 0.08)",
                  borderRadius: "22px",
                  padding: "26px 22px",
                  marginBottom: "24px",
                  boxShadow: "0 12px 32px rgba(22, 22, 20, 0.08)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                    gap: "18px",
                  }}
                >
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <p
                        style={{
                          margin: "0 0 8px",
                          color: "#c9a46d",
                          fontSize: "0.78rem",
                          letterSpacing: "0.09em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                        }}
                      >
                        {fact.label}
                      </p>
                      <p style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700, color: "#1b1a18" }}>{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "#fffdf9",
                  border: "1px solid rgba(25, 25, 24, 0.08)",
                  borderRadius: "22px",
                  padding: "26px 22px",
                  marginBottom: "26px",
                  boxShadow: "0 12px 32px rgba(22, 22, 20, 0.08)",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 14px",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.7rem",
                    color: "#1b1a18",
                  }}
                >
                  About {puppy.name}
                </h3>
                <p style={{ margin: 0, color: "#5e5a54", lineHeight: 1.8, fontSize: "1.04rem" }}>{description}</p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                  gap: "12px",
                }}
              >
                <a href="mailto:info@tinypawsyorkies.com" style={buttonStyle}>
                  Email us
                </a>
                <a
                  href="https://wa.me/237679409897"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...buttonStyle,
                    background: "#25D366",
                    color: "#fff",
                    boxShadow: "0 12px 22px rgba(37, 211, 102, 0.25)",
                  }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 20px 90px" }}>
        <div style={containerStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              "✓ Health certified by veterinarian",
              "✓ Vaccinated and dewormed",
              "✓ Microchipped for safety",
              "✓ Socialized from day one",
              "✓ Raised in a calm, loving home",
              "✓ Lifetime breeder support included",
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fffdf9",
                  border: "1px solid rgba(25,25,24,0.08)",
                  borderRadius: "18px",
                  padding: "24px 20px",
                  boxShadow: "0 12px 32px rgba(22, 22, 20, 0.08)",
                  color: "#4b4743",
                  lineHeight: 1.7,
                  fontSize: "1rem",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div style={containerStyle}>
          <InquiryForm puppyName={puppy.name} puppyId={puppy.id} />
        </div>
      </section>

      <section
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(17,15,13,0.86) 0%, rgba(52,48,44,0.82) 100%), url('/images/luna/photo_3_2026-10-07_10-46-30.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#f7f1e6",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <div style={containerStyle}>
          <h2 style={{ margin: "0 0 18px", fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
            Ready to meet {puppy.name}?
          </h2>
          <p style={{ maxWidth: "640px", margin: "0 auto 30px", lineHeight: 1.8, fontSize: "1.08rem", color: "rgba(255,255,255,0.8)" }}>
            We would love to help you bring this sweet companion home and answer any questions about temperament, care, and next steps.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a href="mailto:info@tinypawsyorkies.com" style={buttonStyle}>
              Email us
            </a>
            <a
              href="https://wa.me/237679409897"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...buttonStyle,
                background: "#25D366",
                color: "#fff",
                boxShadow: "0 12px 22px rgba(37, 211, 102, 0.25)",
              }}
            >
              WhatsApp now
            </a>
          </div>
        </div>
      </section>

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

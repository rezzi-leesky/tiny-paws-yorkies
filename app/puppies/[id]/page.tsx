import { supabase } from "@/lib/supabase";
import Link from "next/link";
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

const getPuppyImages = (puppyName: string) => {
  const name = puppyName?.toLowerCase() || "";
  if (name.includes("luna")) return lunaImages;
  if (name.includes("max")) return maxImages;
  if (name.includes("bella")) return bellaImages;
  return lunaImages;
};

const buildDescription = (name: string) => {
  const cleanName = name || "This puppy";
  return `${cleanName} is a sweet, well-socialized Yorkshire Terrier raised in a loving home environment. He or she is healthy, confident, and ready to become a cherished family companion with a gentle temperament and adorable personality.`;
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

      <section style={{ padding: "50px 20px" }}>
        <div style={containerStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  position: "relative",
                  height: "500px",
                  backgroundColor: "#e6dfd3",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(32,35,28,0.18)",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={puppyImages[0]}
                  alt={puppy.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
                  gap: "10px",
                }}
              >
                {puppyImages.map((image: string, idx: number) => (
                  <div
                    key={`${puppy.id}-${idx}`}
                    style={{
                      height: "85px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "2px solid #c9a46d",
                      boxShadow: "0 4px 12px rgba(22, 22, 20, 0.08)",
                    }}
                  >
                    <img src={image} alt={`${puppy.name} photo ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <h1
                    style={{
                      margin: "0 0 12px",
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "3.2rem",
                      color: "#1b1a18",
                    }}
                  >
                    {puppy.name}
                  </h1>
                  <div
                    style={{
                      backgroundColor: puppy.available ? "#3d7f59" : "#a25050",
                      color: "#ffffff",
                      padding: "8px 14px",
                      borderRadius: "999px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      display: "inline-block",
                    }}
                  >
                    {puppy.available ? "Available" : "Sold"}
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "#fffdf9",
                  border: "1px solid rgba(25, 25, 24, 0.08)",
                  borderRadius: "18px",
                  padding: "28px 24px",
                  marginBottom: "24px",
                  boxShadow: "0 12px 32px rgba(22, 22, 20, 0.08)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "24px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "#c9a46d",
                        fontSize: "0.9rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      Age
                    </p>
                    <p style={{ margin: 0, fontSize: "1.3rem", fontWeight: 600, color: "#1b1a18" }}>{puppy.age}</p>
                  </div>

                  <div>
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "#c9a46d",
                        fontSize: "0.9rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      Price
                    </p>
                    <p style={{ margin: 0, fontSize: "1.3rem", fontWeight: 600, color: "#1b1a18" }}>${puppy.price?.toLocaleString() || "Contact"}</p>
                  </div>

                  {puppy.gender && (
                    <div>
                      <p
                        style={{
                          margin: "0 0 8px",
                          color: "#c9a46d",
                          fontSize: "0.9rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        Gender
                      </p>
                      <p style={{ margin: 0, fontSize: "1.3rem", fontWeight: 600, color: "#1b1a18" }}>{puppy.gender}</p>
                    </div>
                  )}

                  {puppy.color && (
                    <div>
                      <p
                        style={{
                          margin: "0 0 8px",
                          color: "#c9a46d",
                          fontSize: "0.9rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        Color
                      </p>
                      <p style={{ margin: 0, fontSize: "1.3rem", fontWeight: 600, color: "#1b1a18" }}>{puppy.color}</p>
                    </div>
                  )}
                </div>
              </div>

              <div
                style={{
                  background: "#fffdf9",
                  border: "1px solid rgba(25, 25, 24, 0.08)",
                  borderRadius: "18px",
                  padding: "28px 24px",
                  marginBottom: "24px",
                  boxShadow: "0 12px 32px rgba(22, 22, 20, 0.08)",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 16px",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.5rem",
                    color: "#1b1a18",
                  }}
                >
                  About {puppy.name}
                </h3>
                <p style={{ margin: 0, color: "#5e5a54", lineHeight: 1.8, fontSize: "1.05rem" }}>{description}</p>
              </div>

              <div
                style={{
                  background: "#fffdf9",
                  border: "1px solid rgba(25, 25, 24, 0.08)",
                  borderRadius: "18px",
                  padding: "28px 24px",
                  marginBottom: "24px",
                  boxShadow: "0 12px 32px rgba(22, 22, 20, 0.08)",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 16px",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.5rem",
                    color: "#1b1a18",
                  }}
                >
                  Health & Care
                </h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#5e5a54", lineHeight: 1.8 }}>
                  <li style={{ marginBottom: "8px" }}>Health certified by veterinarian</li>
                  <li style={{ marginBottom: "8px" }}>Vaccinated and dewormed</li>
                  <li style={{ marginBottom: "8px" }}>Microchipped for safety</li>
                  <li style={{ marginBottom: "8px" }}>Socialized from day one</li>
                  <li>Lifetime breeder support included</li>
                </ul>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <a
                  href="mailto:info@tinypawsyorkies.com"
                  style={{
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
                    textAlign: "center",
                  }}
                >
                  Email us
                </a>
                <a
                  href="https://wa.me/237679409897"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    background: "#25D366",
                    color: "#fff",
                    padding: "14px 30px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    fontSize: "0.82rem",
                    boxShadow: "0 12px 22px rgba(37, 211, 102, 0.25)",
                    textAlign: "center",
                  }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
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

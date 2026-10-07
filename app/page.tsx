import { supabase } from "@/lib/supabase";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Puppies", href: "#puppies" },
  { label: "Contact", href: "#contact" },
];

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  marginLeft: "20px",
  fontWeight: 500,
};

const testimonialStyle = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  fontSize: "1.05rem",
  lineHeight: "1.7",
};

const sectionTitleStyle = {
  fontSize: "2.5rem",
  marginBottom: "24px",
  textAlign: "center",
  color: "#111827",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

export default async function Home() {
  const { data: puppies, error } = await supabase.from("puppies").select();

  if (error) {
    return <main style={{ padding: "40px 20px" }}>Error: {error.message}</main>;
  }

  const puppyList = puppies ?? [];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f9fafb", color: "#111827" }}>
      <header
        style={{
          backgroundColor: "#111827",
          color: "#ffffff",
          padding: "20px 40px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Tiny Paws Yorkies</h2>

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
          backgroundImage: "url('/images/puppy2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            color: "white",
            maxWidth: "900px",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            Premium Yorkshire Terrier Puppies
          </h1>

          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              marginTop: "20px",
            }}
          >
            Healthy, happy puppies raised with love and care.
          </p>
        </div>
      </section>

      <section id="about" style={{ padding: "80px 20px" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>About Tiny Paws Yorkies</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                backgroundImage: "url('/images/puppy4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "320px",
                borderRadius: "16px",
              }}
            />

            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", margin: 0 }}>
                At Tiny Paws Yorkies, we focus on raising healthy, well-socialized Yorkshire
                Terrier puppies. Every puppy receives exceptional care, veterinary attention,
                and early socialization before joining a new family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="puppies"
        style={{
          backgroundImage: "url('/images/puppy3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f3f4f6",
          padding: "80px 20px",
        }}
      >
        <div style={containerStyle}>
          <h2 style={{ ...sectionTitleStyle, color: "#ffffff" }}>Available Puppies</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginTop: "30px",
            }}
          >
            {puppyList.map((puppy: any) => (
              <article
                key={puppy.id}
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src={puppy.image_url || "/images/puppy2.jpg"}
                  alt={puppy.name || "Yorkshire Terrier puppy"}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "20px" }}>
                  <h3 style={{ margin: "0 0 12px", fontSize: "1.6rem" }}>{puppy.name}</h3>
                  <p style={{ margin: "6px 0" }}>Age: {puppy.age}</p>
                  <p style={{ margin: "6px 0" }}>Price: ${puppy.price}</p>
                  <p style={{ margin: "6px 0" }}>
                    {puppy.available ? "✅ Available" : "❌ Sold"}
                  </p>
                  <p style={{ margin: "12px 0 0", color: "#4b5563" }}>
                    CKC/AKC Quality • Vet Checked • Vaccinations Current
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 20px", backgroundColor: "#ffffff" }}>
        <div style={containerStyle}>
          <h2 style={{ ...sectionTitleStyle, marginBottom: "20px" }}>Why Families Choose Us</h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "25px auto 0",
              maxWidth: "800px",
              lineHeight: "2.2",
              fontSize: "1.1rem",
            }}
          >
            <li>• Health-checked puppies</li>
            <li>• Early socialization</li>
            <li>• Ongoing breeder support</li>
            <li>• Clean and loving environment</li>
            <li>• Beautiful Yorkshire Terrier bloodlines</li>
          </ul>
        </div>
      </section>

      <section style={{ backgroundColor: "#f9fafb", padding: "80px 20px" }}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>Happy Families</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "24px",
              marginTop: "30px",
            }}
          >
            <div style={testimonialStyle}>“Wonderful breeder and an amazing Yorkie puppy.”</div>
            <div style={testimonialStyle}>“Excellent communication from start to finish.”</div>
            <div style={testimonialStyle}>
              “Healthy, beautiful puppy that fit perfectly into our family.”
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          backgroundColor: "#111827",
          color: "#ffffff",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <div style={containerStyle}>
          <h2 style={{ margin: 0, fontSize: "2.5rem" }}>Contact Us</h2>

          <p style={{ marginTop: "20px", fontSize: "1.1rem" }}>Email: info@tinypawsyorkies.com</p>
          <p style={{ fontSize: "1.1rem" }}>Phone: +237679409897</p>

          <a
            href="mailto:info@tinypawsyorkies.com"
            style={{
              display: "inline-block",
              marginTop: "25px",
              backgroundColor: "#f59e0b",
              color: "#111827",
              padding: "14px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Get In Touch
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/237679409897"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "14px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          display: "inline-block",
          fontWeight: 700,
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          zIndex: 20,
        }}
      >
        WhatsApp Us
      </a>
    </main>
  );
}

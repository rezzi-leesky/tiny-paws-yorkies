import { supabase } from "@/lib/supabase";
import Image from "next/image";

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  marginLeft: "20px",
};

const testimonialStyle = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};

export default async function Home() {
  const { data: puppies, error } = await supabase.from("puppies").select();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
  <section
style={{
padding: "60px 20px",
background: "#f5f5f5",
}}
>
<h2
style={{
textAlign: "center",
marginBottom: "30px",
}}
>
Available Puppies
</h2>
 
<div
style={{
display: "flex",
gap: "20px",
flexWrap: "wrap",
justifyContent: "center",
}}
>
{puppies?.map((puppy) => (
<div
     key={puppy.id}>
{puppy.image_url && (
  <Image
    src={puppy.image_url}
    alt={puppy.name}
    width={250}
    height={200}
    style={{ objectFit: "cover", borderRadius: "12px" }}
  />
)}
<h3>{puppy.name}</h3>
 
<p>Age: {puppy.age}</p>
 
<p>Price: ${puppy.price}</p>
 
<p>
{puppy.available ? "✅ Available" : "❌ Sold"}
</p>

</div>
))}
</div>
</section>

      <header
        style={{
          backgroundColor: "#111827",
          color: "#ffffff",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Tiny Paws Yorkies</h2>

          <nav>
            <a href="#about" style={linkStyle}>
              About
            </a>
            <a href="#puppies" style={linkStyle}>
              Puppies
            </a>
            <a href="#contact" style={linkStyle}>
              Contact
            </a>
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
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
            }}
          >
            Premium Yorkshire Terrier Puppies
          </h1>

          <p
            style={{
              fontSize: "1.5rem",
              marginTop: "20px",
            }}
          >
            Healthy, Happy and Raised with Love
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "80px 20px",
        }}
      >
        <h2>Our Puppies</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {puppies?.map((puppy) => (
            <div 
            
              key={puppy.id}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "20px",
                width: "300px",
boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
textAlign: "center",
}}
>
<h3>{puppy.name}</h3>
 
<p>Age: {puppy.age}</p>
 
<p>Price: ${puppy.price}</p>
 
<p>
{puppy.available ? "✅ Available" : "❌ Sold"}
</p>
</div>
))}
        </div>
        <p
          style={{
            fontSize: "1.3rem",
          }}
        >
          Raised with love and ready for their forever homes
        </p>
      </section>

      <section
        id="about"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <h2>About Tiny Paws Yorkies</h2>

        <p
          style={{
            backgroundImage: "url('/images/puppy4.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginTop: "20px",
            lineHeight: "1.8",
          }}
        >
          At Tiny Paws Yorkies, we focus on raising healthy, well-socialized
          Yorkshire Terrier puppies. Every puppy receives exceptional care,
          veterinary attention, and early socialization before joining a new
          family.
        </p>
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
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2>Available Puppies</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginTop: "30px",
            }}
          >
            
            {puppies?.map((puppy) => (
  <div
    key={puppy.id}
    style={{
      background: "#fff",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      width: "300px",
    }}
    ></div>
<img
  src={puppy.image_url}
  alt="Puppy"
  style={{ height: "220px", objectFit: "cover" }}
/>
      <p>   CKC/AKC Quality • Vet Checked • Vaccinations Current
      </p>
    </div>
  </div>
))}
      </section>

      <section
        style={{
          backgroundImage: "url('/images/puppy2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2>Why Families Choose Us</h2>

        <ul
          style={{
            marginTop: "25px",
            lineHeight: "2",
          }}
        >
          <li>Health-checked puppies</li>
          <li>Early socialization</li>
          <li>Ongoing breeder support</li>
          <li>Clean and loving environment</li>
          <li>Beautiful Yorkshire Terrier bloodlines</li>
        </ul>
      </section>

      <section
        style={{
          backgroundColor: "#f9fafb",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2>Happy Families</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "24px",
              marginTop: "30px",
            }}
          >
            <div style={testimonialStyle}>
              “Wonderful breeder and an amazing Yorkie puppy.”
            </div>

            <div style={testimonialStyle}>
              “Excellent communication from start to finish.”
            </div>

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
        <h2>Contact Us</h2>

        <p style={{ marginTop: "20px" }}>
          Email: info@tinypawsyorkies.com
        </p>

        <p>Phone: +237679409897</p>

        <button
          style={{
            marginTop: "25px",
            backgroundColor: "#f59e0b",
            padding: "14px 30px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Get In Touch
        </button>
      </section>

      <div style={{ color: "white", padding: "20px" }}>
        <h2>Database Test</h2>

        {puppies?.map((puppy: { id: number; name: string }) => (
          <p key={puppy.id}>{puppy.name}</p>
        ))}
      </div>
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
marginTop: "20px",
}}
>
WhatsApp Us
</a>
  </main>
  );
}

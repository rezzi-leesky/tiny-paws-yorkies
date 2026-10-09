"use client";

import { useState } from "react";

export default function InquiryForm({ puppyName, puppyId }: { puppyName: string; puppyId: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, puppyName, puppyId }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        background: "linear-gradient(135deg, #fffdf9 0%, #faf8f3 100%)",
        border: "1px solid rgba(25,25,24,0.08)",
        borderRadius: "28px",
        padding: "40px 32px",
        boxShadow: "0 20px 50px rgba(22, 22, 20, 0.12)",
      }}
    >
      <h2
        style={{
          margin: "0 0 12px",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "2rem",
          color: "#1b1a18",
          textAlign: "center",
        }}
      >
        Request {puppyName}
      </h2>
      <p
        style={{
          margin: "0 0 30px",
          color: "#7a6d5d",
          textAlign: "center",
          fontSize: "1rem",
          lineHeight: 1.6,
        }}
      >
        Fill out the form below and we'll get back to you shortly with details about meeting {puppyName}!
      </p>

      {submitted && (
        <div
          style={{
            background: "#e8f5e9",
            border: "1px solid #4caf50",
            borderRadius: "12px",
            padding: "14px 16px",
            marginBottom: "20px",
            color: "#2e7d32",
            fontSize: "0.95rem",
            textAlign: "center",
          }}
        >
          ✓ Thank you! We'll be in touch soon.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "18px" }}>
        <div>
          <label
            htmlFor="name"
            style={{
              display: "block",
              margin: "0 0 8px",
              color: "#c9a46d",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid rgba(25,25,24,0.12)",
              borderRadius: "10px",
              fontSize: "1rem",
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            style={{
              display: "block",
              margin: "0 0 8px",
              color: "#c9a46d",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid rgba(25,25,24,0.12)",
              borderRadius: "10px",
              fontSize: "1rem",
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            style={{
              display: "block",
              margin: "0 0 8px",
              color: "#c9a46d",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid rgba(25,25,24,0.12)",
              borderRadius: "10px",
              fontSize: "1rem",
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            style={{
              display: "block",
              margin: "0 0 8px",
              color: "#c9a46d",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid rgba(25,25,24,0.12)",
              borderRadius: "10px",
              fontSize: "1rem",
              fontFamily: "inherit",
              boxSizing: "border-box",
              resize: "vertical",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            background: "#c9a46d",
            color: "#1a1a18",
            padding: "14px 30px",
            borderRadius: "999px",
            border: "none",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontSize: "0.82rem",
            boxShadow: "0 12px 22px rgba(201, 164, 109, 0.25)",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Sending..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}

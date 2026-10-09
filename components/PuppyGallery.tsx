"use client";

import { useState } from "react";

export default function PuppyGallery({
  images,
  puppyName,
}: {
  images: string[];
  puppyName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images.length) return null;

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "520px",
          backgroundColor: "#e6dfd3",
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 22px 60px rgba(32,35,28,0.18)",
          marginBottom: "18px",
        }}
      >
        <img
          src={images[activeIndex]}
          alt={`${puppyName} photo ${activeIndex + 1}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.1))",
          }}
        />

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          style={{
            position: "absolute",
            left: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "42px",
            height: "42px",
            borderRadius: "999px",
            border: "none",
            background: "rgba(17,15,13,0.72)",
            color: "#fff",
            fontSize: "1.4rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ←
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          style={{
            position: "absolute",
            right: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "42px",
            height: "42px",
            borderRadius: "999px",
            border: "none",
            background: "rgba(17,15,13,0.72)",
            color: "#fff",
            fontSize: "1.4rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          →
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
          gap: "12px",
        }}
      >
        {images.map((image, idx) => (
          <button
            key={`${puppyName}-${idx}`}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`View image ${idx + 1}`}
            style={{
              height: "88px",
              borderRadius: "14px",
              overflow: "hidden",
              border: idx === activeIndex ? "2px solid #c9a46d" : "1px solid rgba(25,25,24,0.08)",
              boxShadow: "0 8px 18px rgba(22, 22, 20, 0.08)",
              padding: 0,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <img
              src={image}
              alt={`${puppyName} photo ${idx + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

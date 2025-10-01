"use client";

import DonateButton from "../components/DonateButton";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#ffffff", backgroundColor: "#000000" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          PhilMirrorEnginei.Ai
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#dddddd" }}>
          Taking The Artificial Out Of AI
        </p>
      </section>

      {/* Story Section */}
      <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2>Our Story: From Family Project to Future Technology</h2>
        <p>
          PhilMirrorEnginei.Ai began in a garage, not a laboratory. The first spark
          wasn’t lines of code, it was a simple need: a safe and reliable kayak trailer
          to carry a family together on the water. That trailer became more than just
          a frame on wheels — it was a symbol of balance, stability, and shared journeys.
        </p>
      </section>

      {/* Chat Box Placeholder */}
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <div style={{
          border: "1px solid #444",
          borderRadius: "8px",
          padding: "1rem",
          backgroundColor: "#111111",
          color: "#ffffff"
        }}>
          <p>[Dave AI Chat Component will render here]</p>
        </div>
      </section>

      {/* Donate Button */}
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <DonateButton />
      </section>
    </main>
  );
}

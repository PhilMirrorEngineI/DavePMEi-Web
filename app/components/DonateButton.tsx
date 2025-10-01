"use client";

import { useState } from "react";

export default function DonateButton() {
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 500 }), // example: $5.00
      });

      if (!res.ok) throw new Error("Failed to create checkout session");

      const { url } = await res.json();
      if (url) {
        window.location.href = url; // redirect to Stripe Checkout
      }
    } catch (err) {
      console.error("Error starting checkout:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDonate}
      disabled={loading}
      className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      {loading ? "Redirecting..." : "Donate $5"}
    </button>
  );
}

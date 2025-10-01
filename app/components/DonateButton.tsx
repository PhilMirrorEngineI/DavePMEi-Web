"use client"
import { useState } from "react"

export default function DonateButton() {
  const [loading, setLoading] = useState(false)

  const handleDonate = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 500 }), // £5
      })

      const { url } = await res.json()

      if (url) {
        // Open Stripe in modal-like overlay
        const stripeWindow = window.open(url, "stripe-checkout", "width=500,height=700")
        if (!stripeWindow) {
          window.location.href = url // fallback
        }
      }
    } catch (err) {
      console.error("Donation failed:", err)
    }
    setLoading(false)
  }

  return (
    <button
      onClick={handleDonate}
      disabled={loading}
      style={{
        backgroundColor: "#000000",
        color: "#ffdf00",
        border: "1px solid #ffdf00",
        borderRadius: "6px",
        padding: "0.75rem 1.5rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {loading ? "Processing…" : "Donate £5"}
    </button>
  )
}

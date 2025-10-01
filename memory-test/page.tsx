"use client"

import { useState } from "react"

export default function MemoryTestPage() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchMemories = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/get_memory")
      const data = await res.json()
      setResult(data)
    } catch (err: any) {
      setResult({ error: err.message })
    }
    setLoading(false)
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>PMEi Memory Test</h1>
      <p>This page checks if DaveWeb is connecting to your memory API correctly.</p>
      <button
        onClick={fetchMemories}
        disabled={loading}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          border: "1px solid black",
          background: "white",
          cursor: "pointer",
        }}
      >
        {loading ? "Loading..." : "Retrieve Last Memories"}
      </button>

      {result && (
        <pre
          style={{
            marginTop: "2rem",
            padding: "1rem",
            background: "#f4f4f4",
            border: "1px solid #ddd",
            borderRadius: "6px",
            maxHeight: "400px",
            overflow: "auto",
            fontSize: "0.9rem",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  )
}

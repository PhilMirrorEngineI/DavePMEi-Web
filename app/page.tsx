"use client"

import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DaveChat } from "@/components/dave-chat"
import { DonateSection } from "@/components/donate-section"

// --- Icons ---
function MessageSquareIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  )
}

function CheckCircle2Icon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  )
}

// --- Main Page ---
export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [selectedLLM, setSelectedLLM] = useState("OpenAI/ChatGPT")

  const handleLogin = () => {
    if (loginEmail && loginPassword) {
      setIsLoggedIn(true)
      setShowLoginModal(false)
      setLoginEmail("")
      setLoginPassword("")
    }
  }

  const handleRegister = () => {
    if (loginEmail && loginPassword) {
      setIsLoggedIn(true)
      setShowLoginModal(false)
      setLoginEmail("")
      setLoginPassword("")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90" />

        {/* Futuristic cityscape */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.xRK-gw_DS73msao6xJPGoczP0pFyTE1dU6PbCayX_PI-4oJMYAYiiXnauEw2A7VuBHf3ljjDuf.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            animation: "gridMove 30s linear infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b-2 border-yellow-400/20 bg-black/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.GwNz6q042q_sPETdZPRonT61_W-LXh7agwIsXVJghbs-dg6TzS74GRxqqHOYqaNDPs0t8nuERq.jpeg"
                alt="PhilMirrorEngineI.Ai Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">PhilMirrorEngineI.Ai</span>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedLLM}
                onChange={(e) => setSelectedLLM(e.target.value)}
                className="px-3 py-2 rounded bg-black text-white border border-yellow-400"
              >
                <option value="OpenAI/ChatGPT">OpenAI/ChatGPT</option>
              </select>
              <button
                onClick={
                  isLoggedIn
                    ? handleLogout
                    : () => {
                        setShowLoginModal(true)
                        setAuthMode("login")
                      }
                }
                className={`px-4 py-2 rounded border text-sm font-bold ${
                  isLoggedIn
                    ? "border-red-500 bg-red-500/20 text-red-400 hover:bg-red-500/30"
                    : "border-yellow-400 bg-black text-white hover:border-yellow-300 hover:text-yellow-300"
                }`}
              >
                {isLoggedIn ? "Logout" : "Login / Register"}
              </button>
            </div>
          </div>
        </header>

        {/* Sections go here */}
        {/* 👉 Keep your features, story, cards, chat, donate, footer as before */}

        {/* Footer */}
        <footer className="border-t-2 border-yellow-400/20 py-12 bg-black/80">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <p className="text-sm text-white/60">© 2025 PhilMirrorEngineI.Ai</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-white/60 hover:text-yellow-400">Privacy</a>
              <a href="#" className="text-sm text-white/60 hover:text-yellow-400">Terms</a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-white/80">
            Concepted, coded and provided by Philip J Garry
          </div>
          <div className="mt-8 flex justify-center">
            <DonateSection />
          </div>
        </footer>
      </div>

      {/* Dave Chat Widget */}
      <DaveChat />

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="bg-black/80 border-2 border-yellow-400 p-6 rounded-lg w-96 relative">
            <h2 className="text-yellow-400 text-xl font-bold mb-4 text-center">
              {authMode === "login" ? "Login" : "Register"}
            </h2>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Email"
              className="w-full mb-3 px-3 py-2 rounded bg-black text-white border border-yellow-400"
            />
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
              className="w-full mb-3 px-3 py-2 rounded bg-black text-white border border-yellow-400"
            />
            <button
              onClick={authMode === "login" ? handleLogin : handleRegister}
              className="w-full py-2 rounded bg-yellow-400 text-black font-bold"
            >
              {authMode === "login" ? "Login" : "Register"}
            </button>
          </div>
        </div>
      )}

      {/* Grid animation */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}

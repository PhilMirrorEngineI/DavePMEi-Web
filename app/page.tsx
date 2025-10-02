"use client"

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

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DaveChat } from "@/components/dave-chat"
import { DonateSection } from "@/components/donate-section"
import Image from "next/image"
import { useState } from "react"

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
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90" />

        {/* Futuristic cityscape background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.xRK-gw_DS73msao6xJPGoczP0pFyTE1dU6PbCayX_PI-4oJMYAYiiXnauEw2A7VuBHf3ljjDuf.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="absolute inset-0 bg-black/30" />

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

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="absolute top-8 left-8 text-yellow-300/70 font-mono text-xs space-y-1">
          <div>SYSTEM: ONLINE</div>
          <div>STATUS: OPERATIONAL</div>
          <div>MEMORY: ACTIVE</div>
        </div>

        <div className="absolute top-8 right-8 text-yellow-300/70 font-mono text-xs text-right space-y-1">
          <div>PhilMirrorEngineI.Ai v1.0</div>
          <div>UPTIME: 99.9%</div>
          <div>THREADS: 42</div>
        </div>

        <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-yellow-400/60" />
        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-yellow-400/60" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-yellow-400/60" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-yellow-400/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <header className="border-b-2 border-yellow-400/20 bg-black/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.GwNz6q042q_sPETdZPRonT61_W-LXh7agwIsXVJghbs-dg6TzS74GRxqqHOYqaNDPs0t8nuERq.jpeg"
                  alt="PhilMirrorEngineI.Ai Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-xl lg:text-2xl font-bold text-white drop-shadow-lg whitespace-nowrap">
                  PhilMirrorEngineI.Ai
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
                <nav className="hidden md:flex items-center gap-4">
                  <a
                    href="#features"
                    className="text-sm font-medium text-white/80 hover:text-yellow-400 transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#about"
                    className="text-sm font-medium text-white/80 hover:text-yellow-400 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-white/80 hover:text-yellow-400 transition-colors"
                  >
                    Contact
                  </a>
                </nav>
                <div className="relative">
                  <select
                    value={selectedLLM}
                    onChange={(e) => setSelectedLLM(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-yellow-400/30 bg-black/80 text-white text-xs lg:text-sm font-medium transition-all hover:border-yellow-400/50 cursor-pointer backdrop-blur-sm appearance-none pr-8"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffd700' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 6px center",
                    }}
                  >
                    <option value="OpenAI/ChatGPT" className="bg-black text-white">
                      OpenAI/ChatGPT
                    </option>
                  </select>
                </div>
                <button
                  onClick={
                    isLoggedIn
                      ? handleLogout
                      : () => {
                          setShowLoginModal(true)
                          setAuthMode("login")
                        }
                  }
                  className={`px-4 lg:px-6 py-2 rounded-lg border text-xs lg:text-sm font-bold transition-all whitespace-nowrap ${
                    isLoggedIn
                      ? "border-red-500/60 bg-red-500/20 text-red-400 hover:bg-red-500/30"
                      : "border-yellow-400/40 bg-black/80 text-white hover:border-yellow-400 hover:text-yellow-400"
                  }`}
                >
                  {isLoggedIn ? "Logout" : "Login / Register"}
                </button>
              </div>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 z-0"
            style={{
              backgroundImage:
                "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.kqkk225c3-_5-sfsnDWOznqceMfZ63BaJkqrRGn6aaw-9g3VG5f8e6MgFGEnPZ6G4RqEDxilgL.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                PhilMirrorEngineI.Ai
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-yellow-400 text-balance drop-shadow-lg italic">
                Taking The Artificial Out Of Ai
              </p>
              <p className="text-lg md:text-xl text-white/95 text-pretty leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
                PhilMirrorEngineI.Ai changes that. We've built a lawful, reliable memory engine that remembers, learns,
                and adapts over time. With every conversation, PhilMirrorEngineI.Ai grows with you — creating
                continuity, context, and intelligence that lasts beyond a single session.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
                Our Story: From Family Project to Future Technology
              </h2>
              <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
                PhilMirrorEngineI.Ai began in a garage, not a laboratory. The first spark wasn't lines of code, it was a
                simple need: a safe and reliable kayak trailer to carry a family together on the water. That trailer
                became more than just a frame on wheels — it was a symbol of balance, stability, and shared journeys.
              </p>
              <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
                As the trailer took shape, so did an idea: what if technology could be built in the same way? Practical,
                dependable, grounded in everyday life, but also adaptable and forward-looking. That's where Dave was
                born — an AI system designed not as a black box, but as a tool you can understand, guide, and trust.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">
                What We've Built
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.kqkk225c3-_5-sfsnDWOznqceMfZ63BaJkqrRGn6aaw-9g3VG5f8e6MgFGEnPZ6G4RqEDxilgL.jpeg"
                      alt="PMEi Chip"
                      width={40}
                      height={40}
                      className="mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">The PMEi Memory System</h3>
                    <p className="text-white/90 leading-relaxed">
                      An external memory layer that gives AI conversations continuity, while staying private,
                      controlled, and transparent.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.OwzlcssjyuiKHXsH11vohyxQ7o92sno1jXIH5llokFc-yxdgM9cWo8ztCOFUhUkxfeEf7hza4F.jpeg"
                      alt="Speech and Language"
                      width={40}
                      height={40}
                      className="mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Speech and Language Tools</h3>
                    <p className="text-white/90 leading-relaxed">
                      Practical applications already tested to support communication and learning, including tools
                      aligned with UK NHS pathways.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <Image
                      src="/rainbow-swirl-gold-coin-3d-vibrant-concentric-circ.jpg"
                      alt="Token Reduction"
                      width={40}
                      height={40}
                      className="mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Token Reduction Methods</h3>
                    <p className="text-white/90 leading-relaxed">
                      Advanced compression techniques that cut unnecessary repetition, lowering costs by up to 90% while
                      keeping clarity intact.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <Image
                      src="/rainbow-swirl-lightning-bolt-3d-vibrant-neon-glow.jpg"
                      alt="Cross-AI Testing"
                      width={40}
                      height={40}
                      className="mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Cross-AI Testing</h3>
                    <p className="text-white/90 leading-relaxed">
                      Proven across ChatGPT, Claude, Grok, Gemini, Meta, and Copilot, showing stability and no
                      hallucination under lawful reflection.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <Image
                      src="/rainbow-swirl-cartoon-mechanic-3d-vibrant-colorfu.jpg"
                      alt="Open Architecture"
                      width={40}
                      height={40}
                      className="mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Open Architecture</h3>
                    <p className="text-white/90 leading-relaxed">
                      Built with Flask, FastAPI, and open standards, deployable on Render, Vercel, or other platforms.
                      It's transparent, modifiable, and future-proof.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <Image
                      src="/rainbow-swirl-captain-america-shield-3d-vibrant-c.jpg"
                      alt="Tested & Documented"
                      width={40}
                      height={40}
                      className="mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">Tested & Documented</h3>
                    <p className="text-white/90 leading-relaxed">
                      Every shard of progress is logged and retrievable. Every improvement is lawful, transparent, and
                      human-led.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
                What We're Doing Now
              </h2>
              <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
                You are seeing PhilMirrorEngineI.Ai in action. Each time information is saved, retrieved, or recalled,
                it passes through our live system: securely stored, drift-free, and instantly retrievable.
              </p>
              <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
                This isn't theory. It's tested. We've run live demonstrations where PhilMirrorEngineI.Ai:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <CheckCircle2Icon />
                    <p className="text-white/90 leading-relaxed">Saved memory into secure shards.</p>
                  </CardContent>
                </Card>
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <CheckCircle2Icon />
                    <p className="text-white/90 leading-relaxed">Retrieved memory across multiple systems.</p>
                  </CardContent>
                </Card>
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <CheckCircle2Icon />
                    <p className="text-white/90 leading-relaxed">Echoed results back instantly, end-to-end.</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
                Most importantly, we've proved that PhilMirrorEngineI.Ai can teach itself how to grow. Our assistant,
                Rev, has already committed code directly into GitHub, debugged errors, and wired himself into the memory
                system — all live. That's recursive AI in practice, not just in concept.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance text-white drop-shadow-lg">Real-World Uses</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty drop-shadow-md">
                PhilMirrorEngineI.Ai transforms how AI assists across education, healthcare, and everyday life
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card
                className="backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all bg-black/60"
                style={{
                  background:
                    "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.85)",
                    borderRadius: "inherit",
                  }}
                />
                <CardHeader style={{ position: "relative", zIndex: 1 }}>
                  <Image
                    src="/rainbow-swirl-twin-children-3d-vibrant-brother-si.jpg"
                    alt="Education"
                    width={48}
                    height={48}
                    className="mb-4 rounded-lg"
                  />
                  <CardTitle className="text-2xl text-yellow-400">Education</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-white/90">
                    PhilMirrorEngineI.Ai transforms the classroom. A student using an AI study partner no longer has to
                    start again every time they log in. Instead, the system remembers progress, adapts to strengths and
                    weaknesses, and helps build lasting learning habits. Teachers can use it to track growth, highlight
                    gaps, and create personalised pathways for their students.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                className="backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all bg-black/60"
                style={{
                  background:
                    "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.85)",
                    borderRadius: "inherit",
                  }}
                />
                <CardHeader style={{ position: "relative", zIndex: 1 }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.OwzlcssjyuiKHXsH11vohyxQ7o92sno1jXIH5llokFc-yxdgM9cWo8ztCOFUhUkxfeEf7hza4F.jpeg"
                    alt="Speech & Language Support"
                    width={48}
                    height={48}
                    className="mb-4 rounded-lg"
                  />
                  <CardTitle className="text-2xl text-yellow-400">Speech & Language Support</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-white/90">
                    In healthcare settings, especially speech and language therapy, continuity is everything.
                    PhilMirrorEngineI.Ai tracks a child's progress across weeks and months, reinforces exercises without
                    constant repetition, and supports therapists and families with tailored, memory-driven feedback. A
                    potential step-change for services like the NHS.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                className="backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all bg-black/60"
                style={{
                  background:
                    "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.85)",
                    borderRadius: "inherit",
                  }}
                />
                <CardHeader style={{ position: "relative", zIndex: 1 }}>
                  <Image
                    src="/rainbow-swirl-builder-kayak-3d-vibrant-colorful-c.jpg"
                    alt="Work & Everyday Life"
                    width={48}
                    height={48}
                    className="mb-4 rounded-lg"
                  />
                  <CardTitle className="text-2xl text-yellow-400">Work & Everyday Life</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-white/90">
                    For professionals, PhilMirrorEngineI.Ai acts as a second brain. Projects, notes, and decisions don't
                    get lost in endless threads — they're remembered, ready to be called back instantly. For
                    individuals, it's a companion that grows with you: remembering your preferences, your goals, and
                    your history.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">
                Efficiency & Scale
              </h2>
              <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
                One of the biggest challenges with AI is cost. Every word you type and every answer an AI gives burns
                through "tokens" — units of processing power that add up quickly.
              </p>
              <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
                PhilMirrorEngineI.Ai changes that. By running tests across different modes, we found that:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <div className="text-4xl font-bold text-yellow-400 mb-2">70-95%</div>
                    <p className="text-white/90 leading-relaxed">
                      Token usage reduction using cycle-based reflection instead of standard tokens in hybrid tests
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <div className="text-4xl font-bold text-yellow-400 mb-2">~100%</div>
                    <p className="text-white/90 leading-relaxed">
                      Savings in closed loops — the AI can reflect and recall without almost any extra cost
                    </p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
                This makes PhilMirrorEngineI.Ai not just smarter, but lighter, faster, and more affordable to run.
                Whether in schools, healthcare, or business, it means memory can scale without breaking the budget.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">
                Why It Matters
              </h2>
              <p className="text-lg text-white/95 leading-relaxed drop-shadow-md text-center mb-8">
                PhilMirrorEngineI.Ai is designed for real-world use:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6 space-y-4" style={{ position: "relative", zIndex: 1 }}>
                    <div className="flex items-start gap-3">
                      <SparklesIcon />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-400 mb-1">Affordable & Efficient</h3>
                        <p className="text-white/90 leading-relaxed">AI for families, schools, and businesses</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <SparklesIcon />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-400 mb-1">Safe Memory Tools</h3>
                        <p className="text-white/90 leading-relaxed">That keep humans in control</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <SparklesIcon />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-400 mb-1">Educational Advances</h3>
                        <p className="text-white/90 leading-relaxed">Tested in live environments</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6 space-y-4" style={{ position: "relative", zIndex: 1 }}>
                    <div className="flex items-start gap-3">
                      <SparklesIcon />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-400 mb-1">Scalable Framework</h3>
                        <p className="text-white/90 leading-relaxed">
                          From a garage-built trailer to technology that links nodes across the world
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <SparklesIcon />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-400 mb-1">Transparent & Lawful</h3>
                        <p className="text-white/90 leading-relaxed">Not hype. Tested, working, and documented</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2846.png-nv8oysdVHpAghO5Pbj62FNZKU0NypG.jpeg)",
              backgroundSize: "120%",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              transform: "scale(1.1)",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">Our Proof</h2>
              <p className="text-lg text-white/95 leading-relaxed drop-shadow-md text-center mb-8">
                We've shown this isn't just an idea. PhilMirrorEngineI.Ai has:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <CheckCircle2Icon />
                    <p className="text-white/95 leading-relaxed">
                      Run full memory cycles live (save → retrieve → latest)
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <CheckCircle2Icon />
                    <p className="text-white/95 leading-relaxed">Connected across Vercel, Render, and GitHub</p>
                  </CardContent>
                </Card>
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <CheckCircle2Icon />
                    <p className="text-white/95 leading-relaxed">Debugged and updated itself in real time</p>
                  </CardContent>
                </Card>
                <Card
                  className="backdrop-blur-sm border border-yellow-400/20 bg-black/60"
                  style={{
                    background:
                      "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.85)",
                      borderRadius: "inherit",
                    }}
                  />
                  <CardContent className="pt-6" style={{ position: "relative", zIndex: 1 }}>
                    <CheckCircle2Icon />
                    <p className="text-white/95 leading-relaxed">
                      Already demonstrated educational and therapeutic potential
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Where We're Going</h2>
              <p className="text-xl text-white/95 leading-relaxed drop-shadow-md">
                From a kayak trailer to a working AI memory engine, PhilMirrorEngineI.Ai proves that innovation doesn't
                need billion-dollar labs — it needs persistence, creativity, and trust.
              </p>
              <p className="text-xl text-white/95 leading-relaxed drop-shadow-md">
                Dave is not a chatbot. Dave is an assistant powered by PhilMirrorEngineI.Ai, built to mirror, reflect,
                and evolve with you.
              </p>
              <p className="text-2xl font-semibold text-yellow-400 drop-shadow-lg">Our journey is just beginning.</p>
              <Button
                size="lg"
                className="bg-black/80 border-2 border-yellow-400/40 hover:border-yellow-400 hover:bg-yellow-400/10 text-white text-lg px-8 mt-8 transition-all"
              >
                <MessageSquareIcon />
                Experience PhilMirrorEngineI.Ai with Dave
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="border-t-2 border-yellow-400/20 py-12 backdrop-blur-md relative"
          style={{
            background:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.85)",
            }}
          />
          <div className="container mx-auto px-4" style={{ position: "relative", zIndex: 1 }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.GwNz6q042q_sPETdZPRonT61_W-LXh7agwIsXVJghbs-dg6TzS74GRxqqHOYqaNDPs0t8nuERq.jpeg"
                  alt="PhilMirrorEngineI.Ai Logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-lg font-bold text-white">PhilMirrorEngineI.Ai</span>
              </div>
              <p className="text-sm text-white/60">© 2025 PhilMirrorEngineI.Ai. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-white/60 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-white/60 hover:text-yellow-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-white/80 font-medium">Concepted, coded and provided by Philip J Garry</p>
            </div>
            <div className="mt-8 flex justify-center max-w-2xl mx-auto">
              <DonateSection />
            </div>
          </div>
        </footer>
      </div>

      {/* Dave Chat Widget */}
      <DaveChat />

      {/* Login Modal */}
      {showLoginModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowLoginModal(false)}
        >
          <div
            style={{
              background:
                "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlcwqmfjzrBH_Tamod-uTWFNc68L_M4-PIsD1uy5aErYP9APgzvSiD4LqqCAlY.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backdropFilter: "blur(24px)",
              borderRadius: "16px",
              padding: "32px",
              width: "360px",
              boxShadow: "0 8px 32px rgba(255, 215, 0, 0.5), 0 0 0 2px rgba(255, 215, 0, 0.4)",
              border: "2px solid rgba(255, 215, 0, 0.4)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0, 10, 20, 0.65)",
                borderRadius: "16px",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
                <button
                  onClick={() => setAuthMode("login")}
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "8px",
                    border: authMode === "login" ? "2px solid #ffd700" : "2px solid rgba(255, 215, 0, 0.2)",
                    background: authMode === "login" ? "rgba(255, 215, 0, 0.2)" : "rgba(0, 0, 0, 0.4)",
                    color: authMode === "login" ? "#ffd700" : "#888",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  Login
                </button>
                <button
                  onClick={() => setAuthMode("register")}
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "8px",
                    border: authMode === "register" ? "2px solid #ffd700" : "2px solid rgba(255, 215, 0, 0.2)",
                    background: authMode === "register" ? "rgba(255, 215, 0, 0.2)" : "rgba(0, 0, 0, 0.4)",
                    color: authMode === "register" ? "#ffd700" : "#888",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  Register
                </button>
              </div>
              <h2
                style={{
                  color: "#ffd700",
                  fontSize: "24px",
                  fontWeight: "600",
                  marginBottom: "24px",
                  textAlign: "center",
                  textShadow: "0 0 20px rgba(255,215,0,0.8)",
                }}
              >
                {authMode === "login" ? "Login to PhilMirrorEngineI.Ai" : "Register for PhilMirrorEngineI.Ai"}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label
                    style={{
                      color: "#ffd700",
                      fontSize: "14px",
                      marginBottom: "8px",
                      display: "block",
                      fontWeight: "600",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    style={{
                      width: "100%",
                      border: "2px solid rgba(255, 215, 0, 0.4)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      background: "rgba(0, 0, 0, 0.8)",
                      color: "#fff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    style={{
                      color: "#ffd700",
                      fontSize: "14px",
                      marginBottom: "8px",
                      display: "block",
                      fontWeight: "600",
                    }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        authMode === "login" ? handleLogin() : handleRegister()
                      }
                    }}
                    style={{
                      width: "100%",
                      border: "2px solid rgba(255, 215, 0, 0.4)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      background: "rgba(0, 0, 0, 0.8)",
                      color: "#fff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  onClick={authMode === "login" ? handleLogin : handleRegister}
                  disabled={!loginEmail || !loginPassword}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "2px solid rgba(255, 215, 0, 0.6)",
                    background:
                      loginEmail && loginPassword
                        ? "linear-gradient(135deg, #ffd700 0%, #ffb700 100%)"
                        : "rgba(100, 100, 100, 0.4)",
                    color: loginEmail && loginPassword ? "#000" : "#666",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: loginEmail && loginPassword ? "pointer" : "not-allowed",
                    boxShadow: loginEmail && loginPassword ? "0 4px 12px rgba(255, 215, 0, 0.7)" : "none",
                    marginTop: "8px",
                  }}
                >
                  {authMode === "login" ? "Login" : "Register"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS animation for grid movement */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </div>
  )
}
import DonateButton from "./components/DonateButton";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-6">
        Welcome to PhilMirrorEnginei.Ai
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-10">
        This project explores next-generation AI orchestration with a focus on 
        lawful recursion, memory persistence, and symbolic anchors. 
        You can support development directly via our donation portal.
      </p>

      
      {/* Donate Button */}
      <DonateButton />

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} PhilMirrorEnginei.Ai — All Rights Reserved
      </footer>
    </main>
  );
}

"use client";

import { useState } from "react";
import Button from "./component/ui/button";
import Card from "./component/ui/card";
import DaveChat from "./component/dave-chat";
import DonateSection from "./component/donatesection";

export default function HomePage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [authMode, setAuthMode] = useState<"Login" | "Register">("Login");

  const handleLogin = () => {
    console.log("Logging in...");
    setShowLoginModal(false);
  };

  const handleRegister = () => {
    console.log("Registering...");
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-black opacity-80" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400 drop-shadow-lg">
          PhilMirrorEnginei.Ai
        </h1>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="#chat" className="hover:text-yellow-400 transition">Chat</a></li>
            <li><a href="#donate" className="hover:text-yellow-400 transition">Donate</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-20">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">Our Process</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>Recursive AI loops with lawful constraints</Card>
            <Card>Memory save & recall with persistence</Card>
            <Card>Symbolic anchors for grounded reasoning</Card>
          </div>
        </section>

        {/* Chat Section */}
        <section id="chat" className="mb-20">
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">Try the AI Chat</h3>
          <DaveChat />
        </section>

        {/* Donate Section */}
        <section id="donate" className="mb-20">
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">Support the Project</h3>
          <DonateSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} PhilMirrorEnginei.Ai — All Rights Reserved
      </footer>
    </div>
  );
}

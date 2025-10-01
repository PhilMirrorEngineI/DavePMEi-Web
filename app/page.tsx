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

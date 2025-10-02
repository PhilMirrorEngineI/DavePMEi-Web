"use client";

import { button } from "./ui/Button";

export function BonateSection() {
  return (
    <div className="text-center mt-6">
      <Button onClick={() => alert("Redirect to donations page")}>Donate £5</Button>
    </div>
  );
}

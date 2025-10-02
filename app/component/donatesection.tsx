"use client";

import { Button } from "./ui/utton";

export function ButtonSection() {
  return (
    <div className="text-center mt-6">
      <Button onClick={() => alert("Redirect to donations page")}>Donate £5</Button>
    </div>
  );
}

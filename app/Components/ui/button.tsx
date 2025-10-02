"use client"

import { Button } from "/ui/Button"

export function DonateSection() {
  return (
    <div className="text-center mt-6">
      <Button onClick={() => alert("Redirect to donations page")}>
        Donate £5
      </Button>
    </div>
  )
}

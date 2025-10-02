"use client";

import * as React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border border-yellow-400/20 bg-black/60 p-4">{children}</div>;
}

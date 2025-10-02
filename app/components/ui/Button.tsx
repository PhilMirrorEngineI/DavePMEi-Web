"use client";

import * as React from "react";

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
      {...props}
    >
      {children}
    </button>
  );
}

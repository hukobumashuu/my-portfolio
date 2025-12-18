import React from "react";

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-zinc-300">
    {children}
  </span>
);

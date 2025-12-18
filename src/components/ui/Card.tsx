import React from "react";

export const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`
    bg-zinc-900/50 backdrop-blur-md border border-white/5 
    hover:border-white/10 hover:bg-zinc-900/80 transition-all duration-300
    rounded-2xl p-6 ${className}
  `}
  >
    {children}
  </div>
);

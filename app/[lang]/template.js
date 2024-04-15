"use client";

import { useEffect } from "react";
import { animatePageIn } from "./animations";

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="transition-element"
        className="w-full h-screen backdrop-blur-lg bg-white/10 z-40 absolute top-0 left-0"
      ></div>
      {children}
    </div>
  );
}
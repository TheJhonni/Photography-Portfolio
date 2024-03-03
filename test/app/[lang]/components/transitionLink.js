"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "../animations";
import { useState } from "react";

export default function TransitionLink({
  href,
  label
}) {
  const [activeRoute, setActiveRoute] = useState('')
  const router = useRouter();

  const handleClick = (e) => {
    console.log(e);
    animatePageOut(href, router);
    setActiveRoute(e.target.innerText);
  };

  return (
    <button
    className={`w-min w-max text-center text-orange ${(activeRoute === label) ? 'border-b border-b-orange' : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
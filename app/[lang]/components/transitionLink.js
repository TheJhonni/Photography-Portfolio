"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "../animations";

export default function TransitionLink({
  href,
  label,
  children, 
  isButton
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router, label);
  };

  return (
    <button
    className={isButton ? 'btn px-4 bg-white hover:bg-orange text-tertiary hover:scale-105 rounded-full mt-4 mb-[30px] mx-auto lg:mx-0' : 'text-center text-orange'}
      onClick={handleClick}
    >
       {children || label}
    </button>
  );
}
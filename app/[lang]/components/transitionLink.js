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
    className={isButton ? 'btn font-roboto text-primary px-6 py-4 bg-tertiary hover:bg-orange text-white hover:text-tertiary hover:scale-105 border border-2 border-white hover:border-orange mt-4 mb-[30px] mx-auto lg:mx-0' : 'text-center text-orange'}
      onClick={handleClick}
    >
       {children || label}
    </button>
  );
}
"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "../animations";

export default function TransitionLink({
  href,
  label,
  children
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router, label);
  };

  return (
    <button
    className='text-center text-orange'
      onClick={handleClick}
    >
       {children || label}
    </button>
  );
}
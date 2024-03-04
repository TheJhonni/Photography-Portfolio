"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "../animations";

export default function TransitionLink({
  href,
  label
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router, label);
  };

  return (
    <button
    className='w-min w-max text-center text-orange'
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "../animations";

export default function TransitionLink({
  href,
  label
}) {
  const router = useRouter();

  const handleClick = (e) => {
    animatePageOut(href, router);
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
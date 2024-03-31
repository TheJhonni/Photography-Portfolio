"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { animatePageOut } from "../animations";
import TransitionLink from "./transitionLink";

const translations = {
  en: {
    homePage: 'Contact me',
    portfolio: 'Contact me',
    bio: 'View my works'
  },
  it: {
    homePage: 'Chiedi un preventivo',
    portfolio: 'Contattami',
    bio: 'Guarda i miei lavori'
  }
};

const links = {
  homePage: '/contact',
  portfolio: 'contact',
  bio: '/portfolio'
}

const routesRef = {
  homePage: 'Home',
  portfolio: 'Portfolio',
  bio: 'Bio'
}

const MainSharedButton = ({route}) => {
  const [buttonText, setButtonText] = useState(translations.en[route]);
  const [lang, setLang] = useState('en')
  const params = useParams();
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(route, router, routesRef[route]);
  };

  useEffect(() => {
    setButtonText(translations[params.lang][route]);
    params.lang ? setLang(params.lang) : setLang('en')
  }, [params, route]);

  return (
      <TransitionLink href={`/${lang}/${links[route]}`} onClick={handleClick} label={buttonText} isButton='true'>
      </TransitionLink>
  );
};

export default MainSharedButton;

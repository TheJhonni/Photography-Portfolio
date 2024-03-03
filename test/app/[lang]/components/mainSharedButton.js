"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

const MainSharedButton = ({route}) => {
  const [buttonText, setButtonText] = useState(translations.en[route]);
  const [lang, setLang] = useState('en')
  const params = useParams();
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(route, router);
  };

  useEffect(() => {
    setButtonText(translations[params.lang][route]);
    params.lang ? setLang(params.lang) : setLang('en')
  }, [params, route]);

  return (
    
      <Link href={`/${lang}/${links[route]}`} onClick={handleClick} className='btn px-4 bg-white hover:bg-orange text-tertiary 
            hover:scale-105 rounded-full mt-4 mb-[30px] mx-auto lg:mx-0'>
        {buttonText}
      </Link>
  );
};

export default MainSharedButton;

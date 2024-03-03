"use client"
import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { replaceLangFromURL } from "../lib/utils";
import TransitionLink from "./transitionLink";

const Navbar = () => {
  const [language, setLanguage] = useState('en');
  const pathName = usePathname();
  const params = useParams();
  const router = useRouter();

  const handleLanguages = (x) => {
    x.target.checked ? setLanguage('en') : setLanguage('it')
    params.lang = x.target.checked ? 'en' : 'it';
    router.push(replaceLangFromURL(pathName,params.lang));
  };

  useEffect(()=>{
    if(params.lang){
      setLanguage(params.lang);
    }
  }, [params])


  const pathname = usePathname();

  return (
      <nav className='hidden xl:flex gap-x-14 font-bold'>
        <label className="relative inline-flex items-center me-5 cursor-pointer">
        <input
        onChange={handleLanguages}
        type="checkbox"
        checked={language === 'en'}
        className="sr-only peer"
         />
          <div className="w-11 h-6 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-orange 
            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['']
            after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5
            after:w-5 after:transition-all peer-checked:bg-orange"></div>
          <span className="ml-4 ms-3 text-sm font-medium text-orange">{language === 'en' ? 'English' : 'Italiano'}</span>
        </label>
        <TransitionLink href={`/${language}/`} label={'Home'} />
        <TransitionLink href={`/${language}/bio/`} label={'Bio'} />
        <TransitionLink href={`/${language}/portfolio`} label={'Portfolio'} />
        <TransitionLink href={`/${language}/contact`} label={language === 'en' ? 'Contacts' : 'Contatti'} />
      </nav>
  )
};

export default Navbar;
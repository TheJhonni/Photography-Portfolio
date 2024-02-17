"use client"
import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { replaceLangFromURL } from "../lib/utils";

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
        <Link href={`/${language}/`} className={'w-min w-max text-center text-orange ' + 
          (pathname === '/' ? 'border-b border-b-orange' : '')}>Home</Link>
        <Link href={`/${language}/bio/`} className={'w-min w-max text-center text-orange ' + 
          (pathname === '/bio' ? 'border-b border-b-orange' : '')}>Bio</Link>
        <Link href={`/${language}/portfolio`} className={'w-min w-max text-center text-orange ' + 
          (pathname === '/portfolio' ? 'border-b border-b-orange' : '')}>Portfolio</Link>
        <Link href={`/${language}/contact`} className={'w-12 text-center text-orange ' + 
          (pathname === '/contact' ? 'border-b border-b-orange' : '')}>{language === 'en' ? 'Contacts' : 'Contatti'}</Link>
      </nav>
  )
};

export default Navbar;
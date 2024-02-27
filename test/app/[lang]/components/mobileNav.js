import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import Link from 'next/link';
import { usePathname, useParams, useRouter } from "next/navigation";
import { replaceLangFromURL } from '../lib/utils';


const MobileNav = () => {
  const [language, setLanguage] = useState('en');
  const [openMenu, setOpenMenu] = useState(true);
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

  return (
    <nav className="text-primary xl:hidden">
      <div onClick={() => setOpenMenu(true)}
        className='text-3xl text-[#fff] cursor-pointer'>
      <CgMenuRight />
      </div>
      <div className={`${openMenu ? 'bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20' : 'hidden'}`}>
        <div onClick={() => setOpenMenu(false)}
          className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
          <IoMdClose />
        </div>
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
          <li><Link href={`/${language}/`} onClick={()=> setOpenMenu(false)} >Home</Link></li>
          <li><Link href={`/${language}/bio`} onClick={()=> setOpenMenu(false)} >About</Link></li>
          <li><Link href={`/${language}/portfolio`} onClick={()=> setOpenMenu(false)} >Portfolio</Link></li>
          <li><Link href={`/${language}/contact`} onClick={()=> setOpenMenu(false)} >Contact</Link></li>
          <li className='bg-secondary rounded-full px-3 pt-2 pb-1'>
            <label className="relative inline-flex items-center me-5 cursor-pointer">
            <input
              onChange={handleLanguages}
              type="checkbox"
              checked={language === 'en'}
              className="sr-only peer" />
              <div className="w-11 h-6 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-orange 
                peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['']
                after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5
                after:w-5 after:transition-all peer-checked:bg-orange"></div>
              <span className="ml-4 ms-3 text-sm font-medium text-orange">{language === 'en' ? 'English' : 'Italiano'}</span>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
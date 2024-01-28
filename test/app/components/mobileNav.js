import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import Link from 'next/link';

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [language, setLanguage] = useState('');
  const defaultLanguage = "en";

  const handleLanguages = () => {
    language === "en" ? setLanguage("it") : setLanguage("en")
  };

  const updateLanguage = () => {
    if (!language) {
      const currentLanguage = defaultLanguage;
      setLanguage(currentLanguage)
      localStorage.getItem("language", currentLanguage);
    } else {
      const currentLanguage = language;
      localStorage.getItem("language", currentLanguage);
    }
    // console.log(localStorage.getItem("language"));
    // console.log('localStorage lang', language);
  };

  useEffect(() => {
    updateLanguage();
  }, [language]);

  return (
    <nav className="text-primary xl:hidden">
      <div onClick={() => setOpenMenu(true)}
        className='text-3xl text-[#fff] cursor-pointer'>
      <CgMenuRight />
      </div>
      <div className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
        <div onClick={() => setOpenMenu(false)}
          className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
          <IoMdClose />
        </div>
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
          <li><Link href={'/'} onClick={()=> setOpenMenu(false)} >Home</Link></li>
          <li><Link href={'/bio'} onClick={()=> setOpenMenu(false)} >About</Link></li>
          <li><Link href={'/portfolio'} onClick={()=> setOpenMenu(false)} >Portfolio</Link></li>
          <li><Link href={'/contact'} onClick={()=> setOpenMenu(false)} >Contact</Link></li>
          <li>
            <label className="relative inline-flex items-center me-5 cursor-pointer">
              <input
              defaultChecked={defaultLanguage} 
              onClick={() => handleLanguages()}
              type="checkbox" 
              value={language} 
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
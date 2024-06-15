"use client"
import React, { useEffect, useState } from 'react';
import Logo from '../../../public/foto/header/logo.png';
import Navbar from './navbar';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './mobileNav';
import Socials from './socials';
import { useParams } from 'next/navigation';

const Header = () => {
  const [language, setLanguage] = useState('it');
  const params = useParams();

  useEffect(()=>{
    if(params.lang){
      setLanguage(params.lang);
    } else {
      setLanguage('it')
    }
  }, [params.lang])

  return (
    <header
      className='flex items-center fixed w-full px-[30px] lg-[100px] 
      z-30 h-[100px] lg:h-[140px]'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link href={`/${language}/`} className='max-w-[60px]'>
          <Image src={Logo} alt='IKB-Logo' />
        </Link>
        <Navbar />
      </div>
      
    <div className="flex-grow flex justify-center xl:justify-start items-center mr-12 xl:mr-0 text-orange">
        <Socials />
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
 
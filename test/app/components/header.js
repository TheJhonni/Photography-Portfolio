"use client"
import React, { useEffect, useState } from 'react';
import Logo from '../../public/foto/header/logo.png';
import Navbar from './navbar';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './mobileNav';
import Socials from './socials';

const Header = () => {

  return (
    <header
      className='flex items-center fixed w-full px-[30px] lg-[100px] 
      z-30 h-[100px] lg:h-[140px]'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link href={'/'} className='max-w-[60px]'>
          <Image src={Logo} alt='IKB-Logo' />
        </Link>
        <Navbar />
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
 
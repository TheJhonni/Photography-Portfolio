import React from 'react';

// import components
import Socials from './Socials';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav';

// import Link
import { Link } from 'react-router-dom'

const Header = () => {
  return <header className="fixed w-full px-[30px] lg-[100px] 
  z-30 h-[100px] lg:h-[140px] flex items-center">
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
          <Link to={'/'} className='max-w-[60px]'>
          <img src={Logo} alt='IKB-Logo' />
          </Link>
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
          <Link to={'/'} className='text-orange hover:text-primary'>Home</Link>
          <Link to={'/about'} className='text-orange hover:text-primary'>About</Link>
          <Link to={'/portfolio'} className='text-orange hover:text-primary'>Portfolio</Link>
          <Link to={'/contact'} className='text-orange hover:text-primary'>Contact</Link>
        </nav>
    </div>
        <Socials />
        <MobileNav />
  </header>;
};

export default Header;
 
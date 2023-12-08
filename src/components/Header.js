import React, { useContext, useEffect, useState } from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav';
import { Link, useLocation } from 'react-router-dom'
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const location = useLocation();

  const [english, setEnglish] = useState(localStorage.getItem('english'));

  useEffect(() => {
    localStorage.setItem('english', english)
    // console.log(localStorage);
  }, [english]);

  return (
    <header
      className='fixed w-full px-[30px] lg-[100px] 
      z-30 h-[100px] lg:h-[140px] flex items-center lg:cursor-none'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link
          onMouseEnter={ mouseEnterHandler }
          onMouseLeave={ mouseLeaveHandler }
          to={'/'} className='max-w-[60px]'>
          <img src={Logo} alt='IKB-Logo' />
        </Link>
        <nav
          onMouseEnter={ mouseEnterHandler }
          onMouseLeave={ mouseLeaveHandler }
          className='hidden xl:flex gap-x-14 font-bold'>
          <label className="relative inline-flex items-center me-5 cursor-pointer">
            <input onClick={() => setEnglish(!english)} type="checkbox" value={localStorage.english} className="sr-only peer" />
            <div className="w-11 h-6 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-orange 
              peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['']
              after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5
              after:w-5 after:transition-all peer-checked:bg-orange"></div>
            <span className="ml-4 ms-3 text-sm font-medium text-orange">{!english ? 'Italiano' : 'English'}</span>
        </label>
          <Link to={'/'} className={'w-min w-max text-center text-orange ' + 
            (location.pathname === '/' ? 'border-b border-b-orange' : '')}>Home</Link>
          <Link to={'/about'} className={'w-min w-max text-center text-orange ' + 
            (location.pathname === '/about' ? 'border-b border-b-orange' : '')}>{english ? 'About' : 'Biografia'}</Link>
          <Link to={'/portfolio'} className={'w-min w-max text-center text-orange ' + 
            (location.pathname === '/portfolio' ? 'border-b border-b-orange' : '')}>Portfolio</Link>
          <Link to={'/contact'} className={'w-min w-max text-center text-orange ' + 
            (location.pathname === '/contact' ? 'border-b border-b-orange' : '')}>{english ? 'Contact' : 'Contatti'}</Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
 
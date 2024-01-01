"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = ({english, setEnglish}) => {

    const pathname = usePathname();

    return (
        <nav
          // onMouseEnter={ mouseEnterHandler }
          // onMouseLeave={ mouseLeaveHandler }
          className='hidden xl:flex gap-x-14 font-bold'>
          <label className="relative inline-flex items-center me-5 cursor-pointer">
            <input
            onClick={() => setEnglish(!english)}
            type="checkbox" 
            value={english} 
            className="sr-only peer" />
            <div className="w-11 h-6 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-orange 
              peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['']
              after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5
              after:w-5 after:transition-all peer-checked:bg-orange"></div>
            <span className="ml-4 ms-3 text-sm font-medium text-orange">{!english ? 'Italiano' : 'English'}</span>
          </label>
          <Link href={'/'} className={'w-min w-max text-center text-orange ' + 
            (pathname === '/' ? 'border-b border-b-orange' : '')}>Home</Link>
          <Link href={'/bio'} className={'w-min w-max text-center text-orange ' + 
            (pathname === '/bio' ? 'border-b border-b-orange' : '')}>Bio</Link>
          <Link href={'/portfolio'} className={'w-min w-max text-center text-orange ' + 
            (pathname === '/portfolio' ? 'border-b border-b-orange' : '')}>Portfolio</Link>
          <Link href={'/contact'} className={'w-12 text-center text-orange ' + 
            (pathname === '/contact' ? 'border-b border-b-orange' : '')}>{!english ? 'Contatti' : 'Contacts'}</Link>
        </nav>
    )
};

export default Navbar;
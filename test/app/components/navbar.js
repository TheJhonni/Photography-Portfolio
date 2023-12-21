// Navbar.js
"use client"
import Link from 'next/link';
import { useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {
      console.log('Component mounted');
      console.log(process.env.NEXT_PUBLIC_BANANA)
      
      // You can perform any other side effects or cleanup here
      
      return () => {
        console.log('Component will unmount');
        // Cleanup code if needed
      };
    }, []); 
  
  
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

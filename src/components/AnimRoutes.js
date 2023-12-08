import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About'
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ImageCollection1 from '../pages/nested-pages/ImageCollection1';

const AnimRoutes = ({content}) => {
  const location = useLocation();
  console.log(content);
  return (
    <AnimatePresence initial={ true } mode='wait'>
      <Routes key={location.pathname} location={location}>
      <Route path='/' element={<Home/>} content={content} />
      <Route path='/about' element={<About/>} content={content} />
      <Route path='/portfolio' element={<Portfolio/>} content={content} />
      <Route path='/contact'contact element={<Contact/>} content={content} />
      <Route path='/collection1'contact element={<ImageCollection1/>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;

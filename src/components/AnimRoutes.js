import React from 'react';
// import pages
import Home from '../pages/Home';
import About from '../pages/About'
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

// import routes, route & userLocarion hooks
import { Routes, Route, userLocation } from 'react-router-dom';

const AnimRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/portfolio' element={<Portfolio/>} />
    <Route path='/contact'contact element={<Contact/>} />
  </Routes>;
};

export default AnimRoutes;

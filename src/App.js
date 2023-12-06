import React, { useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from './context/CursorContext';

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <>
      <Router>
        <Header></Header>
        <AnimRoutes/>
      </Router>
      <motion.div
        variants={ cursorVariants }
        animate={ cursorBG }
        className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none
          z-50 rounded-full'></motion.div>
    </>
  );
};

export default App;

import React, { useContext } from 'react';
import Image1 from '../img/portfolio/1.jpg';
import Image2 from '../img/portfolio/2.jpg';
import Image3 from '../img/portfolio/3.jpg';
import Image4 from '../img/portfolio/4.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%', backgroundColor: '#C67E28' }}
      animate={{ opacity: 1, y: 0, backgroundColor: '#1c2e40' }}
      exit={{ opacity: 0, y: '100%', backgroundColor: '#C67E28' }}
      transition={transition1}
      className='section bg-tertiary cursor-none'>
      <div className='container mx-auto h-full relative text-orange'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-36 
          lg:pt-0 pb-8'>
          <motion.div
            initial={{ opacity: 0, x: '-80%' }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-80%' }} transition={transition1}
            onMouseEnter={ mouseEnterHandler }
            onMouseLeave={ mouseLeaveHandler }
            className='flex flex-col lg:items-start'>
            <h1 className='h1 px-6 lg:p-0'>Portfolio</h1>
            <p className='pb-12 max-w-sm px-6 lg:p-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <Link to={'/contact'} className='btn px-4 bg-white hover:bg-orange text-tertiary hover:scale-105 rounded-full mt-4 mb-[30px] mx-auto lg:mx-0'>Contattami</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: '80%' }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '80%' }} transition={transition1}
            onMouseEnter={ mouseEnterHandler }
            onMouseLeave={ mouseLeaveHandler }
            className='grid grid-cols-2 lg:gap-2'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-orange overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt='img 1'/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-orange overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image2} alt='img 2'/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-orange overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt='img 3'/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-orange overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt='img 4'/>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../components/BackgroundVideo';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Home = ({content}) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const height800 = window.innerHeight <= 800;
  const height600 = window.innerHeight <= 600;

  useEffect(() => {
    console.log(content)
  })

  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} transition={transition1}
      className='section bg-tertiary lg:cursor-none'>
      <div className='flex justify-end max-h-96 lg:h-[600px]'> 
          <motion.div 
            initial={{ scale: 0}} animate={{ scale: 1 }}
            exit={{ scale: 0 }} transition={transition1}
            className='relative lg:w-full lg:right-0 lg:left-0 overflow-hidden'>
              <BackgroundVideo />
          </motion.div>
      </div>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col justify-center items-center'>
          <motion.div
            initial={{ opacity: 0, x: '-50%' }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-50%' }} transition={transition1}
            onMouseEnter={ mouseEnterHandler }
            onMouseLeave={ mouseLeaveHandler }
            className={('w-full pt-12 pb-0 lg:pt-[650px] lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center text-orange')
              +
              (height600 ? ' pt-2 lg:pt-0 lg:pb-[70%]' : '')
              +
              (height800 ? ' pt-2 lg:pt-0 lg:pb-56' : '')
            }>
            <h1 className='h1 overflow-hidden'> Photographer <br /> & Film Maker</h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-6'>
              Milano, ITA
            </p>
            <Link to={'/contact'} className='btn px-4 text-sm lg:p-6 lg:text-md lg:mb-[30px] bg-white hover:bg-orange text-tertiary 
              hover:scale-105 rounded-full'>
              Chiedi un preventivo
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

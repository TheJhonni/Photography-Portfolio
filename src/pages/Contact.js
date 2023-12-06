import React, { useContext } from 'react';
import WomanImg from '../img/contact/woman.png';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0}}
      exit={{ opacity: 0, y: '100%' }} transition={transition1}
      className='section bg-tertiary cursor-none'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start 
          pt-36 gap-x-8 text-center lg:text-left'>
          <motion.div
            initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }} transition={transition1}
            className='hidden lg:flex bg-white absolute bottom-0 left-0
            right-0 top-72 -z-10'></motion.div>
          <div
            onMouseEnter={ mouseEnterHandler }
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt-32 px-4 text-orange'>
            <h1 className='h1'> Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-orange h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#C67E28]'
                  type='text' placeholder='Your name'/>
                <input className='outline-none border-b border-b-orange h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#C67E28]'
                  type='text' placeholder='Your email'/>
              </div>
              <input className='outline-none border-b border-b-orange h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#C67E28]'
                type='text' placeholder='Your message' />
              <button href="mailto:jdilmoro@gmail.com" className='btn px-4 mt-4 mb-[30px] mx-auto lg:mx-0 self-start bg-white 
                text-tertiary hover:bg-orange lg:bg-orange lg:text-tertiary
                lg:hover:bg-tertiary lg:hover:text-orange hover:scale-105 rounded-full mb-[30px]'>Send it</button>
            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }} transition={{ transition: transition1, duration: 1.5 }}
            onMouseEnter={ mouseEnterHandler }
            onMouseLeave={ mouseLeaveHandler }
            className='lg:flex-1'>
            <img src={WomanImg} alt='ikb' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

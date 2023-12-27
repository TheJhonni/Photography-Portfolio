"use client"
import React, { useContext, useRef, useState } from 'react';
import WomanImg from '../../public/foto/contact/woman.png';
// import { motion } from 'framer-motion';
// import { transition1 } from '../transitions';
// import { CursorContext } from '../context/CursorContext';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const Contact = () => {
//   const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const form = useRef();

  const templateParams = {
    name: name,
    email: email,
    message: message
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true)
    emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, templateParams, process.env.EMAILJS_PUBBLIC_KEY)
      .then((result) => {
        console.log('email inviata correttamente!' , result.text);
      }, (error) => {
        console.log('si è verificato un problema' , error.text);
        setSending(false)
      });
      setTimeout(() => {
        setSending(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 1000);
  };

  return (
    <section
    //   initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0}}
    //   exit={{ opacity: 0, y: '100%' }} transition={transition1}
      className='section bg-tertiary'>
      <div className='container mx-auto h-screen'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start 
          pt-36 gap-x-8 text-center lg:text-left'>
          <div
            // initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: '100%' }} transition={transition1}
            className='hidden lg:flex bg-white absolute bottom-0 left-0
            right-0 top-72 -z-10'></div>
          <div
            // onMouseEnter={ mouseEnterHandler }
            // onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt-32 px-4 text-orange'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input onChange={e => setName(e.target.value)} value={name}
                  name="user_name" className='outline-none border-b border-b-orange h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#C67E28]'
                  type='text' placeholder='Your name'/>
                <input onChange={e => setEmail(e.target.value)} value={email}
                  name="user_email" className='outline-none border-b border-b-orange h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#C67E28]'
                  type='text' placeholder='Your email'/>
              </div>
              <textarea onChange={e => setMessage(e.target.value)} value={message}
                rows="4" className="w-full px-0 text-sm focus:ring-0 outline-none border-b border-b-orange h-[50px] placeholder:pt-4
                bg-transparent font-secondary w-full pl-3 placeholder:text-[#C67E28]" placeholder="Write a comment..." required></textarea>
              <button type="submit" value="Send" className='btn px-4 mt-4 mb-[30px] mx-auto lg:mx-0 self-start bg-white 
                text-tertiary hover:bg-orange lg:bg-orange lg:text-tertiary
                lg:hover:bg-tertiary lg:hover:text-orange hover:scale-105 rounded-full mb-[30px]'>{sending === true ? 'Sending message' : 'Send it'}</button>
            </form>
          </div>
          <div
            // initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: '100%' }} transition={{ transition: transition1, duration: 1.5 }}
            // onMouseEnter={ mouseEnterHandler }
            // onMouseLeave={ mouseLeaveHandler }
            className='lg:flex-1'>
            <Image width={200} height={200} src={WomanImg} alt='ikb' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
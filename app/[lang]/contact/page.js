"use client"
import React, { useRef, useState } from 'react';
import WomanImg from '../../../public/foto/contact/woman.png';
import Image from 'next/image';
import { sendEamilUtil } from '../lib/utils';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    const templateParams = {
      name: name,
      email: email,
      message: message
    }

    if(sendEamilUtil(templateParams)){
      setSending(false)
    }else{
      //TODO
      //aggiungere controllo se qualcosa è andato storto tipo un setErrorMail(true);
    }
    setTimeout(() => {
        setSending(false);
        form.current.reset();
      }, 1000);
  };

  return (
    <section
      className='section bg-tertiary'>
      <div className='container mx-auto h-screen'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start 
          pt-36 gap-x-8 text-center lg:text-left'>
          <div
            className='hidden lg:flex bg-white absolute bottom-0 left-0
            right-0 top-72 -z-10'></div>
          <div
            className='lg:flex-1 lg:pt-32 px-4 text-orange'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input
                  name="user_name" className='outline-none border-b border-b-orange h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#C67E28]'
                  type='text' placeholder='Your name'/>
                <input
                  name="user_email" className='outline-none border-b border-b-orange h-[60px] 
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#C67E28]'
                  type='text' placeholder='Your email'/>
              </div>
              <textarea name="message"
                rows="4" className="w-full px-0 text-sm focus:ring-0 outline-none border-b border-b-orange h-[50px] placeholder:pt-4
                bg-transparent font-secondary w-full pl-3 placeholder:text-[#C67E28]" placeholder="Write a comment..." required></textarea>
              <button type="submit" value="Send" className='btn font-roboto text-primary px-6 py-4 bg-tertiary hover:bg-orange 
              text-white hover:text-tertiary hover:scale-105 border border-2 border-white hover:border-none mt-4 mb-[30px] 
              mx-auto lg:mx-0'>{sending === true ? 'Sending message' : 'Send it'}</button>
            </form>
          </div>
          <div
            className='lg:flex-1'>
            <Image width={200} height={200} src={WomanImg} alt='ikb' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
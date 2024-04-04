"use client"

import { sendEmailUtil } from '../../lib/utils';
import { useState } from "react";
import { useRef } from "react";

const EmailSender = () => {
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
    
        if(sendEmailUtil(templateParams)){
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
        <button type="submit" value="Send" className='btn font-roboto text-primary max-w-[120px] px-6 py-4 bg-tertiary hover:bg-orange text-white hover:text-tertiary hover:scale-105 border border-2 border-white hover:border-none mt-4 mb-[30px] mx-auto lg:mx-0'>{sending === true ? 'Sending message' : 'Send it'}</button>
    </form>
)
}

export default EmailSender;
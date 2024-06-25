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
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4 text-center'>
        <div className='flex justify-center items-center gap-x-10'>
        <input
            name="user_name" className='outline-none border-b border-b-orange h-[60px] 
            bg-transparent font-secondary w-full pl-3 placeholder:text-[#C67E28]'
            type='text' placeholder='Il tuo nome'/>
        <input
            name="user_email" className='outline-none border-b border-b-orange h-[60px] 
            bg-transparent font-secondary w-full pl-3 placeholder:text-[#C67E28]'
            type='text' placeholder='La tua email'/>
        </div>
        <textarea name="message"
        rows="4" className="w-full px-0 text-sm focus:ring-0 outline-none border-b border-b-orange h-[50px]
        bg-transparent font-secondary pt-4 pl-3 placeholder:text-[#C67E28]" placeholder="Scrivi un commento..." required></textarea>
        <button type="submit" value="Send" className='btn text-primary max-w-[120px] px-6 py-4 bg-tertiary hover:bg-orange text-white hover:text-tertiary hover:scale-105 border border-2 border-white hover:border-orange mt-4 mb-[30px] mx-auto'>{sending === true ? 'Sto inviando...' : 'Invia'}</button>
    </form>
)
}

export default EmailSender;
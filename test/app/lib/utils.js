import emailjs from '@emailjs/browser';


export function sendEamilUtil(templateParams){
    console.log('sono qui bella');
    console.log('process.env.EMAILJS_PUBBLIC_KEY)',process.env.NEXT_PUBLIC_EMAILJS_PUBBLIC_KEY);
    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_EMAILJS_PUBBLIC_KEY)
    .then((result) => {
      return true;
    }, (error) => {
      return false;
    });  
  }
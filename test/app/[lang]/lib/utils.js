import emailjs from '@emailjs/browser';


export function sendEamilUtil(templateParams){
  emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_EMAILJS_PUBBLIC_KEY)
  .then((result) => {
    return true;
  }, (error) => {
    return false;
  });  
};

export function replaceLangFromURL(url, lang){
  lang = lang.replace('/', '');
  const newUrl = `/${lang}/${url.substring(4)}`;
  console.log('s',newUrl);
  return newUrl;
};
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
  const regex = /^\/\w+\/(.+)$/;
  const modifiedString = url.replace(regex, `/${lang}/$1`);
  console.log('modified', modifiedString);
  console.log('lang', lang);
  console.log('url', url);
  return modifiedString;
};
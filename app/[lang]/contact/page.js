import Image from 'next/image';
import EmailSender from '../components/emailSender/emailSender'
import { getAssetById, getDynamicData } from '../lib/contentful/utils';
import Paragraph from '../components/porfolio/paragraph';

async function getData(){
  return await getDynamicData(process.env.CONTENTFUL_CONTENT_TYPE_CONTACTS);
};
  
  async function Contact(){
  const data = await getData();
  const imageUrl = `https:${await getAssetById(data[0].mainFoto.sys.id)}`

  return (
    <section
      className='section bg-tertiary'>
      <div className='container mx-auto h-screen pb-12'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center 
          mt-44 md:pt-28 lg:pt-32 gap-x-8 text-center'>
          <div
            className='hidden lg:flex bg-white absolute bottom-0 left-0
            right-0 top-12 -z-10'></div>
          <div className='lg:flex-1 lg:pt-32 px-4 text-orange'>
               {data && <Paragraph data={data} />}
            <EmailSender />
          </div>
          <div
            className='lg:flex-1'>
            <Image width={400} height={400} src={imageUrl} alt='Foto contact ikb' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
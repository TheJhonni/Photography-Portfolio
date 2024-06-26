import Image from "next/image";
import { getAssetById, getDynamicData } from '../lib/contentful/utils';
import Paragraph from "../components/porfolio/paragraph";
import MainSharedButton from "../components/mainSharedButton";

async function getData(){
  return await getDynamicData(process.env.CONTENTFUL_CONTENT_TYPE_BIO);
};

async function Bio(){
    const data = await getData();
    const imageUrl = `https:${await getAssetById(data[1].mainFoto.sys.id)}`
  
  return (
    <section className='section bg-tertiary'>
      <div className='container mx-auto h-full relative'>
        <div
          className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24
          text-center lg:pt-16 mb-[30px]'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <Image width={500} height={500} src={imageUrl} alt='Foto Bio ikb' />
          </div>
          <div className='flex-1 pt-36 lg:pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-start lg:justify-center
          items-center text-orange'>
              {data && <Paragraph data={data} />}
            <div className='lg:mt-6'>
              <MainSharedButton route={'bio'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;

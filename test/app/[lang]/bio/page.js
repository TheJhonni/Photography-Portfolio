import Image from "next/image";
import Link from "next/link";
import { getAssetById, getDynamicData } from '../lib/contentful/utils';
import Paragraph from "../components/porfolio/paragraph";
import TestComponent from "./testComponent";
import MainSharedButton from "../components/mainSharedButton";

async function getData(){
  return await getDynamicData(process.env.CONTENTFUL_CONTENT_TYPE_BIO);
};

async function Bio(){
    const data = await getData();
    // const imageUrl = `https:${await getAssetById(data[0].mainFoto.sys.id)}`
  
  return (
    <section className='section bg-tertiary'>
      <div className='container mx-auto h-full relative'>
        <div
          className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24
          text-center lg:text-left lg:pt-16 mb-[30px]'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            {data && <TestComponent data={data} />}
            {/* <Image width={500} height={500} src={`https:${await getAssetById(data[0].mainFoto.sys.id)}`} alt='Foto ikb' /> */}
          </div>
          <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center
          items-center lg:items-start text-orange'>
          <h1 className='h1 px-6 lg:p-0'>About me</h1>
          <p className='pb-12 max-w-sm px-6 lg:p-0'>
            {/* {data && data[0].paragraph.content[0].content[0].value}         */}
            <br />
          </p>
          <MainSharedButton route={'bio'} />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;

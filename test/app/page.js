
import Link from "next/link";
import { contentfulSingleton } from "./lib/contentful/client";

function getData(){
  console.log('ciao sono nel server');
  console.log('sono le chiavi di next!');
  console.log(process.env.CONTENTFUL_SPACE);
  //console.log(contentfulSingleton.getContentfulClient().getEntries())
}

export default function Home() {

  getData();
  return (
    <>

      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[55px] lg:h1 overflow-hidden'> Photographer
            & Film Maker</h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-6'>
              Milano, ITA
            </p>
            <Link href={'/contact'} className='btn px-4 text-sm lg:p-6 lg:text-md lg:mb-[30px] bg-white hover:bg-orange text-tertiary 
              hover:scale-105 rounded-full'>
              Chiedi un preventivo
            </Link>
        </div>
      </div>
    </>
  )
}


import Link from "next/link";
import { contentfulSingleton } from "./lib/contentful/client";
// import BackgroundVideo from "./components/porfolio/videoHome/backgroundVideo";

function getData(){
  contentfulSingleton.getContentfulClient().getEntries();
}

export default function Home() {

  getData();
  return (
    <>
<section
      // initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }} transition={transition1}
      className='section bg-tertiary'>
      <div className='flex justify-end max-h-96 lg:h-[600px]'> 
          <div 
            // initial={{ scale: 0}} animate={{ scale: 1 }}
            // exit={{ scale: 0 }} transition={transition1}
            className='relative lg:w-full lg:right-0 lg:left-0 overflow-hidden'>
              {/* <BackgroundVideo /> */}
          </div>
      </div>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col justify-center items-center'>
          <div
            // initial={{ opacity: 0, x: '-50%' }} animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: '-50%' }} transition={transition1}
            // onMouseEnter={ mouseEnterHandler }
            // onMouseLeave={ mouseLeaveHandler }
            className='w-full pt-0 pb-0 lg:pt-40 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center text-orange'>
            <h1 className='text-[55px] lg:h1 overflow-hidden'> Photographer <br/>
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
      </div>
    </section>
    </>
  )
}


import Link from "next/link";
import { contentfulSingleton } from "./lib/contentful/client";
import BackgroundVideo from "./components/porfolio/videoHome/backgroundVideo";
import CityText from "./components/home/cityText";
import MainSharedButton from "./components/mainSharedButton";

function getData(){
  contentfulSingleton.getContentfulClient().getEntries();
}

export default function Home() {

  getData();
  return (
    <>
      <section className='section bg-tertiary'>
        <div className='flex justify-end max-h-96 lg:h-[600px]'> 
            <div className='relative lg:w-full lg:right-0 lg:left-0 overflow-hidden'>
                <BackgroundVideo />
            </div>
        </div>
        <div className='container mx-auto h-full relative'>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-full pt-0 pb-0 lg:pt-40 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center text-orange'>
              <h1 className='h1 overflow-hidden'> Photographer <br/>
              & Film Maker</h1>
              <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-6'>
                <CityText/>, ITA
              </p>
              <MainSharedButton route={'homePage'} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

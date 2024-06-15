
import { contentfulSingleton } from "./lib/contentful/client";
import { getDynamicData } from './lib/contentful/utils';
import BackgroundVideo from "./components/home/videoHome/backgroundVideo";
import CityText from "./components/home/cityText";
import MainSharedButton from "./components/mainSharedButton";
import Paragraph from "./components/porfolio/paragraph";
import YoutubeVideo from "./components/youtubeVideo";

function getData(){
  contentfulSingleton.getContentfulClient().getEntries();
}

async function getHomeData(){
  return await getDynamicData(process.env.CONTENTFUL_CONTENT_TYPE_HOME);
};

export default async function Home() {
  getData();
  const data = await getHomeData();
  return (
    <>
      <section className='bg-tertiary'>
        <div className='flex justify-end max-h-96 lg:h-[600px]'> 
            <div className='relative lg:w-full lg:right-0 lg:left-0 overflow-hidden'>
                <BackgroundVideo />
            </div>
        </div>
        <div className='container mx-auto pb-12 pt-8 h-full relative lg:top-[550px]'>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-full pt-0 pb-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center text-orange'>
            {data && <Paragraph data={data} />}
              <p className='text-[26px] lg:text-[36px] font-primary lg:mb-6'>
                <CityText/>, ITA
              </p>
              <MainSharedButton route={'homePage'} />
              {data && <YoutubeVideo data={data} />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

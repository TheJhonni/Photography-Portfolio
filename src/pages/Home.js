import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../components/BackgroundVideo';

const Home = () => {
  return <section className='section bg-tertiary'>
    <div className='container mx-auto h-full relative'>
        <div className='flex flex-col justify-center'>
        <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start text-orange'>
          <h1 className='h1'> Photographer <br /> & Film Maker</h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
            Milano, ITA
          </p>
          <Link to={'/contact'} className='btn bg-white hover:bg-orange text-tertiary rounded mb-[30px]'>
            Chiedi un preventivo
          </Link>
        </div>
      <div className='flex justify-end max-h-96 lg:max-h-max'> 
        <div className='relative lg:w-full lg:right-0 lg:left-0 overflow-hidden'>
            <BackgroundVideo />
        </div>
      </div>
      </div>
    </div>
  </section>;
};

export default Home;

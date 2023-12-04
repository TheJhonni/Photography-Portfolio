import React from 'react';
// import image
import WomanImg from '../img/about/woman.png';
// import Link
import { Link } from 'react-router-dom';

const About = () => {
  return <section className="section bg-tertiary">
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24
      text-center lg:text-left lg:pt-16'>
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={WomanImg} alt='Foto ikb' />
        </div>
        <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center
          items-center lg:items-start text-orange'>
          <h1 className='h1'>About me</h1>
          <p className='pb-12 max-w-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <Link to={'/portfolio'} className='btn bg-white text-tertiary rounded mb-[30px]'>View my works</Link>
        </div>
      </div>
    </div>
  </section>;
};

export default About;

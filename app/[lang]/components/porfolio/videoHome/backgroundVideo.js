"use client"
import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className='object-contain'>
        <video loop muted>
          <source src="/videos/homevideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
};

export default BackgroundVideo;

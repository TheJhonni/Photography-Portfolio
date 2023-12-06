import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className='object-contain cursor-none'>
        <video loop autoPlay muted>
            <source src={require('../videos/video_1_try.mp4')} type="video/mp4" />
        </video>
    </div>
  );
};

export default BackgroundVideo;

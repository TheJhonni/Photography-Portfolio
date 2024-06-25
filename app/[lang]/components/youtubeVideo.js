"use client"

import React, { Suspense } from "react"; 
import YouTube from "react-youtube"; 

const YoutubeVideo = ({ data }) => {
  const pauseVideo = (event) => { 
    event?.target.pauseVideo(); 
  } 
  const videoData = data[0].videoSrc
  return ( 
    <>
          {videoData && videoData.map((videoId, index) => {
    return ( 
      <Suspense key={index} fallback={<p>Caricando i video...</p>}>
        <div className={`w-full lg:w-[800px] xl:w-[1200px] mx-auto ${index === 0 ? 'pb-10' : ''}`}>
          <YouTube videoId={videoId}
            opts={{
              height: "390",
              width: "100%",
              playerVars: { 
                autoplay: false, 
              },
            }} onReady={pauseVideo()} />
        </div>
      </Suspense>
            )
          })}
      </>
    )
  }

  export default YoutubeVideo;

"use client";

import Image from "next/image";
import { useState,Suspense } from "react";



const ImageWithSkeleton  = ({width, height, src, alt}) => {
    const [loadingImage,setLoadingImage]= useState(true);
    
      const handleImageLoad = () => {
        setLoadingImage(false);
      };
    
      const handleImageLoadingComplete = () => {
        setLoadingImage(false);
      };

return (<>
<Suspense fallback={<p>Loading feed...</p>}>
<Image
        className={loadingImage ? 'hidden' : ''}
        onLoad={handleImageLoad}
        onError={handleImageLoadingComplete}
        width={width}
        height={height}
        src={src}
        alt={alt} />
</Suspense>
        
    </>)
}

export default ImageWithSkeleton;
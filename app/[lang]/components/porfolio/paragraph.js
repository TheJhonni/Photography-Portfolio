"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { animatePageIn } from "../../animations";

const Paragraph = ({ data }) => {
  const [currentData, setCurrentData] = useState(data[0]);
  const params = useParams();

  const handleStorageChange = () => {
    if (params.lang === "it") {
      setCurrentData(data[1]);
    } else {
      setCurrentData(data[0]);
    };
  };

  useEffect(() => {
    handleStorageChange();
    animatePageIn();
  }, [params]);

  return (      
    <div className="text-center">
      <h1 className='h1 px-6 lg:p-0 text-uppercase'>{currentData.subtitle ? currentData.subtitle : currentData.title}</h1>
      <p className='pb-2 px-6 lg:p-0'>
        {currentData.paragraph && currentData.paragraph}
      </p>
    </div>
  )
}

export default Paragraph;

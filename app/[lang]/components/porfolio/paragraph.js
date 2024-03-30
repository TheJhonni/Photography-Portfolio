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
    <>
      <h1 className='h1 px-6 lg:p-0 text-uppercase'>{currentData.title}</h1>
      <br />
      <p className='pb-12 max-w-sm px-6 lg:p-0'>
        {currentData.paragraph}
      </p>
    </>
  )
}

export default Paragraph;
"use client";
import { useEffect, useState } from "react";

const Paragraph = ({ data }) => {
  const [currentData, setCurrentData] = useState({});
  const [storedLanguage, setStoredLanguage] = useState('')

  const handleStorageChange = () => {
    setStoredLanguage(localStorage.getItem("language"));
    console.log('data', data);

    if (storedLanguage === "it") {
      setCurrentData(data[1]);
    } else {
      setCurrentData(data[0]);
    };

    console.log('currentData ', currentData);
  };

  useEffect(() => {
    handleStorageChange();
  }, [storedLanguage]);

  return (
    <>
      <h1 className='h1 px-6 lg:p-0 text-uppercase'>{currentData.title}</h1>
      <p className='pb-12 max-w-sm px-6 lg:p-0'>
        {currentData.paragraph}
        <br />
      </p>
    </>
  )
}

export default Paragraph;

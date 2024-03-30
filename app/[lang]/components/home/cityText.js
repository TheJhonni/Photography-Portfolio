"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CityText = () => {
  const [buttonText, setButtonText] = useState('Milan');
  const params = useParams();

  const handleLanguageChange = () => {
    if (params.lang === "it") {
      setButtonText('Milano');
    } else {
      setButtonText('Milan');
    };
  };

  useEffect(() => {
    handleLanguageChange();
  }, [params]);

  return (
    <>
      {buttonText}
    </>
  )
}

export default CityText;

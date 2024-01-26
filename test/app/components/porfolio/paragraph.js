"use client";
import { useState } from "react";

const Paragraph = (data) =>{;
    const [currentData, setCurrentData] = useState('')
    if (localStorage.getItem('language' === 'en')) {
       const englishData = data.data.find((portfolio) => portfolio.locale === 'en-Us');
       setCurrentData(englishData);
    } else {
        const italianData = data.data.find((portfolio) => portfolio.locale === 'it');
        setCurrentData(italianData)
    }
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
"use client";
import { useEffect, useState } from "react";

async function Paragraph(data) {;
    const [currentData, setCurrentData] = useState({})
    const choosenLanguage = localStorage.getItem('language')

    // TODO currentData non viene ancora aggiornato ogni volta che l'utente cambia lingua nella navbar!
    useEffect(() => {
        const fetchData = () => {
            console.log(choosenLanguage);
            if (choosenLanguage === 'en') {
                const englishData = data.data.find((portfolio) => portfolio.locale === 'en-Us');
                setCurrentData(englishData || {});
            } else {
                const italianData = data.data.find((portfolio) => portfolio.locale === 'it');
                setCurrentData(italianData || {})
            }
        };

        fetchData();
    }, [choosenLanguage, data.data]);

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
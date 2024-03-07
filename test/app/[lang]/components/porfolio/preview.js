"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { animatePageOut } from '../../animations';

const Preview = ({linkTo, imageUrl, imageAlt}) =>{
    const [lang, setLang] = useState('en');
    const params = useParams();
    const router = useRouter();

    const handleClick = () => {
        animatePageOut('portfolio', router, 'Portfolio');
    };
    
    useEffect(() => {
        params.lang ? setLang(params.lang) : setLang('en')
      }, [params]);
return (
    <>
        <Link onClick={handleClick} className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-orange overflow-hidden' 
            href="/portfolio/[slug]/[...param]" 
            as={`/${lang}/portfolio/${linkTo}`} 
            >
            <Image width={500} height={500} src={imageUrl} alt={imageAlt}
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
            ></Image>
        </Link>
    </>
)
}

export default Preview;
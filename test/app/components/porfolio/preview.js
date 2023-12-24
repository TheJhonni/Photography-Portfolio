
import Link from 'next/link';
import Image from 'next/image';
const Preview = ({linkTo, imageUrl, imageAlt}) =>{
return (
    <>
        <Link className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-orange overflow-hidden' 
            href="/portfolio/[slug]/[...param]" as={`/portfolio/${linkTo}`} >
            <Image width={500} height={500} src={imageUrl} alt={imageAlt}
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
            ></Image>
        </Link>
    </>
)
}

export default Preview;
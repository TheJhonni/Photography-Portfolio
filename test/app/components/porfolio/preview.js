
import Link from 'next/link';
import Image from 'next/image';
const Preview = ({linkTo, imageUrl, imageAlt}) =>{
return (
    <>
        <Link className="mr-4" href="/portfolio/[slug]/[...param]" as={`/portfolio/${linkTo}`} >
            <Image width={500} height={500} src={imageUrl} alt={imageAlt}></Image>
        </Link>
    </>
)
}

export default Preview;
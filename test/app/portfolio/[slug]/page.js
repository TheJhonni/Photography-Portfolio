import { getAssetById, getImagesByTitleCollection } from "@/app/lib/contentful/utils";
import Image from "next/image";


async function  getData(reference){
    return await getImagesByTitleCollection(reference.slug)
}

async function Page({ params }) {
    const data = await getData(params);
    
    return (
        <div>My Post: {params.slug}
        {data && data.map((entity) => {
            console.log('marioooottide', entity);
            return entity.imagesArray.map(async (image) => {
                return <Image width={500} height={500}
                src={`https:${await getAssetById(image.sys.id)}`} 
                alt='ctyuvibho'></Image>
            })
        })}
        </div>
    )
};
export default Page;
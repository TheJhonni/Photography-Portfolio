import { getAssetById, getImagesByTitleCollection, getImagesUrlByAssetIds } from "@/app/lib/contentful/utils";
import PortfolioSwiper from '../../components/PortfolioSwiper/PortfolioSwiper';

async function getData(reference){
    const imagesCollectionIds = await getImagesByTitleCollection(reference.slug);
    if(imagesCollectionIds) {
        const imagesUrls = await getImagesUrlByAssetIds(imagesCollectionIds);
        return imagesUrls;
    }
}

async function Page({ params }) {
    const data = await getData(params);
    
    return (
        <div className="container w-full h-full py-32 mx-auto text-orange">
            <h1 className="h1 text-center px-6 lg:p-0 text-uppercase">{params.slug}</h1>
            <PortfolioSwiper images={data}/>
        </div>
    )
};
export default Page;
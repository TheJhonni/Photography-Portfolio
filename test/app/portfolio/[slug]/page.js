import { getImmaginiByTitoloCollezione } from "@/app/lib/contentful/utils";


async function  getData(reference){
    return await getImmaginiByTitoloCollezione(reference.slug)
}

async function Page({ params }) {
    const data = await getData(params)
    if (data) {
        console.log('data', data.immagini);
        data.map((image) => {
            console.log('finally image!', image)
        })
    };
    
    return (
        <div>My Post: {params.slug}
        {data && data.map((image) => {
            // <Image width={500} height={500} src={image.name} alt={imageAlt}></Image>
        })}
        </div>
    )
};
export default Page;
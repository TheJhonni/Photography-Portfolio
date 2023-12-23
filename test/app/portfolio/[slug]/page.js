import { getEntityByReference } from "@/app/lib/contentful/utils";


async function  getEntityByslug(reference){
    return await getEntityByReference(reference).then((res) => console.log(res));
}

async function Page({ params }) {
    const data = await getEntityByslug(params)
    if (data) {
        console.log('data', data);
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
import {getAssetById, getPortfolioData} from '../lib/contentful/utils'
import Preview from '../components/porfolio/preview';

async function  getData(){
    return await getPortfolioData();
}

async function Portfolio(){
    const data = await getData();
    //console.log('data',data[0].collezioneImmagini);
    return (
        <div className='flex'>
            <div className='grid grid-cols-2 gap-4 w-[320px]'>
                    {data && data.map((portfolio) => {
                        return portfolio.collezioneImmagini.map(async (collection) => {
                            //console.log('collection',collection.fields)
                            return (
                                <Preview linkTo={collection.fields.titolo} 
                                    imageUrl={`https:${await getAssetById(collection.fields.copertina.sys.id)}`} 
                                    imageAlt={collection.fields.titolo}
                                    >
                                </Preview>
                                )
                            })
                        })
                    }
            </div>
        </div>
    )
        
}

export default Portfolio
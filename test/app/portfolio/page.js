import {getAssetById, getPortfolioData} from '../lib/contentful/utils'
import Preview from '../components/porfolio/preview';

async function  getData(){
    return await getPortfolioData();
}

async function Portfolio(){
    const data = await getData();
    return (
        <div className='flex'>
            <div className='grid grid-cols-2 gap-4 w-[320px]'>
                    {data && data.map((portfolio) => {
                        return portfolio.collezioneImmagini.map(async (collezione) => {
                            return (
                                <Preview linkTo={collezione.fields.titolo} imageUrl={`https:${await getAssetById(collezione.fields.copertina.sys.id)}`} imageAlt={'a caso'}></Preview>
                                )
                            })
                        })
                    }
            </div>
        </div>
    )
        
}

export default Portfolio
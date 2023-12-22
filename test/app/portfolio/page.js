import Link from 'next/link';
import {getAssetById, getPortfolioData} from '../lib/contentful/utils'

async function  getData(){
    return await getPortfolioData();
}

async function Portfolio(){
    const data = await getData();
    return (
        <div>
        {data && data.map((portfolio) => {
            return portfolio.collezioneImmagini.map((collezione) => {
                return (<Link className="mr-4" href="/portfolio/[slug]/[...param]" as={`/portfolio/${collezione.fields.titolo}`} >{collezione.fields.titolo}</Link>, console.log(getAssetById(collezione.fields.copertina.sys.id)))
                })
            })
        }
    </div>)
}

export default Portfolio
import Link from 'next/link';
import {getPortfolioData} from '../lib/contentful/utils'

async function  getData(){
    return await getPortfolioData();
}

async function Portfolio(){
    const data = await getData();
    return (
        <div>
        {data && data.map((portfolio) => {
            portfolio.collezioneImmagini.map((collezione) => {
                return <Link href={collezione.fields?.titolo}>{collezione.fields?.titolo}</Link>, console.log('banana', collezione.fields)
            })
        })}
    </div>)
}

export default Portfolio
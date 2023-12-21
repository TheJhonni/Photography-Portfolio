import {getPortfolioData} from '../lib/contentful/utils'

async function  getData(){
    console.log('sono in portfolio')
    console.log(await getPortfolioData())
}



async function Portfolio(){
    getData();
    return (<p>Ciao portfolio</p>)
}

export default Portfolio
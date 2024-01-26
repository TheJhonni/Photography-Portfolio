import {getAssetById, getDynamicData} from '../lib/contentful/utils'
import Preview from '../components/porfolio/preview';
import Link from 'next/link';
import Paragraph from '../components/porfolio/paragraph';

async function getData(){
  return await getDynamicData(process.env.CONTENTFUL_CONTENT_TYPE_PORTFOLIO);
}

async function Portfolio(){
    const data = await getData();
    return (
        <section
      className='section bg-tertiary h-full w-full'>
      <div className='container mx-auto h-full relative text-orange'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-36 
          lg:pt-0 pb-8'>
            {data &&
                <div className='flex flex-col lg:items-start'>
                <Paragraph data={data} />
                <Link href='/contact' className='btn px-4 bg-white hover:bg-orange text-tertiary 
                  hover:scale-105 rounded-full mt-4 mb-[30px] mx-auto lg:mx-0'
                >
                  Contattami
                </Link>
              </div>
            }         
          <div className='grid grid-cols-2 lg:gap-2'>
            {data && data.map((portfolio) => {
                        return portfolio.imagesCollection.map(async (collection) => {
                            return (
                                <Preview 
                                    key={collection.fields.preview.sys.id}
                                    linkTo={collection.fields.title} 
                                    imageUrl={`https:${await getAssetById(collection.fields.preview.sys.id)}`} 
                                    imageAlt={collection.fields.title}
                                    >
                                </Preview>
                                )
                            })
                        })
                    }
          </div>
        </div>
      </div>
    </section>
    )
        
}

export default Portfolio
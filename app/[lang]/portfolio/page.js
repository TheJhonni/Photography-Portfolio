import {getAssetById, getDynamicData} from '../lib/contentful/utils'
import Preview from '../components/porfolio/preview';
import Paragraph from '../components/porfolio/paragraph';
import MainSharedButton from '../components/mainSharedButton';

async function getData(){
  return await getDynamicData(process.env.CONTENTFUL_CONTENT_TYPE_PORTFOLIO);
}

async function Portfolio(){
    const data = await getData();

    return (
        <section
      className='section bg-tertiary h-full w-full pt-36 lg:pt-0'>
      <div className='container mx-auto h-full relative text-orange'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:pl-[30px] pt-20 md:pt-80 lg:pt-0'>
            {data &&
                <div className='flex flex-col pb-44 lg:items-center'>
                  <div className='px-6 lg:p-0 lg:mb-6'>
                    <Paragraph data={data} /> 
                  </div>
                  <MainSharedButton route={'portfolio'} />
                </div>
            }         
          <div className='grid grid-cols-2 lg:gap-2'>
            {data && data[0].imagesCollection.map(async (collection) => {
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
                        }
          </div>
        </div>
      </div>
    </section>
    )
        
}

export default Portfolio
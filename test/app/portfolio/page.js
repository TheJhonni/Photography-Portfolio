import {getAssetById, getPortfolioData} from '../lib/contentful/utils'
import Preview from '../components/porfolio/preview';
import Link from 'next/link';

async function  getData(){
    return await getPortfolioData();
}

async function Portfolio(){
    const data = await getData();
    return (
        <section
    //   initial={{ opacity: 0, y: '100%', backgroundColor: '#C67E28' }}
    //   animate={{ opacity: 1, y: 0, backgroundColor: '#1c2e40' }}
    //   exit={{ opacity: 0, y: '100%', backgroundColor: '#C67E28' }}
    //   transition={transition1}
      className='section bg-tertiary h-full w-full'>
      <div className='container mx-auto h-full relative text-orange'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-36 
          lg:pt-0 pb-8'>
            {data && data.map((portfolio) => {
              return (
                <div
                  // initial={{ opacity: 0, x: '-80%' }} animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0, x: '-80%' }} transition={transition1}
                  // onMouseEnter={ mouseEnterHandler }
                  // onMouseLeave={ mouseLeaveHandler }
                  key={portfolio.title}
                  className='flex flex-col lg:items-start'>
                <h1 className='h1 px-6 lg:p-0 text-uppercase'>{portfolio.title}</h1>
                <p className='pb-12 max-w-sm px-6 lg:p-0'>            
                  {portfolio.paragraph.content.map((c) => {
                    console.log('paragrafooo ndo cazzo sei?!', c.content.map((c) => c.value));
                    return c
                  })}
                  <br />
                </p>
                <Link href='/contact' className='btn px-4 bg-white hover:bg-orange text-tertiary 
                  hover:scale-105 rounded-full mt-4 mb-[30px] mx-auto lg:mx-0'
                >
                  Contattami
                </Link>
              </div>
              )
            })}
          <div
            // initial={{ opacity: 0, x: '80%' }} animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: '80%' }} transition={transition1}
            // onMouseEnter={ mouseEnterHandler }
            // onMouseLeave={ mouseLeaveHandler }
            className='grid grid-cols-2 lg:gap-2'>
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
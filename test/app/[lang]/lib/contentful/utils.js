import { contentfulSingleton } from "./client";



export async function getDynamicData(location){
    try {
        const englishResponse = await contentfulSingleton.getContentfulClient().getEntries({ content_type: location });
        const italianResponse = await contentfulSingleton.getContentfulClient().getEntries({ content_type: location, locale: 'it' });
        const englishResponseData = englishResponse.items;
        const italianResponseData = italianResponse.items;
        
        if (englishResponseData && italianResponseData) {
          const allData = [...englishResponseData, ...italianResponseData]
          return allData.map(({ fields }, index) => {
            const customFields = {
              ...fields, 
              paragraph: fields.paragraph.content[0].content[0].value,
              locale: allData[index].sys.locale
            }
            return customFields;
          });
        } else { 
         return []
        }
      } catch (error) {
        console.log(error);
      }
}

export async function getAssetById(id){
  try {
    const response = await contentfulSingleton.getContentfulClient().getAsset(id);
    return response.fields.file.url;
  } catch (error) {
    console.log(error)
  }
}

export async function getImagesUrlByAssetIds(assetIds){
  try {
    const imagesUrls = await Promise.all(
      assetIds.map(async (imageCollection) => {
        return Promise.all(
          imageCollection.map(async (id) => {
            return getAssetById(id);
          })
        );
      })
    );
    return imagesUrls;
  } catch (error) {
    console.log(error)
  }
}

export async function getEntityByReference(reference) {
  try {
    const response = await getPortfolioData()
    if (response) {
      return response.map((portfolio) => {
        return  portfolio.collezioneImmagini.map((collection) => {
          return collection.fields.title === reference;
        })
      })
    } else { 
     return []
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getImagesByTitleCollection(title){
  try {
    const response = await contentfulSingleton.getContentfulClient().getEntries({ content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_COLLECTION, locale: 'it','fields.title':title });
    const responseData = response.items;    
    if (responseData) {
      return responseData.map(({ fields }) => {
        return fields.imagesArray.map((image) => {
            return image.sys.id
          }) 
        })
    } else { 
     return []
    }
  } catch (error) {
    console.log(error);
  }
}

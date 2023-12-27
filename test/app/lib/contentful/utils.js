import { contentfulSingleton } from "./client";


export async function getPortfolioData(){
    try {
        const response = await contentfulSingleton.getContentfulClient().getEntries({ content_type: process.env.CONTENTFUL_CONTENT_TYPE_PORTFOLIO, locale: 'it' });
        const responseData = response.items;
        
        if (responseData) {
          return responseData.map(({ fields }) => {
            return fields
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
    const response = await contentfulSingleton.getContentfulClient().getEntries({ content_type: process.env.CONTENTFUL_CONTENT_TYPE_COLLECTION, locale: 'it','fields.title':title });
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


export function getAboutData(){
    
}

export function getHomeData(){
    
}

export function getContactData(){
    
}
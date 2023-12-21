import { contentfulSingleton } from "./client";


export async function getPortfolioData(){
    try {
        const response = await contentfulSingleton.getContentfulClient().getEntries({ content_type: process.env.CONTENTFUL_CONTENT_TYPE });
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

export function getAboutData(){
    
}

export function getHomeData(){
    
}

export function getContactData(){
    
}
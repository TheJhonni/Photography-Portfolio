import * as contentful from 'contentful';


class ContentfulSingleton {
    constructor(){
        if (!ContentfulSingleton.instance) {
            this.client = contentful.createClient({
              space: process.env.CONTENTFUL_SPACE,
              accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
            });
      
            ContentfulSingleton.instance = this;
          }
      
          return ContentfulSingleton.instance;
    }
    getContentfulClient() {
        return this.client;
    }

}
export const contentfulSingleton = new ContentfulSingleton();
import { client } from './client';


export function getCollection() {
    try {
        const response = client.getEntries({ content_type: 'ikbWebsite' });
        const responseData = response.items;
    
        if (responseData) {
            const content = responseData[0].fields;
            return content;
        } else {
            return
        }
    } catch (error) {
        console.log(error);
    }
};
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../../transitions';
import { useLocation } from 'react-router-dom';

const FullImagesCollection = ({ content }) => {
    const location = useLocation();
    const [imageCollection, setImageCollection] = useState([]);

    useEffect(() => {
        if (content && content.length) {
            console.log(location);
            console.log(content);
            const filteredCollections = Object.keys(content).filter(key =>
                key.includes('ImageCollection')
            );

            const result = Object.fromEntries(
               filteredCollections.map(key => [key, content[key]])
            );

            const parts = location.pathname.split('/');
            const lastPart = parts[parts.length - 1];
            
            // const findLocationId = result.filter(({ sys }) => sys.id.includes(lastPart));
            setImageCollection(result);
            console.log(imageCollection);
            // console.log(findLocationId);
        }
    }, [])

    return (
        <motion.section
            initial={{ opacity: 0, y: '100%', backgroundColor: '#C67E28' }}
            animate={{ opacity: 1, y: 0, backgroundColor: '#1c2e40' }}
            exit={{ opacity: 0, y: '100%', backgroundColor: '#C67E28' }}
            transition={transition1}
            className='section bg-tertiary cursor-none'>
            <div className='container mx-auto h-full relative text-orange'>
                <div className='flex flex-col lg:flex-row h-full items-center justify-start
                gap-x-24 text-center lg:text-left pt-36 lg:pt-0 pb-8'>
                </div>
            </div>
        </motion.section>
    )
}
export default FullImagesCollection;
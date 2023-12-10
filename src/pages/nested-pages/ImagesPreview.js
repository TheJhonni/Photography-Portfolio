import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ImagesPreview = ({ content }) => {
    const [firstObjectCollection, setFirstObjectCollection] = useState([]);
    const [imageCollection, setImageCollection] = useState([]);

    useEffect(() => {
        if (content) {
            const filteredCollections = Object.keys(content).filter(key =>
                key.includes('ImageCollection')
            );

            const result = Object.fromEntries(
               filteredCollections.map(key => [key, content[key]])
            );
            setImageCollection(result);
            const firstObjectsArray = Object.keys(result).map(key => result[key][0]);
            setFirstObjectCollection(firstObjectsArray)

            console.log(imageCollection);

        }           
    }, [content])

    return (
        <>
            {content && firstObjectCollection.length && firstObjectCollection.map((coverImage) => {
                return (
                    <Link to={`/portfolio/collection/${coverImage?.sys.id}`} key={coverImage?.sys.id} >
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-orange overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={coverImage?.fields.file.url} alt={coverImage?.fields.file.fileName} />
                        </div>
                    </Link>
                )
            })}
        </>
    );
};

export default ImagesPreview;
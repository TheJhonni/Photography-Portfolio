import React, { useCallback, useEffect, useState } from 'react';
import Home from '../pages/Home';
import About from '../pages/About'
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ImagesPreview from '../pages/nested-pages/ImagesPreview';
import FullImagesCollection from '../pages/nested-pages/FullimagesCollection';
import { client } from '../client';

const AnimRoutes = () => {
  const location = useLocation();
  const [collectionLoading, setCollectionLoading] = useState(true);
  const [content, setContent] = useState([]);

  const getCollection = useCallback(async () => {
    setCollectionLoading(true)
    try {
      const response = await client.getEntries({ content_type: 'ikbWebsite' });
      const responseData = response.items;
      
      if (responseData) {
        responseData.map(({ fields }) => {
          return setContent(fields)
        });
      } else {
        setContent([])
      }
      setCollectionLoading(false);
    } catch (error) {
      console.log(error);
      setCollectionLoading(false)
    }
  }, [])

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <AnimatePresence initial={ true } mode='wait'>
      <Routes key={location.pathname} location={location}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About content={content}/>} />
      <Route path='/portfolio' element={<Portfolio content={content}/>} />
      <Route path='/contact' element={<Contact content={content}/>} />
      <Route element={<ImagesPreview/>} />
      <Route path='/portfolio/collection/:id' element={<FullImagesCollection content={content}/>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;

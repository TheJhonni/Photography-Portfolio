import React, { useCallback, useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from './context/CursorContext';
import { client } from './client';

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);


  const [collectionLoading, setCollectionLoading] = useState(true);
  const [content, setContent] = useState({});

  const getCollection = useCallback(async () => {
    setCollectionLoading(true)
    try {
      const response = await client.getEntries({ content_type: 'ikbWebsite' });
      const responseData = response.items;
      
      if (responseData) {
        setContent(responseData[0].fields)
      } else {
        setContent('')
      }
      setCollectionLoading(false)
    } catch (error) {
      console.log(error);
      setCollectionLoading(false)
    }
    console.log(content);
  }, [])

  useEffect(() => {
    getCollection();
  }, [getCollection])

  return (
    <>
      <Router>
        <Header></Header>
        <AnimRoutes content={content}/>
      </Router>
      <motion.div
        variants={ cursorVariants }
        animate={ cursorBG }
        className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none
          z-50 rounded-full'></motion.div>
    </>
  );
};

export default App;

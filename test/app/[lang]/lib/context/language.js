// // languageContext.js
// import React, { createContext, useContext, useState } from 'react';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [english, setEnglish] = useState(true);

//   const toggleLanguage = () => {
//     setEnglish((prevEnglish) => !prevEnglish);
//   };

//   return (
//     <LanguageContext.Provider value={{ english, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguageContext = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguageContext deve essere utilizzato all\'interno di un LanguageProvider');
//   }
//   return context;
// };

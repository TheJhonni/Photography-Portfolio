// import React, { useState, useEffect, createContext } from 'react';

// export const LanguageToggleContext = createContext();

// const LanguageProvider = () => {
//   const [english, setEnglish] = useState(false)

//   useEffect(() => {

//   });

//   return (
//     <LanguageToggleContext.Provider value={{ english, setEnglish }} >
//       <label class="relative inline-flex items-center me-5 cursor-pointer">
//           <input onClick={() => setEnglish(!english)} type="checkbox" value="" class="sr-only peer" />
//           <div class="w-11 h-6 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-orange peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange"></div>
//           <span class="ml-4 ms-3 text-sm font-medium text-orange">{english ? 'Italiano' : 'English'}</span>
//       </label>
//     </LanguageToggleContext.Provider>
//   )
// };

// export default LanguageProvider;

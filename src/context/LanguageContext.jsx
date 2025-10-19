import React, { createContext, useContext } from 'react';

const LanguageContext = createContext('uz');

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children, lang }) => {
  return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>;
};
import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { translations, languages } from './i18n';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      // Check localStorage first, then browser language, default to English
      const saved = localStorage.getItem('language');
      if (saved && translations[saved]) return saved;
    } catch (e) {
      console.warn('LocalStorage access denied', e);
    }
    
    const navLang = (typeof navigator !== 'undefined' && navigator.language) || 'en';
    const browserLang = navLang.split('-')[0];
    return translations[browserLang] ? browserLang : 'en';
  });

  const currentLang = languages.find(lang => lang.code === language);
  const isRTL = currentLang?.rtl || false;

  useEffect(() => {
    try {
      // Save language preference
      localStorage.setItem('language', language);
    } catch (e) {
      console.warn('LocalStorage access denied', e);
    }
    
    // Set document direction
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    isRTL,
    languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

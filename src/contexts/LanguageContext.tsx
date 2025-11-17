import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LanguageCode, defaultLanguage, languagePaths } from '@/i18n/config';
import { useLocation, useNavigate } from 'react-router-dom';
import { dictionaries } from '@/i18n/locales';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Detect language from URL
  const detectLanguage = (): LanguageCode => {
    const path = location.pathname;
    const langCode = path.split('/')[1];
    
    if (langCode === 'en' || langCode === 'de' || langCode === 'es' || 
        langCode === 'it' || langCode === 'pt' || langCode === 'sv' || 
        langCode === 'no' || langCode === 'da') {
      return langCode as LanguageCode;
    }
    return defaultLanguage;
  };

  const [language, setLanguageState] = useState<LanguageCode>(detectLanguage);

  // Update language when URL changes
  useEffect(() => {
    const newLang = detectLanguage();
    if (newLang !== language) {
      setLanguageState(newLang);
    }
  }, [location.pathname]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    
    // Navigate to the new language path
    const currentPath = location.pathname;
    const currentLangPrefix = languagePaths[language];
    
    // Remove current language prefix
    let pathWithoutLang = currentPath;
    if (currentLangPrefix && currentPath.startsWith(currentLangPrefix)) {
      pathWithoutLang = currentPath.substring(currentLangPrefix.length) || '/';
    }
    
    // Add new language prefix
    const newLangPrefix = languagePaths[lang];
    const newPath = newLangPrefix + pathWithoutLang;
    
    navigate(newPath);
  };

  // Simple translation function using dictionaries
  const t = (key: string): string => {
    const dict = dictionaries[language] as any;
    const parts = key.split('.');
    let current: any = dict;
    for (const p of parts) {
      if (current && typeof current === 'object' && p in current) {
        current = current[p];
      } else {
        return key; // fallback to key if missing
      }
    }
    if (typeof current === 'string') return current;
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

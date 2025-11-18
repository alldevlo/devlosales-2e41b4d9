import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LanguageCode, defaultLanguage, languagePaths, routeTranslations, caseStudySlugs } from '@/i18n/config';
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

  const [language, setLanguageState] = useState<LanguageCode>(() => detectLanguage());

  // Update language when URL changes
  useEffect(() => {
    const newLang = detectLanguage();
    if (newLang !== language) {
      setLanguageState(newLang);
    }
  }, [location.pathname, language]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);

    const currentPath = location.pathname;
    const currentLangPrefix = languagePaths[language];

    // Strip current language prefix from path
    let pathWithoutLang = currentPath;
    if (currentLangPrefix && currentPath.startsWith(currentLangPrefix)) {
      pathWithoutLang = currentPath.substring(currentLangPrefix.length) || '/';
    }

    // Build translated path segments
    const segments = pathWithoutLang.split('/').filter(Boolean); // e.g. ['resultats', 'abacus-prospects-interesses']

    const newSegments: string[] = [];

    if (segments.length === 0) {
      // Home
      // no segments
    } else {
      // Translate top-level known routes
      const currentRoutes = routeTranslations[language];
      const targetRoutes = routeTranslations[lang];

      if (segments[0] === currentRoutes.results) {
        newSegments.push(targetRoutes.results);
        // Translate case study slug if present
        if (segments[1]) {
          const currentSlug = segments[1];
          // Reverse map to a case study key
          const entry = Object.entries(caseStudySlugs).find(([_key, slugs]) => slugs[language] === currentSlug);
          if (entry) {
            const [key, slugs] = entry as [string, Record<LanguageCode, string>];
            newSegments.push(slugs[lang]);
          } else {
            newSegments.push(currentSlug);
          }
        }
      } else if (segments[0] === currentRoutes.contact) {
        newSegments.push(targetRoutes.contact);
      } else {
        // Unknown top-level segment, keep as-is (e.g., other pages)
        newSegments.push(...segments);
      }
    }

    const newLangPrefix = languagePaths[lang];
    const pathRest = newSegments.length ? `/${newSegments.join('/')}` : '';
    const newPath = `${newLangPrefix}${pathRest}` || '/';

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

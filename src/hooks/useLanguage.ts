import { useLocation, useNavigate } from 'react-router-dom';
import { translations, Language } from '@/i18n/translations';

export const useLanguage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getCurrentLanguage = (): Language => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const firstPart = pathParts[0];
    
    if (firstPart === 'en' || firstPart === 'fr') {
      return firstPart as Language;
    }
    return 'en';
  };

  const lang = getCurrentLanguage();
  const t = translations[lang];

  const switchLanguage = (newLang: Language) => {
    const pathWithoutLang = location.pathname.replace(/^\/(fr|en)/, '');
    const newPath = `/${newLang}${pathWithoutLang || ''}`;
    navigate(newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { lang, t, switchLanguage };
};

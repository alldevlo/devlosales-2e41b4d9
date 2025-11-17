import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages, languagePaths, LanguageCode } from '@/i18n/config';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
}

const SEOHead = ({ title, description, keywords, canonicalPath }: SEOHeadProps) => {
  const { language } = useLanguage();
  const baseUrl = 'https://devlo.ch';

  // Generate hreflang URLs for all languages
  const hrefLangUrls = Object.keys(languages).map((lang) => {
    const langCode = lang as LanguageCode;
    const langPath = languagePaths[langCode];
    const fullUrl = `${baseUrl}${langPath}${canonicalPath}`;
    
    return {
      lang: langCode,
      url: fullUrl,
    };
  });

  const currentUrl = `${baseUrl}${languagePaths[language]}${canonicalPath}`;

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />
      
      {/* hreflang tags */}
      {hrefLangUrls.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${canonicalPath}`} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : `${language}_${language.toUpperCase()}`} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOHead;

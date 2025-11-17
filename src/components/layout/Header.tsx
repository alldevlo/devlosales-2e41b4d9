import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { languagePaths, routeTranslations } from "@/i18n/config";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  const langPrefix = languagePaths[language];
  const routes = routeTranslations[language];

  const navItems = [
    { 
      name: language === 'fr' ? 'Accueil' : language === 'en' ? 'Home' : 
            language === 'de' ? 'Startseite' : language === 'es' ? 'Inicio' :
            language === 'it' ? 'Home' : language === 'pt' ? 'Início' :
            language === 'sv' ? 'Hem' : language === 'no' ? 'Hjem' : 'Hjem',
      path: `${langPrefix}/` 
    },
    { 
      name: language === 'fr' ? 'Résultats' : language === 'en' ? 'Results' : 
            language === 'de' ? 'Ergebnisse' : language === 'es' ? 'Resultados' :
            language === 'it' ? 'Risultati' : language === 'pt' ? 'Resultados' :
            language === 'sv' ? 'Resultat' : language === 'no' ? 'Resultater' : 'Resultater',
      path: `${langPrefix}/${routes.results}` 
    },
    { 
      name: language === 'fr' ? 'Contact' : language === 'en' ? 'Contact' : 
            language === 'de' ? 'Kontakt' : language === 'es' ? 'Contacto' :
            language === 'it' ? 'Contatto' : language === 'pt' ? 'Contato' :
            language === 'sv' ? 'Kontakt' : language === 'no' ? 'Kontakt' : 'Kontakt',
      path: `${langPrefix}/${routes.contact}` 
    },
  ];

  const isActive = (path: string) => {
    if (path === `${langPrefix}/`) {
      return location.pathname === langPrefix || location.pathname === `${langPrefix}/`;
    }
    return location.pathname === path || location.pathname === `${path}/`;
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to={langPrefix || '/'} className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">devlo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleNavClick}
              className={`text-xl font-medium transition-colors hover:text-primary ${
                isActive(item.path)
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <Button asChild variant="default" size="sm">
            <Link to={`${langPrefix}/${routes.contact}`} onClick={handleNavClick}>
              {language === 'fr' ? 'Planifier votre consultation' : 
               language === 'en' ? 'Schedule your consultation' :
               language === 'de' ? 'Beratung planen' :
               language === 'es' ? 'Programar consulta' :
               language === 'it' ? 'Prenota consulenza' :
               language === 'pt' ? 'Agendar consulta' :
               language === 'sv' ? 'Boka konsultation' :
               language === 'no' ? 'Bestill konsultasjon' : 'Book konsultation'}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <LanguageSwitcher />
            </div>
            <Button asChild variant="default" size="sm" className="w-full">
              <Link to={`${langPrefix}/${routes.contact}`} onClick={handleNavClick}>
                {language === 'fr' ? 'Planifier votre consultation' : 
                 language === 'en' ? 'Schedule consultation' :
                 language === 'de' ? 'Beratung planen' :
                 language === 'es' ? 'Programar consulta' :
                 language === 'it' ? 'Prenota consulenza' :
                 language === 'pt' ? 'Agendar consulta' :
                 language === 'sv' ? 'Boka konsultation' :
                 language === 'no' ? 'Bestill konsultasjon' : 'Book konsultation'}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

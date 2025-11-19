import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, t, switchLanguage } = useLanguage();
  const navItems = [
    { name: t.nav.home, path: `/${lang}` },
    { name: t.nav.results, path: `/${lang}/resultats` },
    { name: t.nav.contact, path: `/${lang}/contact` },
  ];
  const isActive = (path: string) => location.pathname === path;
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };
  const handleLanguageSwitch = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr';
    switchLanguage(newLang);
    setIsMenuOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to={`/${lang}`} className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">devlo</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={handleNavClick} className={`text-xl font-medium transition-colors hover:text-primary ${isActive(item.path) ? "text-primary" : "text-foreground/70"}`}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={handleLanguageSwitch} className="flex items-center space-x-1 text-sm font-medium text-foreground/70 hover:text-primary transition-colors" aria-label="Switch language">
            <Globe size={16} />
            <span>{lang === 'fr' ? 'EN' : 'FR'}</span>
          </button>
          <Button asChild variant="default" size="sm">
            <Link to={`/${lang}/contact`} onClick={handleNavClick}>{t.nav.cta}</Link>
          </Button>
        </div>
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={handleNavClick} className={`text-base font-medium transition-colors hover:text-primary ${isActive(item.path) ? "text-primary" : "text-foreground/70"}`}>
                {item.name}
              </Link>
            ))}
            <button onClick={handleLanguageSwitch} className="flex items-center space-x-2 text-base font-medium text-foreground/70 hover:text-primary transition-colors">
              <Globe size={18} />
              <span>{lang === 'fr' ? 'English' : 'Français'}</span>
            </button>
            <Button asChild variant="default" size="sm" className="w-full">
              <Link to={`/${lang}/contact`} onClick={handleNavClick}>{t.nav.cta}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;

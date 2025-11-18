import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { languagePaths, routeTranslations } from "@/i18n/config";

const Footer = () => {
  const { language, t } = useLanguage();
  const prefix = languagePaths[language];
  const routes = routeTranslations[language];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xl font-bold">{t('footer.mission')}</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              {t('footer.missionText')}
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">{t('footer.swissOffice')}</h3>
            <div className="space-y-3 text-primary-foreground/90">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                <p>
                  Ruelle des Dolles 1<br />
                  CH-1071 Rivaz<br />
                  Suisse
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+41797586403" className="hover:text-accent transition-colors">
                  +41 79 758 64 03
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:emea@devlo.ch" className="hover:text-accent transition-colors">
                  emea@devlo.ch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* USA Office */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold">{t('footer.usaOffice')}</h3>
              <div className="space-y-3 text-primary-foreground/90">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                  <p>
                    devlo LLC<br />
                    500 4TH ST NW SUITE 102 #1591<br />
                    Albuquerque NM 87102<br />
                    USA
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href="tel:+12342018019" className="hover:text-accent transition-colors">
                    +1 (234) 201-8019
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a href="mailto:americas@devlo.ch" className="hover:text-accent transition-colors">
                    americas@devlo.ch
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold">{t('footer.navigation')}</h3>
              <nav className="space-y-2 text-primary-foreground/90">
                <Link to={`${prefix}/`} className="block hover:text-accent transition-colors">
                  {t('nav.home')}
                </Link>
                <Link to={`${prefix}/${routes.results}`} className="block hover:text-accent transition-colors">
                  {t('nav.results')}
                </Link>
                <Link to={`${prefix}/${routes.contact}`} className="block hover:text-accent transition-colors">
                  {t('nav.contact')}
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} devlo. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

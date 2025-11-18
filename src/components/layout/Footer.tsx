import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Mission */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xl font-bold">Notre Mission</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              Notre mission est de permettre aux entreprises B2B de rencontrer leurs prospects au
              travers de campagnes de prospection commerciale ultra-ciblées et personnalisées, et
              d'un démarchage télémarketing innovant et digital.
            </p>
          </div>

          {/* Switzerland Office */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Bureau Suisse</h3>
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
              <h3 className="mb-4 text-xl font-bold">Bureau USA</h3>
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

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-xl font-bold">Navigation</h3>
              <nav className="space-y-2 text-primary-foreground/90">
                <Link to="/" className="block hover:text-accent transition-colors">
                  Accueil
                </Link>
                <Link to="/resultats" className="block hover:text-accent transition-colors">
                  Résultats
                </Link>
                <Link to="/contact" className="block hover:text-accent transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} devlo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

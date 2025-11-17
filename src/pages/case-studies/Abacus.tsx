import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { languagePaths, routeTranslations } from "@/i18n/config";
import WistiaVideo from "@/components/WistiaVideo";
import { dictionaries } from "@/i18n/locales";

const Abacus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useLanguage();
  const langPrefix = languagePaths[language];
  const routes = routeTranslations[language];

  return (
    <>
      <Helmet>
        <title>Abacus : +30 prospects qualifiés et intéressés | Étude de cas devlo</title>
        <meta name="description" content="Découvrez comment Abacus a généré plus de 30 prospects qualifiés et intéressés grâce à des campagnes de prospection multicanales personnalisées mises en place par devlo." />
        <meta name="keywords" content="abacus, prospection B2B, génération leads, prospects qualifiés, logiciels services" />
        <link rel="canonical" href="https://devlo.ch/resultats/abacus-prospects-interesses" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                {/* Localized back link */}
                {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
                <LocalizedBackToResults />
                
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 text-sm font-semibold bg-secondary text-secondary-foreground rounded-full">
                    Logiciels & Services B2B
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Abacus : Comment générer plus de 30 prospects qualifiés et intéressés grâce à une prospection multicanale personnalisée
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                  Génération de plus de 30 prospects qualifiés et intéressés pour Abacus grâce à des campagnes de prospection multicanales ultra-personnalisées, combinant emails, appels et LinkedIn.
                </p>

                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl font-bold text-secondary mb-2">+30</div>
                  <div className="text-primary-foreground/90">Prospects qualifiés et intéressés</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Contexte & Profil de l'entreprise</h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Abacus est un fournisseur de solutions logicielles et de services B2B qui aide les entreprises à optimiser leurs processus internes. Dans un marché compétitif, Abacus cherchait à accélérer sa croissance en générant un pipeline constant de prospects qualifiés et réellement intéressés par ses solutions.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Problématique (avant devlo)</h2>
                
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">1. Pipeline commercial insuffisant</h3>
                      <p className="text-muted-foreground">
                        L'équipe commerciale d'Abacus manquait d'opportunités qualifiées à travailler, ralentissant la croissance de l'entreprise.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">2. Manque de temps pour la prospection</h3>
                      <p className="text-muted-foreground">
                        Les commerciaux devaient se concentrer sur la conversion des opportunités existantes et n'avaient pas le temps de prospecter activement de nouveaux clients.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">3. Besoin d'une approche structurée</h3>
                      <p className="text-muted-foreground">
                        Abacus avait besoin d'une méthodologie éprouvée pour générer de manière prévisible et scalable des prospects qualifiés.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Stratégie mise en place</h2>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-border mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Campagnes multicanales ultra-personnalisées
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Identification des ICP et génération de leads</h4>
                        <p className="text-muted-foreground">
                          Analyse approfondie pour identifier les profils de clients idéaux d'Abacus et constitution d'une base de données de prospects hautement qualifiés.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Séquences multicanales personnalisées</h4>
                        <p className="text-muted-foreground">
                          Mise en place de séquences combinant emails personnalisés, appels téléphoniques et messages LinkedIn pour maximiser l'engagement.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Qualification rigoureuse</h4>
                        <p className="text-muted-foreground">
                          Processus de qualification approfondi pour s'assurer que chaque prospect transféré à Abacus est réellement intéressé et qualifié.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-4">Témoignage client vidéo</h3>
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <WistiaVideo mediaId="cr7dgltkvu" className="w-full" />
                  </div>
                  <p className="text-muted-foreground italic">
                    Découvrez le témoignage complet d'Abacus sur les résultats obtenus avec devlo et l'impact sur leur croissance commerciale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Résultats obtenus</h2>
                
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg p-8 border border-secondary/20 mb-8">
                  <p className="text-xl font-semibold mb-6 text-foreground">
                    Plus de 30 prospects qualifiés et intéressés générés pour Abacus, alimentant le pipeline commercial de l'équipe de vente.
                  </p>
                  
                  <div className="text-center">
                    <div className="text-5xl font-bold text-secondary mb-2">+30</div>
                    <div className="text-muted-foreground font-semibold">Prospects qualifiés et intéressés</div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Impact Business</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Pipeline commercial alimenté</strong> avec des opportunités qualifiées à forte conversion
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Commerciaux focalisés sur la vente</strong> plutôt que sur la prospection
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Processus reproductible</strong> pour une génération continue de leads
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt à remplir votre pipeline commercial ?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                  Découvrez comment devlo peut vous aider à générer un flux constant de prospects qualifiés et intéressés.
                </p>
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link to={`${langPrefix}/${routes.contact}`}>
                    Planifier ma consultation gratuite
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Abacus;

// Helper component for localized back link
const LocalizedBackToResults = () => {
  const { language } = useLanguage();
  const langPrefix = languagePaths[language];
  const routes = routeTranslations[language];
  return (
    <Link to={`${langPrefix}/${routes.results}`} className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
      <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
      {dictionaries[language].results.backToResults}
    </Link>
  );
};

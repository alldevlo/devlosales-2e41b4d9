import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { languagePaths, routeTranslations } from "@/i18n/config";
import { dictionaries } from "@/i18n/locales";

const ManyWays = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useLanguage();
  const langPrefix = languagePaths[language];
  const routes = routeTranslations[language];

  return (
    <>
      <Helmet>
        <title>Many Ways : 70% de réponses et 8% de meetings en consulting | Étude de cas devlo</title>
        <meta name="description" content="Découvrez comment Many Ways a atteint 70% de taux de réponse et 8% de taux de meetings grâce à une campagne ultra-personnalisée dans le secteur du conseil." />
        <meta name="keywords" content="many ways, consulting, prospection B2B, taux réponse, génération leads consulting" />
        <link rel="canonical" href="https://devlo.ch/resultats/manyways-consulting-70-reponses" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <Link to={`${langPrefix}/${routes.results}`} className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  {dictionaries[language].results.backToResults}
                </Link>
                
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 text-sm font-semibold bg-secondary text-secondary-foreground rounded-full">
                    Consulting B2B
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Many Ways : Comment atteindre 70% de taux de réponse et 8% de meetings dans le secteur du conseil
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                  Campagne ultra-personnalisée pour un cabinet de conseil atteignant un taux de réponse exceptionnel de 70% et un taux de meetings de 8% grâce à une approche hyper-ciblée et des messages de grande valeur.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-5xl font-bold text-secondary mb-2">70%</div>
                    <div className="text-primary-foreground/90">Taux de réponse</div>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-5xl font-bold text-secondary mb-2">8%</div>
                    <div className="text-primary-foreground/90">Taux de meetings</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Contexte & Profil de l'entreprise</h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Many Ways SA est un cabinet de conseil suisse spécialisé dans l'accompagnement stratégique et opérationnel des entreprises. Dans un marché du conseil saturé et compétitif, Many Ways cherchait à se démarquer et à générer un engagement exceptionnel auprès des décideurs.
                </p>

                <div className="bg-card border border-border rounded-lg p-8 mt-8">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Témoignage client : Xavier Leuthold (Many Ways SA)</h3>
                  <blockquote className="text-muted-foreground italic border-l-4 border-secondary pl-4">
                    "L'approche de devlo a été un game-changer pour notre développement commercial. Atteindre 70% de taux de réponse dans le secteur du conseil est extraordinaire. Leur capacité à créer des messages ultra-personnalisés qui résonnent avec nos prospects a dépassé toutes nos attentes. Les 8% de meetings qualifiés obtenus représentent exactement le type de clients que nous cherchons à atteindre."
                  </blockquote>
                </div>
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
                      <h3 className="text-xl font-semibold mb-3 text-foreground">1. Marché du conseil ultra-compétitif</h3>
                      <p className="text-muted-foreground">
                        Les décideurs sont constamment sollicités par des cabinets de conseil, créant une saturation et une méfiance envers les approches commerciales non sollicitées.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">2. Nécessité de démontrer une expertise unique</h3>
                      <p className="text-muted-foreground">
                        Dans un secteur où l'expertise et la crédibilité sont primordiales, il était crucial de démontrer immédiatement la valeur ajoutée de Many Ways.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">3. Ciblage précis requis</h3>
                      <p className="text-muted-foreground">
                        Many Ways cherchait à atteindre des décideurs spécifiques (dirigeants, directeurs généraux) avec des enjeux stratégiques précis.
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

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-border">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Approche ultra-personnalisée et valeur immédiate
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Recherche approfondie sur chaque prospect</h4>
                        <p className="text-muted-foreground">
                          Analyse détaillée de l'entreprise, de son secteur, de ses challenges récents et des initiatives stratégiques du décideur pour créer des messages hyper-pertinents.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Messages axés sur l'expertise et les insights</h4>
                        <p className="text-muted-foreground">
                          Plutôt que de présenter Many Ways, les messages offraient des insights stratégiques, des analyses de tendances sectorielles et des perspectives sur les challenges identifiés du prospect.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Positionnement comme partenaire stratégique</h4>
                        <p className="text-muted-foreground">
                          Approche consultative dès le premier contact, proposant un échange sur les enjeux stratégiques plutôt qu'une présentation commerciale.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Icebreakers 100% personnalisés</h4>
                        <p className="text-muted-foreground">
                          Chaque message commençait par une phrase unique, basée sur une publication récente du décideur, un événement de l'entreprise ou une actualité sectorielle spécifique.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Résultats exceptionnels</h2>
                
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg p-8 border border-secondary/20 mb-8">
                  <p className="text-xl font-semibold mb-6 text-foreground">
                    Des résultats bien au-dessus des standards du marché du conseil
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-secondary mb-2">70%</div>
                      <div className="text-muted-foreground font-semibold">Taux de réponse</div>
                      <div className="text-sm text-muted-foreground mt-1">(vs 5-15% standard)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-secondary mb-2">8%</div>
                      <div className="text-muted-foreground font-semibold">Taux de meetings</div>
                      <div className="text-sm text-muted-foreground mt-1">(vs 1-3% standard)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Impact Business</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Engagement exceptionnel</strong> avec 70% des décideurs contactés répondant positivement
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Meetings hautement qualifiés</strong> avec des décideurs C-level ayant des enjeux stratégiques clairs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Positionnement renforcé</strong> comme cabinet de conseil de référence
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Principaux enseignements</h2>
                
                <div className="space-y-6">
                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      1. La personnalisation extrême est le prix d'entrée dans le conseil
                    </h3>
                    <p className="text-muted-foreground">
                      Un taux de réponse de 70% n'est possible qu'avec une personnalisation extrême de chaque message. Les décideurs du conseil détectent immédiatement les approches génériques.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      2. Démontrer l'expertise avant de vendre
                    </h3>
                    <p className="text-muted-foreground">
                      Offrir des insights stratégiques et des analyses dès le premier message crée immédiatement de la crédibilité et positionne le cabinet comme un expert plutôt qu'un simple vendeur.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      3. Le timing et la pertinence sont cruciaux
                    </h3>
                    <p className="text-muted-foreground">
                      Mentionner des événements récents, des initiatives stratégiques ou des publications du décideur démontre que le message n'est pas générique et augmente drastiquement l'engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt à atteindre des taux d'engagement exceptionnels ?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                  Découvrez comment devlo peut vous aider à générer des résultats similaires avec des campagnes ultra-personnalisées.
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

export default ManyWays;

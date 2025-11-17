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

const Cegos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useLanguage();
  const langPrefix = languagePaths[language];
  const routes = routeTranslations[language];

  return (
    <>
      <Helmet>
        <title>Cegos : 45% de taux de réponse en formation professionnelle | Étude de cas devlo</title>
        <meta name="description" content="Découvrez comment Cegos a atteint un taux de réponse exceptionnel de 45% dans le secteur de la formation professionnelle B2B grâce à une campagne de prospection ultra-ciblée." />
        <meta name="keywords" content="cegos, formation professionnelle, prospection B2B, taux réponse, génération leads formation" />
        <link rel="canonical" href="https://devlo.ch/resultats/cegos-formation-45-reponses" />
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
                    Formation Professionnelle B2B
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Cegos : Comment atteindre 45% de taux de réponse dans le secteur de la formation professionnelle B2B
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                  Campagne de prospection exceptionnelle dans le secteur de la formation professionnelle avec un taux de réponse de 45%, bien au-dessus des standards du marché grâce à une approche ultra-ciblée.
                </p>

                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-5xl font-bold text-secondary mb-2">45%</div>
                  <div className="text-primary-foreground/90">Taux de réponse exceptionnel</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Contexte & Profil de l'entreprise</h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Cegos est un acteur majeur de la formation professionnelle en Europe. Dans un marché où les entreprises reçoivent constamment des sollicitations de la part d'organismes de formation, Cegos cherchait à se démarquer et à générer un engagement significatif auprès des décideurs RH et formation.
                </p>

                <div className="bg-card border border-border rounded-lg p-8 mt-8">
                  <h3 className="text-xl font-bold mb-4">Témoignage client vidéo</h3>
                  <div className="mb-4 rounded-lg overflow-hidden">
                    {/* Remplacez MEDIA_ID_CEGOS par l'identifiant Wistia réel */}
                    <WistiaVideo mediaId="MEDIA_ID_CEGOS" className="w-full" />
                  </div>
                  <p className="text-muted-foreground italic">
                    Découvrez le témoignage complet de Cegos sur les résultats exceptionnels obtenus avec devlo dans le secteur de la formation professionnelle.
                  </p>
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
                      <h3 className="text-xl font-semibold mb-3 text-foreground">1. Marché saturé de sollicitations</h3>
                      <p className="text-muted-foreground">
                        Les DRH et responsables formation reçoivent quotidiennement des dizaines d'emails d'organismes de formation, créant une forte lassitude et méfiance envers les approches commerciales.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">2. Difficulté à se différencier</h3>
                      <p className="text-muted-foreground">
                        Dans un marché avec de nombreux acteurs proposant des offres similaires, il était crucial de trouver un angle de différenciation fort pour capter l'attention.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">3. Cycles de décision longs</h3>
                      <p className="text-muted-foreground">
                        Les décisions en matière de formation professionnelle impliquent souvent plusieurs parties prenantes et des budgets annuels déjà planifiés, rallongeant les cycles de vente.
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
                    Approche ultra-ciblée et valeur immédiate
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Ciblage ultra-précis</h4>
                        <p className="text-muted-foreground">
                          Segmentation fine des prospects selon le secteur d'activité, la taille de l'entreprise, les besoins de formation identifiés et le timing budgétaire.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Messages axés sur la valeur immédiate</h4>
                        <p className="text-muted-foreground">
                          Plutôt que de présenter un catalogue de formations, les messages offraient des insights sur les tendances RH, les défis de formation spécifiques au secteur du prospect et des solutions concrètes.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Personnalisation extrême</h4>
                        <p className="text-muted-foreground">
                          Chaque message mentionnait des éléments spécifiques : initiatives RH récentes de l'entreprise, challenges du secteur, évolutions réglementaires impactant la formation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Approche consultative</h4>
                        <p className="text-muted-foreground">
                          Positionnement comme partenaire conseil plutôt que comme simple fournisseur, en proposant un échange sur les enjeux de formation avant de parler de solutions.
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
                    Un taux de réponse exceptionnel de 45% dans le secteur de la formation professionnelle B2B.
                  </p>
                  
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold text-secondary mb-2">45%</div>
                    <div className="text-muted-foreground font-semibold text-lg">Taux de réponse</div>
                    <div className="text-sm text-muted-foreground mt-2">(vs 5-10% standard dans le secteur)</div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Impact Business</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Engagement exceptionnel</strong> avec 45% des prospects contactés répondant positivement
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Pipeline qualifié rempli</strong> avec des opportunités à forte valeur ajoutée
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Positionnement différenciant</strong> comme partenaire conseil plutôt que simple fournisseur
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
                      1. La valeur avant la vente dans un marché saturé
                    </h3>
                    <p className="text-muted-foreground">
                      Dans un secteur où les prospects sont sur-sollicités, offrir de la valeur immédiate (insights, analyses, conseils) avant de parler de produits est le meilleur moyen de capter l'attention et de susciter l'engagement.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      2. La personnalisation est le prix d'entrée
                    </h3>
                    <p className="text-muted-foreground">
                      Avec un taux de réponse de 45%, la personnalisation extrême de chaque message (initiatives RH de l'entreprise, challenges sectoriels, contexte spécifique) s'est avérée être un facteur clé de succès incontournable.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      3. Le positionnement consultatif crée la confiance
                    </h3>
                    <p className="text-muted-foreground">
                      Se positionner comme un partenaire conseil qui comprend les enjeux RH plutôt que comme un simple vendeur de formations a considérablement augmenté le niveau de confiance et d'ouverture des prospects.
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
                  Prêt à transformer vos taux d'engagement ?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                  Découvrez comment devlo peut vous aider à atteindre des taux de réponse exceptionnels avec des campagnes de prospection ultra-ciblées.
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

export default Cegos;

// Helper component for localized back link
const LocalizedBackToResults = () => {
  const { language } = useLanguage();
  const langPrefix = languagePaths[language];
  const routes = routeTranslations[language];
  return (
    <Link to={`${langPrefix}/${routes.results}`} className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
      <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
      Retour aux résultats
    </Link>
  );
};

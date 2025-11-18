import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hiag = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>HIAG : Prospection immobilière B2B multicanale | Étude de cas devlo</title>
        <meta name="description" content="Découvrez comment HIAG a réussi sa campagne de prospection B2B dans le secteur immobilier commercial grâce à une stratégie multicanale innovante mise en place par devlo." />
        <meta name="keywords" content="hiag, immobilier commercial, prospection B2B immobilier, génération leads immobilier" />
        <link rel="canonical" href="https://devlo.ch/resultats/hiag-immobilier-b2b" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <Link to="/resultats" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Retour aux résultats
                </Link>
                
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 text-sm font-semibold bg-secondary text-secondary-foreground rounded-full">
                    Immobilier Commercial B2B
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  HIAG : Stratégie de prospection innovante dans l'immobilier commercial B2B
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                  Campagne de prospection multicanale dans le secteur de l'immobilier commercial B2B, ciblant des décideurs clés pour des projets immobiliers à forte valeur ajoutée.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Contexte & Profil de l'entreprise</h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  HIAG est un acteur majeur de l'immobilier commercial en Suisse, spécialisé dans le développement et la commercialisation d'espaces commerciaux et industriels. Dans un marché où les cycles de décision sont longs et les montants d'investissement élevés, HIAG cherchait à identifier et à engager des prospects qualifiés pour ses projets immobiliers.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Profils de Clients Idéaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Building2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <span className="text-muted-foreground">Directeurs immobiliers d'entreprises en expansion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <span className="text-muted-foreground">Investisseurs immobiliers commerciaux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <span className="text-muted-foreground">Responsables de développement immobilier</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Stratégie mise en place</h2>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-border">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Campagne multicanale ciblée
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Identification des décideurs immobiliers</h4>
                        <p className="text-muted-foreground">
                          Cartographie des décideurs clés dans les entreprises en expansion, les sociétés d'investissement immobilier et les groupes industriels à la recherche de nouveaux espaces.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Approche multicanale coordonnée</h4>
                        <p className="text-muted-foreground">
                          Combinaison d'emails personnalisés, d'appels de prospection ciblés et de messages LinkedIn pour créer une présence cohérente auprès des prospects.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Messages axés sur les besoins immobiliers</h4>
                        <p className="text-muted-foreground">
                          Focus sur les enjeux spécifiques : expansion, optimisation des coûts immobiliers, localisation stratégique, infrastructures modernes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Impact & Résultats</h2>
                
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Réussites clés</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Pipeline de prospects qualifiés</strong> dans l'immobilier commercial B2B
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Approche multicanale validée</strong> pour un secteur avec des cycles de vente longs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Engagement des décideurs</strong> immobiliers de grandes entreprises
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
                  Vous développez des projets immobiliers B2B ?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                  Découvrez comment devlo peut vous aider à identifier et engager les bons décideurs pour vos projets immobiliers.
                </p>
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link to="/contact">
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

export default Hiag;

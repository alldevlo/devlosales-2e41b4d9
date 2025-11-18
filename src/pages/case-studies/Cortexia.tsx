import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cortexia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cortexia : 71 rendez-vous qualifiés en CH/FR/BE | Étude de cas devlo</title>
        <meta name="description" content="Découvrez comment Cortexia a obtenu 71 rendez-vous qualifiés avec des décideurs clés dans les plus grandes villes de Suisse, France et Belgique grâce à une stratégie de prospection Account-Based Sales." />
        <meta name="keywords" content="cortexia, prospection B2B, account-based sales, rendez-vous qualifiés, génération leads B2B, campagne multicanale, suisse france belgique" />
        <link rel="canonical" href="https://devlo.ch/resultats/cortexia-tech-b2b-meetings" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <Link to="/resultats" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Retour aux résultats
                </Link>
                
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 text-sm font-semibold bg-secondary text-secondary-foreground rounded-full">
                    Technologie B2B
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Comment Cortexia a obtenu 71 rendez-vous qualifiés avec des décideurs clés en Suisse, France et Belgique
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                  Parmi une sélection de plus de 250 villes dans 3 pays, devlo a identifié plus de 500 prospects qualifiés. Ces décideurs sont des élus ou des responsables du service de la propreté urbaine. Les résultats obtenus sont impressionnants : cette campagne outbound a suscité l'intérêt de plus de 24% des villes contactées pour une réunion.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">71</div>
                    <div className="text-primary-foreground/90">Rendez-vous qualifiés</div>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">36%</div>
                    <div className="text-primary-foreground/90">Taux de réponse</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Context Section */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Contexte & Profil de l'entreprise</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Notre client est une entreprise technologique B2B spécialisée dans la gestion de la propreté urbaine. Leur solution innovante aide les municipalités et les villes à optimiser leurs services de nettoyage et de gestion des déchets grâce à des technologies de pointe.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Profils de Clients Idéaux (ICP)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Élus politiques responsables de la propreté urbaine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Responsables des services de propreté urbaine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Directeurs techniques des municipalités</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Problématique (avant devlo)</h2>
                
                <div className="bg-card border border-border rounded-lg p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Notre client faisait face à plusieurs défis majeurs dans sa stratégie de prospection :
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">1. Identification des bons décideurs</h3>
                      <p className="text-muted-foreground">
                        Identifier les décideurs pertinents dans plus de 250 villes de 3 pays différents (Suisse, France, Belgique). Les structures organisationnelles varient considérablement d'une ville à l'autre, rendant l'identification complexe.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">2. Approche personnalisée par ville</h3>
                      <p className="text-muted-foreground">
                        Adapter le message en fonction de la taille de la ville, des enjeux locaux et du niveau de maturité technologique. Chaque ville a des besoins et des priorités spécifiques.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">3. Stratégie Account-Based Sales</h3>
                      <p className="text-muted-foreground">
                        Mettre en place une stratégie Account-Based Sales efficace pour cibler des comptes de grande valeur (les grandes villes) avec une approche ultra-personnalisée.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Stratégie de prospection mise en place
                </h2>

                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-border">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      Stratégie Account-Based Sales (ABS)
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      devlo a mis en place une stratégie Account-Based Sales complète pour maximiser les résultats :
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Identification des décideurs ville par ville</h4>
                          <p className="text-muted-foreground">
                            Recherche approfondie pour identifier les décideurs les plus pertinents dans chaque ville ciblée, en recueillant des informations détaillées sur leur rôle et leurs responsabilités.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Séquences ultra-ciblées</h4>
                          <p className="text-muted-foreground">
                            Élaboration de séquences de prospection multicanales (emails, appels à froid, LinkedIn) spécifiquement adaptées pour contacter les villes de premier plan.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Prospection et qualification</h4>
                          <p className="text-muted-foreground">
                            Prospection active via emails, appels à froid et messages LinkedIn, suivie d'une qualification approfondie des prospects intéressés avant l'organisation des réunions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <TrendingUp className="h-8 w-8 text-secondary mb-4" />
                      <h4 className="font-semibold mb-2">Campagnes multicanales</h4>
                      <p className="text-sm text-muted-foreground">
                        Emails personnalisés, appels téléphoniques et messages LinkedIn pour maximiser les points de contact.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <TrendingUp className="h-8 w-8 text-secondary mb-4" />
                      <h4 className="font-semibold mb-2">Adaptation du discours</h4>
                      <p className="text-sm text-muted-foreground">
                        Messages adaptés en fonction du rôle, de la taille de la ville et du niveau de maturité technologique.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <TrendingUp className="h-8 w-8 text-secondary mb-4" />
                      <h4 className="font-semibold mb-2">Flexibilité opérationnelle</h4>
                      <p className="text-sm text-muted-foreground">
                        Adaptation aux préférences des prospects : certains préfèrent les appels téléphoniques aux emails.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Résultats chiffrés</h2>
                
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg p-8 border border-secondary/20 mb-8">
                  <p className="text-xl font-semibold mb-6 text-foreground">
                    Sur les 500 prospects identifiés et contactés, notre client a reçu 71 réponses positives pour un rendez-vous grâce à cette première campagne outbound.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">78%</div>
                      <div className="text-muted-foreground">Taux d'ouverture</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">36%</div>
                      <div className="text-muted-foreground">Taux de réponse</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">71</div>
                      <div className="text-muted-foreground">Rendez-vous qualifiés</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Impact Business</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">24% des villes contactées</strong> ont manifesté leur intérêt pour une réunion
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Pipeline commercial rempli</strong> pour plusieurs mois avec des opportunités de grande valeur
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Expansion géographique réussie</strong> dans 3 pays simultanément (Suisse, France, Belgique)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Key Learnings Section */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Principaux enseignements</h2>
                
                <div className="space-y-6">
                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      1. Faire des recherches pour comprendre correctement qui est la cible
                    </h3>
                    <p className="text-muted-foreground">
                      Une personne au même intitulé de poste peut avoir des responsabilités différentes en fonction de la taille et de l'organisation de la ville. L'objectif était de cibler le meilleur décideur concerné et susceptible de planifier un rendez-vous avec notre client.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      2. Adapter le discours à chaque Ideal Customer Profile (ICP)
                    </h3>
                    <p className="text-muted-foreground">
                      Il est apparu clairement que certaines affirmations étaient dépassées en fonction des connaissances techniques et de l'expérience du prospect. Certains éléments d'information n'ont tout simplement pas retenu leur attention. Par exemple, nous avons décidé de mentionner un article de loi pour un certain type de prospect uniquement.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      3. Être flexibles pour s'adapter aux disponibilités de nos prospects
                    </h3>
                    <p className="text-muted-foreground">
                      Nous nous sommes rendu compte que de nombreux prospects préféraient parler au téléphone plutôt que d'échanger par e-mail. En effet, certains d'entre eux passent la majeure partie de leur temps sur le terrain et ne consultent leurs courriels qu'une fois par jour. Notre équipe a obtenu de meilleurs résultats en appelant les prospects.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      4. Obtenir autant d'informations que possible lors des appels de qualification
                    </h3>
                    <p className="text-muted-foreground">
                      Lors des appels de découverte, au cours desquels nous qualifions les prospects intéressés, nous posons des questions pour identifier leurs points faibles. Nous avons modifié notre processus afin de nous assurer que notre client et ses prospects obtiennent le plus de valeur au cours de leur entretien.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Questions Fréquentes</h2>
                
                <div className="space-y-6">
                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Qu'est-ce que l'Account-Based Sales (ABS) ?
                    </h3>
                    <p className="text-muted-foreground">
                      L'Account-Based Sales est une stratégie permettant aux équipes de vente de se concentrer sur des comptes spécifiques de grande valeur et de gagner des affaires auprès d'eux. Cette approche implique une identification précise des comptes cibles, une personnalisation poussée des messages et une orchestration multicanale des touchpoints.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Pourquoi cibler les municipalités et les villes ?
                    </h3>
                    <p className="text-muted-foreground">
                      Les municipalités et les villes sont des comptes de grande valeur avec des budgets importants et des besoins récurrents en matière de gestion de la propreté urbaine. Ces contrats sont généralement de longue durée et représentent des opportunités commerciales significatives pour les entreprises technologiques B2B.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Comment adapter son discours selon la taille de la ville ?
                    </h3>
                    <p className="text-muted-foreground">
                      Les grandes villes ont souvent des équipes techniques plus développées et des connaissances approfondies des solutions existantes. Les petites villes peuvent avoir besoin d'une approche plus éducative. Il est essentiel d'adapter le niveau de détail technique et les arguments en fonction de la maturité de la ville.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Quel est le délai moyen pour obtenir des rendez-vous avec des municipalités ?
                    </h3>
                    <p className="text-muted-foreground">
                      Dans cette campagne, les premiers rendez-vous ont été obtenus en 3 semaines. Les cycles de vente avec les municipalités sont généralement plus longs que dans le secteur privé en raison des processus de décision plus complexes et des contraintes budgétaires.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Pourquoi une approche multicanale est-elle importante pour les municipalités ?
                    </h3>
                    <p className="text-muted-foreground">
                      Les décideurs dans les municipalités ont des préférences de communication variées. Certains préfèrent les appels téléphoniques car ils passent beaucoup de temps sur le terrain, tandis que d'autres privilégient les emails. Une approche multicanale permet de s'adapter à ces préférences et d'augmenter les chances d'engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Vous souhaitez reproduire ces résultats pour votre entreprise ?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                  Planifiez une consultation gratuite et découvrez comment devlo peut vous aider à générer des rendez-vous qualifiés avec vos prospects idéaux grâce à nos campagnes de prospection B2B multicanales ultra-personnalisées.
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

export default Cortexia;

import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Apidae = () => {
  return (
    <>
      <Helmet>
        <title>APIDAE : 70 rendez-vous qualifiés avec UEFA, TAG Heuer, Rothschild | Étude de cas devlo</title>
        <meta name="description" content="Découvrez comment APIDAE a obtenu 70 rendez-vous qualifiés avec des marques prestigieuses (UEFA, TAG Heuer, Rothschild) grâce à une campagne de prospection dans le secteur événementiel de luxe et développement durable." />
        <meta name="keywords" content="apidae, événementiel luxe, prospection B2B, développement durable, RSE, génération leads, marques prestigieuses" />
        <link rel="canonical" href="https://devlo.ch/resultats/apidae-evenementiel-luxe" />
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
                    Événementiel de Luxe & Développement Durable
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  APIDAE : Comment obtenir 70 rendez-vous qualifiés avec des marques prestigieuses comme UEFA, TAG Heuer et Rothschild
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                  Campagne de prospection ciblée dans le secteur événementiel de luxe et du développement durable, générant 70 rendez-vous qualifiés avec des entreprises du secteur financier, du luxe et des grandes organisations internationales en Suisse romande.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">70</div>
                    <div className="text-primary-foreground/90">Rendez-vous qualifiés</div>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">13%</div>
                    <div className="text-primary-foreground/90">Taux d'intérêt</div>
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
                    Apidae est une association suisse, basée à Genève, reconnue d'utilité publique qui œuvre en faveur de la protection des abeilles. Le développement durable est un sujet d'actualité pour toutes les entreprises, et la protection des abeilles est l'une des meilleures manières d'agir pour la protection de la biodiversité.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Apidae offre une prestation originale, clé en main et concrète. Elle permet aux entreprises d'installer des ruches d'abeilles sur le toit de leur entreprise, ou à proximité de leurs bureaux. Les apiculteurs d'Apidae suivent ces ruches tout au long de l'année et organisent également des sorties d'entreprise qui plaisent beaucoup aux collaborateurs.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Profils de Clients Idéaux (ICP)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Responsables du développement durable (grandes entreprises)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Directeurs des ressources humaines (PME)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Responsables RSE (Responsabilité Sociétale des Entreprises)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Directeurs d'événements corporate</span>
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
                    APIDAE faisait face à plusieurs défis complexes dans sa stratégie de prospection :
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">1. Cibler les entreprises du secteur financier en Suisse romande</h3>
                      <p className="text-muted-foreground">
                        Genève est reconnu mondialement pour sa place financière. Il a fallu identifier toutes les entreprises de plus de 250 employés dans les 6 cantons de Suisse romande, puis segmenter cette base selon la taille et le secteur d'activité.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">2. Identifier précisément les meilleurs décideurs par taille d'entreprise</h3>
                      <p className="text-muted-foreground">
                        Pour chaque Ideal Customer Profile (ICP), le décideur est différent. Pour les plus petites entreprises, ce sont souvent les ressources humaines qui décident pour les sujets liés au développement durable. Pour les plus grandes entreprises, un(e) responsable du développement durable ou de la RSE est souvent en charge de ces questions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">3. Convaincre qu'il est essentiel d'agir pour la biodiversité</h3>
                      <p className="text-muted-foreground">
                        Bien que le développement durable soit un sujet d'actualité, l'installation de ruches n'est pas encore perçue comme un "must have" mais plutôt comme un "nice to have". Il fallait créer un sentiment d'urgence et démontrer l'impact concret de cette action.
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
                      Campagne multicanale ultra-personnalisée
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      devlo a mis en place une stratégie de prospection en 3 canaux pour maximiser l'engagement :
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Séquence de 7 touchpoints multicanaux</h4>
                          <p className="text-muted-foreground">
                            Emails personnalisés, appels à froid (cold call) et messages LinkedIn orchestrés de manière stratégique : Email 1, Email 2, Email 3, Appel à froid, Email 4, Email 5 et Connexion sur LinkedIn. Chaque relance apporte un peu plus de contexte et de valeur.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Icebreaker 100% personnalisé</h4>
                          <p className="text-muted-foreground">
                            Pour chaque prospect, l'équipe de devlo a rédigé une phrase 100% personnalisée qui constitue la première phrase du premier email. L'icebreaker est rédigé sur la base des informations disponibles sur le profil LinkedIn du prospect et la section "Corporate Social Responsibility" ou "Sustainability" du site web de l'entreprise.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Images personnalisées</h4>
                          <p className="text-muted-foreground">
                            Sur 4 des 7 relances, des images personnalisées ont été ajoutées en utilisant le prénom du prospect, le logo de l'entreprise et la photo de son profil LinkedIn. Cela rend l'approche plus originale et différencie APIDAE des autres emails de prospection.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Argumentation adaptée par persona</h4>
                          <p className="text-muted-foreground">
                            Pour les DRH : focus sur le team building et l'engagement des collaborateurs. Pour les responsables RSE : mise en avant de l'impact environnemental mesurable et des objectifs de développement durable. Pour les dirigeants : accent sur l'image de marque et la différenciation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-8">
                    <h3 className="text-xl font-bold mb-4">Pourquoi cette approche a fonctionné</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Personnalisation extrême</strong> : chaque message donnait l'impression d'avoir été écrit spécialement pour le destinataire
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Proposition de valeur claire</strong> : team building + impact environnemental + image de marque
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Preuve sociale</strong> : mention de grandes marques déjà clientes (UEFA, TAG Heuer, Rothschild)
                        </span>
                      </li>
                    </ul>
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
                    Cette campagne de prospection B2B a généré 70 rendez-vous qualifiés avec des entreprises prestigieuses du secteur financier, du luxe et des organisations internationales.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-secondary mb-2">40%</div>
                      <div className="text-muted-foreground font-semibold">Taux de réponse</div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-secondary mb-2">13%</div>
                      <div className="text-muted-foreground font-semibold">Taux d'intérêt (meetings)</div>
                    </div>
                  </div>

                  <div className="bg-background/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Témoignage client : Tanguy (APIDAE)</h3>
                    <blockquote className="text-muted-foreground italic border-l-4 border-secondary pl-4">
                      "L'approche de devlo nous a permis d'accéder à des entreprises que nous n'aurions jamais pu toucher par nous-mêmes. Leur capacité à personnaliser chaque message et à adapter le discours selon notre interlocuteur a fait toute la différence. Nous avons obtenu des rendez-vous avec UEFA, TAG Heuer, Rothschild et bien d'autres marques prestigieuses. C'est bien au-delà de nos attentes initiales."
                    </blockquote>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Impact Business</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">70 rendez-vous qualifiés</strong> avec des entreprises de premier plan (UEFA, TAG Heuer, Rothschild, etc.)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Positionnement renforcé</strong> auprès des grandes entreprises du secteur financier genevois
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Pipeline commercial multiplié</strong> avec des opportunités de grande valeur et récurrentes
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
                      1. La personnalisation augmente drastiquement les taux d'ouverture et de réponse
                    </h3>
                    <p className="text-muted-foreground">
                      Un bon icebreaker 100% personnalisé est désarmant : il donne le sentiment que les emails ont été écrits spécialement pour le destinataire. Cela augmente non seulement les chances que le prospect ouvre l'email, mais aussi qu'il réponde positivement à l'approche.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      2. Les images personnalisées créent une forte différenciation
                    </h3>
                    <p className="text-muted-foreground">
                      Les images personnalisées utilisant le prénom du prospect, le logo de l'entreprise et la photo du profil LinkedIn rendent l'approche plus originale et mémorable. Elles permettent de se démarquer des centaines d'emails génériques que reçoivent les décideurs.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      3. Adapter le message selon la taille de l'entreprise
                    </h3>
                    <p className="text-muted-foreground">
                      Les petites entreprises n'ont pas de responsable développement durable dédié, il faut donc s'adresser aux RH avec un angle "team building et engagement collaborateurs". Les grandes entreprises ont des responsables RSE qu'il faut convaincre avec des arguments d'impact environnemental mesurable et d'objectifs ESG.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      4. La preuve sociale accélère la prise de décision
                    </h3>
                    <p className="text-muted-foreground">
                      Mentionner que des marques prestigieuses comme UEFA, TAG Heuer ou Rothschild ont déjà choisi APIDAE crée immédiatement de la crédibilité et rassure les prospects sur la qualité de la prestation.
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
                      Pourquoi installer des ruches d'abeilles est-il bénéfique pour une entreprise ?
                    </h3>
                    <p className="text-muted-foreground">
                      Installer des ruches offre un triple bénéfice : (1) Impact environnemental concret et mesurable pour la biodiversité, (2) Activité de team building originale et engageante pour les collaborateurs, (3) Image de marque différenciante montrant l'engagement RSE de l'entreprise.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Comment cibler les entreprises du secteur financier à Genève ?
                    </h3>
                    <p className="text-muted-foreground">
                      Genève compte des centaines d'entreprises du secteur financier. Il est essentiel d'utiliser des critères de ciblage précis : taille (plus de 250 employés), secteur d'activité (banques, assurances, gestion de fortune), et localisation (Suisse romande). Une segmentation fine permet ensuite d'adapter le message à chaque type d'entreprise.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Quel est le ROI d'une campagne de prospection dans le développement durable ?
                    </h3>
                    <p className="text-muted-foreground">
                      Dans cette campagne, 13% des entreprises contactées ont manifesté leur intérêt pour une réunion, ce qui est excellent. Le développement durable est un sujet porteur, mais il faut savoir le positionner : pour les RH (team building), pour les responsables RSE (impact environnemental), pour les dirigeants (image de marque et différenciation).
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Comment créer un icebreaker 100% personnalisé efficace ?
                    </h3>
                    <p className="text-muted-foreground">
                      Un bon icebreaker s'appuie sur une recherche approfondie : parcourir le profil LinkedIn du prospect, lire les publications récentes, consulter la section RSE/développement durable du site de l'entreprise, identifier les événements récents. Puis rédiger une phrase qui montre cette compréhension et crée une connexion immédiate.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Pourquoi utiliser des images personnalisées dans les séquences de prospection ?
                    </h3>
                    <p className="text-muted-foreground">
                      Les images personnalisées (avec le prénom, le logo de l'entreprise, la photo du profil) attirent immédiatement l'attention dans une boîte de réception saturée. Elles créent un effet de surprise positif et démontrent l'effort de personnalisation, augmentant significativement l'engagement.
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
                  Prêt à transformer votre prospection B2B ?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                  Découvrez comment devlo peut vous aider à générer des dizaines de rendez-vous qualifiés avec vos prospects idéaux grâce à des campagnes ultra-personnalisées.
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

export default Apidae;

import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Saporo = () => {
  return (
    <>
      <Helmet>
        <title>Saporo : Campagne cybersécurité B2B avec 81% d'open rate | Étude de cas devlo</title>
        <meta name="description" content="Découvrez comment Saporo a atteint 81% de taux d'ouverture, 54% de taux de réponse et 16% de meetings grâce à une campagne de prospection B2B ultra-personnalisée dans le secteur de la cybersécurité." />
        <meta name="keywords" content="saporo, cybersécurité, prospection B2B, open rate, taux réponse, génération leads cybersécurité, campagne outbound" />
        <link rel="canonical" href="https://devlo.ch/resultats/saporo-cybersecurite-b2b" />
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
                    Cybersécurité B2B
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Saporo : Comment atteindre 81% de taux d'ouverture et 54% de taux de réponse dans une campagne de cybersécurité B2B
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                  Une campagne de prospection B2B dans le secteur de la cybersécurité avec des taux d'engagement exceptionnels grâce à une approche ultra-personnalisée et des messages hautement ciblés.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">81%</div>
                    <div className="text-primary-foreground/90">Taux d'ouverture</div>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">54%</div>
                    <div className="text-primary-foreground/90">Taux de réponse</div>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">16%</div>
                    <div className="text-primary-foreground/90">Taux de meetings</div>
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
                    Saporo est une entreprise spécialisée dans les solutions de cybersécurité B2B. Dans un marché hautement compétitif où la confiance et l'expertise sont primordiales, Saporo aide les entreprises à protéger leurs actifs numériques et à se conformer aux réglementations en matière de sécurité.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Profils de Clients Idéaux (ICP)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">RSSI (Responsables de la Sécurité des Systèmes d'Information)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Directeurs IT et DSI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Responsables conformité et risques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Directeurs généraux d'entreprises sensibles à la sécurité</span>
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
                    Saporo faisait face à des défis majeurs dans sa stratégie de prospection dans le secteur exigeant de la cybersécurité :
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">1. Marché saturé et méfiance</h3>
                      <p className="text-muted-foreground">
                        Le secteur de la cybersécurité est inondé de sollicitations commerciales. Les RSSI et directeurs IT reçoivent quotidiennement des dizaines d'emails de prospection, créant une forte méfiance envers les approches commerciales non sollicitées.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">2. Niveau d'expertise élevé des prospects</h3>
                      <p className="text-muted-foreground">
                        Les décideurs en cybersécurité sont des experts techniques qui détectent immédiatement les messages génériques ou superficiels. Il était crucial de démontrer une compréhension approfondie de leurs enjeux spécifiques.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">3. Cycles de vente longs et complexes</h3>
                      <p className="text-muted-foreground">
                        Les décisions d'achat en cybersécurité impliquent plusieurs parties prenantes et nécessitent une validation approfondie. Établir la confiance dès les premiers contacts est essentiel pour raccourcir ces cycles.
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
                      Approche ultra-personnalisée et multicanale
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      devlo a mis en place une stratégie de prospection hautement personnalisée pour se démarquer dans ce marché saturé :
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Recherche approfondie sur chaque prospect</h4>
                          <p className="text-muted-foreground">
                            Analyse détaillée du profil LinkedIn, des publications récentes, des challenges spécifiques de l'entreprise et du contexte réglementaire de l'industrie. Cette recherche a permis de créer des icebreakers 100% personnalisés.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Messages axés sur la valeur technique</h4>
                          <p className="text-muted-foreground">
                            Plutôt que de présenter directement la solution, les messages mettaient en avant des insights sur les tendances de cybersécurité, les nouveaux vecteurs de menace et les best practices spécifiques à l'industrie du prospect.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Séquence multicanale stratégique</h4>
                          <p className="text-muted-foreground">
                            Combinaison d'emails hautement personnalisés, d'appels téléphoniques ciblés et de messages LinkedIn pour créer plusieurs points de contact cohérents et complémentaires, augmentant la visibilité et la crédibilité.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Preuve de conformité et sécurité</h4>
                          <p className="text-muted-foreground">
                            Mention des certifications, conformité RGPD, références clients dans des secteurs similaires pour établir immédiatement la crédibilité et la confiance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-8">
                    <h3 className="text-xl font-bold mb-4">Éléments de différenciation clés</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Objets d'emails hautement personnalisés</strong> mentionnant des éléments spécifiques au prospect (événement récent, publication, challenge de l'industrie)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Proposition de valeur adaptée</strong> à chaque persona : arguments techniques pour les RSSI, ROI pour les dirigeants
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">Timing optimisé</strong> des relances en fonction du comportement d'engagement (ouverture, clics)
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Résultats exceptionnels</h2>
                
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg p-8 border border-secondary/20 mb-8">
                  <p className="text-xl font-semibold mb-6 text-foreground">
                    Cette campagne de prospection B2B dans le secteur de la cybersécurité a généré des taux d'engagement bien au-dessus des standards du marché.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-secondary mb-2">81%</div>
                      <div className="text-muted-foreground font-semibold">Taux d'ouverture</div>
                      <div className="text-sm text-muted-foreground mt-1">(vs 20-30% standard)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-secondary mb-2">54%</div>
                      <div className="text-muted-foreground font-semibold">Taux de réponse</div>
                      <div className="text-sm text-muted-foreground mt-1">(vs 5-10% standard)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-secondary mb-2">16%</div>
                      <div className="text-muted-foreground font-semibold">Taux de meetings</div>
                      <div className="text-sm text-muted-foreground mt-1">(vs 2-5% standard)</div>
                    </div>
                  </div>

                  <div className="bg-background/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">Témoignage client : Olivier (Saporo)</h3>
                    <blockquote className="text-muted-foreground italic border-l-4 border-secondary pl-4">
                      "Nous avions beaucoup de difficulté avec les campagnes outbound alors que c'est le meilleur moyen de cibler nos meilleurs prospects idéaux. Avec Charles et son équipe, tout a changé et nous avons enfin réussi à nous faire entendre auprès des RSSI et directeurs IT de nos entreprises cibles. Les taux d'ouverture et de réponse obtenus dépassent largement nos attentes. Ce qui fait la différence, c'est la personnalisation et la compréhension approfondie de nos enjeux métier."
                    </blockquote>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Impact Business</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Pipeline qualifié rempli</strong> avec des opportunités à forte valeur ajoutée
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Crédibilité établie</strong> auprès des décideurs cybersécurité les plus exigeants
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Positionnement renforcé</strong> comme partenaire de confiance dans un marché hautement compétitif
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
                      1. La personnalisation est non-négociable en cybersécurité
                    </h3>
                    <p className="text-muted-foreground">
                      Dans un secteur où les prospects sont des experts techniques, tout message générique est immédiatement écarté. Les icebreakers 100% personnalisés basés sur une recherche approfondie ont été le facteur clé du taux d'ouverture exceptionnel de 81%.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      2. Apporter de la valeur avant de vendre
                    </h3>
                    <p className="text-muted-foreground">
                      Les messages qui ont généré le plus d'engagement étaient ceux qui offraient des insights, des analyses de tendances ou des best practices plutôt que ceux qui présentaient directement la solution. Cette approche "valeur d'abord" a créé un contexte favorable pour les conversations commerciales.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      3. Adapter le discours selon le persona
                    </h3>
                    <p className="text-muted-foreground">
                      Les RSSI répondent mieux aux arguments techniques et aux détails de sécurité, tandis que les dirigeants sont plus sensibles aux impacts business et au ROI. Segmenter les messages par persona a significativement augmenté le taux de réponse.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      4. La preuve sociale accélère la confiance
                    </h3>
                    <p className="text-muted-foreground">
                      Mentionner des clients dans des secteurs similaires, des certifications reconnues et des cas d'usage concrets a considérablement réduit les frictions et accéléré le processus de qualification.
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
                      Comment atteindre 81% de taux d'ouverture en prospection B2B cybersécurité ?
                    </h3>
                    <p className="text-muted-foreground">
                      Le secret réside dans la personnalisation extrême des objets d'emails et des icebreakers. Chaque message doit démontrer une recherche approfondie sur le prospect, mentionner un élément spécifique à son contexte (publication récente, événement de l'industrie, challenge identifié) et offrir une valeur immédiate plutôt qu'un pitch commercial.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Pourquoi les RSSI sont-ils si difficiles à contacter ?
                    </h3>
                    <p className="text-muted-foreground">
                      Les RSSI reçoivent quotidiennement des dizaines de sollicitations commerciales de la part de fournisseurs de solutions de cybersécurité. Ils ont développé une forte méfiance envers les approches commerciales non sollicitées. Pour les atteindre, il faut démontrer une compréhension technique approfondie et apporter de la valeur dès le premier contact.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Quelle est la différence entre taux de réponse et taux de meetings ?
                    </h3>
                    <p className="text-muted-foreground">
                      Le taux de réponse (54% dans cette campagne) représente tous les prospects qui ont répondu, qu'ils soient intéressés ou non. Le taux de meetings (16%) représente les prospects qui ont manifesté un intérêt concret et accepté de planifier une réunion. Un écart important entre ces deux chiffres est normal et sain en prospection B2B.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Combien de temps faut-il pour voir des résultats en prospection cybersécurité ?
                    </h3>
                    <p className="text-muted-foreground">
                      Dans cette campagne, les premiers rendez-vous ont été obtenus en 4-5 semaines. Le secteur de la cybersécurité a des cycles de décision plus longs que la moyenne en raison de la criticité des enjeux. Cependant, une fois la confiance établie, les opportunités sont généralement de grande valeur.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Peut-on reproduire ces résultats dans d'autres secteurs B2B ?
                    </h3>
                    <p className="text-muted-foreground">
                      Absolument. Les principes de personnalisation, de création de valeur et d'approche multicanale sont transposables à tous les secteurs B2B. Cependant, l'exécution doit être adaptée aux spécificités de chaque industrie et aux préférences des personas cibles.
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
                  Prêt à générer des résultats similaires pour votre entreprise ?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                  Découvrez comment devlo peut vous aider à atteindre vos décideurs clés avec des campagnes de prospection B2B ultra-personnalisées qui génèrent des taux d'engagement exceptionnels.
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

export default Saporo;

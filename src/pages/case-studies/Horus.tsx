import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Horus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Horus : 200'000€ de contrats signés en Belgique | Étude de cas devlo</title>
        <meta name="description" content="Découvrez comment Horus a signé 200'000€ de contrats en Belgique grâce à une stratégie de prospection commerciale B2B ciblée mise en place par devlo." />
        <meta name="keywords" content="horus, prospection B2B belgique, contrats signés, expansion internationale, génération leads B2B" />
        <link rel="canonical" href="https://devlo.ch/resultats/horus-belgique-200k" />
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
                    Services B2B - Expansion Internationale
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Horus : Comment signer 200'000€ de contrats en Belgique grâce à une prospection commerciale ciblée
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                  Expansion réussie sur le marché belge avec 200'000€ de contrats signés grâce à une stratégie de prospection commerciale B2B ciblée et une identification précise des opportunités à forte valeur.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">200k€</div>
                    <div className="text-primary-foreground/90">De contrats signés</div>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                    <div className="text-primary-foreground/90">Expansion Belgique réussie</div>
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
                    Horus est une entreprise de services B2B qui souhaitait se développer sur le marché belge. Avec une solution éprouvée en Suisse et en France, l'entreprise cherchait à reproduire son succès en Belgique en identifiant et en convertissant rapidement des clients à forte valeur ajoutée.
                  </p>
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
                    Horus faisait face à plusieurs défis majeurs pour son expansion en Belgique :
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">1. Connaissance limitée du marché belge</h3>
                      <p className="text-muted-foreground">
                        Bien que l'entreprise ait du succès en Suisse et en France, le marché belge présentait ses propres spécificités culturelles, réglementaires et commerciales qu'il fallait comprendre rapidement.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">2. Absence de réseau local</h3>
                      <p className="text-muted-foreground">
                        Horus n'avait aucun contact établi en Belgique et devait construire son réseau de zéro, sans recommandations ni références locales.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">3. Besoin de résultats rapides</h3>
                      <p className="text-muted-foreground">
                        L'entreprise avait besoin de générer rapidement des contrats pour valider sa stratégie d'expansion et justifier les investissements sur ce nouveau marché.
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
                      Approche commerciale ciblée et méthodique
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      devlo a élaboré une stratégie sur mesure pour l'expansion de Horus en Belgique :
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Étude de marché et segmentation</h4>
                          <p className="text-muted-foreground">
                            Analyse approfondie du marché belge pour identifier les secteurs et les entreprises les plus susceptibles d'être intéressés par l'offre de Horus. Segmentation fine par taille d'entreprise, secteur d'activité et localisation géographique (Bruxelles, Anvers, Gand, Liège).
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Génération de leads qualifiés</h4>
                          <p className="text-muted-foreground">
                            Constitution d'une base de données de prospects belges hautement qualifiés, avec identification des décideurs clés dans chaque organisation cible. Focus sur les entreprises avec un potentiel de contrats à forte valeur.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Campagnes multicanales personnalisées</h4>
                          <p className="text-muted-foreground">
                            Mise en place de séquences de prospection combinant emails personnalisés, appels téléphoniques et messages LinkedIn, adaptés aux spécificités culturelles belges (bilinguisme français-néerlandais, approche commerciale locale).
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Qualification rigoureuse et accompagnement commercial</h4>
                          <p className="text-muted-foreground">
                            Qualification approfondie de chaque opportunité avec identification des besoins, du budget et du calendrier de décision. Accompagnement de Horus jusqu'à la signature des contrats avec partage des insights recueillis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <TrendingUp className="h-8 w-8 text-secondary mb-4" />
                      <h4 className="font-semibold mb-2">Ciblage précis</h4>
                      <p className="text-sm text-muted-foreground">
                        Focus sur les entreprises belges avec le plus fort potentiel de signature rapide.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <TrendingUp className="h-8 w-8 text-secondary mb-4" />
                      <h4 className="font-semibold mb-2">Approche culturelle</h4>
                      <p className="text-sm text-muted-foreground">
                        Messages adaptés aux spécificités du marché belge et aux préférences locales.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <TrendingUp className="h-8 w-8 text-secondary mb-4" />
                      <h4 className="font-semibold mb-2">Support continu</h4>
                      <p className="text-sm text-muted-foreground">
                        Accompagnement de Horus tout au long du cycle de vente jusqu'à la signature.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Résultats exceptionnels</h2>
                
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg p-8 border border-secondary/20 mb-8">
                  <p className="text-xl font-semibold mb-6 text-foreground">
                    L'expansion de Horus en Belgique a été un succès retentissant avec 200'000€ de contrats signés en quelques mois.
                  </p>
                  
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold text-secondary mb-2">200'000€</div>
                    <div className="text-muted-foreground font-semibold text-lg">De contrats signés en Belgique</div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Impact Business</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Expansion réussie</strong> sur un nouveau marché géographique stratégique
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">ROI immédiat</strong> avec 200'000€ de contrats signés justifiant l'investissement
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Base client établie</strong> en Belgique servant de tremplin pour la croissance future
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Méthodologie validée</strong> pour les futures expansions sur d'autres marchés
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
                      1. L'importance de l'étude de marché préalable
                    </h3>
                    <p className="text-muted-foreground">
                      Comprendre les spécificités du marché belge (bilinguisme, culture commerciale, secteurs porteurs) a été crucial pour adapter l'approche et maximiser les taux de conversion. Une étude approfondie avant le lancement des campagnes permet d'éviter des erreurs coûteuses.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      2. Se concentrer sur les opportunités à forte valeur
                    </h3>
                    <p className="text-muted-foreground">
                      Plutôt que de viser un volume élevé de petits contrats, la stratégie s'est concentrée sur l'identification et la conversion d'opportunités à forte valeur. Cette approche a permis d'atteindre rapidement l'objectif de 200'000€ avec un nombre limité de clients.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      3. L'accompagnement tout au long du cycle de vente
                    </h3>
                    <p className="text-muted-foreground">
                      L'accompagnement continu de Horus, de la prise de contact initiale jusqu'à la signature des contrats, a été un facteur clé de succès. Partager les insights recueillis lors des conversations a aidé Horus à ajuster son discours et accélérer les signatures.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      4. La personnalisation culturelle fait la différence
                    </h3>
                    <p className="text-muted-foreground">
                      Adapter les messages aux spécificités culturelles belges (approche commerciale, ton, références locales) a significativement augmenté les taux d'engagement et de conversion par rapport à une approche standardisée.
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
                      Combien de temps faut-il pour signer les premiers contrats lors d'une expansion internationale ?
                    </h3>
                    <p className="text-muted-foreground">
                      Dans le cas de Horus, les premiers contrats ont été signés en quelques mois. Le délai dépend de plusieurs facteurs : qualité du ciblage, valeur de l'offre, complexité du cycle de vente et efficacité de la prospection. Une approche méthodique et bien exécutée peut générer des résultats rapidement.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Quels sont les défis spécifiques de la prospection en Belgique ?
                    </h3>
                    <p className="text-muted-foreground">
                      La Belgique présente plusieurs spécificités : bilinguisme (français-néerlandais) nécessitant des messages dans les deux langues, culture commerciale différente entre la Flandre et la Wallonie, et préférences de communication variées selon les régions. Une connaissance approfondie de ces nuances est essentielle.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Comment identifier les opportunités à forte valeur sur un nouveau marché ?
                    </h3>
                    <p className="text-muted-foreground">
                      L'identification passe par une analyse des secteurs porteurs, de la taille des entreprises, de leur capacité d'investissement et de leurs besoins actuels. Des outils de veille, l'analyse de la concurrence locale et des conversations exploratoires permettent de valider rapidement le potentiel de chaque opportunité.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Quel est le ROI typique d'une campagne de prospection pour une expansion internationale ?
                    </h3>
                    <p className="text-muted-foreground">
                      Le ROI dépend de nombreux facteurs (ticket moyen, taux de conversion, coût d'acquisition). Dans le cas de Horus avec 200'000€ de contrats signés, le ROI a été très positif. Une campagne bien orchestrée peut générer 5 à 10 fois l'investissement initial en quelques mois.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      Peut-on répliquer cette stratégie sur d'autres marchés européens ?
                    </h3>
                    <p className="text-muted-foreground">
                      Absolument. La méthodologie utilisée pour l'expansion de Horus en Belgique (étude de marché, segmentation, prospection ciblée, accompagnement commercial) est transposable à d'autres pays européens. Il faut cependant adapter l'exécution aux spécificités culturelles et réglementaires de chaque marché.
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
                  Prêt à vous développer sur de nouveaux marchés ?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                  Découvrez comment devlo peut vous aider à réussir votre expansion internationale avec des campagnes de prospection B2B ciblées et efficaces.
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

export default Horus;

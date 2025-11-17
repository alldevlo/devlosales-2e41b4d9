import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, TrendingUp, Users, CheckCircle } from "lucide-react";

const CareerLunch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const faqs = [
    {
      question: "Qu'est-ce que la méthode 'Existing clients/disqualified leads exclusion' ?",
      answer: "Cette méthode unique développée par devlo permet d'identifier tous les prospects correspondant à l'ICP, puis d'exclure les clients existants et les prospects disqualifiés pour révéler un gisement de prospects inexploités. Cela maximise l'efficacité en évitant les doublons et en ciblant uniquement des opportunités fraîches."
    },
    {
      question: "Pourquoi contacter les prospects dans leur langue préférée ?",
      answer: "Contacter les prospects dans leur langue maternelle (allemand pour la région DACH dans ce cas) augmente significativement les taux d'ouverture, de clic, de réponse et d'intérêt. C'est un facteur différenciant majeur qui montre le respect et la personnalisation de l'approche."
    },
    {
      question: "Comment obtenir un taux d'intérêt de 10% ?",
      answer: "Un taux d'intérêt de 10% s'obtient grâce à une combinaison de facteurs : qualification manuelle approfondie des prospects, messages ultra-personnalisés, communication dans la langue préférée, séquence multicanale optimisée et suivi rigoureux."
    },
    {
      question: "Cette approche fonctionne-t-elle dans d'autres secteurs que les RH ?",
      answer: "Absolument. La méthodologie 'Existing clients/disqualified leads exclusion' et l'approche multicanale personnalisée fonctionnent dans tous les secteurs B2B : tech, cybersécurité, consulting, immobilier, etc."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cas Client CareerLunch : 54 rendez-vous qualifiés en région DACH | devlo</title>
        <meta name="description" content="Comment CareerLunch a obtenu 54 rendez-vous qualifiés (10% de taux d'intérêt) dans la région DACH grâce à la stratégie unique de génération de prospects B2B de devlo. Taux de réponse : 19%." />
        <meta name="keywords" content="cas client prospection DACH, génération leads RH, recrutement B2B, prospection Allemagne Autriche Suisse, CareerLunch case study" />
        <link rel="canonical" href="https://devlo.ch/resultats/careerlunch-dach-recrutement" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <Link to="/resultats" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    ← Retour aux études de cas
                  </Link>
                </div>
                
                <span className="inline-block px-4 py-2 text-sm font-semibold bg-secondary text-secondary-foreground rounded-full mb-6">
                  Ressources Humaines & Recrutement
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Stratégie unique de génération de prospects B2B : Comment CareerLunch a obtenu 54 rendez-vous dans la région DACH
                </h1>

                <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                  devlo a identifié et prospecté 516 nouveaux prospects : une mine d'or jusqu'alors inconnue. 
                  Cette campagne de prospection commerciale a obtenu plus de <strong>10% de rendez-vous</strong> (taux d'intérêt), 
                  avec 54 prospects intéressés.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="h-6 w-6 text-secondary" />
                      <span className="text-sm font-semibold text-primary-foreground/70">KPI #1</span>
                    </div>
                    <p className="text-2xl font-bold">54 prospects qualifiés (10%)</p>
                    <p className="text-sm text-primary-foreground/70">en 5 semaines</p>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                      <span className="text-sm font-semibold text-primary-foreground/70">KPI #2</span>
                    </div>
                    <p className="text-2xl font-bold">Taux de réponse : 19%</p>
                    <p className="text-sm text-primary-foreground/70">71% ouverture, 29% clics</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About CareerLunch */}
          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">À propos de CareerLunch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  CareerLunch est une plateforme tech pour les ressources humaines qui met en relation des candidats potentiels 
                  avec des employés par le biais d'un échange informel au cours d'un déjeuner. Cette approche innovante transforme 
                  le recrutement traditionnel en créant des connexions authentiques entre talents et entreprises.
                </p>
                
                <div className="mt-8 bg-muted/50 border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Profil de Client Idéal (ICP)</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">Ressources humaines</span>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">Recrutement</span>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">Acquisition de talents</span>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">Marque employeur</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Challenge */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Défis du Client</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    L'équipe de développement commercial de CareerLunch recherchait de nouveaux clients dans la région DACH 
                    (Allemagne, Autriche et Suisse). Le défi était de taille :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-destructive font-bold mt-1">•</span>
                      <span>Ils connaissaient déjà très bien cette région où ils avaient déjà effectué beaucoup de prospection à froid</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-destructive font-bold mt-1">•</span>
                      <span>La plupart des entreprises cibles avaient déjà été contactées</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-destructive font-bold mt-1">•</span>
                      <span>L'équipe n'avait pas le temps de générer des leads, de les contacter et de les qualifier</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-destructive font-bold mt-1">•</span>
                      <span>Nécessité de trouver un gisement inexploité de prospects qualifiés</span>
                    </li>
                  </ul>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                    Face à ces défis, CareerLunch s'est tourné vers devlo pour déléguer l'intégralité de ces tâches 
                    et découvrir de nouvelles opportunités commerciales.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Les Solutions Mises en Place</h2>
                
                <div className="space-y-8">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      1. La méthode "Existing clients/disqualified leads exclusion"
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      devlo a développé une méthode unique et puissante de génération de leads appelée 
                      "Existing clients/disqualified leads exclusion". Cette stratégie comporte trois étapes :
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        <p className="text-muted-foreground">
                          <strong>Identification complète :</strong> Identifier toutes les organisations qui correspondent 
                          à l'Ideal Customer Profile (ICP) de notre client, puis identifier les décideurs les plus pertinents 
                          au sein de chacune des organisations retenues.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold">2</span>
                        </div>
                        <p className="text-muted-foreground">
                          <strong>Exclusion stratégique :</strong> Faire le compte des clients existants de notre client 
                          ainsi que les prospects qui ont été disqualifiés. L'idée est d'identifier les entreprises et 
                          prospects qui ne doivent plus être contactés.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold">3</span>
                        </div>
                        <p className="text-muted-foreground">
                          <strong>Révélation des opportunités :</strong> Exclure les clients existants et les prospects 
                          disqualifiés de toutes les organisations identifiées. Cela révèle un gisement inexploité de 
                          nouveaux leads à contacter.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      2. Recherche approfondie et qualification manuelle
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nous avons mené une phase de qualification initiale approfondie : recherche et validation manuelle 
                      de chaque prospect sélectionné. Cette approche rigoureuse a conduit à une augmentation significative 
                      des taux de conversion et garantit que seuls les prospects les plus pertinents sont contactés.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      3. Communication dans la langue préférée
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nous avons contacté les prospects dans leur langue préférée, principalement en <strong>allemand</strong> 
                      pour la région DACH. Cette personnalisation linguistique a généré des taux de clics, de réponse et 
                      d'intérêt nettement plus élevés que si nous les avions contactés en anglais par simplicité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="py-12 md:py-16 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Nos Résultats</h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Sur les <strong>516 nouveaux prospects</strong> identifiés et contactés, notre client a reçu 
                  <strong className="text-primary"> 54 réponses positives</strong> pour un rendez-vous grâce à notre 
                  séquence de prospection multicanale.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <Users className="h-10 w-10 text-primary mb-4" />
                    <p className="text-4xl font-bold text-primary mb-2">54</p>
                    <p className="text-muted-foreground">Rendez-vous qualifiés</p>
                    <p className="text-sm text-secondary font-semibold mt-1">10% de taux d'intérêt</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <TrendingUp className="h-10 w-10 text-primary mb-4" />
                    <p className="text-4xl font-bold text-primary mb-2">19%</p>
                    <p className="text-muted-foreground">Taux de réponse moyen</p>
                    <p className="text-sm text-muted-foreground mt-1">Largement au-dessus des standards</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Indicateurs de Performance Détaillés</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span><strong className="text-primary">71%</strong> de taux d'ouverture</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span><strong className="text-primary">29%</strong> de taux de clic</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span><strong className="text-primary">19%</strong> de taux de réponse</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span><strong className="text-primary">10%</strong> de taux d'intérêt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Résultats Clés & Enseignements</h2>
                
                <div className="space-y-6">
                  <div className="bg-card border-l-4 border-l-primary p-6 rounded-r-lg">
                    <h3 className="text-lg font-bold mb-2">1. Communication transparente</h3>
                    <p className="text-muted-foreground">
                      Un plan d'action bien structuré + équipe qui communique = succès de votre campagne. 
                      Le contact régulier avec l'équipe pour résoudre immédiatement les problèmes et faire 
                      remonter les informations précieuses est crucial.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-l-primary p-6 rounded-r-lg">
                    <h3 className="text-lg font-bold mb-2">2. Langue préférée du prospect</h3>
                    <p className="text-muted-foreground">
                      Si vous offrez des produits à des personnes de différents pays, l'idéal est qu'elles reçoivent 
                      des messages dans leur langue maternelle ou préférée. Cela augmente drastiquement l'engagement.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-l-primary p-6 rounded-r-lg">
                    <h3 className="text-lg font-bold mb-2">3. Adaptation du message par profil</h3>
                    <p className="text-muted-foreground">
                      Des personnes différentes s'intéressent à des choses différentes. Les experts IT aiment la technologie, 
                      les dirigeants veulent économiser de l'argent. Adaptez votre message en fonction de chaque interlocuteur.
                    </p>
                  </div>

                  <div className="bg-card border-l-4 border-l-primary p-6 rounded-r-lg">
                    <h3 className="text-lg font-bold mb-2">4. Approche systématique</h3>
                    <p className="text-muted-foreground">
                      Il est essentiel d'avoir une vue d'ensemble du nombre et des types d'entreprises contactables 
                      et de celles déjà contactées pour planifier la meilleure approche dans le temps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Témoignage Client</h2>
                
                <div className="bg-card border border-border rounded-lg p-8 md:p-12 relative">
                  <div className="text-6xl text-primary/20 absolute top-4 left-4">"</div>
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-8">
                      Charles est l'un des experts en vente les plus créatifs et les plus enthousiastes que je connaisse. 
                      J'ai travaillé avec lui sur plusieurs campagnes. Il nous a aidés à mettre en place des campagnes de 
                      vente hyperpersonnalisées, à atteindre des centaines de prospects et, finalement, à obtenir des 
                      rendez-vous commerciaux qualifiés. En outre, il nous a également conseillés afin d'affiner notre 
                      processus de vente, ce qui a été très utile pour l'ensemble du département des ventes. Je recommande 
                      vivement ses compétences et ses services à toutes les start-up et PMEs qui souhaitent passer rapidement 
                      à la vitesse supérieure.
                    </p>
                    <div className="border-t border-border pt-6">
                      <p className="font-bold text-lg">Raphael Haut</p>
                      <p className="text-muted-foreground">Head of Business Development & Marketing</p>
                      <p className="text-primary font-semibold">CareerLunch</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Questions Fréquentes</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-3 text-primary">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt à reproduire ces résultats pour votre entreprise ?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Obtenez une consultation gratuite et sans engagement. Nous analysons votre marché, 
                  identifions vos opportunités et vous proposons une stratégie sur mesure.
                </p>
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 hover-scale">
                  <Link to="/contact">
                    Planifier votre consultation gratuite
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

export default CareerLunch;

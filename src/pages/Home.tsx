import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import StatsSection from "@/components/home/StatsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, User, FileText, Search, Mail, CalendarCheck,
  Zap, Heart, TrendingUp, DollarSign, Globe, TestTube, 
  Users, MessageSquare, ArrowRight 
} from "lucide-react";

const Home = () => {
  const processSteps = [
    { icon: Target, title: "Définition de votre cible", description: "Identification précise de votre profil de client idéal (ICP) et des décideurs clés" },
    { icon: User, title: "Étude du profil de votre entreprise", description: "Analyse approfondie de votre offre, positionnement et valeur ajoutée" },
    { icon: FileText, title: "Mise en place de l'approche", description: "Création de messages personnalisés et stratégie multicanale sur mesure" },
    { icon: Search, title: "Recherche et identification", description: "Génération d'une base de données ultra-qualifiée de prospects pertinents" },
    { icon: Mail, title: "Lancement de la prospection", description: "Campagnes multicanales (emails, LinkedIn, appels) et qualification rigoureuse" },
    { icon: CalendarCheck, title: "Prise de rendez-vous", description: "Rendez-vous qualifiés directement dans votre calendrier, prêts à convertir" },
  ];

  const benefits = [
    { icon: TrendingUp, title: "Signez plus, stressez moins", description: "Concentrez-vous sur la conclusion pendant que nous alimentons votre pipeline de prospects qualifiés en continu" },
    { icon: Heart, title: "Faites ce que vous aimez", description: "Libérez-vous des tâches chronophages de prospection pour vous concentrer sur votre cœur de métier" },
    { icon: Zap, title: "Devenez encore meilleur", description: "Perfectionnez vos compétences en closing grâce à un flux constant de rendez-vous qualifiés" },
    { icon: DollarSign, title: "Contrôlez vos coûts", description: "Un coût fixe prévisible, sans les charges d'une équipe commerciale interne complète" },
    { icon: Globe, title: "Augmentez votre présence", description: "Dominez vos secteurs clés avec une visibilité accrue auprès des décideurs" },
    { icon: Search, title: "Explorez de nouveaux territoires", description: "Testez de nouveaux marchés et segments sans risque ni investissement lourd" },
    { icon: TestTube, title: "Testez avant de vous lancer", description: "Validez vos hypothèses commerciales avant d'investir massivement" },
    { icon: Users, title: "Invitez vos prospects", description: "Remplissez vos événements, webinaires et salons avec des participants ultra-ciblés" },
  ];

  const testimonials = [
    {
      name: "Olivier",
      company: "Saporo",
      role: "Directeur",
      text: "L'équipe de devlo a été exceptionnelle. Leur approche personnalisée et leur compréhension approfondie du secteur de la cybersécurité nous ont permis d'atteindre des taux d'ouverture de 81% et un taux de réponse de 54%."
    },
    {
      name: "Tanguy",
      company: "APIDAE",
      role: "CEO",
      text: "Grâce à devlo, nous avons décroché 70 rendez-vous qualifiés avec des marques prestigieuses comme l'UEFA, TAG Heuer et Rothschild. Leur expertise en prospection B2B est inégalée."
    },
    {
      name: "Raphael Haut",
      company: "CareerLunch",
      role: "Head of Business Development & Marketing",
      text: "Charles est l'un des experts en vente les plus créatifs que je connaisse. Il nous a aidés à obtenir 54 rendez-vous qualifiés dans la région DACH avec un taux d'intérêt de 10%. Je recommande vivement ses services."
    },
    {
      name: "Xavier Leuthold",
      company: "Many Ways SA",
      role: "Directeur",
      text: "Les résultats parlent d'eux-mêmes : 70% de taux de réponse et 8% de meetings. L'approche ultra-personnalisée de devlo fait toute la différence."
    },
  ];

  const whyWorkTogether = [
    { title: "Démarche digitale à la pointe", description: "Nous combinons les dernières technologies de prospection avec des stratégies éprouvées pour maximiser vos résultats" },
    { title: "Approches qui ont fait leurs preuves", description: "Classés parmi les meilleures agences outbound sur Outbound-experts.com avec 7% de prospects intéressés en moyenne" },
    { title: "Experts dans le domaine", description: "+7 années d'expérience, +3000 rendez-vous pris, +12K prospects activés pour des entreprises leaders" },
    { title: "Communication transparente", description: "Reporting détaillé, suivi en temps réel et échanges réguliers pour une collaboration optimale" },
    { title: "Notre agilité", description: "Adaptation rapide aux retours du marché et optimisation continue de vos campagnes pour des performances maximales" },
    { title: "Votre satisfaction", description: "Votre succès est notre priorité absolue. Nous ne sommes satisfaits que lorsque vous atteignez vos objectifs" },
  ];

  const faqs = [
    {
      question: "Qu'est-ce qu'un prospect ?",
      answer: "Un prospect est une entreprise ou un décideur qui correspond à votre profil de client idéal (ICP) et qui a manifesté un intérêt pour votre offre. Chez devlo, nous identifions, contactons et qualifions ces prospects avant de vous les présenter sous forme de rendez-vous qualifiés."
    },
    {
      question: "Qu'est-ce qu'une campagne de prospection multicanal ?",
      answer: "Une campagne multicanal combine plusieurs moyens de contact (emails personnalisés, messages LinkedIn, appels téléphoniques) pour maximiser vos chances d'atteindre et d'engager vos prospects. Cette approche augmente significativement les taux de réponse et de conversion par rapport à un canal unique."
    },
    {
      question: "Pourquoi la prospection commerciale B2B est une bonne approche ?",
      answer: "La prospection B2B proactive vous permet de contrôler votre pipeline commercial, de cibler précisément vos clients idéaux, d'accélérer votre croissance et de ne pas dépendre uniquement du marketing entrant. C'est l'approche la plus directe et prévisible pour générer du chiffre d'affaires."
    },
    {
      question: "Que garantissez-vous ?",
      answer: "Nous garantissons une approche professionnelle, des prospects ultra-qualifiés et des rendez-vous pris directement dans votre calendrier. Nos campagnes génèrent en moyenne 7% de prospects intéressés, avec des taux de réponse largement supérieurs aux standards du marché."
    },
    {
      question: "Cet investissement en vaut-il la peine ?",
      answer: "Absolument. Le coût d'une campagne de prospection externalisée est largement inférieur au coût d'une équipe commerciale interne (salaires, charges, outils, formation). De plus, vous obtenez des résultats rapides et mesurables, avec un ROI démontrable dès les premières semaines."
    },
    {
      question: "Pourquoi choisir devlo ?",
      answer: "Nous combinons 7+ années d'expérience, une méthodologie éprouvée, des taux de succès exceptionnels (7% d'intéressés en moyenne), et une approche ultra-personnalisée. Classés parmi les meilleures agences outbound, nous avons généré +3000 rendez-vous pour nos clients."
    },
    {
      question: "Nous n'avons rien en place pour le moment, est-ce un problème ?",
      answer: "Pas du tout ! C'est même l'idéal. Nous construisons votre stratégie de prospection de A à Z : définition de l'ICP, création des messages, génération de la base de données, lancement des campagnes et prise de rendez-vous. Vous n'avez besoin d'aucune infrastructure existante."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Agence prospection commerciale B2B en Suisse | Génération de leads qualifiés | devlo</title>
        <meta name="description" content="devlo, agence leader en prospection commerciale B2B et génération de leads en Suisse. +3000 rendez-vous qualifiés, +12K prospects activés. Campagnes multicanales ultra-personnalisées. Consultation gratuite." />
        <meta name="keywords" content="agence prospection commerciale, prospection B2B, génération de leads B2B, prise de rendez-vous B2B, télémarketing digital, externalisation commerciale suisse, développement commercial B2B" />
        <link rel="canonical" href="https://devlo.ch/" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />
          <TrustedBySection />

          {/* Notre Objectif */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Notre Objectif : Votre Croissance
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Prospecter au nom de votre entreprise dans le but de vous faire rencontrer davantage de 
                  <strong className="text-foreground"> leads qualifiés</strong> et <strong className="text-foreground">signer de nouveaux clients</strong>. 
                  Nous externalisons toutes les étapes chronophages du développement commercial pour que vous puissiez vous concentrer sur ce que vous faites de mieux : 
                  <strong className="text-foreground"> conclure des ventes</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Notre Offre */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Notre Offre : Externalisation Commerciale Complète
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                    <h3 className="text-xl font-bold mb-4 text-primary">Stratégie & Télémarketing</h3>
                    <p className="text-muted-foreground">
                      Définition de votre ICP, création de messages ultra-personnalisés et mise en place d'une stratégie de prospection multicanale adaptée à votre secteur.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                    <h3 className="text-xl font-bold mb-4 text-primary">Génération de Prospects & Base de Données</h3>
                    <p className="text-muted-foreground">
                      Identification et qualification de prospects B2B ultra-ciblés, avec enrichissement complet des données de contact et validation manuelle.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                    <h3 className="text-xl font-bold mb-4 text-primary">Démarchage & Qualification</h3>
                    <p className="text-muted-foreground">
                      Campagnes de prospection multicanales (emails, LinkedIn, appels téléphoniques) avec qualification rigoureuse des leads avant transmission.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                    <h3 className="text-xl font-bold mb-4 text-primary">Prise de Rendez-vous</h3>
                    <p className="text-muted-foreground">
                      Rendez-vous qualifiés pris directement dans vos calendriers avec des décideurs prêts à discuter de votre solution. Vous n'avez plus qu'à closer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bénéfices */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Les Bénéfices de l'Externalisation
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="bg-card border border-border rounded-lg p-6 hover-lift">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Processus */}
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Notre Processus en 6 Étapes
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Une méthodologie éprouvée pour générer des rendez-vous qualifiés et accélérer votre croissance
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative">
                      <div className="bg-card border border-border rounded-lg p-6 h-full hover-lift">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-2">
                              <span className="inline-block px-2 py-1 text-xs font-bold text-primary bg-primary/10 rounded">
                                Étape {index + 1}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <StatsSection />

          {/* Témoignages */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ce que disent nos clients
                </h2>
                <p className="text-lg text-muted-foreground">
                  Des résultats concrets et des témoignages authentiques
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-card border border-border rounded-lg p-8 hover-lift"
                  >
                    <MessageSquare className="h-8 w-8 text-primary mb-4" />
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm font-semibold text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Études de cas (Teaser) */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Études de Cas : Résultats Réels
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Découvrez comment nous avons aidé nos clients à générer des milliers de rendez-vous qualifiés
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
                <div className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-lg p-6 hover-lift">
                  <h3 className="text-xl font-bold mb-2">Saporo - Cybersécurité</h3>
                  <p className="text-primary-foreground/80 mb-4">81% open rate, 54% reply rate, 16% meetings</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-lg p-6 hover-lift">
                  <h3 className="text-xl font-bold mb-2">APIDAE - Événementiel</h3>
                  <p className="text-primary-foreground/80 mb-4">70 rendez-vous avec UEFA, TAG Heuer, Rothschild</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-lg p-6 hover-lift">
                  <h3 className="text-xl font-bold mb-2">CareerLunch - RH</h3>
                  <p className="text-primary-foreground/80 mb-4">54 rendez-vous qualifiés (10%) en région DACH</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-lg p-6 hover-lift">
                  <h3 className="text-xl font-bold mb-2">Horus - Services B2B</h3>
                  <p className="text-primary-foreground/80 mb-4">200'000€ de contrats signés en Belgique</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-lg p-6 hover-lift">
                  <h3 className="text-xl font-bold mb-2">Cortexia - Tech B2B</h3>
                  <p className="text-primary-foreground/80 mb-4">71 rendez-vous qualifiés en CH/FR/BE</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-lg p-6 hover-lift">
                  <h3 className="text-xl font-bold mb-2">Many Ways - Consulting</h3>
                  <p className="text-primary-foreground/80 mb-4">70% de réponses, 8% de meetings</p>
                </div>
              </div>

              <div className="text-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/resultats">
                    Découvrir toutes nos études de cas
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Pourquoi nous */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pourquoi faire équipe ensemble ?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {whyWorkTogether.map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 hover-lift">
                    <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-16 md:py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Démarchage commercial et prise de contacts en continu dans votre calendrier
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Nous faisons équipe avec vous sur le long terme afin de promouvoir votre savoir-faire, 
                  augmenter vos ventes et pérenniser votre organisation.
                </p>
                <p className="text-xl font-semibold mb-8">
                  Rencontrons-nous pour prospecter pour vos futurs clients ?<br />
                  <span className="text-secondary">Gratuit et sans engagement</span>
                </p>
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contact">
                    Planifier votre consultation gratuite
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Questions Fréquentes
                </h2>
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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;

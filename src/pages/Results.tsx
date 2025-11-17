import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { dictionaries } from "@/i18n/locales";
import { languagePaths, routeTranslations, caseStudySlugs } from "@/i18n/config";

const Results = () => {
  const { language } = useLanguage();
  const t = dictionaries[language];
  const langPrefix = languagePaths[language];
  const routes = routeTranslations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getLocalizedCaseStudySlug = (slugFr: string) => {
    for (const [id, slugs] of Object.entries(caseStudySlugs)) {
      if (slugs.fr === slugFr || Object.values(slugs).includes(slugFr)) {
        return (slugs as any)[language] ?? slugFr;
      }
    }
    return slugFr;
  };
  const caseStudies = [
    {
      slug: "careerlunch-dach-recrutement",
      title: "CareerLunch : 54 rendez-vous qualifiés en région DACH",
      industry: "Ressources Humaines & Recrutement",
      kpi1: "54 prospects qualifiés (10%)",
      kpi2: "Taux de réponse moyen : 19%",
      description: "Comment CareerLunch a obtenu 54 rendez-vous dans la région DACH grâce à une stratégie unique de génération de prospects B2B ciblant des entreprises jusqu'alors inconnues.",
    },
    {
      slug: "cortexia-tech-b2b-meetings",
      title: "Cortexia : 71 rendez-vous qualifiés en CH/FR/BE",
      industry: "Technologie B2B",
      kpi1: "71 rendez-vous qualifiés",
      kpi2: "Campagnes CH, France, Belgique",
      description: "Stratégie de prospection multicanale pour une entreprise tech B2B, avec des rendez-vous qualifiés dans les grandes villes de Suisse, France et Belgique.",
    },
    {
      slug: "saporo-cybersecurite-b2b",
      title: "Saporo : Cybersécurité B2B avec 81% d'open rate",
      industry: "Cybersécurité",
      kpi1: "81% taux d'ouverture",
      kpi2: "54% taux de réponse, 16% meetings",
      description: "Campagne de prospection B2B dans le secteur de la cybersécurité avec des taux d'engagement exceptionnels grâce à une approche ultra-personnalisée.",
    },
    {
      slug: "apidae-evenementiel-luxe",
      title: "APIDAE : 70 rendez-vous avec UEFA, TAG Heuer, Rothschild",
      industry: "Événementiel de Luxe",
      kpi1: "70 rendez-vous qualifiés",
      kpi2: "Marques prestigieuses",
      description: "Prospection ciblée dans le secteur événementiel de luxe, générant 70 rendez-vous qualifiés avec des marques prestigieuses internationales.",
    },
    {
      slug: "horus-belgique-200k",
      title: "Horus : 200'000€ de contrats signés en Belgique",
      industry: "Services B2B",
      kpi1: "200'000€ de contrats",
      kpi2: "Expansion Belgique",
      description: "Expansion réussie sur le marché belge avec 200'000€ de contrats signés grâce à une stratégie de prospection commerciale ciblée.",
    },
    {
      slug: "abacus-prospects-interesses",
      title: "Abacus : +30 prospects intéressés",
      industry: "Logiciels & Services",
      kpi1: "+30 prospects qualifiés",
      kpi2: "Forte conversion",
      description: "Génération de plus de 30 prospects qualifiés et intéressés pour Abacus grâce à des campagnes de prospection multicanales personnalisées.",
    },
    {
      slug: "hiag-immobilier-b2b",
      title: "HIAG : Prospection immobilière B2B",
      industry: "Immobilier Commercial",
      kpi1: "Campagne multicanale",
      kpi2: "Secteur immobilier B2B",
      description: "Stratégie de prospection innovante dans le secteur immobilier B2B, ciblant des décideurs clés dans l'immobilier commercial.",
    },
    {
      slug: "manyways-consulting-70-reponses",
      title: "Many Ways : 70% de réponses, 8% de meetings",
      industry: "Consulting",
      kpi1: "70% taux de réponse",
      kpi2: "8% taux de meetings",
      description: "Campagne ultra-personnalisée pour un cabinet de conseil, atteignant un taux de réponse exceptionnel de 70% et 8% de meetings qualifiés.",
    },
    {
      slug: "locky-prospects-interesses",
      title: "Locky : +40 prospects intéressés",
      industry: "Technologie",
      kpi1: "+40 prospects intéressés",
      kpi2: "Fort taux d'engagement",
      description: "Génération de plus de 40 prospects qualifiés et intéressés pour Locky grâce à une approche multicanale ciblée.",
    },
    {
      slug: "lemanvisio-rendez-vous-qualifies",
      title: "Lemanvisio : 16 rendez-vous qualifiés",
      industry: "Services Professionnels",
      kpi1: "16 rendez-vous qualifiés",
      kpi2: "Approche personnalisée",
      description: "Campagne de prospection B2B ciblée générant 16 rendez-vous qualifiés avec des décideurs clés.",
    },
    {
      slug: "cegos-formation-45-reponses",
      title: "Cegos : 45% de taux de réponse",
      industry: "Formation Professionnelle",
      kpi1: "45% taux de réponse",
      kpi2: "Secteur formation B2B",
      description: "Campagne de prospection dans le secteur de la formation professionnelle avec un taux de réponse exceptionnel de 45%.",
    },
    {
      slug: "squareco-identification-icp",
      title: "SquareCo : Identification des meilleurs ICP",
      industry: "Commodities Trading",
      kpi1: "Optimisation ICP",
      kpi2: "Stratégie affinée",
      description: "Identification et validation des profils de clients idéaux pour SquareCo, permettant d'affiner la stratégie commerciale.",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "+7", label: "Années d'expérience" },
    { icon: Users, value: "+3k", label: "Rendez-vous pris" },
    { icon: Target, value: "+12K", label: "Prospects activés" },
    { icon: Zap, value: "+50K", label: "Prospects contactés" },
  ];

  return (
    <>
      <Helmet>
        <title>{t.results.title} | devlo</title>
        <meta name="description" content={t.results.subtitle} />
        <link rel="canonical" href={`https://devlo.ch/${language === 'fr' ? '' : `${language}/`}${routes.results}`} />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {t.results.title}
                </h1>
                
                <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                  {t.results.subtitle}
                </p>

                <p className="text-xl font-semibold">
                  <span className="text-secondary">{t.contact.p2.split(' ')[0]} {t.contact.p2.split(' ')[1]} {t.contact.p2.split(' ')[2]} {t.contact.p2.split(' ')[3]}</span>
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 bg-muted/30 border-y border-border">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Des Résultats Concrets, Mesurables et Reproductibles
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chaque étude de cas détaille notre méthodologie de prospection, les défis rencontrés, 
                  la stratégie mise en place et les résultats chiffrés obtenus. Nous couvrons tous les secteurs : 
                  <strong> technologie, cybersécurité, ressources humaines, événementiel, immobilier, consulting, formation</strong> et bien plus.
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((study) => (
                  <Link
                    key={study.slug}
                    to={`${langPrefix}/${routes.results}/${getLocalizedCaseStudySlug(study.slug)}`}
                    className="group bg-card border border-border rounded-lg p-6 hover-lift hover:shadow-xl transition-all"
                  >
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-sm">
                        <span className="font-semibold text-secondary">•</span>
                        <span className="text-muted-foreground">{study.kpi1}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="font-semibold text-secondary">•</span>
                        <span className="text-muted-foreground">{study.kpi2}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {study.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Découvrir l'étude de cas
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Reproduire ces résultats pour votre entreprise ?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Planifiez une consultation gratuite et sans engagement. Nous analysons votre marché, 
                  identifions vos opportunités et vous proposons une stratégie de prospection sur mesure.
                </p>
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 hover-scale">
                  <Link to={`${langPrefix}/${routes.contact}`}>
                    {t.cta.schedule.primary}
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

export default Results;

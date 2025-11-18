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
  const tr = t.results;
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

  const cases = [
    { slug: "careerlunch-dach-recrutement", title: "CareerLunch: 54 qualified meetings", industry: "HR & Recruitment", kpi1: "54 qualified prospects", kpi2: "19% response rate", description: "How CareerLunch achieved 54 meetings in DACH region." },
    { slug: "cortexia-tech-b2b-meetings", title: "Cortexia: 71 qualified meetings", industry: "B2B Tech", kpi1: "71 qualified meetings", kpi2: "CH, France, Belgium", description: "Multichannel prospecting strategy for B2B tech." },
    { slug: "saporo-cybersecurite-b2b", title: "Saporo: 81% open rate", industry: "Cybersecurity", kpi1: "81% open rate", kpi2: "54% response, 16% meetings", description: "B2B cybersecurity campaign with exceptional engagement." },
    { slug: "apidae-evenementiel-luxe", title: "APIDAE: 70 meetings with UEFA, TAG Heuer", industry: "Luxury Events", kpi1: "70 qualified meetings", kpi2: "Prestige brands", description: "Targeted prospecting in luxury events sector." },
    { slug: "horus-belgique-200k", title: "Horus: €200,000 signed contracts", industry: "B2B Services", kpi1: "€200,000 contracts", kpi2: "Belgium expansion", description: "Successful Belgium market expansion." },
    { slug: "abacus-prospects-interesses", title: "Abacus: +30 interested prospects", industry: "Software & Services", kpi1: "+30 qualified prospects", kpi2: "High conversion", description: "Generated 30+ qualified interested prospects." },
    { slug: "hiag-immobilier-b2b", title: "HIAG: B2B real estate prospecting", industry: "Commercial Real Estate", kpi1: "Multichannel campaign", kpi2: "B2B real estate", description: "Innovative prospecting in B2B real estate." },
    { slug: "manyways-consulting-70-reponses", title: "Many Ways: 70% responses", industry: "Consulting", kpi1: "70% response rate", kpi2: "8% meetings rate", description: "Ultra-personalized campaign for consulting firm." },
    { slug: "locky-prospects-interesses", title: "Locky: +40 interested prospects", industry: "Technology", kpi1: "+40 interested prospects", kpi2: "High engagement", description: "Generated 40+ qualified interested prospects." },
    { slug: "lemanvisio-rendez-vous-qualifies", title: "Lemanvisio: 16 qualified meetings", industry: "Professional Services", kpi1: "16 qualified meetings", kpi2: "Personalized approach", description: "Targeted B2B campaign generating 16 qualified meetings." },
    { slug: "cegos-formation-45-reponses", title: "Cegos: 45% response rate", industry: "Professional Training", kpi1: "45% response rate", kpi2: "B2B training sector", description: "Prospecting campaign in professional training with exceptional response rate." },
    { slug: "squareco-identification-icp", title: "SquareCo: ICP identification", industry: "Commodities Trading", kpi1: "ICP optimization", kpi2: "Refined strategy", description: "Identification and validation of ideal customer profiles." },
  ];

  const stats = [
    { icon: TrendingUp, value: "+7", label: (tr as any).stats?.experience || t.stats?.items?.[0]?.label || "Experience" },
    { icon: Users, value: "+3k", label: (tr as any).stats?.meetings || t.stats?.items?.[1]?.label || "Meetings" },
    { icon: Target, value: "+12K", label: (tr as any).stats?.activated || t.stats?.items?.[2]?.label || "Activated" },
    { icon: Zap, value: "+50K", label: (tr as any).stats?.contacted || t.stats?.items?.[3]?.label || "Contacted" },
  ];

  return (
    <>
      <Helmet>
        <title>{tr.title} | devlo</title>
        <meta name="description" content={tr.subtitle} />
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
                  {tr.title}
                </h1>
                
                <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                  {tr.subtitle}
                </p>

                <p className="text-xl font-semibold">
                  <span className="text-secondary">{t.contact.p2.split(' ').slice(0, 4).join(' ')}</span>
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
                {cases.map((study: any) => (
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

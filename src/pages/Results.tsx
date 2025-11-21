import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const caseStudies = [
    {
      component: "CareerLunch",
      title: "CareerLunch: 54 qualified meetings in DACH region",
      industry: "Human Resources & Recruitment",
      kpi1: "54 qualified prospects (10%)",
      kpi2: "Average response rate: 19%",
      description: "How CareerLunch obtained 54 meetings in the DACH region through a unique B2B lead generation strategy targeting previously unknown companies.",
    },
    {
      component: "Cortexia",
      title: "Cortexia: 71 qualified meetings in CH/FR/BE",
      industry: "B2B Technology",
      kpi1: "71 qualified meetings",
      kpi2: "Campaigns CH, France, Belgium",
      description: "Multi-channel prospecting strategy for a B2B tech company, with qualified meetings in major cities across Switzerland, France and Belgium.",
    },
    {
      component: "Saporo",
      title: "Saporo: B2B Cybersecurity with 81% open rate",
      industry: "Cybersecurity",
      kpi1: "81% open rate",
      kpi2: "54% response rate, 16% meetings",
      description: "B2B prospecting campaign in the cybersecurity sector with exceptional engagement rates through an ultra-personalized approach.",
    },
    {
      component: "Apidae",
      title: "APIDAE: 70 meetings with UEFA, TAG Heuer, Rothschild",
      industry: "Luxury Events",
      kpi1: "70 qualified meetings",
      kpi2: "Prestigious brands",
      description: "Targeted prospecting in the luxury event sector, generating 70 qualified meetings with prestigious international brands.",
    },
    {
      component: "Horus",
      title: "Horus: €200,000 in signed contracts in Belgium",
      industry: "B2B Services",
      kpi1: "€200,000 in contracts",
      kpi2: "Belgium expansion",
      description: "Successful expansion into the Belgian market with €200,000 in signed contracts through targeted sales prospecting strategy.",
    },
    {
      component: "Hiag",
      title: "HIAG: B2B real estate prospecting",
      industry: "Commercial Real Estate",
      kpi1: "Multi-channel campaign",
      kpi2: "B2B real estate sector",
      description: "Innovative prospecting strategy in the B2B real estate sector, targeting key decision-makers in commercial real estate.",
    },
    {
      component: "ManyWays",
      title: "Many Ways: 70% response rate, 8% meetings",
      industry: "Consulting",
      kpi1: "70% response rate",
      kpi2: "8% meeting rate",
      description: "Ultra-personalized campaign for a consulting firm, achieving an exceptional 70% response rate and 8% qualified meetings.",
    },
    {
      component: "Locky",
      title: "Locky: 40+ interested prospects",
      industry: "Technology",
      kpi1: "40+ interested prospects",
      kpi2: "High engagement rate",
      description: "Generation of more than 40 qualified and interested prospects for Locky through a targeted multi-channel approach.",
    },
    {
      component: "Lemanvisio",
      title: "Lemanvisio: 16 qualified meetings",
      industry: "Professional Services",
      kpi1: "16 qualified meetings",
      kpi2: "Personalized approach",
      description: "Targeted B2B prospecting campaign generating 16 qualified meetings with key decision-makers.",
    },
    {
      component: "Cegos",
      title: "Cegos: 45% response rate",
      industry: "Professional Training",
      kpi1: "45% response rate",
      kpi2: "B2B training sector",
      description: "Prospecting campaign in the professional training sector with an exceptional 45% response rate.",
    },
    {
      component: "SquareCo",
      title: "SquareCo: Identification of best ICPs",
      industry: "Commodities Trading",
      kpi1: "ICP optimization",
      kpi2: "Refined strategy",
      description: "Identification and validation of ideal customer profiles for SquareCo, enabling refinement of commercial strategy.",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "+7", label: "Years of experience" },
    { icon: Users, value: "+3k", label: "Meetings booked" },
    { icon: Target, value: "+12K", label: "Prospects activated" },
    { icon: Zap, value: "+50K", label: "Prospects contacted" },
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Results of our B2B prospecting campaigns | devlo</title>
        <meta name="description" content="Discover our B2B sales prospecting case studies: +3000 qualified meetings, 7% interested prospects on average, ultra-personalized multi-channel campaigns across all sectors." />
        <meta name="keywords" content="B2B prospecting case studies, sales prospecting results, devlo client cases, B2B lead generation, qualified meetings, outbound campaigns" />
        <link rel="canonical" href="https://devlo.ch/en/case-studies" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Our Results:{" "}
                  <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
                    Real Case Studies
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                  Discover how we've helped B2B companies across all sectors generate thousands of qualified meetings 
                  through our ultra-personalized multi-channel sales prospecting campaigns.
                </p>

                <p className="text-xl font-semibold">
                  <span className="text-secondary">7% interested prospects</span> on average in 2024 • 
                  Ranked among the best outbound agencies
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
                  Concrete, Measurable and Reproducible Results
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each case study details our prospecting methodology, challenges encountered, 
                  strategy implemented and quantified results achieved. We cover all sectors: 
                  <strong> technology, cybersecurity, human resources, events, real estate, consulting, training</strong> and more.
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
                    key={study.component}
                    to={`/en/case-studies/${study.component}`}
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
                      View case study
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
                  Replicate these results for your company?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Schedule a free, no-obligation consultation. We analyze your market, 
                  identify your opportunities and propose a customized prospecting strategy.
                </p>
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 hover-scale">
                  <Link to="/contact">
                    Schedule your free consultation
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
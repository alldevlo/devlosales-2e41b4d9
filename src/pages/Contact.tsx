import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Clock, Target } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { dictionaries } from "@/i18n/locales";

const Contact = () => {
  const { language } = useLanguage();
  const t = dictionaries[language];
  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = '//js-na2.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          portalId: "8082524",
          formId: "af94dc91-a61a-4f0c-b328-39b1ade12da5",
          region: "na2",
          target: "#hubspot-form-container"
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById('hubspot-form-container')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact | Planifiez votre consultation gratuite | devlo</title>
        <meta name="description" content="Planifiez une consultation gratuite et sans engagement avec devlo. Obtenez une stratégie de prospection B2B personnalisée pour générer des leads qualifiés et booster vos ventes." />
        <meta name="keywords" content="contact devlo, consultation gratuite, stratégie prospection B2B, rendez-vous commercial, agence prospection suisse" />
        <link rel="canonical" href="https://devlo.ch/contact" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  {t.contact.title}{" "}
                  <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
                    {t.contact.highlight}
                  </span>{" "}
                  {t.contact.forYourBusiness}
                </h1>
                
                <div className="text-lg md:text-xl text-primary-foreground/90 space-y-4 mb-8 leading-relaxed">
                  <p>
                    <strong>{t.contact.p1}</strong>
                  </p>
                  
                  <p>
                    <strong className="text-secondary">{t.contact.p2}</strong>
                  </p>
                  
                  <p className="text-xl font-semibold">
                    {t.contact.p3}
                  </p>
                </div>

                <button 
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-secondary hover:bg-secondary-light rounded-lg transition-all hover-scale"
                >
                  {t.cta.schedule.meeting}
                </button>

                {/* Reassurance badges */}
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-primary-foreground/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>{t.contact.badges.free}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span>{t.contact.badges.fast}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-secondary" />
                    <span>{t.contact.badges.expert}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Form */}
                <div>
                  <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Remplissez le formulaire</h2>
                    <div id="hubspot-form-container" className="[&_.hs-form]:space-y-4"></div>
                  </div>
                </div>

                {/* Reassurance & Stats */}
                <div className="space-y-8">
                  <div className="bg-muted/50 border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Pourquoi nous choisir ?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>7% de prospects intéressés</strong> en moyenne en 2024</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>+3000 rendez-vous qualifiés</strong> pris pour nos clients</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>+12K prospects activés</strong> dans tous les secteurs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>Classés parmi les meilleures agences</strong> sur Outbound-experts.com</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span><strong>Campagnes multicanales</strong> ultra-personnalisées (email, LinkedIn, téléphone)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary text-primary-foreground rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Ils nous font confiance</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>Hublot</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>Longines</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>Lombard Odier</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>Merck</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>Apple</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>Adecco</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Garantie de confidentialité</h3>
                    <p className="text-muted-foreground">
                      Vos données sont traitées de manière confidentielle et ne seront jamais partagées avec des tiers. 
                      Nous utilisons vos informations uniquement pour vous recontacter et préparer votre consultation personnalisée.
                    </p>
                  </div>
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

export default Contact;

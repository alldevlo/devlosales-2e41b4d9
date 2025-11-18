import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Locky = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Locky : +40 prospects intéressés | Étude de cas devlo</title>
        <meta name="description" content="Découvrez comment Locky a généré plus de 40 prospects qualifiés et intéressés grâce à une approche multicanale ciblée." />
        <link rel="canonical" href="https://devlo.ch/resultats/locky-prospects-interesses" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <Link to="/resultats" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Retour aux résultats
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Locky : +40 prospects intéressés grâce à une approche multicanale ciblée
                </h1>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-4xl font-bold text-secondary mb-2">+40</div>
                  <div className="text-primary-foreground/90">Prospects intéressés</div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 bg-background">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8">
                Génération de plus de 40 prospects qualifiés et intéressés pour Locky grâce à une approche multicanale ciblée combinant personnalisation et engagement stratégique.
              </p>
              <div className="bg-card border rounded-lg p-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Fort taux d'engagement</strong> avec 40+ prospects qualifiés</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="py-16 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Prêt à générer des prospects qualifiés ?</h2>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Planifier ma consultation<ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Locky;

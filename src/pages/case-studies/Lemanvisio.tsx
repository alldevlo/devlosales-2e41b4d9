import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Lemanvisio = () => {
  return (
    <>
      <Helmet>
        <title>Lemanvisio : 16 rendez-vous qualifiés | Étude de cas devlo</title>
        <meta name="description" content="Découvrez comment Lemanvisio a obtenu 16 rendez-vous qualifiés avec une approche personnalisée ciblant les cabinets d'architecture." />
        <link rel="canonical" href="https://devlo.ch/resultats/lemanvisio-rendez-vous-qualifies" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
              <Link to="/resultats" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Retour aux résultats
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lemanvisio : 16 rendez-vous qualifiés avec approche personnalisée
              </h1>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold text-secondary mb-2">16</div>
                <div className="text-primary-foreground/90">Rendez-vous qualifiés</div>
              </div>
            </div>
          </section>
          <section className="py-16 bg-background">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8">
                Campagne ciblée pour Lemanvisio générant 16 rendez-vous qualifiés avec des cabinets d'architecture grâce à une approche personnalisée.
              </p>
              <div className="bg-card border rounded-lg p-8">
                <ul className="space-y-3">
                  <li className="flex gap-3"><CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" /><span className="text-muted-foreground"><strong className="text-foreground">16 RDV qualifiés</strong> avec décideurs clés</span></li>
                </ul>
              </div>
            </div>
          </section>
          <section className="py-16 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Obtenez des rendez-vous qualifiés</h2>
              <Button asChild size="lg" variant="secondary"><Link to="/contact">Planifier ma consultation<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Lemanvisio;

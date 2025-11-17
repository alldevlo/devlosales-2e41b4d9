import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SquareCo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>SquareCo : Identification des meilleurs ICP | Étude de cas devlo</title>
        <meta name="description" content="Découvrez comment SquareCo a identifié ses meilleurs profils clients idéaux grâce à des campagnes test stratégiques." />
        <link rel="canonical" href="https://devlo.ch/resultats/squareco-identification-icp" />
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
                SquareCo : Identification des meilleurs profils clients idéaux (ICP)
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Stratégie d'identification des ICP les plus performants grâce à des campagnes test méthodiques.
              </p>
            </div>
          </section>
          <section className="py-16 bg-background">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8">
                SquareCo a identifié et validé ses profils de clients idéaux grâce à une approche méthodique de test et d'analyse.
              </p>
              <div className="bg-card border rounded-lg p-8">
                <ul className="space-y-3">
                  <li className="flex gap-3"><CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-1" /><span className="text-muted-foreground"><strong className="text-foreground">Optimisation ICP</strong> validation des meilleurs profils</span></li>
                </ul>
              </div>
            </div>
          </section>
          <section className="py-16 bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Identifiez vos meilleurs ICP</h2>
              <Button asChild size="lg" variant="secondary"><Link to="/contact">Planifier ma consultation<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SquareCo;

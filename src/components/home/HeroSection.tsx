import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const HeroSection = () => {
  const { lang, t } = useLanguage();
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="container relative px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.title}{" "}
            <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>
          
          <p className="mb-8 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle} <strong>{t.hero.subtitleHighlight}</strong> {t.hero.subtitleEnd}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 hover-scale">
              <Link to={`/${lang}/contact`}>
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>{t.hero.features.free}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>{t.hero.features.fast}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>{t.hero.features.certified}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;

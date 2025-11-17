import { useLanguage } from "@/contexts/LanguageContext";

const TrustedBySection = () => {
  const { t } = useLanguage();
  const ourClients = [
    "Abacus", "APIDAE", "Saporo", "Cortexia", "CareerLunch", 
    "Cegos", "Many Ways", "Locky", "Hiag", "Horus", 
    "Lemanvisio", "SquareCo"
  ];

  const prospectsMeetings = [
    "Hublot", "Longines", "Lombard Odier", "BHP", "Adecco", 
    "Banque Cantonale de Fribourg", "Merck", "Apple", 
    "Implenia", "LafargeHolcim", "ABB", "UEFA", "TAG Heuer", 
    "Rothschild", "Credit Suisse", "UBS"
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container px-4 md:px-6">
        {/* Nos clients */}
        <div className="mb-12">
        <h2 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-8">
          {t('trustedBy.clientsTitle')}
        </h2>
          
          <div className="relative overflow-hidden">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 items-center">
              {ourClients.map((client, index) => (
                <div 
                  key={index}
                  className="text-lg md:text-xl font-semibold text-foreground/70 hover:text-primary transition-colors"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rendez-vous bookés avec */}
        <div>
          <h2 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-8">
            Rendez-vous bookés avec
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 items-center">
              {prospectsMeetings.map((company, index) => (
                <div 
                  key={index}
                  className="text-lg md:text-xl font-semibold text-foreground/70 hover:text-primary transition-colors"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

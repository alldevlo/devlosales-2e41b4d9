const TrustedBySection = () => {
  const clients = [
    "Hublot", "Longines", "Lombard Odier", "BHP", "Adecco", 
    "Banque Cantonale de Fribourg", "Merck", "Apple", "Abacus", 
    "APIDAE", "Implenia", "LafargeHolcim", "ABB"
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-8">
          Ils nous font confiance
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 items-center">
            {clients.map((client, index) => (
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
    </section>
  );
};

export default TrustedBySection;

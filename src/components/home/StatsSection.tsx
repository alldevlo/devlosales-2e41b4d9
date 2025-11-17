import { Users, Calendar, TrendingUp, Target } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "+7",
    label: "Années d'expérience",
    description: "Dans la prospection B2B"
  },
  {
    icon: Users,
    value: "+3k",
    label: "Rendez-vous pris",
    description: "Avec succès pour nos clients"
  },
  {
    icon: TrendingUp,
    value: "+12K",
    label: "Prospects activés",
    description: "Leads qualifiés générés"
  },
  {
    icon: Target,
    value: "+50K",
    label: "Prospects contactés",
    description: "Campagnes multicanales"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Résultats en Chiffres
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des chiffres qui parlent d'eux-mêmes et témoignent de notre expertise en développement commercial B2B
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-6 text-center hover-lift hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

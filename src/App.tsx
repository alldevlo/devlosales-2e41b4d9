import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Case studies
import CareerLunch from "./pages/case-studies/CareerLunch";
import Cortexia from "./pages/case-studies/Cortexia";
import Saporo from "./pages/case-studies/Saporo";
import Apidae from "./pages/case-studies/Apidae";
import Horus from "./pages/case-studies/Horus";
import Abacus from "./pages/case-studies/Abacus";
import Hiag from "./pages/case-studies/Hiag";
import ManyWays from "./pages/case-studies/ManyWays";
import Locky from "./pages/case-studies/Locky";
import Lemanvisio from "./pages/case-studies/Lemanvisio";
import Cegos from "./pages/case-studies/Cegos";
import SquareCo from "./pages/case-studies/SquareCo";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resultats" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resultats/careerlunch-dach-recrutement" element={<CareerLunch />} />
            <Route path="/resultats/cortexia-tech-b2b-meetings" element={<Cortexia />} />
            <Route path="/resultats/saporo-cybersecurite-b2b" element={<Saporo />} />
            <Route path="/resultats/apidae-evenementiel-luxe" element={<Apidae />} />
            <Route path="/resultats/horus-belgique-200k" element={<Horus />} />
            <Route path="/resultats/abacus-prospects-interesses" element={<Abacus />} />
            <Route path="/resultats/hiag-immobilier-b2b" element={<Hiag />} />
            <Route path="/resultats/manyways-consulting-70-reponses" element={<ManyWays />} />
            <Route path="/resultats/locky-prospects-interesses" element={<Locky />} />
            <Route path="/resultats/lemanvisio-rendez-vous-qualifies" element={<Lemanvisio />} />
            <Route path="/resultats/cegos-formation-45-reponses" element={<Cegos />} />
            <Route path="/resultats/squareco-identification-icp" element={<SquareCo />} />
            
            {/* English routes */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/results" element={<Results />} />
            <Route path="/en/contact" element={<Contact />} />
            <Route path="/en/results/careerlunch-dach-recruitment" element={<CareerLunch />} />
            <Route path="/en/results/cortexia-tech-b2b-meetings" element={<Cortexia />} />
            <Route path="/en/results/saporo-b2b-cybersecurity" element={<Saporo />} />
            <Route path="/en/results/apidae-luxury-events" element={<Apidae />} />
            <Route path="/en/results/horus-belgium-200k" element={<Horus />} />
            <Route path="/en/results/abacus-interested-prospects" element={<Abacus />} />
            <Route path="/en/results/hiag-real-estate-b2b" element={<Hiag />} />
            <Route path="/en/results/manyways-consulting-70-responses" element={<ManyWays />} />
            <Route path="/en/results/locky-interested-prospects" element={<Locky />} />
            <Route path="/en/results/lemanvisio-qualified-appointments" element={<Lemanvisio />} />
            <Route path="/en/results/cegos-training-45-responses" element={<Cegos />} />
            <Route path="/en/results/squareco-icp-identification" element={<SquareCo />} />

            {/* German routes */}
            <Route path="/de" element={<Home />} />
            <Route path="/de/ergebnisse" element={<Results />} />
            <Route path="/de/kontakt" element={<Contact />} />
            <Route path="/de/ergebnisse/careerlunch-dach-rekrutierung" element={<CareerLunch />} />
            <Route path="/de/ergebnisse/cortexia-tech-b2b-treffen" element={<Cortexia />} />
            <Route path="/de/ergebnisse/saporo-b2b-cybersicherheit" element={<Saporo />} />
            <Route path="/de/ergebnisse/apidae-luxus-events" element={<Apidae />} />
            <Route path="/de/ergebnisse/horus-belgien-200k" element={<Horus />} />
            <Route path="/de/ergebnisse/abacus-interessierte-interessenten" element={<Abacus />} />
            <Route path="/de/ergebnisse/hiag-immobilien-b2b" element={<Hiag />} />
            <Route path="/de/ergebnisse/manyways-beratung-70-antworten" element={<ManyWays />} />
            <Route path="/de/ergebnisse/locky-interessierte-interessenten" element={<Locky />} />
            <Route path="/de/ergebnisse/lemanvisio-qualifizierte-termine" element={<Lemanvisio />} />
            <Route path="/de/ergebnisse/cegos-schulung-45-antworten" element={<Cegos />} />
            <Route path="/de/ergebnisse/squareco-icp-identifizierung" element={<SquareCo />} />

            {/* Spanish routes */}
            <Route path="/es" element={<Home />} />
            <Route path="/es/resultados" element={<Results />} />
            <Route path="/es/contacto" element={<Contact />} />
            <Route path="/es/resultados/careerlunch-dach-reclutamiento" element={<CareerLunch />} />
            <Route path="/es/resultados/cortexia-tech-reuniones-b2b" element={<Cortexia />} />
            <Route path="/es/resultados/saporo-ciberseguridad-b2b" element={<Saporo />} />
            <Route path="/es/resultados/apidae-eventos-lujo" element={<Apidae />} />
            <Route path="/es/resultados/horus-belgica-200k" element={<Horus />} />
            <Route path="/es/resultados/abacus-prospectos-interesados" element={<Abacus />} />
            <Route path="/es/resultados/hiag-inmobiliario-b2b" element={<Hiag />} />
            <Route path="/es/resultados/manyways-consultoria-70-respuestas" element={<ManyWays />} />
            <Route path="/es/resultados/locky-prospectos-interesados" element={<Locky />} />
            <Route path="/es/resultados/lemanvisio-citas-calificadas" element={<Lemanvisio />} />
            <Route path="/es/resultados/cegos-formacion-45-respuestas" element={<Cegos />} />
            <Route path="/es/resultados/squareco-identificacion-icp" element={<SquareCo />} />

            {/* Italian routes */}
            <Route path="/it" element={<Home />} />
            <Route path="/it/risultati" element={<Results />} />
            <Route path="/it/contatto" element={<Contact />} />
            <Route path="/it/risultati/careerlunch-dach-reclutamento" element={<CareerLunch />} />
            <Route path="/it/risultati/cortexia-tech-meeting-b2b" element={<Cortexia />} />
            <Route path="/it/risultati/saporo-cybersicurezza-b2b" element={<Saporo />} />
            <Route path="/it/risultati/apidae-eventi-lusso" element={<Apidae />} />
            <Route path="/it/risultati/horus-belgio-200k" element={<Horus />} />
            <Route path="/it/risultati/abacus-prospect-interessati" element={<Abacus />} />
            <Route path="/it/risultati/hiag-immobiliare-b2b" element={<Hiag />} />
            <Route path="/it/risultati/manyways-consulenza-70-risposte" element={<ManyWays />} />
            <Route path="/it/risultati/locky-prospect-interessati" element={<Locky />} />
            <Route path="/it/risultati/lemanvisio-appuntamenti-qualificati" element={<Lemanvisio />} />
            <Route path="/it/risultati/cegos-formazione-45-risposte" element={<Cegos />} />
            <Route path="/it/risultati/squareco-identificazione-icp" element={<SquareCo />} />

            {/* Portuguese routes */}
            <Route path="/pt" element={<Home />} />
            <Route path="/pt/resultados" element={<Results />} />
            <Route path="/pt/contato" element={<Contact />} />
            <Route path="/pt/resultados/careerlunch-dach-recrutamento" element={<CareerLunch />} />
            <Route path="/pt/resultados/cortexia-tech-reunioes-b2b" element={<Cortexia />} />
            <Route path="/pt/resultados/saporo-ciberseguranca-b2b" element={<Saporo />} />
            <Route path="/pt/resultados/apidae-eventos-luxo" element={<Apidae />} />
            <Route path="/pt/resultados/horus-belgica-200k" element={<Horus />} />
            <Route path="/pt/resultados/abacus-prospects-interessados" element={<Abacus />} />
            <Route path="/pt/resultados/hiag-imobiliario-b2b" element={<Hiag />} />
            <Route path="/pt/resultados/manyways-consultoria-70-respostas" element={<ManyWays />} />
            <Route path="/pt/resultados/locky-prospects-interessados" element={<Locky />} />
            <Route path="/pt/resultados/lemanvisio-consultas-qualificadas" element={<Lemanvisio />} />
            <Route path="/pt/resultados/cegos-formacao-45-respostas" element={<Cegos />} />
            <Route path="/pt/resultados/squareco-identificacao-icp" element={<SquareCo />} />

            {/* Swedish routes */}
            <Route path="/sv" element={<Home />} />
            <Route path="/sv/resultat" element={<Results />} />
            <Route path="/sv/kontakt" element={<Contact />} />
            <Route path="/sv/resultat/careerlunch-dach-rekrytering" element={<CareerLunch />} />
            <Route path="/sv/resultat/cortexia-tech-b2b-moten" element={<Cortexia />} />
            <Route path="/sv/resultat/saporo-cybersakerhet-b2b" element={<Saporo />} />
            <Route path="/sv/resultat/apidae-lyxevenemang" element={<Apidae />} />
            <Route path="/sv/resultat/horus-belgien-200k" element={<Horus />} />
            <Route path="/sv/resultat/abacus-intresserade-prospekt" element={<Abacus />} />
            <Route path="/sv/resultat/hiag-fastigheter-b2b" element={<Hiag />} />
            <Route path="/sv/resultat/manyways-konsulting-70-svar" element={<ManyWays />} />
            <Route path="/sv/resultat/locky-intresserade-prospekt" element={<Locky />} />
            <Route path="/sv/resultat/lemanvisio-kvalificerade-moten" element={<Lemanvisio />} />
            <Route path="/sv/resultat/cegos-utbildning-45-svar" element={<Cegos />} />
            <Route path="/sv/resultat/squareco-icp-identifiering" element={<SquareCo />} />

            {/* Norwegian routes */}
            <Route path="/no" element={<Home />} />
            <Route path="/no/resultater" element={<Results />} />
            <Route path="/no/kontakt" element={<Contact />} />
            <Route path="/no/resultater/careerlunch-dach-rekruttering" element={<CareerLunch />} />
            <Route path="/no/resultater/cortexia-tech-b2b-moter" element={<Cortexia />} />
            <Route path="/no/resultater/saporo-cybersikkerhet-b2b" element={<Saporo />} />
            <Route path="/no/resultater/apidae-luksusarrangementer" element={<Apidae />} />
            <Route path="/no/resultater/horus-belgia-200k" element={<Horus />} />
            <Route path="/no/resultater/abacus-interesserte-prospekter" element={<Abacus />} />
            <Route path="/no/resultater/hiag-eiendom-b2b" element={<Hiag />} />
            <Route path="/no/resultater/manyways-radgivning-70-svar" element={<ManyWays />} />
            <Route path="/no/resultater/locky-interesserte-prospekter" element={<Locky />} />
            <Route path="/no/resultater/lemanvisio-kvalifiserte-avtaler" element={<Lemanvisio />} />
            <Route path="/no/resultater/cegos-opplaering-45-svar" element={<Cegos />} />
            <Route path="/no/resultater/squareco-icp-identifisering" element={<SquareCo />} />

            {/* Danish routes */}
            <Route path="/da" element={<Home />} />
            <Route path="/da/resultater" element={<Results />} />
            <Route path="/da/kontakt" element={<Contact />} />
            <Route path="/da/resultater/careerlunch-dach-rekruttering" element={<CareerLunch />} />
            <Route path="/da/resultater/cortexia-tech-b2b-moder" element={<Cortexia />} />
            <Route path="/da/resultater/saporo-cybersikkerhed-b2b" element={<Saporo />} />
            <Route path="/da/resultater/apidae-luksusevents" element={<Apidae />} />
            <Route path="/da/resultater/horus-belgien-200k" element={<Horus />} />
            <Route path="/da/resultater/abacus-interesserede-prospekter" element={<Abacus />} />
            <Route path="/da/resultater/hiag-ejendomme-b2b" element={<Hiag />} />
            <Route path="/da/resultater/manyways-radgivning-70-svar" element={<ManyWays />} />
            <Route path="/da/resultater/locky-interesserede-prospekter" element={<Locky />} />
            <Route path="/da/resultater/lemanvisio-kvalificerede-aftaler" element={<Lemanvisio />} />
            <Route path="/da/resultater/cegos-traening-45-svar" element={<Cegos />} />
            <Route path="/da/resultater/squareco-icp-identifikation" element={<SquareCo />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AixsterProvider } from '@aixyte/aixster';
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
  <AixsterProvider
    apiKey="aix_p7omsrtbu7fxm91ap5k1exc4qjgt8hqs"
    defaultLocale="fr"
    locales={["ar", "da", "de", "en", "es", "fi", "it", "ko", "nl", "pl", "ru", "sv", "zh"]}
    routing="path"
    switcherPosition="bottom-right"
    switcherOffsetY={20}
  >
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </AixsterProvider>
);

export default App;

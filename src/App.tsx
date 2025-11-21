import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
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
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/fr" element={<Home />} />
            <Route path="/fr/resultats" element={<Results />} />
            <Route path="/fr/contact" element={<Contact />} />
            <Route path="/fr/resultats/careerlunch-dach-recrutement" element={<CareerLunch />} />
            <Route path="/fr/resultats/cortexia-tech-b2b-meetings" element={<Cortexia />} />
            <Route path="/fr/resultats/saporo-cybersecurite-b2b" element={<Saporo />} />
            <Route path="/fr/resultats/apidae-evenementiel-luxe" element={<Apidae />} />
            <Route path="/fr/resultats/horus-belgique-200k" element={<Horus />} />
            <Route path="/fr/resultats/abacus-prospects-interesses" element={<Abacus />} />
            <Route path="/fr/resultats/hiag-immobilier-b2b" element={<Hiag />} />
            <Route path="/fr/resultats/manyways-consulting-70-reponses" element={<ManyWays />} />
            <Route path="/fr/resultats/locky-prospects-interesses" element={<Locky />} />
            <Route path="/fr/resultats/lemanvisio-rendez-vous-qualifies" element={<Lemanvisio />} />
            <Route path="/fr/resultats/cegos-formation-45-reponses" element={<Cegos />} />
            <Route path="/fr/resultats/squareco-identification-icp" element={<SquareCo />} />
            <Route path="/en" element={<Home />} />
<Route path="/en/case-studies" element={<Results />} />
<Route path="/en/contact" element={<Contact />} />
<Route path="/en/case-studies/CareerLunch" element={<CareerLunch />} />
<Route path="/en/case-studies/Cortexia" element={<Cortexia />} />
<Route path="/en/case-studies/Saporo" element={<Saporo />} />
<Route path="/en/case-studies/Apidae" element={<Apidae />} />
<Route path="/en/case-studies/Horus" element={<Horus />} />
<Route path="/en/case-studies/Hiag" element={<Hiag />} />
<Route path="/en/case-studies/ManyWays" element={<ManyWays />} />
<Route path="/en/case-studies/Locky" element={<Locky />} />
<Route path="/en/case-studies/Lemanvisio" element={<Lemanvisio />} />
<Route path="/en/case-studies/Cegos" element={<Cegos />} />
<Route path="/en/case-studies/SquareCo" element={<SquareCo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);
export default App;

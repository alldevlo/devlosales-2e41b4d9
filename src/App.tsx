import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy } from "react";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import CareerLunch from "./pages/case-studies/CareerLunch";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resultats" element={<Results />} />
            <Route path="/resultats/careerlunch-dach-recrutement" element={<CareerLunch />} />
            <Route path="/resultats/cortexia-tech-b2b-meetings" element={<lazy(() => import("@/pages/case-studies/Cortexia"))} />
            <Route path="/resultats/saporo-cybersecurite-b2b" element={<lazy(() => import("@/pages/case-studies/Saporo"))} />
            <Route path="/resultats/apidae-evenementiel-luxe" element={<lazy(() => import("@/pages/case-studies/Apidae"))} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

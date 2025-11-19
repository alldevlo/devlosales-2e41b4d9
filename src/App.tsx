import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Results from "./pages/Results";
cat > ~/Downloads/migrate-clean.sh << 'ENDOFSCRIPT'
#!/bin/bash
set -e
echo "=========================================="
echo "🧹 NETTOYAGE + MIGRATION MULTILINGUE"
echo "=========================================="
echo ""
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'
WORK_DIR="$HOME/devlosales-migration"
echo -e "${BLUE}📁 Retour dans le répertoire...${NC}"
cd "$WORK_DIR"
echo -e "${BLUE}🔄 Pull...${NC}"
git pull origin main
echo -e "${RED}🧹 SUPPRESSION AIXSTER${NC}"
echo ""
echo -e "${BLUE}📦 Suppression du package...${NC}"
npm uninstall @aixyte/aixster 2>/dev/null || echo -e "${YELLOW}Package déjà absent${NC}"
echo -e "${BLUE}🔍 Nettoyage des imports...${NC}"
find src -type f \( -name "*.ts" -o -name "*.tsx" \) -exec sed -i '' '/aixster/d' {} \; 2>/dev/null || true
find src -type f \( -name "*.ts" -o -name "*.tsx" \) -exec sed -i '' '/AixsterProvider/d' {} \; 2>/dev/null || true
echo -e "${GREEN}✅ Nettoyage terminé${NC}"
echo ""
echo -e "${BLUE}🚀 MIGRATION MULTILINGUE${NC}"
cat > src/App.tsx << 'EOF'
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
            <Route path="/" element={<Navigate to="/fr" replace />} />
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
            <Route path="/en/results" element={<Results />} />
            <Route path="/en/contact" element={<Contact />} />
            <Route path="/en/results/careerlunch-dach-recruitment" element={<CareerLunch />} />
            <Route path="/en/results/cortexia-tech-b2b-meetings" element={<Cortexia />} />
            <Route path="/en/results/saporo-cybersecurity-b2b" element={<Saporo />} />
            <Route path="/en/results/apidae-luxury-events" element={<Apidae />} />
            <Route path="/en/results/horus-belgium-200k" element={<Horus />} />
            <Route path="/en/results/abacus-interested-prospects" element={<Abacus />} />
            <Route path="/en/results/hiag-real-estate-b2b" element={<Hiag />} />
            <Route path="/en/results/manyways-consulting-70-responses" element={<ManyWays />} />
            <Route path="/en/results/locky-interested-prospects" element={<Locky />} />
            <Route path="/en/results/lemanvisio-qualified-meetings" element={<Lemanvisio />} />
            <Route path="/en/results/cegos-training-45-responses" element={<Cegos />} />
            <Route path="/en/results/squareco-icp-identification" element={<SquareCo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);
export default App;

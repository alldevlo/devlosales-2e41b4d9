import { createRoot } from "react-dom/client";
import { AixsterProvider } from '@aixyte/aixster';
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <AixsterProvider
    apiKey="aix_p7omsrtbu7fxm91ap5k1exc4qjgt8hqs"
    defaultLocale="fr"
    locales={["ar", "da", "de", "en", "es", "fi", "it", "ko", "nl", "pl", "ru", "sv", "zh"]}
    routing="path"
    switcherPosition="top-right"
    switcherOffsetY={20}
  >
    <App />
  </AixsterProvider>
);

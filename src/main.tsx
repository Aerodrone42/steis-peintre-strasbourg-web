
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Debugging information
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  console.log("Initialisation de l'application...");
  console.log("URL de base actuelle:", document.baseURI);
  console.log("Chemin de l'application:", window.location.pathname);
  console.log("Emplacement complet:", window.location.href);
  console.log("Hostname:", window.location.hostname);
  console.log("Protocol:", window.location.protocol);
  console.log("Origin:", window.location.origin);
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Élément root non trouvé!");
  throw new Error("Failed to find the root element");
}
const root = createRoot(rootElement);
console.log("Élément root trouvé, rendu de l'application...");

root.render(<App />);

// Vérifier que le CNAME est présent pour le domaine personnalisé
console.log("Le site est configuré pour fonctionner avec le domaine personnalisé: www.is-peinture.fr");
console.log("Chemin de base:", import.meta.env.BASE_URL);
console.log("Mode:", import.meta.env.MODE);
console.log("Production:", import.meta.env.PROD);
console.log("Environment variables:", import.meta.env);

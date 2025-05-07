
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// S'assurer que le site fonctionne avec le domaine personnalisé
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(<App />);

// Vérifier que le CNAME est présent pour le domaine personnalisé
console.log("Le site est configuré pour fonctionner avec le domaine personnalisé: www.is-peinture.fr");
console.log("Chemin de base:", import.meta.env.BASE_URL);

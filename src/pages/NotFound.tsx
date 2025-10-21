
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();
  const [env, setEnv] = useState({ 
    href: "", 
    pathname: "", 
    origin: "", 
    host: "", 
    base: import.meta.env.BASE_URL 
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEnv({
        href: window.location.href,
        pathname: window.location.pathname,
        origin: window.location.origin,
        host: window.location.host,
        base: import.meta.env.BASE_URL,
      });
    }
    console.error("404 Error: Page non trouvée:", location.pathname);
    
    // Informations de débogage
    console.log("URL complète:", window.location.href);
    console.log("Pathname:", window.location.pathname);
    console.log("Search:", window.location.search);
    console.log("Hash:", window.location.hash);
    console.log("Origin:", window.location.origin);
    console.log("Host:", window.location.host);
    console.log("Hostname:", window.location.hostname);
    console.log("Protocol:", window.location.protocol);
    console.log("Port:", window.location.port);
    console.log("Base URL:", import.meta.env.BASE_URL);
  }, [location]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
        <div className="text-center p-8 max-w-2xl bg-white shadow-lg rounded-lg">
          <h1 className="text-5xl font-bold mb-4 text-red-600">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Page introuvable - La page que vous recherchez n'existe pas.
          </p>
          <div className="mb-8 text-left bg-gray-50 p-4 rounded-lg overflow-auto max-h-[300px]">
            <h2 className="text-lg font-semibold mb-2">Informations techniques:</h2>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">URL complète:</span> <code className="bg-gray-100 px-1">{env.href}</code>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Pathname:</span> <code className="bg-gray-100 px-1">{env.pathname}</code>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Origin:</span> <code className="bg-gray-100 px-1">{env.origin}</code>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Host:</span> <code className="bg-gray-100 px-1">{env.host}</code>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Base URL:</span> <code className="bg-gray-100 px-1">{env.base}</code>
            </p>
          </div>
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block px-6 py-2 bg-steis text-white rounded-md hover:bg-steis-600 transition-colors"
            >
              Retourner à l'accueil
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Si ce problème persiste, veuillez contacter le support technique.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

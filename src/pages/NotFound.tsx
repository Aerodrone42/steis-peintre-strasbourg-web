
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Detailed debugging information
    console.log("Current URL:", window.location.href);
    console.log("Base URL:", document.baseURI);
    console.log("Current pathname:", window.location.pathname);
    console.log("Location object:", location);
    console.log("Origin:", window.location.origin);
    console.log("Host:", window.location.host);
    console.log("Hostname:", window.location.hostname);
    console.log("Base tag href:", document.querySelector("base")?.getAttribute("href"));
  }, [location.pathname]);

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
              <span className="font-medium">URL complète:</span> <code className="bg-gray-100 px-1">{window.location.href}</code>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Pathname:</span> <code className="bg-gray-100 px-1">{window.location.pathname}</code>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Base URL:</span> <code className="bg-gray-100 px-1">{document.baseURI}</code>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Origin:</span> <code className="bg-gray-100 px-1">{window.location.origin}</code>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Host:</span> <code className="bg-gray-100 px-1">{window.location.host}</code>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-medium">Base tag:</span> <code className="bg-gray-100 px-1">{document.querySelector("base")?.getAttribute("href") || "non défini"}</code>
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
              Si ce problème persiste, veuillez vérifier la configuration DNS et GitHub Pages.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

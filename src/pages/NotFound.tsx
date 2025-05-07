
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Add more debugging info
    console.log("Current URL:", window.location.href);
    console.log("Base URL:", document.baseURI);
    console.log("Current pathname:", window.location.pathname);
    console.log("Location object:", location);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 max-w-md bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold mb-4 text-red-600">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Page introuvable - La page que vous recherchez n'existe pas.
        </p>
        <p className="mb-4 text-gray-500">
          URL actuelle : <code>{window.location.href}</code>
        </p>
        <p className="mb-4 text-gray-500">
          Pathname : <code>{window.location.pathname}</code>
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-steis text-white rounded-md hover:bg-steis-600 transition-colors"
        >
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

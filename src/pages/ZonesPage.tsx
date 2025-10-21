
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { allZones } from '@/data/zones';

const ZonesPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>STEIS Ismaël | Zones d'intervention en Alsace - Artisan Peintre & Couvreur</title>
        <meta name="description" content="Découvrez les zones d'intervention de STEIS Ismaël, artisan peintre et couvreur qualifié dans toute l'Alsace. Services de qualité pour peinture, toiture et façade à Strasbourg et sa région." />
        <meta name="keywords" content="zones intervention, artisan peintre alsace, couvreur strasbourg, peintre bas-rhin, ravalement façade alsace, toiture alsace, rénovation façade" />
        <link rel="canonical" href="https://www.steis-artisan.fr/zones" />
        
        {/* Schema.org JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Zones d'intervention - STEIS Ismaël",
            "description": "Découvrez les zones d'intervention de STEIS Ismaël, artisan peintre et couvreur dans toute l'Alsace.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "STEIS Ismaël",
              "description": "Artisan peintre et couvreur en Alsace",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Alsace",
                "addressCountry": "FR"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="bg-steis-600 py-16 md:py-24">
        <div className="container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Zones d'intervention
          </h1>
          <p className="mt-4 text-white/80 text-center max-w-3xl mx-auto">
            STEIS Ismaël intervient dans toute l'Alsace pour vos travaux de peinture, toiture, 
            ravalement de façade et nettoyage. Découvrez nos secteurs d'intervention.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allZones.map((zone) => (
            <Link
              key={zone.id}
              to={`/zones/${zone.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={zone.images[0]} 
                  alt={`STEIS Ismaël intervient à ${zone.city} - Travaux de peinture et toiture`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-steis-700 mb-2">{zone.city}</h2>
                <p className="text-gray-600">
                  Nos services de peinture, toiture et façade à {zone.city} et ses environs : {zone.surroundingCities.slice(0, 3).join(', ')}...
                </p>
                <div className="mt-4 text-steis font-medium hover:text-steis-600 flex items-center">
                  En savoir plus
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-steis-700 mb-4">Vous ne trouvez pas votre ville ?</h2>
          <p className="text-gray-600 mb-6">
            Nous intervenons dans de nombreuses autres localités en Alsace.
            N'hésitez pas à nous contacter pour savoir si nous intervenons dans votre secteur.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-steis text-white font-medium px-6 py-3 rounded-lg hover:bg-steis-600 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ZonesPage;

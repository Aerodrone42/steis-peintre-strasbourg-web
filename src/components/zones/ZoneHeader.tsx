
import React from 'react';
import { Helmet } from 'react-helmet';

interface ZoneHeaderProps {
  city: string;
  surroundingCities: string[];
  metaDescription: string;
  metaKeywords: string;
}

const ZoneHeader: React.FC<ZoneHeaderProps> = ({ city, surroundingCities, metaDescription, metaKeywords }) => {
  // Créer un titre plus descriptif et accrocheur pour le SEO
  const pageTitle = `Artisan Peintre & Couvreur STEIS Ismaël à ${city} | Services professionnels`;
  const canonicalUrl = `https://www.is-peinture.fr/zones/${city.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={`STEIS Ismaël | Services professionnels à ${city} et alentours`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Schema.org JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `STEIS Ismaël - Artisan à ${city}`,
            "description": metaDescription,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city,
              "addressRegion": "Alsace",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates"
            },
            "url": canonicalUrl,
            "telephone": "+33XXXXXXXXXX",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/steisismaelartisan/",
              "https://www.instagram.com/steisismaelartisan/"
            ],
            "priceRange": "€€",
            "servesCuisine": "Services d'artisanat - Peinture, Couverture, Façades"
          })}
        </script>
      </Helmet>
      
      <div className="bg-steis-600 py-16 md:py-24">
        <div className="container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Nos services à {city} et ses environs
          </h1>
          <p className="mt-4 text-white/80 text-center max-w-3xl mx-auto">
            STEIS Ismaël intervient à {city} et dans les communes voisines : {surroundingCities.join(', ')}.
          </p>
        </div>
      </div>
    </>
  );
};

export default ZoneHeader;

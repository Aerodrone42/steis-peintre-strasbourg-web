
import React from 'react';
import { Helmet } from 'react-helmet';

interface ZoneHeaderProps {
  city: string;
  surroundingCities: string[];
  metaDescription: string;
  metaKeywords: string;
}

const ZoneHeader: React.FC<ZoneHeaderProps> = ({ city, surroundingCities, metaDescription, metaKeywords }) => {
  return (
    <>
      <Helmet>
        <title>STEIS Ismaël | Artisan à {city} et ses environs</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={`STEIS Ismaël | Services à ${city} et alentours`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
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

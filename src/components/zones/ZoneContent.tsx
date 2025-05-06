
import React from 'react';
import { parseContentWithHeadings, createLocationContext } from '@/lib/contentParser';

interface ZoneContentProps {
  city: string;
  content: string;
  surroundingCities: string[];
}

const ZoneContent: React.FC<ZoneContentProps> = ({ city, content, surroundingCities }) => {
  // Utiliser le parseur pour transformer le contenu en HTML sémantique
  const parsedContent = parseContentWithHeadings(content, city);
  
  // Créer un paragraphe contextuel sur les zones d'intervention
  const locationContext = createLocationContext(city, surroundingCities);
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md my-8">
      <h2 className="text-2xl font-bold text-steis-700 mb-4">STEIS Ismaël, votre artisan de confiance à {city}</h2>
      <div className="prose max-w-none text-gray-700">
        <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
        
        {/* Section contextuelle des zones d'intervention */}
        <h3 className="text-xl font-bold text-steis-600 mt-8 mb-4">Notre zone d'intervention autour de {city}</h3>
        <div className="bg-gray-50 p-4 rounded-lg" dangerouslySetInnerHTML={{ __html: locationContext }} />
      </div>
    </div>
  );
};

export default ZoneContent;

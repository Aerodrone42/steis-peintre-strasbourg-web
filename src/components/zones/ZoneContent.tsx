
import React from 'react';
import { parseContentWithHeadings } from '@/lib/contentParser';

interface ZoneContentProps {
  city: string;
  content: string;
}

const ZoneContent: React.FC<ZoneContentProps> = ({ city, content }) => {
  // Utiliser le parseur pour transformer le contenu en HTML sémantique
  const parsedContent = parseContentWithHeadings(content, city);
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md my-8">
      <h2 className="text-2xl font-bold text-steis-700 mb-4">STEIS Ismaël, votre artisan de confiance à {city}</h2>
      <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: parsedContent }} />
    </div>
  );
};

export default ZoneContent;

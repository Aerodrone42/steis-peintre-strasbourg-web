
import React from 'react';

interface ZoneContentProps {
  city: string;
  content: string;
}

const ZoneContent: React.FC<ZoneContentProps> = ({ city, content }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md my-8">
      <h2 className="text-2xl font-bold text-steis-700 mb-4">STEIS Ismaël, votre artisan de confiance à {city}</h2>
      <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ZoneContent;

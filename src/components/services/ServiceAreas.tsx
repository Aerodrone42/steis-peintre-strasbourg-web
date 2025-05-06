
import React from 'react';

interface ServiceAreasProps {
  areas: string[];
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({ areas }) => {
  if (!areas || areas.length === 0) return null;
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-steis mb-4">Zones d'intervention</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {areas.map((area, index) => (
          <li key={index} className="text-gray-700">
            {area}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceAreas;

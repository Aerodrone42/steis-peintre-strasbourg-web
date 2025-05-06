
import React from 'react';

interface ServiceDetailProps {
  details: string[];
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ details }) => {
  return (
    <div>
      {details.map((paragraph, index) => (
        <p
          key={index}
          className="mb-4 text-gray-700"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ServiceDetail;


import React from 'react';

interface ServiceImagesProps {
  title: string;
  additionalImages?: string[];
}

const ServiceImages: React.FC<ServiceImagesProps> = ({ title, additionalImages }) => {
  if (!additionalImages || additionalImages.length === 0) return null;
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-steis mb-4">Nos réalisations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {additionalImages.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={image} 
              alt={`${title} - réalisation ${index + 1}`}
              className="w-full h-auto object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceImages;

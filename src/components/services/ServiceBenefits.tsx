
import React from 'react';

interface AdditionalContent {
  title: string;
  content: string[];
}

interface ServiceBenefitsProps {
  additionalContent?: AdditionalContent[];
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ additionalContent }) => {
  if (!additionalContent) return null;
  
  return (
    <div className="mt-8">
      {additionalContent.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold text-steis mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.content.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceBenefits;

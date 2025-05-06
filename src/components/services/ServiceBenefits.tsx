
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

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
    <div className="space-y-8">
      {additionalContent.map((section, index) => (
        <Card key={index} className="border-steis-100 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-steis mb-6">{section.title}</h3>
            <ul className="space-y-4">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-700 flex items-start">
                  <CheckCircle className="text-steis-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceBenefits;

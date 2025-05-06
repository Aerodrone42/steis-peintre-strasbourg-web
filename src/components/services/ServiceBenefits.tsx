
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface AdditionalContent {
  title: string;
  content: string[];
  description?: string;
}

interface ServiceBenefitsProps {
  additionalContent?: AdditionalContent[];
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ additionalContent }) => {
  if (!additionalContent) return null;
  
  return (
    <div className="space-y-8">
      {additionalContent.map((section, index) => (
        <Card key={index} className="shadow-lg border-0 overflow-hidden bg-white rounded-xl">
          <div className="bg-steis-600 py-4 px-6">
            <h3 className="text-2xl font-bold text-white">{section.title}</h3>
          </div>
          <CardContent className="p-6">
            {section.description && (
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{section.description}</p>
              </div>
            )}
            <div className="space-y-6">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-steis-500 text-white">
                      <CheckCircle className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="ml-4 text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceBenefits;

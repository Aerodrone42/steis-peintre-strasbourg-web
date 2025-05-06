
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface ServiceDetailProps {
  details: string[];
  longDescription?: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ details, longDescription }) => {
  return (
    <Card className="shadow-lg border-0 overflow-hidden bg-white rounded-xl">
      <div className="bg-steis-600 py-4 px-6">
        <h3 className="text-2xl font-bold text-white">Détails du service</h3>
      </div>
      <CardContent className="p-6">
        {longDescription && (
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">{longDescription}</p>
          </div>
        )}
        <div className="space-y-6">
          {details.map((paragraph, index) => (
            <div
              key={index}
              className="flex items-start"
            >
              <div className="flex-shrink-0 mt-1.5">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-steis-500 text-white">
                  <Check className="h-4 w-4" />
                </span>
              </div>
              <p className="ml-4 text-gray-700 leading-relaxed">{paragraph}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceDetail;

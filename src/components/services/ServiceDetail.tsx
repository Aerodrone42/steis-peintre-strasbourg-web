
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface ServiceDetailProps {
  details: string[];
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ details }) => {
  return (
    <Card className="shadow-md border-steis-100 bg-white">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-steis mb-4">Détails du service</h3>
        <div className="space-y-4">
          {details.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 flex items-start"
            >
              <Check className="text-steis-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>{paragraph}</span>
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceDetail;

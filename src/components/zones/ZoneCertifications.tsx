
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ZoneCertifications: React.FC = () => {
  return (
    <Card className="shadow-lg border-0 overflow-hidden bg-white rounded-xl mb-8">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <img 
            src="/lovable-uploads/bc17b026-5d5c-4d23-9a42-97410971bfa1.png" 
            alt="Certifications RGE Qualibat Garantie Décennale" 
            className="h-24 object-contain"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-steis-700 mb-2">Un artisan certifié à votre service</h3>
            <p className="text-gray-600">
              STEIS Ismaël est un artisan certifié RGE (Reconnu Garant de l'Environnement) 
              et vous offre une garantie décennale sur tous ses travaux.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ZoneCertifications;

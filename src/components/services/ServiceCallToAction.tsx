
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceCallToActionProps {
  serviceTitle: string;
}

const ServiceCallToAction: React.FC<ServiceCallToActionProps> = ({ serviceTitle }) => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-steis mb-4">
          Vous avez un projet de {serviceTitle.toLowerCase()} à <strong>Strasbourg</strong> ou dans les environs ?
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Contactez <strong>STEIS Ismaël</strong>, votre <strong>artisan professionnel</strong> pour obtenir un <strong>devis gratuit</strong> et personnalisé. Notre équipe intervient rapidement dans toute la région <strong>Alsacienne</strong>.
        </p>
        <div className="flex justify-center">
          <Button asChild className="bg-steis hover:bg-steis-600 mr-4">
            <Link to="/contact">Demander un devis</Link>
          </Button>
          <Button asChild variant="outline" className="border-steis text-steis hover:bg-steis hover:text-white">
            <a href="tel:0780233098">Nous appeler</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCallToAction;


import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface ServiceCallToActionProps {
  serviceTitle: string;
}

const ServiceCallToAction: React.FC<ServiceCallToActionProps> = ({ serviceTitle }) => {
  return (
    <div className="mt-16">
      <div className="bg-steis-700 text-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin d'un service de {serviceTitle.toLowerCase()} à <span className="text-white/90">Strasbourg</span> ?
          </h2>
          <p className="mb-6 text-white/80 max-w-3xl mx-auto text-lg">
            Contactez <span className="font-semibold">STEIS Ismaël</span>, votre artisan professionnel pour obtenir un <span className="font-semibold">devis gratuit</span>. 
            Notre équipe intervient rapidement dans toute la région <span className="font-semibold">Alsacienne</span>.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-steis-500 hover:bg-steis-600 text-white font-medium text-base border-0">
              <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-base">
              <a href="tel:0780233098" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                07 80 23 30 98
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCallToAction;

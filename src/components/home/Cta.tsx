
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <section className="py-16 bg-steis text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à transformer votre espace ?</h2>
            <p className="text-lg opacity-90 mb-4">
              Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé. 
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions.
            </p>
            <div className="p-2 bg-white rounded-lg inline-block">
              <img 
                src="/lovable-uploads/24c1361f-b3c3-4c80-86aa-9f0f47b3ef6b.png" 
                alt="Certifications: Urgence 24h/24 & 7j/7, Garantie Décennale, RGE Qualibat, Artisan" 
                className="h-10 w-auto"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-steis hover:bg-gray-100">
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
              <a href="tel:0780233098">Nous appeler</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

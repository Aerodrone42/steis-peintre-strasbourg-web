
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-steis-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-steis-900/80 to-steis-900/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/d9908023-7f21-4e97-aa40-24aa5d561993.png')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      <div className="container relative z-20 py-16 md:py-24 lg:py-32 flex flex-col items-start gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
          Artisan peintre et ravalement à Strasbourg et environs
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Professionnel de la peinture intérieure, extérieure et du ravalement de façade. 
          Qualité et savoir-faire au service de vos projets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild size="lg" className="bg-white text-steis hover:bg-gray-100">
            <Link to="/contact">Demander un devis gratuit</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-steis-50 bg-transparent hover:bg-white hover:text-steis">
            <Link to="/realisations">Voir nos réalisations</Link>
          </Button>
        </div>
        
        <div className="mt-6 bg-white/90 p-3 rounded-lg">
          <img 
            src="/lovable-uploads/24c1361f-b3c3-4c80-86aa-9f0f47b3ef6b.png" 
            alt="Certifications: Urgence 24h/24 & 7j/7, Garantie Décennale, RGE Qualibat, Artisan" 
            className="h-14 md:h-16 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

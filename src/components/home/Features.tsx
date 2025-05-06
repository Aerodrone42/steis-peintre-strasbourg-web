
import React from 'react';
import { Shield, Zap, Hammer } from 'lucide-react';

const features = [
  {
    icon: <Hammer className="h-10 w-10 text-steis" />,
    title: "Artisan qualifié",
    description: "Notre expertise et notre savoir-faire garantissent des travaux de qualité professionnelle pour chaque projet."
  },
  {
    icon: <Shield className="h-10 w-10 text-steis" />,
    title: "Garantie Décennale",
    description: "Travaillez en toute sérénité avec notre garantie décennale qui assure une protection à long terme."
  },
  {
    icon: <Zap className="h-10 w-10 text-steis" />,
    title: "Service rapide",
    description: "Réactivité et efficacité sont nos priorités pour respecter vos délais et minimiser les désagréments."
  }
];

const Features = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">Pourquoi nous choisir ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 rounded-full bg-steis-50 p-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-steis mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

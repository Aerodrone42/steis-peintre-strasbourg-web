
import React from 'react';
import { Link } from 'react-router-dom';

interface ZoneServicesProps {
  city: string;
}

const ZoneServices: React.FC<ZoneServicesProps> = ({ city }) => {
  const services = [
    {
      title: "Travaux de toiture et couverture",
      description: `Nos artisans couvreurs interviennent à ${city} pour tous vos travaux de toiture : réparation, rénovation, entretien, étanchéité, isolation.`,
      items: ["Rénovation de toiture", "Zinguerie", "Charpente", "Nettoyage de toiture"]
    },
    {
      title: "Peinture intérieure et extérieure",
      description: `STEIS Ismaël réalise vos travaux de peinture à ${city}, en intérieur comme en extérieur, pour donner une nouvelle vie à vos espaces.`,
      items: ["Peinture intérieure", "Peinture extérieure", "Peinture boiseries", "Peinture ferronneries"]
    },
    {
      title: "Ravalement et entretien de façade",
      description: `Profitez de notre expertise pour rénover et embellir la façade de votre habitation à ${city} avec des finitions de qualité.`,
      items: ["Crépi façade et muret", "Ravalement de façade", "Nettoyage façade"]
    },
    {
      title: "Services de nettoyage professionnel",
      description: `Redonnez de l'éclat à vos extérieurs grâce à nos services de nettoyage haute pression à ${city} et ses alentours.`,
      items: ["Nettoyage dallage", "Nettoyage gouttière", "Nettoyage muret"]
    }
  ];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-steis-700 mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <ul className="space-y-2">
            {service.items.map((item, i) => (
              <li key={i} className="flex items-center">
                <svg className="w-5 h-5 text-steis-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ZoneServices;

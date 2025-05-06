
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Peinture intérieure",
    description: "Donnez une nouvelle vie à vos espaces intérieurs avec nos services de peinture personnalisés.",
    image: "/lovable-uploads/a93c114d-cbb4-424b-b11e-7c6afdc0e49c.png",
    link: "/services/peinture-interieure"
  },
  {
    title: "Peinture extérieure",
    description: "Protection et esthétique pour vos façades avec des peintures de qualité professionnelle.",
    image: "/lovable-uploads/d807bfda-5149-43bf-b3d1-e0c3db742e85.png",
    link: "/services/peinture-exterieure"
  },
  {
    title: "Ravalement de façade",
    description: "Restaurez et embellissez l'aspect extérieur de votre bâtiment avec notre expertise.",
    image: "/lovable-uploads/f69e56ea-83d1-48ce-ba83-bb0353834d74.png",
    link: "/services/ravalement-de-facade"
  },
  {
    title: "Nettoyage toiture",
    description: "Prolongez la durée de vie de votre toiture avec nos services de nettoyage professionnel.",
    image: "/lovable-uploads/b06aa698-1d6b-4c4c-abba-50e6fba342b6.png",
    link: "/services/nettoyage-toiture"
  },
  {
    title: "Nettoyage façade",
    description: "Redonnez l'éclat d'origine à vos façades avec notre nettoyage haute pression.",
    image: "/lovable-uploads/13552a73-39cc-49c2-ae6a-eaac0d810170.png",
    link: "/services/nettoyage-facade"
  },
  {
    title: "Crépi façade et muret",
    description: "Finition esthétique et durable pour vos façades et murets, adaptée à votre style.",
    image: "/lovable-uploads/01afa244-8bb1-42c3-9ef5-aee37b740513.png",
    link: "/services/crepi-facade-et-muret"
  },
];

const Services = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Nos Services</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Découvrez notre gamme complète de services professionnels pour l'intérieur et l'extérieur de votre propriété.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-steis">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full text-steis border-steis hover:bg-steis hover:text-white">
                  <Link to={service.link} className="flex items-center justify-center gap-2">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-steis hover:bg-steis-600">
            <Link to="/services">Tous nos services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

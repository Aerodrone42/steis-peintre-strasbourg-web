
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  // Services de couverture
  {
    title: "Rénovation de toiture",
    description: "Restaurez et protégez votre maison avec notre service complet de rénovation de toiture.",
    image: "/lovable-uploads/d3f82aee-89ee-4ecb-81fc-b5c30b8be216.png",
    link: "/services/renovation-toiture"
  },
  {
    title: "Zinguerie",
    description: "Services professionnels de gouttières, descentes et habillages en zinc pour une évacuation efficace des eaux.",
    image: "/lovable-uploads/208d4b56-1a0a-4fd8-b504-6f612e7fdaa4.png",
    link: "/services/zinguerie"
  },
  {
    title: "Charpente",
    description: "Réparation, renforcement ou construction de charpentes avec des matériaux de qualité pour une durabilité maximale.",
    image: "/lovable-uploads/867342b0-a34c-487f-956b-48f712d6fa8c.png",
    link: "/services/charpente"
  },
  // Services de peinture
  {
    title: "Peinture intérieure",
    description: "Donnez une nouvelle vie à vos espaces intérieurs avec nos services de peinture personnalisés.",
    image: "/lovable-uploads/a93c114d-cbb4-424b-b11e-7c6afdc0e49c.png",
    link: "/services/peinture-interieure"
  },
  {
    title: "Peinture extérieure",
    description: "Protection et esthétique pour vos façades avec des peintures de qualité professionnelle.",
    image: "/lovable-uploads/2ca76d8e-8e91-4420-ba50-1d828e9d5f54.png",
    link: "/services/peinture-exterieure"
  },
  {
    title: "Crépi façade et muret",
    description: "Finition esthétique et durable pour vos façades et murets, adaptée à votre style.",
    image: "/lovable-uploads/b4ff52f7-d545-4080-8339-c423e68448a4.png",
    link: "/services/crepi-facade-et-muret"
  },
  {
    title: "Ravalement de façade",
    description: "Restaurez et embellissez l'aspect extérieur de votre bâtiment avec notre expertise.",
    image: "/lovable-uploads/33b8c9f6-2dbf-40c1-9e00-e319bb238351.png",
    link: "/services/ravalement-de-facade"
  },
  // Services de nettoyage
  {
    title: "Nettoyage toiture",
    description: "Prolongez la durée de vie de votre toiture avec nos services de nettoyage professionnel.",
    image: "/lovable-uploads/173d0acc-fb3c-4932-af8a-5f07e2739202.png",
    link: "/services/nettoyage-toiture"
  },
  {
    title: "Nettoyage dallage",
    description: "Redonnez l'éclat du neuf à vos terrasses et allées avec notre nettoyage haute pression.",
    image: "/lovable-uploads/40cc1329-cc7c-4293-b455-5eb318530b6c.png",
    link: "/services/nettoyage-dallage"
  },
  {
    title: "Nettoyage façade",
    description: "Redonnez l'éclat d'origine à vos façades avec notre nettoyage haute pression.",
    image: "/lovable-uploads/7f25c02b-0b4a-4cb4-8e56-a4d55a1712a8.png",
    link: "/services/nettoyage-facade"
  },
  {
    title: "Nettoyage gouttière",
    description: "Prévenez les dégâts d'eau avec un entretien régulier de vos gouttières.",
    image: "/lovable-uploads/0fdbff75-2089-458e-bc84-4ba5e49f6e74.png",
    link: "/services/nettoyage-gouttiere"
  },
  {
    title: "Nettoyage muret",
    description: "Éliminez mousses et salissures de vos murets pour un aspect impeccable.",
    image: "/lovable-uploads/52e63c25-14dc-490f-b703-f24f6de0536f.png",
    link: "/services/nettoyage-muret"
  },
  // Autres services
  {
    title: "Peinture boiseries",
    description: "Protégez et embellissez vos boiseries extérieures avec nos traitements spécifiques.",
    image: "/lovable-uploads/1a785ffe-2c5c-4a97-94b6-1d020990e2fa.png",
    link: "/services/peinture-boiseries"
  },
  {
    title: "Peinture ferronneries",
    description: "Préservez vos éléments métalliques de la rouille avec nos peintures spéciales.",
    image: "/lovable-uploads/f69e56ea-83d1-48ce-ba83-bb0353834d74.png",
    link: "/services/peinture-ferronneries"
  },
  {
    title: "Peinture gouttières",
    description: "Harmonisez vos gouttières avec votre façade tout en les protégeant durablement.",
    image: "/lovable-uploads/13552a73-39cc-49c2-ae6a-eaac0d810170.png",
    link: "/services/peinture-gouttieres"
  }
];

const ServicesPage = () => {
  return (
    <Layout>
      <div className="bg-steis-50 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-steis mb-4">Nos Services</h1>
          <p className="text-lg text-gray-700 mb-4 max-w-3xl">
            Découvrez notre gamme complète de services professionnels pour l'intérieur et l'extérieur 
            de votre propriété à Strasbourg et dans les environs.
          </p>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </Layout>
  );
};

export default ServicesPage;

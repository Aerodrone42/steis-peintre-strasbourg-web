
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';

interface ServiceData {
  [key: string]: {
    title: string;
    metaTitle: string;
    description: string;
    longDescription: string[];
    benefits: string[];
    image: string;
    beforeAfterImages?: { before: string; after: string }[];
  };
}

const services: ServiceData = {
  "peinture-interieure": {
    title: "Peinture intérieure",
    metaTitle: "Services de peinture intérieure à Strasbourg et alentours | STEIS Ismaël",
    description: "Transformez votre intérieur avec nos services professionnels de peinture intérieure à Strasbourg et ses environs.",
    longDescription: [
      "Notre service de peinture intérieure transforme vos espaces de vie avec des finitions impeccables et un savoir-faire professionnel.",
      "Que vous souhaitiez rafraîchir une pièce ou rénover entièrement votre intérieur, nous vous accompagnons dans toutes les étapes de votre projet, du conseil en couleurs jusqu'à la réalisation finale.",
      "Nous utilisons des peintures de qualité professionnelle, respectueuses de l'environnement et adaptées à chaque type de surface pour garantir un résultat durable et esthétique."
    ],
    benefits: [
      "Finition impeccable et uniforme",
      "Conseil personnalisé pour le choix des couleurs et des finitions",
      "Préparation soignée des surfaces pour une meilleure adhérence",
      "Protection complète de votre mobilier et de vos sols",
      "Nettoyage complet du chantier après travaux"
    ],
    image: "/lovable-uploads/a93c114d-cbb4-424b-b11e-7c6afdc0e49c.png",
    beforeAfterImages: [
      {
        before: "/lovable-uploads/169bf13c-4417-4be4-8b6e-223a071ee74a.png",
        after: "/lovable-uploads/2027b848-d34e-4aea-8de3-0b5d70b40040.png"
      },
      {
        before: "/lovable-uploads/01afa244-8bb1-42c3-9ef5-aee37b740513.png",
        after: "/lovable-uploads/b812cbec-f3a8-4e7a-9a72-80d3b0018088.png"
      }
    ]
  },
  "peinture-exterieure": {
    title: "Peinture extérieure",
    metaTitle: "Services de peinture extérieure à Strasbourg | STEIS Ismaël",
    description: "Protection et esthétique pour vos façades avec nos services de peinture extérieure dans la région de Strasbourg.",
    longDescription: [
      "Notre service de peinture extérieure protège et embellit votre maison contre les intempéries et le vieillissement prématuré.",
      "Nous réalisons une préparation minutieuse des surfaces (nettoyage, décapage, rebouchage) avant d'appliquer des peintures spécifiquement formulées pour résister aux conditions extérieures.",
      "Nos artisans expérimentés maîtrisent toutes les techniques et tous les supports extérieurs : façades, boiseries, ferronneries et bien plus encore."
    ],
    benefits: [
      "Protection durable contre les intempéries et les UV",
      "Amélioration significative de l'aspect esthétique de votre maison",
      "Valorisation de votre patrimoine immobilier",
      "Prévention des infiltrations et des dégradations",
      "Traitement anti-mousse et anti-algues inclus"
    ],
    image: "/lovable-uploads/169bf13c-4417-4be4-8b6e-223a071ee74a.png"
  },
  "crepi-facade-et-muret": {
    title: "Crépi façade et muret",
    metaTitle: "Application de crépi pour façades et murets à Strasbourg | STEIS Ismaël",
    description: "Des finitions esthétiques et durables pour vos façades et murets avec notre service de crépi professionnel à Strasbourg.",
    longDescription: [
      "Notre service de crépi pour façade et muret offre une solution durable et esthétique pour protéger et embellir vos surfaces extérieures.",
      "Nous maîtrisons différentes techniques d'application et proposons une large gamme de textures et de couleurs pour s'adapter parfaitement à votre style architectural.",
      "Chaque projet débute par une préparation méticuleuse du support, garantissant ainsi une adhérence optimale et une finition impeccable pour des années."
    ],
    benefits: [
      "Protection efficace contre les intempéries",
      "Large choix de textures et de finitions",
      "Isolation thermique améliorée",
      "Masque les imperfections des murs",
      "Durabilité exceptionnelle (15 à 20 ans)"
    ],
    image: "/lovable-uploads/5b5fab09-1852-418b-bc54-bfd2c38d51a6.png"
  },
  "ravalement-de-facade": {
    title: "Ravalement de façade",
    metaTitle: "Ravalement de façade professionnel à Strasbourg | STEIS Ismaël",
    description: "Restaurez et protégez l'aspect extérieur de votre bâtiment avec notre service de ravalement de façade à Strasbourg et environs.",
    longDescription: [
      "Notre service de ravalement de façade comprend le nettoyage, la réparation et la remise en état complète de vos façades pour leur redonner leur éclat d'origine.",
      "Nous traitons tous types de façades (pierre, brique, enduit, béton) avec des techniques adaptées à chaque matériau et à l'état de dégradation.",
      "Au-delà de l'aspect esthétique, nos travaux de ravalement garantissent la pérennité de votre bâtiment en le protégeant efficacement contre les agressions extérieures."
    ],
    benefits: [
      "Diagnostic complet de l'état de votre façade",
      "Traitement des fissures et reprise des joints",
      "Protection durable contre l'humidité et les intempéries",
      "Valorisation immédiate de votre bien immobilier",
      "Amélioration de l'isolation thermique de votre habitation"
    ],
    image: "/lovable-uploads/ffeec714-7554-4b88-b00a-7457b9de52a7.png",
    beforeAfterImages: [
      {
        before: "/lovable-uploads/5b5784ac-182c-4513-9fff-3a5bb5b051ec.png",
        after: "/lovable-uploads/d9908023-7f21-4e97-aa40-24aa5d561993.png"
      }
    ]
  },
  "nettoyage-toiture": {
    title: "Nettoyage toiture",
    metaTitle: "Nettoyage professionnel de toiture à Strasbourg | STEIS Ismaël",
    description: "Prolongez la durée de vie de votre toiture avec notre service de nettoyage professionnel à Strasbourg et dans un rayon de 30 km.",
    longDescription: [
      "Notre service de nettoyage de toiture élimine efficacement mousses, lichens et débris qui s'accumulent au fil du temps et peuvent endommager votre couverture.",
      "Nous utilisons des techniques adaptées à chaque type de toiture (tuiles, ardoises, zinc) et des produits respectueux de l'environnement pour un résultat optimal.",
      "Après le nettoyage, nous appliquons un traitement hydrofuge et anti-mousse qui protégera durablement votre toiture contre les nouvelles formations végétales."
    ],
    benefits: [
      "Élimination complète des mousses, lichens et algues",
      "Prévention des infiltrations d'eau et de l'humidité",
      "Prolongation significative de la durée de vie de votre toiture",
      "Amélioration de l'aspect esthétique de votre maison",
      "Protection durable grâce au traitement hydrofuge"
    ],
    image: "/lovable-uploads/4fd63f45-4671-41df-b9d0-d4af63d597b6.png"
  },
  "nettoyage-facade": {
    title: "Nettoyage façade",
    metaTitle: "Nettoyage professionnel de façades à Strasbourg | STEIS Ismaël",
    description: "Redonnez l'éclat d'origine à vos façades avec notre service de nettoyage haute pression à Strasbourg et dans les environs.",
    longDescription: [
      "Notre service de nettoyage de façade élimine efficacement les salissures, pollutions urbaines, mousses et lichens qui ternissent l'aspect de votre bâtiment.",
      "Nous adaptons nos techniques (nettoyage haute pression, hydrogommage, nettoyage vapeur) en fonction du type de façade et de son état pour garantir un nettoyage efficace sans endommager le support.",
      "En complément du nettoyage, nous proposons un traitement préventif qui retarde l'apparition des mousses et des salissures pour une façade propre plus longtemps."
    ],
    benefits: [
      "Élimination des traces de pollution et des salissures tenaces",
      "Techniques adaptées à chaque matériau (pierre, brique, enduit)",
      "Traitement préventif contre les nouvelles salissures",
      "Valorisation immédiate de votre bien immobilier",
      "Intervention rapide et professionnelle"
    ],
    image: "/lovable-uploads/b06aa698-1d6b-4c4c-abba-50e6fba342b6.png"
  }
};

const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? services[serviceId] : null;
  
  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
    }
  }, [service]);
  
  if (!service) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className="bg-steis-50 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-steis mb-4">{service.title}</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">{service.description}</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {service.longDescription.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
            ))}

            <h2 className="text-2xl font-bold text-steis mt-8 mb-4">Les avantages de notre service</h2>
            <ul className="space-y-2 mb-8">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="h-6 w-6 text-steis flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="mt-4 bg-steis hover:bg-steis-600">
              <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
          </div>

          <div>
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto"
              />
            </div>

            {service.beforeAfterImages && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-steis mb-6">Avant / Après</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.beforeAfterImages.map((item, index) => (
                    <div key={index} className="space-y-4">
                      <div className="relative rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={item.before} 
                          alt={`Avant - ${service.title}`} 
                          className="w-full h-auto"
                        />
                        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 text-sm rounded">
                          Avant
                        </div>
                      </div>
                      <div className="relative rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={item.after} 
                          alt={`Après - ${service.title}`} 
                          className="w-full h-auto"
                        />
                        <div className="absolute top-2 left-2 bg-steis text-white px-2 py-1 text-sm rounded">
                          Après
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicePage;

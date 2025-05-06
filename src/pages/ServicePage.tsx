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
    image: "/lovable-uploads/2ca76d8e-8e91-4420-ba50-1d828e9d5f54.png"
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
    image: "/lovable-uploads/b4ff52f7-d545-4080-8339-c423e68448a4.png"
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
    image: "/lovable-uploads/33b8c9f6-2dbf-40c1-9e00-e319bb238351.png",
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
    image: "/lovable-uploads/173d0acc-fb3c-4932-af8a-5f07e2739202.png"
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
    image: "/lovable-uploads/7f25c02b-0b4a-4cb4-8e56-a4d55a1712a8.png"
  },
  "nettoyage-dallage": {
    title: "Nettoyage dallage",
    metaTitle: "Nettoyage professionnel de dallages à Strasbourg | STEIS Ismaël",
    description: "Redonnez l'éclat du neuf à vos terrasses et allées avec notre service de nettoyage haute pression à Strasbourg.",
    longDescription: [
      "Notre service de nettoyage de dallage redonne vie à vos terrasses, allées et surfaces extérieures en éliminant toutes les salissures incrustées.",
      "Nous intervenons sur tous types de revêtements (pavés, dalles, béton, pierre naturelle) avec des techniques adaptées pour préserver l'intégrité de vos surfaces.",
      "Notre équipe utilise des équipements de nettoyage haute pression professionnels et des produits spécifiques pour un résultat impeccable sans endommager vos revêtements."
    ],
    benefits: [
      "Élimination des mousses, lichens et mauvaises herbes",
      "Suppression des taches tenaces (graisse, huile, rouille)",
      "Restauration de l'aspect originel de vos dalles",
      "Traitement préventif anti-mousse en option",
      "Intervention rapide et résultat immédiat"
    ],
    image: "/lovable-uploads/40cc1329-cc7c-4293-b455-5eb318530b6c.png"
  },
  "nettoyage-gouttiere": {
    title: "Nettoyage gouttière",
    metaTitle: "Nettoyage de gouttières à Strasbourg | STEIS Ismaël",
    description: "Prévenez les dégâts d'eau avec un entretien régulier de vos gouttières dans la région de Strasbourg.",
    longDescription: [
      "Notre service de nettoyage de gouttières permet d'éviter les problèmes d'infiltration et de débordement qui peuvent endommager votre toiture et vos façades.",
      "Nous procédons à l'élimination complète des feuilles, débris et dépôts qui obstruent le bon écoulement des eaux pluviales dans votre système d'évacuation.",
      "En plus du nettoyage, nous vérifions l'état général de vos gouttières, des fixations et des descentes pour identifier d'éventuels problèmes nécessitant une réparation."
    ],
    benefits: [
      "Prévention des débordements et des infiltrations d'eau",
      "Protection de vos murs et fondations contre l'humidité",
      "Prolongation de la durée de vie de vos gouttières",
      "Amélioration de l'efficacité d'évacuation des eaux pluviales",
      "Intervention sécurisée en hauteur par des professionnels"
    ],
    image: "/lovable-uploads/0fdbff75-2089-458e-bc84-4ba5e49f6e74.png"
  },
  "nettoyage-muret": {
    title: "Nettoyage muret",
    metaTitle: "Nettoyage professionnel de murets à Strasbourg | STEIS Ismaël",
    description: "Éliminez mousses et salissures de vos murets pour un aspect impeccable dans la région strasbourgeoise.",
    longDescription: [
      "Notre service de nettoyage de murets redonne un aspect propre et soigné à vos délimitations extérieures en éliminant verdissures et salissures.",
      "Nous intervenons sur tous types de murets (pierre, béton, brique) avec des techniques adaptées à chaque matériau pour un nettoyage en profondeur.",
      "Après le nettoyage, nous proposons un traitement hydrofuge et anti-mousse pour prolonger la propreté de vos murets et les protéger des intempéries."
    ],
    benefits: [
      "Élimination des mousses, lichens et algues incrustés",
      "Nettoyage respectueux du matériau d'origine",
      "Amélioration immédiate de l'aspect esthétique de votre propriété",
      "Protection préventive contre la réapparition des salissures",
      "Préservation de la structure de vos murets"
    ],
    image: "/lovable-uploads/52e63c25-14dc-490f-b703-f24f6de0536f.png"
  },
  "peinture-boiseries": {
    title: "Peinture boiseries",
    metaTitle: "Peinture de boiseries extérieures à Strasbourg | STEIS Ismaël",
    description: "Protégez et embellissez vos boiseries extérieures avec nos traitements spécifiques dans la région de Strasbourg.",
    longDescription: [
      "Notre service de peinture de boiseries extérieures protège volon, volets, portes et autres éléments en bois contre les agressions climatiques et le vieillissement.",
      "Nous préparons minutieusement les surfaces (ponçage, décapage si nécessaire) avant d'appliquer des peintures et lasures de qualité professionnelle conçues pour l'extérieur.",
      "Notre expertise permet de valoriser vos éléments en bois tout en leur assurant une protection durable contre les intempéries, les UV et les variations de température."
    ],
    benefits: [
      "Protection efficace contre l'humidité et les UV",
      "Prévention des attaques de parasites du bois",
      "Large choix de teintes et de finitions",
      "Valorisation esthétique de votre propriété",
      "Allongement de la durée de vie de vos boiseries"
    ],
    image: "/lovable-uploads/1a785ffe-2c5c-4a97-94b6-1d020990e2fa.png"
  },
  "peinture-ferronneries": {
    title: "Peinture ferronneries",
    metaTitle: "Peinture de ferronneries à Strasbourg | STEIS Ismaël",
    description: "Préservez vos éléments métalliques de la rouille avec nos peintures spéciales dans la région strasbourgeoise.",
    longDescription: [
      "Notre service de peinture de ferronneries permet de protéger et d'embellir vos éléments métalliques extérieurs comme les portails, grilles, balcons et garde-corps.",
      "Nous effectuons une préparation complète des surfaces (brossage, ponçage, traitement anti-rouille) avant d'appliquer des peintures spéciales métal de haute qualité.",
      "Notre savoir-faire garantit une finition impeccable et une protection optimale contre la corrosion, les intempéries et les variations de température."
    ],
    benefits: [
      "Protection efficace contre la rouille et la corrosion",
      "Préparation méticuleuse des surfaces métalliques",
      "Large choix de couleurs et de finitions",
      "Résistance accrue aux conditions extérieures",
      "Revalorisation esthétique de vos ferronneries"
    ],
    image: "/lovable-uploads/f69e56ea-83d1-48ce-ba83-bb0353834d74.png"
  },
  "peinture-gouttieres": {
    title: "Peinture gouttières",
    metaTitle: "Peinture de gouttières à Strasbourg | STEIS Ismaël",
    description: "Harmonisez vos gouttières avec votre façade tout en les protégeant durablement à Strasbourg et environs.",
    longDescription: [
      "Notre service de peinture de gouttières permet d'harmoniser vos systèmes d'évacuation d'eau pluviale avec l'esthétique générale de votre façade.",
      "Nous préparons soigneusement les surfaces (nettoyage, dégraissage, traitement anti-corrosion) avant d'appliquer des peintures spécifiques pour gouttières.",
      "Notre intervention apporte non seulement une amélioration esthétique mais aussi une protection supplémentaire contre la rouille et les agressions extérieures."
    ],
    benefits: [
      "Harmonie visuelle avec le reste de votre façade",
      "Protection renforcée contre la corrosion",
      "Allongement de la durée de vie de vos gouttières",
      "Large choix de couleurs pour une personnalisation optimale",
      "Application par des professionnels expérimentés"
    ],
    image: "/lovable-uploads/13552a73-39cc-49c2-ae6a-eaac0d810170.png"
  }
};

interface ServiceDetailProps {
  service: ServiceData[keyof ServiceData];
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  return (
    <div>
      {service.longDescription.map((paragraph, index) => (
        <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
      ))}
    </div>
  );
};

interface ServiceBenefitsProps {
  service: ServiceData[keyof ServiceData];
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ service }) => {
  return (
    <div>
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
  );
};

interface ServiceImagesProps {
  service: ServiceData[keyof ServiceData];
}

const ServiceImages: React.FC<ServiceImagesProps> = ({ service }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg mb-8">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-auto"
      />
    </div>
  );
};

interface BeforeAfterGalleryProps {
  beforeAfterImages?: { before: string; after: string }[];
  title: string;
}

const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ beforeAfterImages, title }) => {
  if (!beforeAfterImages) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-steis mb-6">Avant / Après</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {beforeAfterImages.map((item, index) => (
          <div key={index} className="space-y-4">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={item.before}
                alt={`Avant - ${title}`}
                className="w-full h-auto"
              />
              <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 text-sm rounded">
                Avant
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={item.after}
                alt={`Après - ${title}`}
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
  );
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
            <ServiceDetail service={service} />
            <ServiceBenefits service={service} />
          </div>

          <div>
            <ServiceImages service={service} />
            <BeforeAfterGallery beforeAfterImages={service.beforeAfterImages} title={service.title} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicePage;

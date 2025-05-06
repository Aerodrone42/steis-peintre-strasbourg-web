import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';
import { Construction, Hammer, Wrench } from 'lucide-react';
// Using document.title directly instead of react-helmet for now
// to avoid build issues

interface ServiceDetail {
  title: string;
  description: string;
  image: string;
  details: string[];
}

interface ServiceData {
  [key: string]: ServiceDetail;
}

const services: ServiceData = {
  "renovation-toiture": {
    title: "Rénovation de toiture",
    description: "Restaurez et protégez votre maison avec notre service complet de rénovation de toiture. Nous utilisons des matériaux de qualité pour garantir l'étanchéité et la longévité de votre toit.",
    image: "/lovable-uploads/d3f82aee-89ee-4ecb-81fc-b5c30b8be216.png",
    details: [
      "Diagnostic complet de l'état de votre toiture",
      "Remplacement des tuiles ou ardoises endommagées",
      "Traitement anti-mousse et imperméabilisant",
      "Installation de systèmes d'isolation thermique",
      "Garantie décennale sur tous nos travaux de rénovation"
    ]
  },
  "zinguerie": {
    title: "Zinguerie",
    description: "Nos services de zinguerie professionnels assurent l'évacuation efficace des eaux pluviales et protègent votre maison contre les infiltrations. Gouttières, descentes et habillages en zinc de qualité.",
    image: "/lovable-uploads/208d4b56-1a0a-4fd8-b504-6f612e7fdaa4.png",
    details: [
      "Installation et réparation de gouttières en zinc, cuivre ou aluminium",
      "Fabrication sur mesure d'éléments de zinguerie",
      "Pose de descentes d'eau pluviale",
      "Habillage de lucarnes et de cheminées",
      "Solutions adaptées à tous types de toitures"
    ]
  },
  "charpente": {
    title: "Charpente",
    description: "Confiez la structure de votre toit à nos experts en charpente. Que ce soit pour une réparation, un renforcement ou une nouvelle construction, nous garantissons un travail de qualité et durable.",
    image: "/lovable-uploads/867342b0-a34c-487f-956b-48f712d6fa8c.png",
    details: [
      "Réparation et renforcement de charpentes existantes",
      "Construction de charpentes traditionnelles ou industrielles",
      "Traitement préventif et curatif du bois",
      "Remplacement de pièces de bois endommagées",
      "Solutions sur mesure pour tous types de projets"
    ]
  },
  "peinture-interieure": {
    title: "Peinture intérieure",
    description: "Transformez votre intérieur avec nos services de peinture de qualité. Nous offrons une large gamme de couleurs et de finitions pour personnaliser chaque pièce selon vos goûts.",
    image: "/lovable-uploads/a93c114d-cbb4-424b-b11e-7c6afdc0e49c.png",
    details: [
      "Préparation des surfaces (ponçage, enduit)",
      "Application de sous-couches",
      "Peinture décorative",
      "Conseils personnalisés en couleurs et matériaux"
    ]
  },
  "peinture-exterieure": {
    title: "Peinture extérieure",
    description: "Protégez et embellissez vos façades avec nos solutions de peinture extérieure durables. Nos experts vous conseillent sur les meilleures options pour résister aux intempéries.",
    image: "/lovable-uploads/d807bfda-5149-43bf-b3d1-e0c3db742e85.png",
    details: [
      "Nettoyage et préparation des façades",
      "Application de revêtements protecteurs",
      "Peinture résistante aux UV et aux intempéries",
      "Choix de couleurs adaptées à l'architecture locale"
    ]
  },
  "ravalement-de-facade": {
    title: "Ravalement de façade",
    description: "Redonnez une nouvelle jeunesse à votre bâtiment grâce à nos services de ravalement de façade. Nous traitons les fissures, nettoyons les surfaces et appliquons des finitions de qualité.",
    image: "/lovable-uploads/f69e56ea-83d1-48ce-ba83-bb0353834d74.png",
    details: [
      "Diagnostic de l'état de la façade",
      "Nettoyage haute pression et traitement des mousses",
      "Réparation des fissures et imperfections",
      "Application d'enduits et de peintures de finition"
    ]
  },
  "nettoyage-toiture": {
    title: "Nettoyage toiture",
    description: "Préservez l'intégrité de votre toiture en éliminant les mousses, lichens et autres salissures. Nos techniques de nettoyage respectent les matériaux et prolongent la durée de vie de votre toit.",
    image: "/lovable-uploads/b06aa698-1d6b-4c4c-abba-50e6fba342b6.png",
    details: [
      "Inspection de l'état de la toiture",
      "Démoussage et application de produits anti-mousse",
      "Nettoyage à basse pression pour éviter les dommages",
      "Traitement hydrofuge pour protéger contre l'humidité"
    ]
  },
  "nettoyage-facade": {
    title: "Nettoyage façade",
    description: "Redonnez de l'éclat à vos murs extérieurs grâce à notre service de nettoyage de façade. Nous utilisons des techniques adaptées à chaque type de revêtement pour un résultat impeccable.",
    image: "/lovable-uploads/13552a73-39cc-49c2-ae6a-eaac0d810170.png",
    details: [
      "Analyse du type de façade et des salissures",
      "Nettoyage à haute ou basse pression selon les besoins",
      "Application de produits nettoyants spécifiques",
      "Protection des surfaces environnantes"
    ]
  },
  "crepi-facade-et-muret": {
    title: "Crépi façade et muret",
    description: "Embellissez vos murs et murets avec nos solutions de crépi décoratif. Nous vous proposons différents styles et textures pour personnaliser votre extérieur.",
    image: "/lovable-uploads/01afa244-8bb1-42c3-9ef5-aee37b740513.png",
    details: [
      "Préparation des surfaces",
      "Application de crépi traditionnel ou décoratif",
      "Large choix de couleurs et de finitions",
      "Conseils de professionnels pour un rendu esthétique"
    ]
  },
  "nettoyage-dallage": {
    title: "Nettoyage dallage",
    description: "Redonnez vie à vos dallages extérieurs grâce à notre service de nettoyage spécialisé. Nous éliminons les taches, les mousses et les saletés pour un résultat impeccable.",
    image: "/lovable-uploads/01afa244-8bb1-42c3-9ef5-aee37b740513.png",
    details: [
      "Diagnostic de l'état du dallage",
      "Nettoyage à haute pression",
      "Application de produits anti-mousse",
      "Protection des surfaces environnantes"
    ]
  },
  "nettoyage-gouttiere": {
    title: "Nettoyage gouttière",
    description: "Assurez le bon fonctionnement de vos gouttières en les nettoyant régulièrement. Nous éliminons les feuilles, les branches et autres débris pour éviter les problèmes d'infiltration.",
    image: "/lovable-uploads/01afa244-8bb1-42c3-9ef5-aee37b740513.png",
    details: [
      "Inspection de l'état des gouttières",
      "Nettoyage manuel ou à l'aide d'outils spécifiques",
      "Vérification de l'étanchéité",
      "Réparation des gouttières endommagées"
    ]
  },
  "nettoyage-muret": {
    title: "Nettoyage muret",
    description: "Redonnez de l'éclat à vos murets grâce à notre service de nettoyage spécialisé. Nous éliminons les taches, les mousses et les saletés pour un résultat impeccable.",
    image: "/lovable-uploads/01afa244-8bb1-42c3-9ef5-aee37b740513.png",
    details: [
      "Diagnostic de l'état du muret",
      "Nettoyage à haute pression",
      "Application de produits anti-mousse",
      "Protection des surfaces environnantes"
    ]
  },
  "peinture-boiseries": {
    title: "Peinture boiseries",
    description: "Protégez et embellissez vos boiseries intérieures et extérieures avec nos services de peinture spécialisés. Nous vous proposons une large gamme de couleurs et de finitions pour personnaliser chaque élément selon vos goûts.",
    image: "/lovable-uploads/01afa244-8bb1-42c3-9ef5-aee37b740513.png",
    details: [
      "Préparation des surfaces (ponçage, enduit)",
      "Application de sous-couches",
      "Peinture décorative",
      "Conseils personnalisés en couleurs et matériaux"
    ]
  },
  "peinture-ferronneries": {
    title: "Peinture ferronneries",
    description: "Protégez et embellissez vos ferronneries intérieures et extérieures avec nos services de peinture spécialisés. Nous vous proposons une large gamme de couleurs et de finitions pour personnaliser chaque élément selon vos goûts.",
    image: "/lovable-uploads/01afa244-8bb1-42c3-9ef5-aee37b740513.png",
    details: [
      "Préparation des surfaces (ponçage, enduit)",
      "Application de sous-couches",
      "Peinture décorative",
      "Conseils personnalisés en couleurs et matériaux"
    ]
  },
  "peinture-gouttieres": {
    title: "Peinture gouttières",
    description: "Protégez et embellissez vos gouttières avec nos services de peinture spécialisés. Nous vous proposons une large gamme de couleurs et de finitions pour personnaliser chaque élément selon vos goûts.",
    image: "/lovable-uploads/01afa244-8bb1-42c3-9ef5-aee37b740513.png",
    details: [
      "Préparation des surfaces (ponçage, enduit)",
      "Application de sous-couches",
      "Peinture décorative",
      "Conseils personnalisés en couleurs et matériaux"
    ]
  },
};

interface ServiceDetailProps {
  service: ServiceDetail;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  return (
    <div>
      {service.details.map((paragraph, index) => (
        <p
          key={index}
          className="mb-4 text-gray-700"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

const ServiceBenefits: React.FC<ServiceDetailProps> = ({ service }) => {
  return (
    <div>
      {/* Add your service benefits component here */}
    </div>
  );
};

const ServiceImages: React.FC<ServiceDetailProps> = ({ service }) => {
  return (
    <div>
      {/* Add your service images component here */}
    </div>
  );
};

interface BeforeAfterGalleryProps {
  beforeAfterImages: any[];
  title: string;
}

const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ beforeAfterImages, title }) => {
  return (
    <div>
      {/* Add your before/after gallery component here */}
    </div>
  );
};

interface ServiceAreasProps {
  areas: string[];
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({ areas }) => {
  return (
    <div>
      {/* Add your service areas component here */}
    </div>
  );
};

interface ServiceFaqProps {
  faqItems: any[];
}

const ServiceFaq: React.FC<ServiceFaqProps> = ({ faqItems }) => {
  return (
    <div>
      {/* Add your service FAQ component here */}
    </div>
  );
};

const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? services[serviceId as keyof typeof services] : null;

  useEffect(() => {
    if (service) {
      document.title = `STEIS Ismaël - ${service.title}`;
      // Scroll to top when service page changes
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return <NotFound />;
  }

  return (
    <Layout>
      {/* SEO metadata is being set in the useEffect above */}
      
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
            <div className="mb-8">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-auto rounded-lg shadow-md" 
              />
            </div>
            <ServiceImages service={service} />
            <BeforeAfterGallery beforeAfterImages={[]} title={service.title} />
            <ServiceAreas areas={[]} />
            <ServiceFaq faqItems={[]} />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-steis mb-4">
              Vous avez un projet de {service.title.toLowerCase()} à <strong>Strasbourg</strong> ou dans les environs ?
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
      </div>
    </Layout>
  );
};

export default ServicePage;

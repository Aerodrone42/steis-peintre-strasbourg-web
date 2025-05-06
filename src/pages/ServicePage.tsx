import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';
import { Helmet } from 'react-helmet';

const services = {
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

const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? services[serviceId] : null;

  useEffect(() => {
    if (service) {
      document.title = `STEIS Ismaël - ${service.title}`;
    }
  }, [service]);

  if (!service) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{`STEIS Ismaël - ${service.title}`}</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`STEIS Ismaël - ${service.title}`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:image" content={service.image} />
      </Helmet>
      <div className="container py-12">
        <div className="mb-8">
          <Link to="/services" className="text-steis hover:text-steis-600 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left mr-2"><path d="M12 19V5M5 12l7-7M5 12l7 7"/></svg>
            Retour aux services
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold text-steis mb-4">{service.title}</h1>
            <p className="text-gray-700 mb-6">{service.description}</p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              {service.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <Button asChild className="bg-steis hover:bg-steis-600">
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>
          <div>
            <img src={service.image} alt={service.title} className="w-full rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicePage;

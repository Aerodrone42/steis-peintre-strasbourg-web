
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import NotFound from './NotFound';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Import service data
import { services } from '@/data/services';

// Import service components
import ServiceDetail from '@/components/services/ServiceDetail';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceImages from '@/components/services/ServiceImages';
import BeforeAfterGallery from '@/components/services/BeforeAfterGallery';
import ServiceAreas from '@/components/services/ServiceAreas';
import ServiceFaq from '@/components/services/ServiceFaq';
import ServiceCallToAction from '@/components/services/ServiceCallToAction';

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
      {/* Hero section with service image as background */}
      <div className="relative bg-steis-800">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative bg-gradient-to-b from-steis-900/70 to-steis-900/95 py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">{service.title}</h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">{service.description}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-steis-500 hover:bg-steis-600 text-white border-0">
                  <Link to="/contact">Demander un devis gratuit</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white text-steis-700 hover:bg-white/90 border-white">
                  <a href="tel:0780233098">07 80 23 30 98</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-steis-700 mb-4">Expertise en {service.title.toLowerCase()}</h2>
            <p className="text-lg text-gray-700">
              STEIS Ismaël est votre artisan de confiance en Alsace pour tous vos travaux de {service.title.toLowerCase()}. 
              Notre équipe qualifiée assure des prestations de qualité pour protéger et valoriser votre patrimoine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main content - 7 columns */}
            <div className="lg:col-span-7 space-y-8">              
              <ServiceDetail 
                details={service.details} 
                longDescription={service.longDescription}
              />
              <ServiceBenefits additionalContent={service.additionalContent} />
            </div>
            
            {/* Sidebar - 5 columns */}
            <div className="lg:col-span-5 space-y-8">
              <ServiceImages title={service.title} additionalImages={service.additionalImages} />
              <Card className="shadow-lg border-0 overflow-hidden bg-white rounded-xl">
                <div className="bg-steis-600 py-4 px-6">
                  <h3 className="text-2xl font-bold text-white">Pourquoi nous choisir</h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>STEIS Ismaël</strong> est reconnu pour la qualité et la fiabilité de ses services en {service.title.toLowerCase()}. Notre entreprise artisanale offre:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-steis-600 mr-2">✓</span>
                        <span>Plus de 15 ans d'expérience dans le domaine</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-steis-600 mr-2">✓</span>
                        <span>Des matériaux de première qualité</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-steis-600 mr-2">✓</span>
                        <span>Des artisans qualifiés et minutieux</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-steis-600 mr-2">✓</span>
                        <span>Garantie décennale sur nos travaux</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-steis-600 mr-2">✓</span>
                        <span>Devis détaillé gratuit et sans engagement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-steis-600 mr-2">✓</span>
                        <span>Service client réactif et à l'écoute</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <BeforeAfterGallery beforeAfterImages={[]} title={service.title} />
              <ServiceAreas areas={[]} />
              <ServiceFaq faqItems={[]} />
            </div>
          </div>
          
          <ServiceCallToAction serviceTitle={service.title} />
        </div>
      </div>
    </Layout>
  );
};

// Adding Button import
import { Button } from '@/components/ui/button';

export default ServicePage;

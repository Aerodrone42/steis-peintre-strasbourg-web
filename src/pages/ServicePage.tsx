
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
      {/* Hero section with gradient background */}
      <div className="bg-gradient-to-b from-steis-500 to-steis-700 text-white py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{service.title}</h1>
            <p className="text-lg md:text-xl opacity-95 mb-8 leading-relaxed">{service.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white hover:bg-white/90 text-steis-700 border-0">
                <Link to="/contact">Demander un devis</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="tel:0780233098">Nous appeler</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Hero Image */}
            <Card className="overflow-hidden border-steis-100 shadow-lg">
              <AspectRatio ratio={16/9}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </Card>
            
            <ServiceDetail details={service.details} />
            <ServiceBenefits additionalContent={service.additionalContent} />
          </div>
          
          {/* Sidebar - 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <ServiceImages title={service.title} additionalImages={service.additionalImages} />
            <BeforeAfterGallery beforeAfterImages={[]} title={service.title} />
            <ServiceAreas areas={[]} />
            <ServiceFaq faqItems={[]} />
          </div>
        </div>
        
        <ServiceCallToAction serviceTitle={service.title} />
      </div>
    </Layout>
  );
};

// Adding Button import
import { Button } from '@/components/ui/button';

export default ServicePage;

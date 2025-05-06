
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import NotFound from './NotFound';
import { Construction, Hammer, Wrench } from 'lucide-react';

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
      <div className="bg-steis-50 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-steis mb-4">{service.title}</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">{service.description}</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ServiceDetail details={service.details} />
            <ServiceBenefits additionalContent={service.additionalContent} />
          </div>
          <div>
            <div className="mb-8">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-auto rounded-lg shadow-md" 
              />
            </div>
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

export default ServicePage;

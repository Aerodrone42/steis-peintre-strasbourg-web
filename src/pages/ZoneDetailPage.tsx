
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/layout/Layout';
import ZoneHeader from '@/components/zones/ZoneHeader';
import ZoneCertifications from '@/components/zones/ZoneCertifications';
import ZoneContent from '@/components/zones/ZoneContent';
import ZoneServices from '@/components/zones/ZoneServices';
import ZoneGallery from '@/components/zones/ZoneGallery';
import { allZones } from '@/data/zones';
import ServiceCallToAction from '@/components/services/ServiceCallToAction';

const ZoneDetailPage: React.FC = () => {
  const { zoneId } = useParams<{ zoneId: string }>();
  
  const zone = allZones.find((z) => z.id === zoneId);
  
  if (!zone) {
    return <Navigate to="/zones" />;
  }

  // Pour une meilleure indexation, créer un titre et une description plus précis
  const pageTitle = `STEIS Ismaël | Artisan Peintre & Couvreur à ${zone.city} (${zone.surroundingCities[0]}, ${zone.surroundingCities[1]}...)`;
  const canonicalUrl = `https://www.steis-artisan.fr/zones/${zoneId}`;

  return (
    <Layout>
      {/* Ajout d'un Helmet spécifique pour cette page en plus de celui du ZoneHeader */}
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <ZoneHeader 
        city={zone.city}
        surroundingCities={zone.surroundingCities}
        metaDescription={zone.metaDescription}
        metaKeywords={zone.metaKeywords}
      />
      
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ZoneCertifications />
            <ZoneContent 
              city={zone.city} 
              content={zone.content}
              surroundingCities={zone.surroundingCities} 
            />
            <ZoneGallery city={zone.city} images={zone.images} />
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-steis-700 mb-4">
                Nos secteurs d'intervention autour de {zone.city}
              </h2>
              <ul className="space-y-2">
                {zone.surroundingCities.map((city, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-steis-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    <span>{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <ZoneServices city={zone.city} />
        <ServiceCallToAction serviceTitle={`travaux à ${zone.city}`} />
      </div>
    </Layout>
  );
};

export default ZoneDetailPage;

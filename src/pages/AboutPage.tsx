
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-steis mb-8">À propos de STEIS Ismaël</h1>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-steis-700 mb-4">Notre entreprise</h2>
            <p className="mb-4">
              Fondée sur des valeurs de qualité et de professionnalisme, l'entreprise STEIS Ismaël met son expertise
              au service de vos projets de peinture et de ravalement dans la région de Strasbourg et ses environs.
            </p>
            <p className="mb-4">
              Spécialisés dans les travaux de peinture intérieure, extérieure et le ravalement de façade, 
              nous proposons également des services de nettoyage pour toitures, façades et dallages.
            </p>
            <p className="mb-8">
              Notre engagement : vous offrir un travail soigné et durable, réalisé dans les règles de l'art
              par une équipe qualifiée et passionnée.
            </p>
            
            <h2 className="text-xl font-bold text-steis-700 mb-4">Notre mission</h2>
            <p className="mb-4">
              Nous avons à cœur de transformer et préserver vos espaces de vie et de travail 
              à travers nos prestations de peinture et de ravalement de qualité.
            </p>
            <p className="mb-8">
              Chaque projet est unique et mérite une attention particulière. C'est pourquoi nous vous 
              proposons des solutions personnalisées, adaptées à vos besoins et à votre budget.
            </p>
          </div>
          
          <div className="flex-1">
            <div className="relative h-72 md:h-96 overflow-hidden rounded-lg mb-8">
              <img 
                src="/lovable-uploads/d807bfda-5149-43bf-b3d1-e0c3db742e85.png" 
                alt="Artisan au travail" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-steis-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-steis mb-4">Pourquoi nous faire confiance</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="h-6 w-6 text-steis flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Plus de 10 ans d'expérience dans le secteur</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-6 w-6 text-steis flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Artisans qualifiés et formés aux techniques modernes</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-6 w-6 text-steis flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Garantie décennale pour votre tranquillité</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-6 w-6 text-steis flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Matériaux et produits de qualité professionnelle</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-6 w-6 text-steis flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Respect des délais et du budget établi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-steis hover:bg-steis-600">
            <Link to="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

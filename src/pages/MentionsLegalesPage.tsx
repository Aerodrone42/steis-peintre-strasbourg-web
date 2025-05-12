
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet';

const MentionsLegalesPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Mentions Légales | STEIS ISMAËL - Artisan peintre à Strasbourg</title>
        <meta name="description" content="Mentions légales de STEIS ISMAËL, entreprise de peinture et ravalement à Strasbourg." />
      </Helmet>

      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Informations légales</h2>
            <p className="mb-2">
              <strong>Raison sociale :</strong> STEIS ISMAËL
            </p>
            <p className="mb-2">
              <strong>Forme juridique :</strong> Entreprise individuelle
            </p>
            <p className="mb-2">
              <strong>Adresse :</strong> 21 Rue Victor Schoelcher, 68200 Mulhouse
            </p>
            <p className="mb-2">
              <strong>Téléphone :</strong> 07 80 23 30 98
            </p>
            <p className="mb-2">
              <strong>Email :</strong> ismael.steis95@gmail.com
            </p>
            <p className="mb-2">
              <strong>SIRET :</strong> [Numéro SIRET]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Hébergeur du site</h2>
            <p className="mb-2">
              <strong>Nom de l'hébergeur :</strong> GitHub Pages
            </p>
            <p className="mb-2">
              <strong>Adresse :</strong> 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse de STEIS ISMAËL.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Crédits</h2>
            <p>
              Site réalisé par <a href="https://www.site-internet-sans-abonnement.fr/" target="_blank" rel="noopener noreferrer" className="text-steis hover:underline">Aerodrone multiservices</a>
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default MentionsLegalesPage;

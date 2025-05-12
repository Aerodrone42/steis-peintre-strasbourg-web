
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet';

const PolitiqueConfidentialitePage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Politique de Confidentialité | STEIS ISMAËL - Artisan peintre à Strasbourg</title>
        <meta name="description" content="Politique de confidentialité de STEIS ISMAËL, entreprise de peinture et ravalement à Strasbourg." />
      </Helmet>

      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Collecte des informations personnelles</h2>
            <p className="mb-4">
              Nous collectons des informations lorsque vous remplissez un formulaire sur notre site. Les informations recueillies incluent votre nom, adresse e-mail, numéro de téléphone et message.
            </p>
            <p>
              En outre, nous recevons et enregistrons automatiquement des informations à partir de votre ordinateur et navigateur, y compris votre adresse IP, vos logiciels et votre matériel, et la page que vous demandez.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Utilisation des informations</h2>
            <p>
              Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Répondre à vos demandes de devis ou d'information</li>
              <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
              <li>Améliorer notre site Web</li>
              <li>Améliorer le service client et vos besoins de prise en charge</li>
            </ul>
            <p>
              Vos informations, qu'elles soient publiques ou privées, ne seront ni vendues, ni échangées, ni transférées, ni données à une autre entreprise pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à votre demande.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Protection des informations</h2>
            <p className="mb-4">
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
            </p>
            <p>
              Nous protégeons également vos informations hors ligne. Seuls les employés qui ont besoin d'effectuer un travail spécifique ont accès aux informations personnelles identifiables. Les ordinateurs et serveurs utilisés pour stocker des informations personnelles identifiables sont conservés dans un environnement sécurisé.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Cookies</h2>
            <p>
              Notre site peut utiliser des "cookies" pour améliorer l'expérience de l'utilisateur. Le navigateur web de l'utilisateur place des cookies sur son disque dur pour des besoins d'enregistrement et parfois pour suivre des informations le concernant. L'utilisateur peut choisir de configurer son navigateur pour refuser les cookies, ou pour être alerté lorsque des cookies sont envoyés. Si tel est le cas, notez que certaines parties du site peuvent ne pas fonctionner correctement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Consentement</h2>
            <p>
              En utilisant notre site, vous consentez à notre politique de confidentialité.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PolitiqueConfidentialitePage;

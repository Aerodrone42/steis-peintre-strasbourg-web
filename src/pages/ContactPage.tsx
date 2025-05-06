
import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import Map from '@/components/contact/Map';

const ContactPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-steis mb-8 text-center">Contactez-nous</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Vous avez un projet de peinture ou de ravalement ? Contactez-nous pour un devis gratuit
            ou pour toute information complémentaire. Notre équipe se fera un plaisir de vous répondre rapidement.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
          
          <Map />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

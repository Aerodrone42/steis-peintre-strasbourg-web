
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import Cta from '@/components/home/Cta';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Cta />
    </Layout>
  );
};

export default Index;

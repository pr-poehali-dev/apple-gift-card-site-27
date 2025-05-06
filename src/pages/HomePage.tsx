
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ProductsPreview from '@/components/home/ProductsPreview';
import Testimonials from '@/components/home/Testimonials';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <ProductsPreview />
      <Testimonials />
    </Layout>
  );
};

export default HomePage;

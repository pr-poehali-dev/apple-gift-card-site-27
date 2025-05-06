
import React from 'react';
import Layout from '@/components/layout/Layout';
import GiftCard from '@/components/products/GiftCard';
import { giftCards } from '@/data/giftCards';

const ProductsPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-apple-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-apple-dark">Подарочные карты Apple</h1>
            <p className="mt-4 text-lg text-apple-gray max-w-2xl mx-auto">
              Выберите идеальный номинал для своего подарка
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <GiftCard 
                key={card.id}
                id={card.id}
                title={card.title}
                amount={card.amount}
                imageSrc={card.imageSrc}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;


import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { giftCards } from '@/data/giftCards';
import GiftCard from '@/components/products/GiftCard';

const ProductsPreview: React.FC = () => {
  // Показываем только 3 карты для предпросмотра
  const previewCards = giftCards.slice(0, 3);
  
  return (
    <section className="py-20 bg-apple-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-apple-dark">Подарочные карты Apple</h2>
          <p className="mt-4 text-lg text-apple-gray max-w-2xl mx-auto">
            Выберите подходящий номинал и порадуйте близких
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewCards.map((card) => (
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
        
        <div className="mt-12 text-center">
          <Link to="/products">
            <Button size="lg" className="bg-apple-blue hover:bg-blue-600 text-white rounded-full px-8">
              Смотреть все карты
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;

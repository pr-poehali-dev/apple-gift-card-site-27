
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 opacity-30" />
      <img 
        src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2215&auto=format&fit=crop" 
        alt="Apple Gift Card" 
        className="w-full h-[80vh] object-cover"
      />
      
      <div className="absolute inset-0 flex items-center z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Подарите яркие эмоции с Apple Gift Card
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-xl">
              Подарите близким возможность выбрать то, что они действительно хотят из мира Apple
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-white text-apple-dark hover:bg-gray-100 rounded-full px-8">
                  Купить сейчас
                </Button>
              </Link>
              <Link to="/how-to-use">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-8">
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

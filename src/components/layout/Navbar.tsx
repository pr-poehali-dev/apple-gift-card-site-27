import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <header className="w-full backdrop-blur-md bg-white/90 border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Icon name="Apple" className="h-8 w-8 text-apple-dark" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-900 hover:text-apple-blue transition-colors">
            Главная
          </Link>
          <Link to="/products" className="text-sm font-medium text-gray-900 hover:text-apple-blue transition-colors">
            Подарочные карты
          </Link>
          <Link to="/how-to-use" className="text-sm font-medium text-gray-900 hover:text-apple-blue transition-colors">
            Как использовать
          </Link>
        </div>
        
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
          <Link to="/products">
            <Button className="hidden md:flex bg-apple-blue hover:bg-blue-600 text-white rounded-full px-4">
              Купить сейчас
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
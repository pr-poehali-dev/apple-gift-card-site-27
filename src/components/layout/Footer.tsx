
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-apple-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-4">Магазин</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/products" className="text-sm text-gray-600 hover:text-apple-blue transition-colors">
                    Подарочные карты
                  </Link>
                </li>
                <li>
                  <Link to="/how-to-use" className="text-sm text-gray-600 hover:text-apple-blue transition-colors">
                    Как использовать
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-4">О компании</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-apple-blue transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-apple-blue transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-4">Правовая информация</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-apple-blue transition-colors">
                    Условия использования
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-apple-blue transition-colors">
                    Конфиденциальность
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Copyright © {new Date().getFullYear()} Apple Gift Cards. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import Icon from '@/components/ui/Icon';

const features = [
  {
    icon: 'Gift',
    title: 'Универсальный подарок',
    description: 'Идеальный подарок для любителей техники Apple и цифрового контента.'
  },
  {
    icon: 'CreditCard',
    title: 'Разные номиналы',
    description: 'Выбирайте из различных сумм в зависимости от вашего бюджета.'
  },
  {
    icon: 'ShoppingBag',
    title: 'Для любых покупок',
    description: 'Карты можно использовать для покупки устройств, приложений, игр, подписок и многого другого.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-apple-dark">Почему Apple Gift Cards?</h2>
          <p className="mt-4 text-lg text-apple-gray max-w-2xl mx-auto">
            Откройте мир возможностей с подарочными картами Apple
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-apple-light rounded-2xl p-8 transition-all hover:shadow-md">
              <div className="h-12 w-12 rounded-full bg-apple-blue flex items-center justify-center mb-6">
                <Icon name={feature.icon} className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-apple-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

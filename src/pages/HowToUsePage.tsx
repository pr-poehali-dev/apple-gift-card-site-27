import React from 'react';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/Icon';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: 'CreditCard',
    title: 'Выберите номинал',
    description: 'Определитесь с суммой подарочной карты в зависимости от повода и ваших предпочтений.'
  },
  {
    icon: 'ShoppingCart',
    title: 'Оформите заказ',
    description: 'Заполните форму заказа и выберите удобный способ оплаты.'
  },
  {
    icon: 'Mail',
    title: 'Получите код',
    description: 'После оплаты вы получите код подарочной карты на указанный email.'
  },
  {
    icon: 'Gift',
    title: 'Подарите или используйте',
    description: 'Отправьте код близкому человеку или активируйте его в своем Apple ID.'
  }
];

const HowToUsePage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-apple-dark">Как использовать подарочную карту Apple</h1>
            <p className="mt-4 text-lg text-apple-gray max-w-2xl mx-auto">
              Простая инструкция по покупке и активации Apple Gift Card
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="bg-apple-light rounded-2xl p-8 transition-all hover:shadow-md relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-blue mb-6">
                  <Icon name={step.icon} className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 h-8 w-8 flex items-center justify-center rounded-full bg-apple-dark text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-apple-gray">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-apple-light rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">Как активировать подарочную карту в Apple ID</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-apple-blue flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Откройте App Store</h3>
                  <p className="text-apple-gray">На вашем устройстве Apple откройте приложение App Store.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-apple-blue flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Нажмите на свой профиль</h3>
                  <p className="text-apple-gray">В правом верхнем углу нажмите на иконку вашего профиля.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-apple-blue flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Выберите "Погасить подарочную карту или код"</h3>
                  <p className="text-apple-gray">Прокрутите вниз до опции "Погасить подарочную карту или код" и нажмите на нее.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-apple-blue flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Введите код подарочной карты</h3>
                  <p className="text-apple-gray">Введите или отсканируйте код с вашей подарочной карты и нажмите "Погасить".</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Icon name="Info" className="h-5 w-5 text-apple-blue" />
                Важно знать
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-apple-gray">
                <li>Подарочные карты не подлежат возврату и обмену</li>
                <li>Средства на счете Apple ID не могут быть переведены другому пользователю</li>
                <li>Подарочные карты можно использовать для покупок в App Store, iTunes Store, Apple Books и для оплаты подписок Apple</li>
                <li>Срок действия подарочных карт не ограничен</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Готовы приобрести подарочную карту?</h2>
            <Link to="/products">
              <Button size="lg" className="bg-apple-blue hover:bg-blue-600 text-white rounded-full px-8">
                Перейти к покупке
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowToUsePage;
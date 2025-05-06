
import React from 'react';
import Icon from '@/components/ui/Icon';

const testimonials = [
  {
    quote: "Подарил маме на день рождения. Она была в восторге, что смогла сама выбрать приложения для своего iPad.",
    author: "Александр К.",
    rating: 5
  },
  {
    quote: "Идеальный подарок для племянника. Он большой фанат игр на iPhone, а теперь может купить все, что хочет.",
    author: "Елена М.",
    rating: 5
  },
  {
    quote: "Очень удобно, что карту можно использовать для любых покупок в экосистеме Apple. Рекомендую!",
    author: "Дмитрий В.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-apple-dark">Что говорят наши клиенты</h2>
          <p className="mt-4 text-lg text-apple-gray max-w-2xl mx-auto">
            Отзывы от тех, кто уже порадовал своих близких подарочными картами Apple
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-apple-light rounded-2xl p-8 transition-all hover:shadow-md relative">
              <div className="absolute -top-4 right-8 text-apple-blue">
                <Icon name="Quote" className="h-8 w-8" />
              </div>
              <p className="text-apple-dark mb-6 pt-4">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">{testimonial.author}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

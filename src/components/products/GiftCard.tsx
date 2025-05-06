
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

export interface GiftCardProps {
  id: string;
  title: string;
  amount: number;
  imageSrc: string;
  description?: string;
}

const GiftCard: React.FC<GiftCardProps> = ({ title, amount, imageSrc, description }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={imageSrc} 
            alt={`${title} - ${amount} ₽`} 
            className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
            <p className="text-white/80 text-sm">{description}</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-2xl font-bold mt-1">{amount.toLocaleString()} ₽</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-apple-light flex items-center justify-center">
              <Icon name="Gift" className="h-5 w-5 text-apple-dark" />
            </div>
          </div>
          <Button className="w-full bg-apple-blue hover:bg-blue-600 transition-colors rounded-full">
            Купить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GiftCard;

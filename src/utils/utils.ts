import { Cities } from '../store/city/const';
import { Offer, Offers } from '../types/types';

export const getOffersGroupByCity = (offers: Offers) =>
  offers.reduce((result: {[name: string]: Offers}, offer: Offer) => {
  // Если свойство не создано, создаем его.
    if (!Object.prototype.hasOwnProperty.call(result, offer.city.name)){
      result[offer.city.name] = [];
    }
    // Добавление значения в объект
    result[offer.city.name].push(offer);
    // Возвращение объекта для следующего шага
    return result;
  }, {});

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export const getRandomCity = () => Object.values(Cities)[getRandomInt(Object.values(Cities).length)];

export const ucFirst = (str: string) => {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
};

export const calcStarsWidthPercent = (rating: number): string => `${Math.round(rating * 2) * 10}%`;

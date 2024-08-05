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

import { mockOffersInfo } from '../mocks/offers-info';
import { Offer, OfferInfo, Offers } from '../types/types';

// export const getFavoriteOffers = (): Offers => {
//   const res = mockOffers.filter((offer) => offer.isFavorite);
//   return res;
// };

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

export const getOfferInfoById = (id: OfferInfo['id']): OfferInfo | undefined => mockOffersInfo.find((element) => element.id === id);

//export const getOfferById = (id: Offer['id']) => mockOffers.find((element) => element.id === id);

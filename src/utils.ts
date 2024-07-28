import { mockOffers } from './mocks/offers';
import { mockOffersInfo } from './mocks/offers-info';
import { OfferInfo, Offers } from './types';

export const getFavoriteOffers = (): Offers => mockOffers.filter((offer) => offer.isFavorite).sort((offer1, offer2) => (offer1.city.name > offer2.city.name) ? 1 : -1);

export const getOffersByCity = (offers: Offers) => {
  const offersByCity: {city: string; offers: Offers}[] = [];
  let cityName: string = '';
  offers.map((offer) => {
    if (offer.city.name !== cityName) {
      offersByCity.push({city: offer.city.name, offers: offers.filter((item) => item.city.name === offer.city.name)});
    }
    cityName = offer.city.name;
  });
  return offersByCity;
};

export const getOfferInfoById = (id: OfferInfo['id']): OfferInfo | undefined => mockOffersInfo.find((element) => element.id === id);

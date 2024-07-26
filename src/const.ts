
export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Stars = [5, 4, 3, 2, 1];

export enum CardDisplayMode {
  city,
  favorite
}

export const CardSettings = {
  [CardDisplayMode.city]:
    {
      cardClass: 'cities__card place-card',
      imgDivClass: 'cities__image-wrapper place-card__image-wrapper',
      imgWidth: '260',
      imgHeight: '200',
      infoClass: 'place-card__info',
    },
  [CardDisplayMode.favorite]:
    {
      cardClass: 'favorites__card place-card',
      imgDivClass: 'favorites__image-wrapper place-card__image-wrapper',
      imgWidth: '150',
      imgHeight: '110',
      infoClass: 'favorites__card-info place-card__info',
    },
};

export const CardListClass = {
  [CardDisplayMode.city]: 'cities__places-list places__list tabs__content',
  [CardDisplayMode.favorite]: 'favorites__places'
};

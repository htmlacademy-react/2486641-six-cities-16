import { Cities } from './store/city/const';
import { City } from './types/types';

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

export const Stars = [
  {
    value: 5,
    title: 'perfect'
  },
  {
    value: 4,
    title: 'good'
  },
  {
    value: 3,
    title: 'not bad'
  },
  {
    value: 2,
    title: 'badly'
  },
  {
    value: 1,
    title: 'terribly'
  },
] as const;

export enum CardDisplayMode {
  Main,
  Favorite,
  Near
}

export const CardSettings = {
  [CardDisplayMode.Main]:
    {
      cardClass: 'cities__card place-card',
      imgDivClass: 'cities__image-wrapper place-card__image-wrapper',
      imgWidth: '260',
      imgHeight: '200',
      infoClass: 'place-card__info',
    },
  [CardDisplayMode.Favorite]:
    {
      cardClass: 'favorites__card place-card',
      imgDivClass: 'favorites__image-wrapper place-card__image-wrapper',
      imgWidth: '150',
      imgHeight: '110',
      infoClass: 'favorites__card-info place-card__info',
    },
  [CardDisplayMode.Near]:
    {
      cardClass: 'near-places__card place-card',
      imgDivClass: 'near-places__image-wrapper place-card__image-wrapper',
      imgWidth: '260',
      imgHeight: '200',
      infoClass: 'place-card__info',
    },
} as const;

export const CardListClass = {
  [CardDisplayMode.Main]: 'cities__places-list places__list tabs__content',
  [CardDisplayMode.Favorite]: 'favorites__places',
  [CardDisplayMode.Near]: 'near-places__list places__list',
} as const;

export enum LogoDisplayMode {
  Header,
  Footer
}

export const LogoSettings = {
  [LogoDisplayMode.Header]:
    {
      linkClass: 'header__logo-link',
      imgClass: 'header__logo',
      imgWidth: '81',
      imgHeight: '41',
    },
  [LogoDisplayMode.Footer]:
    {
      linkClass: 'footer__logo-link',
      imgClass: 'footer__logo',
      imgWidth: '64',
      imgHeight: '33',
    },
} as const;

export enum BookmarkButtonDisplayMode {
  PlaceCard,
  Offer
}

export const BookmarkButtonSettings = {
  [BookmarkButtonDisplayMode.Offer]: {
    classPrefix: 'offer',
    imgWidth: 31,
    imgHeight: 33
  },
  [BookmarkButtonDisplayMode.PlaceCard]: {
    classPrefix: 'place-card',
    imgWidth: 18,
    imgHeight: 19
  },
} as const;

export enum MapUrl {
  MarkerDefault = '../public/img/pin.svg',
  MarkerCurrent = '../public/img/pin-active.svg',
  Template = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
}

export const DefaultLocation = {
  Latitude: 0,
  Longitude: 0,
} as const;

export enum Sort {
  Popular = 'Popular',
  PriceAsc = 'Price: low to high',
  PriceDesc = 'Price: high to low',
  TopRating = 'Top rated first'
}

export const DefaultCity: City = Cities['Paris'];

export const PageClass = {
  Main: 'page--gray page--main',
  Login: 'page--gray page--login',
  FavoritesEmpty: 'page--favorites-empty'
} as const;

export const PASSWORD_PATTERN = '^(?=.*[0-9])(?=.*[A-Za-z]).*$';

export enum AppSettings {
  OfferImageCount = 6,
  OfferCommentsCount = 10,
  DefaultRating = 0,
  NearOffersCount = 3,
}

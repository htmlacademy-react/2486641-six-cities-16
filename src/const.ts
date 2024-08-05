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
  {value: 5,
    title: 'perfect'
  },
  {value: 4,
    title: 'good'
  },
  {value: 3,
    title: 'not bad'
  },
  {value: 2,
    title: 'badly'
  },
  {value: 1,
    title: 'terribly'
  },
];

export enum CardDisplayMode {
  city,
  favorite,
  near
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
  [CardDisplayMode.near]:
    {
      cardClass: 'near-places__card place-card',
      imgDivClass: 'near-places__image-wrapper place-card__image-wrapper',
      imgWidth: '260',
      imgHeight: '200',
      infoClass: 'place-card__info',
    },
};

export const CardListClass = {
  [CardDisplayMode.city]: 'cities__places-list places__list tabs__content',
  [CardDisplayMode.favorite]: 'favorites__places',
  [CardDisplayMode.near]: 'near-places__list places__list',
};


export enum LogoDisplayMode {
  header,
  footer
}

export const LogoSettings = {
  [LogoDisplayMode.header]:
    {
      linkClass: 'header__logo-link',
      imgClass: 'header__logo',
      imgWidth: '81',
      imgHeight: '41',
    },
  [LogoDisplayMode.footer]:
    {
      linkClass: 'footer__logo-link',
      imgClass: 'footer__logo',
      imgWidth: '64',
      imgHeight: '33',
    },
};

export enum BookmarkButtonDisplayMode {
  placeCard,
  offer
}

export const BookmarkButtonSettings = {
  [BookmarkButtonDisplayMode.offer]: {
    classPrefix: 'offer',
    imgWidth: 31,
    imgHeight: 33
  },
  [BookmarkButtonDisplayMode.placeCard]: {
    classPrefix: 'place-card',
    imgWidth: 18,
    imgHeight: 19
  },
};

export enum MapUrl {
  MARKER_DEFAULT = '../public/img/pin.svg',
  MARKER_CURRENT = '../public/img/pin-active.svg',
  TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
}

export const DefaultLocation = {
  latitude: 0,
  longitude: 0,
};

export enum Sort {
  popular = 'Popular',
  priceAsc = 'Price: low to high',
  priceDesc = 'Price: high to low',
  topRating = 'Top rated first'
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  NearOffers = '/offers/{offerId}/nearby',
  Comments = '/comments/',
}

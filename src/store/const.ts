import { Cities } from './city/const';

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  NearOffers = '/offers/{offerId}/nearby',
  Comments = '/comments/',
  Favorite = '/favorite/',
}

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
  City = 'CITY',
  Comments = 'COMMENTS',
}

export const DefaultCity = Cities['Paris'];

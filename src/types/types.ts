type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type Offers = Offer[]

type Host = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type OfferInfo = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  images: string[];
  goods: string[];
  city: City;
  location: Location;
  host: Host;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
}

export type OffersInfo = OfferInfo[]

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Comment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

export type Comments = Comment[]

export type UserData = User & {
  email: string;
  token: string;
};

export type AuthData = {
  login: string;
  password: string;
};

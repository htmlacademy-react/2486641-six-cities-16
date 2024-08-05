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

export type OfferInfo = Omit<Offer, 'previewImage'> & {
  description: string;
  images: string[];
  goods: string[];
  host: Host;
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

export type OfferLocation = {
  id: string;
  location: Location;
};

export type CommentData = {
  offerId: Offer['id'];
  comment: Comment['comment'];
  rating: Comment['rating'];
};

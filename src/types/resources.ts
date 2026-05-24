export type PeopleServed = 'all' | 'woman' | 'men' | 'youth' | 'senior' | 'family';

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface Shower {
  id: number;
  name: string;
  phone: string;
  address: string;
  open: string;
  info: string;
  peopleServed: PeopleServed;
  coords?: GeoPoint;
}

export interface FoodBank {
  id: number;
  name: string;
  address: string;
  phone: string;
  website: string;
  distributionHours: string[];
  areaServed: string;
  requirements?: string;
  commodity: boolean;
  commodityDistribution?: string | string[];
  commodityDistributionDate?: string;
  homeDelivery?: string;
  additionalInformation?: string | string[];
  lastUpdate: string;
  coords?: GeoPoint;
}

export interface FreeMealApiRow {
  name_of_program?: string;
  meal_served?: string;
  day_time?: string;
  location?: string;
  people_served?: string;
  location_1?: {
    latitude?: string;
    longitude?: string;
    human_address?: string;
  };
}

export interface FreeMeal {
  id: string;
  name: string;
  mealServed?: string;
  dayTime?: string;
  location?: string;
  peopleServed?: string;
  coords?: GeoPoint;
}

export type FetchState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'empty' }
  | { status: 'error'; error: Error };

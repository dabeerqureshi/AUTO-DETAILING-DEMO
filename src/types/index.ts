export type Currency = 'USD' | 'CAD';

export type VehicleCategory = 'sedan' | 'suv_mid' | 'suv_large' | 'exotic';

export interface VehicleOption {
  id: VehicleCategory;
  name: string;
  description: string;
  multiplier: number;
  iconName: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  basePriceUSD: number;
  basePriceCAD: number;
  estimatedTime: string;
  description: string;
  features: string[];
  recommendedFor: string;
  category: 'interior' | 'exterior' | 'complete' | 'ceramic';
}

export interface ServiceAddon {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  priceCAD: number;
  popular?: boolean;
  timeEstimate: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  country: 'USA' | 'CAN';
  car: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
  verified: boolean;
  avatarUrl: string;
}

export interface LocationHub {
  city: string;
  stateOrProv: string;
  country: 'USA' | 'CAN';
  coverageRadius: string;
  phone: string;
  isStudio: boolean;
  isMobile: boolean;
}


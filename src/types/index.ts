// Types pour le site PlombiPro

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  includes: string[];
  priceRange?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  problem: string;
}

export interface Realisation {
  id: string;
  title: string;
  city: string;
  duration: string;
  type: "plomberie" | "chauffage" | "urgence" | "renovation";
  typeLabel: string;
  imageBefore: string;
  imageAfter: string;
  description: string;
}

export interface Tarif {
  id: string;
  service: string;
  priceRange: string;
  details?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  serviceType: string;
  description: string;
  preferredDate?: string;
  budget?: string;
}

export interface UrgencyFormData {
  name: string;
  phone: string;
  city: string;
  urgencyType: string;
}

export interface NavLink {
  href: string;
  label: string;
}

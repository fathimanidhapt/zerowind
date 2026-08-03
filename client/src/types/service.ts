export interface Specification {
  iconName: string;
  title: string;
}

export interface Service {
  id: string;
  name: string;
  title: string;
  tagline: string;
  excerpt: string;
  description: string;
  image: string;
  videoUrl?: string;
  specifications: Specification[];
  techDetails: string[];
}

export interface Feature {
  id: string;
  name: string;
  title: string;
  tagline: string;
  excerpt: string;
  description: string;
  videoUrl: string;
  details: string[];
  image: string;
}

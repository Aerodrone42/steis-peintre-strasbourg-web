
export interface ServiceData {
  [key: string]: Service;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  details: string[];
  longDescription?: string;
  additionalImages?: string[];
  beforeAfterImages?: BeforeAfterImage[];
  portfolioImages?: PortfolioImage[];
  additionalContent?: AdditionalContent[];
}

export interface AdditionalContent {
  title: string;
  description: string;
  content: string[];
}

export interface BeforeAfterImage {
  before: string;
  after: string;
  description?: string;
}

export interface PortfolioImage {
  src: string;
  alt: string;
  description?: string;
}

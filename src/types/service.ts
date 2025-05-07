
export interface AdditionalContentItem {
  title: string;
  description: string;
  content: string[];
}

export interface PortfolioImage {
  src: string;
  alt: string;
  description?: string;
}

export interface BeforeAfterImage {
  before: string;
  after: string;
  description?: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  details: string[];
  longDescription?: string;
  additionalImages?: string[];
  additionalContent?: AdditionalContentItem[];
  portfolioImages?: PortfolioImage[];
  beforeAfterImages?: BeforeAfterImage[];
}

export interface ServiceData {
  [key: string]: Service;
}

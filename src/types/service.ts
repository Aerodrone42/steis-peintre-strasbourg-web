
export interface ServiceAdditionalContent {
  title: string;
  content: string[];
  description?: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  details: string[];
  additionalImages?: string[];
  additionalContent?: ServiceAdditionalContent[];
}

export interface ServiceData {
  [key: string]: ServiceDetail;
}

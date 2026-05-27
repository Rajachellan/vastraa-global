export interface ApiDesign {
  _id: string;
  id: string;
  slug?: string;
  title: string;
  name: string;
  relatedDesigns?: ApiDesign[];
  description?: string;
  image: string;
  images?: string[];
  style: string;
  category: string;
  designer?: string;
  resolution?: string;
  format?: string;
  fabricType?: string;
  printSpecs?: string;
  gsm?: string;
  usage?: string;
  care?: string;
  moq?: string;
  printing?: string;
  status?: string;
  defaultFabricId?: string;
  suggestedFabrics?: string[];
}

export interface FabricItem {
  _id: string;
  id: string;
  name: string;
  description: string;
  image: string;
  images: string[];
  type: string;
  gsm: string;
  specs: string;
  usage: string;
  care: string;
  printing: string;
  moq: string;
  customization: string;
  categoryId?: string | { _id: string; name: string; slug: string };
}

export interface FabricCategory {
  id: string;
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  items: FabricItem[];
}

export interface DesignStyle {
  _id: string;
  name: string;
  slug: string;
  sortOrder?: number;
  status?: string;
}

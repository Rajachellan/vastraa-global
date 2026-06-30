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
  slug?: string;
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

export interface FabricPageContent {
  hero?: {
    title?: string;
    highlight?: string;
    subtitle?: string;
    image?: string;
  };
  meta?: { title?: string; description?: string };
  sections?: Array<{
    id?: string;
    heading: string;
    highlight?: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
  typeCards?: Array<{ title: string; description: string }>;
  uses?: string[];
  features?: string[];
  trends?: string[];
  bulkOrders?: string[];
  whyChoose?: Array<{ title: string; description: string }>;
  popularSearches?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  technicalCards?: Array<{ title: string; items: string[] }>;
}

export interface FabricCategory {
  id: string;
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  video?: string;
  videoHls?: string;
  pageContent?: FabricPageContent;
  items: FabricItem[];
}

export interface DesignStyle {
  _id: string;
  name: string;
  slug: string;
  sortOrder?: number;
  status?: string;
}

export interface BlogPost {
  _id: string;
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image?: string;
  author?: string;
  tags?: string[];
  status?: "draft" | "published";
  readTime?: string;
  createdAt: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonical?: string;
  };
}

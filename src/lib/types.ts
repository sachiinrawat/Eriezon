export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  category: string;
  activeIngredient?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productImage?: any; // typed as any here, but we will suppress if needed, or use a proper asset type
  packSizes?: string[];
}

export interface DosageRow {
  crop?: string;
  pest?: string;
  dosage?: string;
  water?: string;
}

export interface ProductDetail extends Product {
  description?: string;
  modeOfAction?: string;
  dosageTable?: DosageRow[];
  brochureUrl?: string;
}

export interface Crop {
  _id: string;
  name: string;
  slug: string;
  scientificName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cropImage?: any;
  description?: string;
  recommendedProducts?: Product[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  calendar?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commonPests?: any[];
}

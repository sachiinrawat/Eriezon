import { groq } from "next-sanity";

// Fetch all products with their category details
export const allProductsQuery = groq`*[_type == "product"] {
  _id,
  name,
  "slug": slug.current,
  "category": category->title,
  activeIngredient,
  productImage,
  packSizes
}`;

// Fetch a single product by slug
export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  "category": category->title,
  activeIngredient,
  description,
  modeOfAction,
  productImage,
  packSizes,
  dosageTable,
  "brochureUrl": brochure.asset->url
}`;

// Fetch all categories
export const allCategoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  "slug": slug.current,
  description
}`;

// Fetch products by category slug
export const productsByCategoryQuery = groq`*[_type == "product" && category->slug.current == $categorySlug] {
  _id,
  name,
  "slug": slug.current,
  "category": category->title,
  activeIngredient,
  productImage,
  packSizes
}`;

// Fetch all crops
export const allCropsQuery = groq`*[_type == "crop"] {
  _id,
  name,
  "slug": slug.current,
  cropImage,
  description
}`;

// Fetch a single crop by slug, dereferencing recommended products
export const cropBySlugQuery = groq`*[_type == "crop" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  cropImage,
  description,
  recommendedProducts[]-> {
    _id,
    name,
    "slug": slug.current,
    "category": category->title,
    activeIngredient,
    productImage
  }
}`;

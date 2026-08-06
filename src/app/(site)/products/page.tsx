import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allProductsQuery, allCategoriesQuery } from "@/sanity/lib/queries";
import PageHero from "@/components/common/PageHero";
import ProductList from "@/components/products/ProductList";
import { Category, Product } from "@/lib/types";

export const metadata: Metadata = {
  title: "Our Products | Eriezon Crop Science India",
  description: "Explore our wide range of ISO certified crop protection solutions including herbicides, insecticides, and fungicides.",
};

async function getProducts(): Promise<Product[]> {
  return await client.fetch(allProductsQuery).catch(() => []);
}

async function getCategories(): Promise<Category[]> {
  return await client.fetch(allCategoriesQuery).catch(() => []);
}

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <>
      <PageHero 
        title="Product Portfolio" 
        subtitle="Science-driven solutions for healthier crops and higher yields." 
        videoUrl="/2.mp4"
      />
      <ProductList products={products} categories={categories} />
    </>
  );
}


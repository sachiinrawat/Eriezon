import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allProductsQuery, allCategoriesQuery } from "@/sanity/lib/queries";
import ProductList from "@/components/products/ProductList";
import { Category, Product } from "@/lib/types";

export const metadata: Metadata = {
  title: "Eriezon Products | Crop Protection Solutions",
  description: "Crop protection products built for precision and performance. Explore our range of ISO certified herbicides, insecticides, and fungicides.",
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

  return <ProductList products={products} categories={categories} />;
}

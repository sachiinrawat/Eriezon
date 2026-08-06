import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import WhyChoose from "@/components/home/WhyChoose";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { client } from "@/sanity/lib/client";
import { allProductsQuery } from "@/sanity/lib/queries";
import { Product } from "@/lib/types";

async function getProducts(): Promise<Product[]> {
  try {
    return await client.fetch<Product[]>(allProductsQuery);
  } catch (error) {
    console.error("Error fetching products for home page:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <WhyChoose />
      <FeaturedProducts products={products} />
    </>
  );
}



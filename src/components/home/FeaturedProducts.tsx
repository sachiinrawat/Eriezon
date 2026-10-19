import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/lib/types";
import ProductCard from "../products/ProductCard";
import styles from "./FeaturedProducts.module.scss";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products = [] }: FeaturedProductsProps) {
  if (products.length === 0) return null;

  // Display top 3 featured products (matching the 3-card layout in the reference screenshot)
  const featured = products.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Top Header Row matching Image 1 */}
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.badge}>FEATURED PRODUCTS</span>
            <h2 className={styles.heading}>Featured products</h2>
          </div>
          <Link href="/products" className={styles.viewAllBtn}>
            <span>View all products</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className={styles.grid}>
          {featured.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

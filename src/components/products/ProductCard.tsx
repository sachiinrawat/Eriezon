import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/lib/types";
import ProductCardImage from "./ProductCardImage";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      {product.productImage ? (
        <ProductCardImage
          src={urlFor(product.productImage).width(600).url()}
          alt={product.name}
          category={product.category ?? ""}
        />
      ) : (
        <div className={styles.imageWrapper}>
          <span className={styles.category}>{product.category}</span>
          <div className={styles.placeholder}>No Image</div>
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.technical}>{product.activeIngredient || "Technical information pending"}</p>
        <div className={styles.footer}>
          <Link href={`/products/${product.slug}`} className={styles.btn}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

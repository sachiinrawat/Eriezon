import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/lib/types";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.productImage
    ? urlFor(product.productImage).width(600).url()
    : "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop";

  return (
    <Link href={`/products/${product.slug}`} className={styles.card}>
      {/* Product Image Canvas */}
      <div className={styles.imageArea}>
        <Image
          src={imageUrl}
          alt={product.name}
          width={400}
          height={380}
          className={styles.productImg}
          priority={false}
        />
      </div>

      {/* Floating Frosted Glass Bottom Capsule */}
      <div className={styles.capsule}>
        <div className={styles.capsuleInfo}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.technical}>
            {product.activeIngredient || product.category || "Crop Protection"}
          </p>
        </div>
        <div className={styles.plusBtn} aria-hidden="true">
          <Plus size={16} strokeWidth={2.5} />
        </div>
      </div>
    </Link>
  );
}

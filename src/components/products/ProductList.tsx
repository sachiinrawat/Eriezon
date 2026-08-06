"use client";

import { useState, useMemo, useEffect, useTransition, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Category, Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.scss";

interface ProductListProps {
  products: Product[];
  categories: Category[];
}

function ProductListContent({ products = [], categories = [] }: ProductListProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategorySlug = searchParams.get("category") || "all";
  const [searchQuery, setSearchQuery] = useState("");

  const [, startTransition] = useTransition();

  // Reset search when switching categories
  useEffect(() => {
    startTransition(() => {
      setSearchQuery("");
    });
  }, [activeCategorySlug]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filter by category
      const matchesCategory =
        activeCategorySlug === "all" ||
        (product.category &&
          product.category.toLowerCase() ===
            categories.find((c) => c.slug === activeCategorySlug)?.title?.toLowerCase());

      // Filter by search query (name or active chemical ingredient)
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.activeIngredient &&
          product.activeIngredient.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [products, categories, activeCategorySlug, searchQuery]);

  const handleCategoryClick = (slug: string) => {
    if (slug === "all") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products?category=${slug}`, { scroll: false });
    }
  };

  return (
    <div className={`container ${styles.container}`}>
      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.categoryList}>
          <button
            onClick={() => handleCategoryClick("all")}
            className={`${styles.categoryBtn} ${activeCategorySlug === "all" ? styles.active : ""}`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => handleCategoryClick(cat.slug)}
              className={`${styles.categoryBtn} ${activeCategorySlug === cat.slug ? styles.active : ""}`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className={styles.searchWrapper}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search products or active chemicals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <h3>No products found</h3>
          <p>Please check back later, try a different keyword, or reset the filters.</p>
        </div>
      )}
    </div>
  );
}

export default function ProductList(props: ProductListProps) {
  return (
    <Suspense fallback={
      <div className="container" style={{ padding: "120px 0", textAlign: "center" }}>
        <h3 style={{ color: "#1a6b2e", fontFamily: "var(--font-heading)" }}>Loading products...</h3>
      </div>
    }>
      <ProductListContent {...props} />
    </Suspense>
  );
}

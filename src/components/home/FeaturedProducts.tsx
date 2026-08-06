"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/lib/types";
import styles from "./FeaturedProducts.module.scss";
import Link from "next/link";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products = [] }: FeaturedProductsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<Product | null>(null);
  const isPausedRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);
  const posRef = useRef(0);

  const displayProducts = products.length > 0
    ? [...products, ...products, ...products]
    : [];

  const getImageUrl = (product: Product) =>
    product.productImage
      ? urlFor(product.productImage).width(500).url()
      : "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&auto=format&fit=crop";

  // Animate the slider — uses ref so no stale closure
  useEffect(() => {
    if (products.length === 0) return;
    const speed = 0.6; // px per frame
    const step = () => {
      if (trackRef.current && !isPausedRef.current) {
        posRef.current += speed;
        const singleSetWidth = trackRef.current.scrollWidth / 3;
        if (posRef.current >= singleSetWidth) posRef.current = 0;
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      animFrameRef.current = requestAnimationFrame(step);
    };
    animFrameRef.current = requestAnimationFrame(step);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModal(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeModal]);

  if (products.length === 0) return null;

  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.headingWrapper}>
            <span>Product Showcase</span>
            <h2>Featured Formulations</h2>
            <p>Explore our leading crop-protection technologies engineered for consistent yield safety and pest resistance.</p>
          </div>
        </div>

        {/* Slider viewport */}
        <div
          className={styles.sliderViewport}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
        >
          <div className={styles.sliderTrack} ref={trackRef}>
            {displayProducts.map((product, idx) => {
              const imageUrl = getImageUrl(product);
              return (
                <button
                  key={`${product._id}-${idx}`}
                  className={styles.slide}
                  onClick={() => setActiveModal(product)}
                  aria-label={`View ${product.name}`}
                >
                  <div className={styles.slideImageWrapper}>
                    {product.category && (
                      <span className={styles.categoryTag}>{product.category}</span>
                    )}
                    <Image
                      src={imageUrl}
                      alt={product.name}
                      width={300}
                      height={220}
                      style={{ objectFit: "contain", maxWidth: "80%", maxHeight: "80%" }}
                      priority={false}
                    />
                  </div>
                  <div className={styles.slideInfo}>
                    <h3 className={styles.slideName}>{product.name}</h3>
                    <p className={styles.slideTech}>
                      {product.activeIngredient || "Technical formulation pending"}
                    </p>
                    <span className={styles.slideLink}>
                      View Product <ArrowRight size={13} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Fade edges */}
          <div className={styles.fadeLeft} />
          <div className={styles.fadeRight} />
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeModal.name}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setActiveModal(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className={styles.modalImageArea}>
              {activeModal.category && (
                <span className={styles.modalCategory}>{activeModal.category}</span>
              )}
              <Image
                src={getImageUrl(activeModal)}
                alt={activeModal.name}
                width={420}
                height={420}
                style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "360px" }}
                priority
              />
            </div>

            <div className={styles.modalInfo}>
              <h3 className={styles.modalName}>{activeModal.name}</h3>
              {activeModal.activeIngredient && (
                <p className={styles.modalTech}>{activeModal.activeIngredient}</p>
              )}
              <Link
                href={`/products/${activeModal.slug}`}
                className={styles.modalBtn}
                onClick={() => setActiveModal(null)}
              >
                Explore Product Schedule <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

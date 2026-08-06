"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./ProductCard.module.scss";

interface Props {
  src: string;
  alt: string;
  category: string;
}

export default function ProductCardImage({ src, alt, category }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();

    // Percentage from centre: -0.5 → +0.5
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;

    // Max pan travel in px (image will scale 1.2 so 20% extra space → ≤20px safe)
    const maxPan = 18;
    setTransform({ x: xRatio * maxPan * 2, y: yRatio * maxPan * 2 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActive(false);
    setTransform({ x: 0, y: 0 });
  }, []);

  const handleMouseEnter = useCallback(() => setActive(true), []);

  return (
    <div
      ref={wrapperRef}
      className={`${styles.imageWrapper} ${active ? styles.imageWrapperActive : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <span className={styles.category}>{category}</span>

      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority={false}
        className={styles.cardImg}
        style={{
          transform: active
            ? `scale(1.2) translate(${transform.x}px, ${transform.y}px)`
            : "scale(1) translate(0px, 0px)",
          transition: active
            ? "transform 0.08s linear"   // snappy follow while hovering
            : "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // smooth return
        }}
      />
    </div>
  );
}

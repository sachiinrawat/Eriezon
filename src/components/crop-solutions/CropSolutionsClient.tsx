"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Crop } from "@/lib/types";
import styles from "./CropSolutionsClient.module.scss";

interface Props {
  crops: Crop[];
  imageUrls: string[]; // pre-computed on server
}

export default function CropSolutionsClient({ crops, imageUrls }: Props) {
  const introRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imagePaneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fadeRefs = useRef<(Element | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        // ── Image parallax on each row ──────────────────
        imagePaneRefs.current.forEach((pane) => {
          if (!pane) return;
          const img = pane.querySelector<HTMLElement>("img");
          if (!img) return;
          const rect = pane.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const vhCenter = window.innerHeight / 2;
          const parallax = (center - vhCenter) * 0.1;
          img.style.transform = `translateY(${parallax}px) scale(1.08)`;
        });

        // ── Fade-up / slide-in reveal ───────────────────
        fadeRefs.current.forEach((el) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.9) {
            el.classList.add(styles.visible);
          }
        });

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once immediately
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const addFade = (el: Element | null) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <>
      {/* Intro */}
      <div
        className={`container ${styles.intro} ${styles.fadeUp}`}
        ref={(el) => { addFade(el); }}
      >
        <h2>Select Your Crop</h2>
        <p>
          Click any crop to view its full seasonal protection calendar, common
          pest diagnostics, and Eriezon-recommended product solutions.
        </p>
      </div>

      {/* Alternating rows */}
      <section className={`container ${styles.cropList}`}>
        {crops.map((crop: Crop, index: number) => {
          const reversed = index % 2 !== 0;
          return (
            <div
              key={crop._id}
              className={`${styles.cropRow} ${reversed ? styles.reversed : ""} ${styles.fadeUp}`}
              ref={(el) => {
                rowRefs.current[index] = el;
                addFade(el);
              }}
              style={{ transitionDelay: `${Math.min(index * 0.07, 0.35)}s` }}
            >
              {/* Image pane */}
              <div
                className={styles.imagePane}
                ref={(el) => { imagePaneRefs.current[index] = el; }}
              >
                <span className={styles.indexBadge}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Image
                  src={imageUrls[index]}
                  alt={crop.name}
                  width={800}
                  height={560}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    // scale handled via JS above; set initial
                    transform: "translateY(0px) scale(1.08)",
                    transition: "transform 0.1s linear",
                    willChange: "transform",
                  }}
                  priority={index < 3}
                />
              </div>

              {/* Content pane */}
              <div className={styles.contentPane}>
                <div className={styles.accent} />
                <h3 className={styles.cropName}>{crop.name}</h3>
                {crop.scientificName && (
                  <p className={styles.scientificName}>{crop.scientificName}</p>
                )}
                <p className={styles.description}>
                  {crop.description ||
                    "Complete protection guide, seasonal calendar and recommended Eriezon products."}
                </p>

                {crop.commonPests && crop.commonPests.length > 0 && (
                  <div className={styles.pestTags}>
                    {crop.commonPests.slice(0, 3).map((pest, i) => (
                      <span key={i} className={styles.tag}>
                        {pest.name}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  href={`/crop-solutions/${crop.slug}`}
                  className={styles.viewLink}
                >
                  View Crop Schedule
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./ImageMagnifier.module.scss";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Zoom level for the preview panel — default 2.5× */
  magnification?: number;
}

interface CursorState {
  xPct: number; // 0–100
  yPct: number; // 0–100
  panelStyle: React.CSSProperties;
}

const LENS_W = 150;
const LENS_H = 150;

export default function ImageMagnifier({
  src,
  alt,
  width = 800,
  height = 800,
  magnification = 2.5,
}: Props) {
  const [active, setActive] = useState(false);
  const [cursor, setCursor] = useState<CursorState>({
    xPct: 50,
    yPct: 50,
    panelStyle: {},
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const xPct = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
      const yPct = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));

      // Size & position of the zoom panel — mirrors the container dimensions
      const panelW = rect.width;
      const panelH = rect.height;

      // Place the panel to the right of the container, vertically aligned
      let panelLeft = rect.right + 16;
      // If it overflows viewport, put it to the left instead
      if (panelLeft + panelW > window.innerWidth) {
        panelLeft = rect.left - panelW - 16;
      }

      setCursor({
        xPct,
        yPct,
        panelStyle: {
          position: "fixed",
          left: panelLeft,
          top: rect.top,
          width: panelW,
          height: panelH,
        },
      });
    },
    []
  );

  const handleMouseEnter = useCallback(() => setActive(true), []);
  const handleMouseLeave = useCallback(() => setActive(false), []);

  // Lens position — clamped so it never exceeds image boundaries
  const lensLeft = `calc(${cursor.xPct}% - ${LENS_W / 2}px)`;
  const lensTop = `calc(${cursor.yPct}% - ${LENS_H / 2}px)`;

  return (
    <div className={styles.root}>
      {/* ── Original image container ── */}
      <div
        ref={containerRef}
        className={`${styles.imgContainer} ${active ? styles.imgContainerActive : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          className={styles.mainImg}
        />

        {/* Lens box */}
        {active && (
          <div
            className={styles.lens}
            style={{
              width: LENS_W,
              height: LENS_H,
              left: lensLeft,
              top: lensTop,
            }}
          />
        )}

        {/* Hover hint — fades out when active */}
        {!active && (
          <div className={styles.hint}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            Hover to zoom
          </div>
        )}
      </div>

      {/* ── Zoom preview panel (portalled via fixed positioning) ── */}
      {active && (
        <div
          className={styles.zoomPanel}
          style={{
            ...cursor.panelStyle,
            backgroundImage: `url(${src})`,
            backgroundPosition: `${cursor.xPct}% ${cursor.yPct}%`,
            backgroundSize: `${magnification * 100}%`,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
    </div>
  );
}

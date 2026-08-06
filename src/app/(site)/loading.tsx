import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.overlay}>
      {/* Logo mark */}
      <div className={styles.logoMark}>
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Leaf shape */}
          <path
            d="M30 8 C30 8, 52 18, 52 38 C52 50, 42 56, 30 56 C18 56, 8 50, 8 38 C8 18, 30 8, 30 8Z"
            fill="url(#leafGrad)"
            className={styles.leaf}
          />
          {/* Center vein */}
          <path
            d="M30 52 L30 18"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className={styles.vein}
          />
          {/* Side veins */}
          <path
            d="M30 38 L42 28 M30 44 L20 36 M30 30 L40 22"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
            strokeLinecap="round"
            className={styles.vein}
          />
          <defs>
            <linearGradient id="leafGrad" x1="8" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4caf50" />
              <stop offset="100%" stopColor="#0d3b1a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand name */}
      <p className={styles.brand}>ERIEZON</p>

      {/* Animated dots */}
      <div className={styles.dots}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  );
}

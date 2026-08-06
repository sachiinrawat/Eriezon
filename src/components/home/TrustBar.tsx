import { Award } from "lucide-react";
import styles from "./TrustBar.module.scss";

export default function TrustBar() {
  return (
    <section className={styles.trustBar}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.isoBadge}>
          <Award size={40} color="#1a6b2e" />
          <span>ISO 9001:2015<br/>Certified</span>
        </div>
        
        <div className={styles.item}>
          <span className={styles.number}>10+</span>
          <span className={styles.label}>Years in Industry</span>
        </div>
        
        <div className={styles.item}>
          <span className={styles.number}>50+</span>
          <span className={styles.label}>Products</span>
        </div>
        
        <div className={styles.item}>
          <span className={styles.number}>5+</span>
          <span className={styles.label}>States Served</span>
        </div>
        
        <div className={styles.item}>
          <span className={styles.number}>500+</span>
          <span className={styles.label}>Distributors</span>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./WhyChoose.module.scss";

export default function WhyChoose() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headingWrapper}>
          <h2>Why Choose Eriezon?</h2>
        </div>
      </div>

      <div className={styles.accordion}>

        {/* Panel 1 */}
        <div className={`${styles.panel} ${styles.pillar1}`}>
          <div className={styles.content}>
            <h3 className={styles.title}>ISO Certified Quality</h3>
            <p className={styles.description}>
              We maintain strict quality control measures to ensure that every formulation meets international standards, giving farmers reliable and consistent results.
            </p>
            <Link href="/about" className={styles.cta}>
              Know More <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Panel 2 */}
        <div className={`${styles.panel} ${styles.pillar2}`}>
          <div className={styles.content}>
            <h3 className={styles.title}>Extensive Network</h3>
            <p className={styles.description}>
              With a growing network of over 500 distributors, our crop protection solutions are easily accessible to retail dealers and farmers across India.
            </p>
            <Link href="/distributorship" className={styles.cta}>
              Know More <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Panel 3 */}
        <div className={`${styles.panel} ${styles.pillar3}`}>
          <div className={styles.content}>
            <h3 className={styles.title}>Farmer-Focused</h3>
            <p className={styles.description}>
              Our advanced portfolios are designed specifically for Indian soil, weeds, and weather conditions, offering practical crop protection schedules.
            </p>
            <Link href="/crop-solutions" className={styles.cta}>
              Know More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

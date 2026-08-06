import Link from "next/link";
import VideoBackground from "../common/VideoBackground";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <VideoBackground videoUrl="/1.mp4" />
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>Empowering Indian Farmers with Quality Agrochemicals</h1>
        <p className={styles.subtitle}>
          Eriezon Crop Science India provides ISO-certified crop protection solutions. Join our growing network of distributors and dealers across India.
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/distributorship/apply" className={styles.primaryBtn}>
            Apply for Distributorship
          </Link>
          <Link href="/products" className={styles.secondaryBtn}>
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}

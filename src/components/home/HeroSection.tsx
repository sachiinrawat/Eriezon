import Link from "next/link";
import Image from "next/image";
import VideoBackground from "../common/VideoBackground";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <>
      <section className={styles.hero}>
        <VideoBackground videoUrl="/1.mp4" overlayOpacity={0.3} />
        {/* Custom lush cinematic gradient overlay matching the reference */}
        <div className={styles.heroOverlay} />

        <div className={`container ${styles.heroContainer}`}>
          {/* Left-aligned hero content box */}
          <div className={styles.content}>
            {/* Pill Badge */}
            <div className={styles.badgePill}>
              <span className={styles.badgeTag}>ISO 9001:2015</span>
              <span className={styles.badgeText}>EMPOWERING FARMERS WITH SCIENCE</span>
            </div>

            {/* Main Headline */}
            <h1 className={styles.title}>
              Growing Smarter Agriculture <br className={styles.breakDesktop} />
              for a Sustainable Tomorrow
            </h1>

            {/* Subtitle */}
            <p className={styles.subtitle}>
              Empowering Indian farmers and agribusinesses with ISO-certified crop protection solutions,
              high-efficacy formulations, and dedicated field support to boost productivity and secure future harvests.
            </p>

            {/* CTA Button Group */}
            <div className={styles.buttonGroup}>
              <Link href="/products" className={styles.limeBtn}>
                Explore Products
              </Link>
              <Link href="/distributorship/apply" className={styles.ghostBtn}>
                Apply for Distributorship
              </Link>
            </div>
          </div>

          {/* Right-aligned floating glass preview card (Desktop only - matching Image 1) */}
          <div className={styles.previewCardWrapper}>
            <Link href="/crop-solutions" className={styles.previewCard}>
              <div className={styles.cardImage}>
                <Image
                  src="/crops/wheat.jpg"
                  alt="Transforming Farms with Smart, Sustainable Solutions"
                  fill
                  sizes="260px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardContent}>
                <h4>Transforming Farms with Smart, Sustainable Solutions</h4>
                <span className={styles.cardTag}>CROP SOLUTIONS &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section (matching Image 2) */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>High-Efficacy Agrochemical Formulations</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Major Agricultural States Across India</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>10K+</div>
            <div className={styles.statLabel}>Farmers &amp; Agribusinesses Supported</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>ISO 9001</div>
            <div className={styles.statLabel}>Certified Quality &amp; Lab Batch Testing</div>
          </div>
        </div>
        <div className={`container ${styles.dividerContainer}`}>
          <div className={styles.dashedDivider} />
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.scss";

export default function Footer() {
  const letters = ["E", "R", "I", "E", "Z", "O"];

  return (
    <footer className={styles.footer} suppressHydrationWarning>
      {/* Top Visual Area with Farmer/Field & Giant Brand Watermark */}
      <div className={styles.topVisual}>
        <div className={styles.bgImageWrapper} style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/farm-lands.png"
            alt="Eriezon Fields"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority={false}
          />
        </div>
        {/* Dark gradient overlay for contrast */}
        <div className={styles.visualOverlay} />

        {/* Giant Watermark Text with smooth per-letter hover effect */}
        <div className={styles.watermarkWrapper}>
          {letters.map((char, index) => (
            <span key={index} className={styles.watermarkLetter}>
              {char}
            </span>
          ))}
          <span className={`${styles.watermarkLetter} ${styles.watermarkAccent}`}>
            N
          </span>
        </div>
      </div>

      {/* Dark Bottom Section */}
      <div className={styles.darkSection}>
        <div className={`container ${styles.grid}`}>
          {/* Left: Quick Links */}
          <div className={styles.colLinks}>
            <h4 className={styles.heading}>Quick links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/crop-solutions">Crop Solutions</Link></li>
              <li><Link href="/distributorship">Distributorship</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Center: Inquiry CTA */}
          <div className={styles.colInquiry}>
            <span className={styles.inquiryBadge}>- INQUIRY</span>
            <h3 className={styles.inquiryTitle}>Find the right solution in minutes</h3>
            <Link href="/contact" className={styles.limeCtaBtn}>
              <span>Contact Us</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Right: Contact & Offices */}
          <div className={styles.colContact}>
            <h4 className={styles.heading}>Corporate &amp; Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>Toll Free:</span>
                <a href="tel:18005691901" className={styles.contactLink}>1800 569 1901</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Email:</span>
                <a href="mailto:customercare@eriezon.com" className={styles.contactLink}>customercare@eriezon.com</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Website:</span>
                <a href="https://www.eriezon.in" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>www.eriezon.in</a>
              </li>
              <li className={styles.addressBlock}>
                <strong>Marketed by:</strong>
                <p>Sr. No. 153/17, Opposite Tip Top Hotel, Expressway, Gaurav Icon Tower, Pune, Maharashtra - 411057</p>
              </li>
              <li className={styles.addressBlock}>
                <strong>Reg. Office:</strong>
                <p>C-167, Alpha-1, Greater Noida (G.B. Nagar) U.P. India - 201310</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`container ${styles.bottomBar}`}>
          <p className={styles.copyright}>
            Copyright &copy; {new Date().getFullYear()} Eriezon Crop Science India Pvt. Ltd. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <span>ISO 9001:2015 Certified</span>
            <span>&bull;</span>
            <Link href="/contact">Support</Link>
            <span>&bull;</span>
            <Link href="/distributorship">Distributorship</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

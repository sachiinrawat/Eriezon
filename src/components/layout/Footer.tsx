import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Background image */}
      <div className={styles.bgImage}>
        <Image
          src="/farm-lands.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={80}
          priority={false}
        />
      </div>
      {/* Dark overlay */}
      <div className={styles.bgOverlay} />

      <div className={`container ${styles.grid}`}>
        <div className={styles.brandInfo}>
          <Image src="/logo.jpg" alt="Eriezon Logo" width={120} height={40} />
          <p>
            Eriezon Crop Science India Pvt. Ltd. is an ISO 9001:2015 certified agrochemical company committed to empowering farmers.
          </p>
          <p>CIN: U24219PN2019PTC186411</p>
        </div>
        
        <div>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/distributorship">Distributorship</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className={styles.heading}>Corporate</h4>
          <ul className={styles.linkList}>
            <li><Link href="/certifications">Certifications</Link></li>
            <li><Link href="/news">News &amp; Media</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className={styles.heading}>Contact</h4>
          <ul className={styles.linkList}>
            <li>020-67320455</li>
            <li>customercare@eriezon.com</li>
            <li>Plot No. 30, 5th Floor, Tech Centre Phase-1, Rajiv Gandi Infotech Park, MIDC, Hinjewadi, Pune – Maharashtra – 411057</li>
          </ul>
        </div>
      </div>
      
      <div className={`container ${styles.bottomBar}`}>
        <p>&copy; {new Date().getFullYear()} Eriezon Crop Science India Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

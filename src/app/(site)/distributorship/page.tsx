import { Metadata } from "next";
import Link from "next/link";
import {
  PenTool,
  ClipboardCheck,
  Handshake,
  FileCheck,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Partner with Us | Eriezon Distributorship",
  description:
    "Join the Eriezon Crop Science India network as a distributor or dealer. Grow your business with our ISO certified agrochemical products.",
};

const benefits = [
  {
    title: "ISO Certified Quality",
    desc: "Rigorous batch testing ensures maximum efficacy and long-term farmer satisfaction.",
    bg: "/crops/wheat.jpg",
    href: "/distributorship/apply",
  },
  {
    title: "Attractive Margins",
    desc: "Competitive pricing and excellent margin structures designed to grow your profitability.",
    bg: "/farm-lands.png",
    href: "/distributorship/apply",
  },
  {
    title: "Marketing Support",
    desc: "On-ground support, farmer meetings, and promotional materials from our field team.",
    bg: "/green-grass.avif",
    href: "/distributorship/apply",
  },
  {
    title: "Wide Product Portfolio",
    desc: "Herbicides, insecticides, fungicides, and plant growth regulators — all under one roof.",
    bg: "/garden.png",
    href: "/distributorship/apply",
  },
];

export default function DistributorshipPage() {
  return (
    <>
      <PageHero
        title="Grow Your Business with Eriezon"
        subtitle="Partner with an ISO 9001:2015 certified leader in crop protection. We are expanding our network across India."
        videoUrl="/2.mp4"
      />

      {/* ── Why Partner ── */}
      <section className={styles.whySection}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Why Partner With Eriezon?</h2>
          <div className={styles.benefitGrid}>
            {benefits.map((b) => (
              <Link key={b.title} href={b.href} className={styles.card}>
                {/* background image */}
                <div
                  className={styles.bgImage}
                  style={{ backgroundImage: `url(${b.bg})` }}
                />
                {/* dark overlay */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{b.title}</h3>
                  <p className={styles.cardDesc}>{b.desc}</p>
                  <span className={styles.knowMore}>
                    KNOW MORE&nbsp;→
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Become a Partner ── */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How to Become a Partner</h2>
          <div className={styles.processList}>
            <div className={styles.processStep}>
              <PenTool size={32} />
              <span>1. Fill Form</span>
            </div>
            <div className={styles.processStep}>
              <ClipboardCheck size={32} />
              <span>2. Team Review</span>
            </div>
            <div className={styles.processStep}>
              <Handshake size={32} />
              <span>3. Discussion</span>
            </div>
            <div className={styles.processStep}>
              <FileCheck size={32} />
              <span>4. Agreement</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`${styles.ctaSection} container`}>
        <h2 className={styles.sectionTitle}>Ready to start?</h2>
        <p className={styles.ctaText}>
          Fill out our online application form. Our business development team will contact you within 48 hours.
        </p>
        <Link href="/distributorship/apply" className={styles.primaryBtn}>
          Start Application Process
        </Link>
      </section>
    </>
  );
}

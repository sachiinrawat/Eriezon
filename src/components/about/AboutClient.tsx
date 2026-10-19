"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import styles from "./AboutClient.module.scss";

export default function AboutClient() {
  const storyRef = useRef<HTMLElement>(null);
  const storyGraphicRef = useRef<HTMLDivElement>(null);
  const statsBgRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quoteRef = useRef<HTMLElement>(null);
  const fadeRefs = useRef<(HTMLElement | HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // ── Stats background parallax ─────────────────────
        if (statsBgRef.current) {
          const el = statsBgRef.current.parentElement;
          if (el) {
            const rect = el.getBoundingClientRect();
            const offset = (rect.top + scrollY) - scrollY;
            const parallax = (scrollY - offset) * 0.3;
            statsBgRef.current.style.transform = `translateY(${parallax}px)`;
          }
        }

        // ── Story graphic subtle float ────────────────────
        if (storyGraphicRef.current) {
          const rect = storyGraphicRef.current.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const vhCenter = window.innerHeight / 2;
          const parallax = (center - vhCenter) * 0.06;
          storyGraphicRef.current.style.transform = `translateY(${parallax}px)`;
        }

        // ── Pillar card bg images parallax ───────────────
        pillarRefs.current.forEach((card) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const vhCenter = window.innerHeight / 2;
          const parallax = (center - vhCenter) * 0.12;
          const bg = card.querySelector<HTMLElement>(`.${styles.bgImage}`);
          if (bg) bg.style.transform = `translateY(${parallax}px) scale(1.15)`;
        });

        // ── Scroll-reveal for fade elements ───────────────
        fadeRefs.current.forEach((el) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.88) {
            el.classList.add(styles.visible);
          }
        });

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once immediately to set initial states
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const addFadeRef = (el: HTMLElement | HTMLDivElement | null) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <article className={`container ${styles.aboutContainer}`}>

      {/* ── Story Section ──────────────────────────────── */}
      <section
        className={styles.storySection}
        ref={storyRef}
      >
        <div
          className={`${styles.storyContent} ${styles.fadeUp}`}
          ref={addFadeRef}
        >
          <h2>Our Story &amp; Purpose</h2>
          <p className={styles.leadText}>
            Eriezon Crop Science India Pvt. Ltd. is an ISO 9001:2015 certified agrochemical pioneer, bridging chemical formulation innovation with on-ground agricultural empowerment across major farming states in India.
          </p>
          <p>
            Headquartered in Pune (Maharashtra), Eriezon was founded on the principle that modern crop science should be reliable, accessible, and adjusted to regional microclimates. Rather than distributing generic solutions, we specialize in premium crop-specific schedules and high-efficacy formulations spanning herbicides, fungicides, insecticides, and plant growth regulators.
          </p>
          <p>
            By leveraging a robust distribution-led operational network, we ensure that science-backed chemical remedies reach smallholder and commercial farmers with complete instructions. Through continuous village outreach and diagnostic tools, we strive to maximize yields while minimizing environmental impact.
          </p>
        </div>

        <div
          className={`${styles.storyGraphic} ${styles.fadeUp}`}
          ref={(el) => {
            storyGraphicRef.current = el;
            addFadeRef(el);
          }}
          style={{ transitionDelay: "0.15s" }}
        >
          <div className={styles.storyGraphicBg} />
          <div className={styles.storyGraphicOverlay} />
          <div className={styles.storyGraphicContent}>
            <h3>Corporate Quality Standards</h3>
            <p>We strictly adhere to ISO parameters to deliver chemicals that are both highly protective and safe to store.</p>
            <div className={styles.accreditationList}>
              {[
                "ISO 9001:2015 Quality Management",
                "Batch-Level Lab Purity Validation",
                "Safety-Grade Packaging Materials",
                "Eco-Conscious Active Sourcing",
              ].map((item) => (
                <div key={item} className={styles.accreditationItem}>
                  <CheckCircle2 size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section with parallax bg ─────────────── */}
      <section className={styles.statsSection}>
        {/* Parallax background layer */}
        <div
          className={styles.statsBg}
          ref={statsBgRef}
        />
        {/* Dark overlay */}
        <div className={styles.statsOverlay} />

        <div className={styles.statsGrid}>
          {[
            { value: "ISO 9001", label: "Quality Certified" },
            { value: "500+", label: "Distributor Network" },
            { value: "12+", label: "Major Crops Covered" },
            { value: "20+", label: "Premium Products" },
          ].map((stat, i) => (
            <div
              key={stat.value}
              className={`${styles.statCard} ${styles.fadeUp}`}
              ref={addFadeRef}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Pillars ───────────────────────────────── */}
      <section className={styles.pillarsSection}>
        <h2
          className={`${styles.sectionTitle} ${styles.fadeUp}`}
          ref={addFadeRef}
        >
          Our Strategic Pillars
        </h2>
        <p
          className={`${styles.sectionSub} ${styles.fadeUp}`}
          ref={addFadeRef}
          style={{ transitionDelay: "0.1s" }}
        >
          How we integrate advanced scientific methodologies with rural farming practices to build sustainable agricultural ecosystems.
        </p>

        <div className={styles.pillarsGrid}>
          {[
            {
              bg: "/crops/wheat.jpg",
              title: "Agronomic Formulation R&D",
              text: "We source active chemical ingredients from verified supply chains and adjust local formulation combinations specifically for high humidity, rainfall, and drought variances across Indian soil zones.",
            },
            {
              bg: "/garden.png",
              title: "Rigorous Purity Control",
              text: "Every single batch of pesticides undergoes gas chromatography testing in Pune to guarantee active chemical percentage tolerances and long-term storage shelf-life.",
            },
            {
              bg: "/farm-lands.png",
              title: "Prompt Logistics Sourcing",
              text: "We work in perfect coordination with rural retail dealers to stock herbicides and insecticides ahead of regional sowing patterns, ensuring crop schedules are never delayed.",
            },
            {
              bg: "/green-grass.avif",
              title: "Village Agronomic Training",
              text: "We do not just sell products; our field officers host crop-specific workshops at the block level to demonstrate dosage safety, nozzle calibrations, and proper timing schedules.",
            },
          ].map((pillar, i) => (
            <div
              key={pillar.title}
              className={`${styles.pillarCard} ${styles.fadeUp}`}
              ref={(el) => {
                pillarRefs.current[i] = el;
                addFadeRef(el);
              }}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div
                className={styles.bgImage}
                style={{ backgroundImage: `url("${pillar.bg}")` }}
              />
              <div className={styles.pillarContent}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote Section ───────────────────────────────── */}
      <section
        className={`${styles.quoteSection} ${styles.fadeUp}`}
        ref={(el) => {
          quoteRef.current = el;
          addFadeRef(el);
        }}
      >
        <div className={styles.quoteDecor} aria-hidden="true">&ldquo;</div>
        <div className={styles.quoteContent}>
          <blockquote>
            &ldquo;At Eriezon, we believe that crop protection is not just a commercial industry, but a national food security responsibility. Our objective is to arm every farmer in India with premium, science-tested formulations and safety protocols, fostering a legacy of high yields and sustainable soils for future generations.&rdquo;
          </blockquote>
          <cite>
            Eriezon Executive Directorate
            <span>Board of Directors, Eriezon Crop Science India Pvt. Ltd.</span>
          </cite>
        </div>
      </section>

    </article>
  );
}

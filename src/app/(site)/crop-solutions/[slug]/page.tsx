import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { cropBySlugQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { FALLBACK_CROPS, CropCalendarStage } from "@/lib/cropData";
import { Crop, Product } from "@/lib/types";
import ProductCard from "@/components/products/ProductCard";
import styles from "./page.module.scss";
import { Calendar, Bug, ShieldAlert, ArrowLeft, Download, Info } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // Try fetching from Sanity
  let crop: Crop | null = null;
  try {
    crop = await client.fetch<Crop | null>(cropBySlugQuery, { slug });
  } catch {
    // Ignore and use fallback below
  }
  
  const cropData = crop || FALLBACK_CROPS.find(c => c.slug === slug);

  return {
    title: `${cropData?.name || "Crop Solutions"} Guide | Eriezon Crop Science`,
    description: cropData?.description || "Scientific crop protection and pest calendar guides.",
  };
}

export default async function CropDetailPage({ params }: Props) {
  const { slug } = await params;

  // Try fetching from Sanity
  let crop: Crop | null = null;
  try {
    crop = await client.fetch<Crop | null>(cropBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching crop detail, using fallback:", error);
  }

  const cropData = crop || FALLBACK_CROPS.find(c => c.slug === slug);

  if (!cropData) {
    notFound();
  }

  function getCropImageUrl(data: Crop) {
    if (data.cropImage?.asset) {
      return urlFor(data.cropImage).width(1200).height(600).url();
    }
    if (typeof data.cropImage === "string") {
      return data.cropImage;
    }
    return "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&auto=format&fit=crop";
  }

  // Get recommended products
  const recommendedProducts = cropData.recommendedProducts || [];

  return (
    <article className={`container ${styles.pageContainer}`}>
      {/* Back Link */}
      <div className={styles.backLinkWrapper}>
        <Link href="/crop-solutions" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to Crop Solutions
        </Link>
      </div>

      {/* Main Banner */}
      <div className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src={getCropImageUrl(cropData)} 
            alt={cropData.name}
            width={1200}
            height={600}
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroText}>
              <span className={styles.categoryBadge}>Crop Solution Guide</span>
              <h1 className={styles.cropTitle}>{cropData.name}</h1>
              {cropData.scientificName && <p className={styles.scientificName}>{cropData.scientificName}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Content */}
      <div className={styles.mainGrid}>
        
        {/* Left Column: Calendar & Pests */}
        <div className={styles.leftColumn}>
          
          {/* Overview */}
          <section className={styles.overviewCard}>
            <div className={styles.cardHeader}>
              <Info size={24} className={styles.iconColor} />
              <h2>Crop Overview & Strategy</h2>
            </div>
            <p className={styles.overviewText}>{cropData.description}</p>
          </section>

          {/* Growth Stage Calendar */}
          {cropData.calendar && cropData.calendar.length > 0 && (
            <section className={styles.overviewCard}>
              <div className={styles.cardHeader}>
                <Calendar size={24} className={styles.iconColor} />
                <h2>Protection Schedule & Calendar</h2>
              </div>
              
              <div className={styles.timeline}>
                {cropData.calendar.map((stage: CropCalendarStage, idx: number) => (
                  <div key={idx} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                      <span>{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    <div className={styles.timelineContent}>
                      <div className={styles.stageHeader}>
                        <h3 className={styles.stageTitle}>{stage.stage}</h3>
                        <span className={styles.stagePeriod}>{stage.period}</span>
                      </div>
                      <div className={styles.stageDetails}>
                        <div className={styles.detailRow}>
                          <span className={styles.label}>Action:</span>
                          <span className={styles.value}>{stage.action}</span>
                        </div>
                        {stage.targetPests && (
                          <div className={styles.detailRow}>
                            <span className={styles.label}>Threats:</span>
                            <span className={styles.value}>{stage.targetPests}</span>
                          </div>
                        )}
                        <div className={styles.recommendationBox}>
                          <span className={styles.recLabel}>Eriezon Recommendation:</span>
                          <p className={styles.recText}>{stage.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Common Pests & Diagnostics */}
          {cropData.commonPests && cropData.commonPests.length > 0 && (
            <section className={styles.overviewCard}>
              <div className={styles.cardHeader}>
                <Bug size={24} className={styles.iconColor} />
                <h2>Pest & Disease Diagnostics</h2>
              </div>

              <div className={styles.pestGrid}>
                {cropData.commonPests.map((pest: { name: string; type: string; solution: string }, idx: number) => (
                  <div key={idx} className={styles.pestCard}>
                    <div className={styles.pestHeader}>
                      <ShieldAlert size={18} className={styles.alertIcon} />
                      <h3 className={styles.pestName}>{pest.name}</h3>
                    </div>
                    <span className={styles.pestType}>{pest.type}</span>
                    <div className={styles.pestRemedy}>
                      <strong>Remedy:</strong>
                      <p>{pest.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Right Column: Sidebar */}
        <div className={styles.rightColumn}>
          
          {/* Download Guide */}
          <div className={styles.downloadCard}>
            <div className={styles.downloadHeader}>
              <Download size={32} />
              <h3>Crop Solutions PDF</h3>
            </div>
            <p>Download our complete offline spraying schedule and crop protection handbook for {cropData.name}.</p>
            <a href="/Distributor Form.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
              Download Crop Guide
            </a>
          </div>

          {/* Farm Tips Card */}
          <div className={styles.tipsCard}>
            <h3>Agronomic Best Practices</h3>
            <ul>
              <li>Always check soil moisture prior to spraying post-emergence herbicides.</li>
              <li>Avoid high-wind and midday hours to prevent spray drift and evaporation.</li>
              <li>Practice regular crop scouting at weekly intervals for early pest detection.</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Recommended Solutions Section (Full Width below columns) */}
      <section className={styles.recommendationsSection}>
        <div className={styles.recHeaderContainer}>
          <span className={styles.recSub}>Eriezon Solutions</span>
          <h2 className={styles.recTitle}>Recommended Products for {cropData.name}</h2>
          <div className={styles.recBar} />
        </div>
        
        {recommendedProducts.length > 0 ? (
          <div className={styles.productsGrid}>
            {recommendedProducts.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.noProducts}>
            <p>Specific product recommendations are currently being compiled for {cropData.name}. In the meantime, browse our complete crop science portfolio.</p>
            <Link href="/products" className={styles.browseAllBtn}>
              Explore Full Portfolio
            </Link>
          </div>
        )}
      </section>
    </article>
  );
}


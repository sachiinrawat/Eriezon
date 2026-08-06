import { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { productBySlugQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { ProductDetail, DosageRow } from "@/lib/types";
import styles from "./ProductDetail.module.scss";
import ImageMagnifier from "@/components/products/ImageMagnifier";

interface Props {
  params: Promise<{ slug: string }>;
}

// Custom parser to format markdown (headings, bold, lists, paragraphs) cleanly
function parseMarkdown(text: string) {
  if (!text) return null;
  
  // Normalize carriage returns
  const normalized = text.replace(/\r\n/g, "\n");
  
  // Split block by block (double newlines)
  const rawBlocks = normalized.split(/\n\s*\n/);
  
  return rawBlocks.map((block, bIdx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    
    // Check if it's a heading (e.g. ### Header or ## Header or # Header)
    const headerMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const content = headerMatch[2];
      const parsedContent = parseInlineStyles(content);
      
      switch (level) {
        case 1: return <h1 key={bIdx} style={{ fontSize: '1.6rem', margin: '24px 0 12px', color: '#0d3b1a', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>{parsedContent}</h1>;
        case 2: return <h2 key={bIdx} style={{ fontSize: '1.4rem', margin: '20px 0 10px', color: '#0d3b1a', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>{parsedContent}</h2>;
        case 3: return <h3 key={bIdx} style={{ fontSize: '1.15rem', margin: '16px 0 8px', color: '#0d3b1a', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>{parsedContent}</h3>;
        default: return <h4 key={bIdx} style={{ fontSize: '1.05rem', margin: '14px 0 6px', color: '#0d3b1a', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>{parsedContent}</h4>;
      }
    }
    
    // Check if all lines start with * or -
    const lines = trimmed.split("\n");
    const isBulletList = lines.every(line => /^\s*[\*\-]\s+/.test(line));
    if (isBulletList && lines.length > 0) {
      return (
        <ul key={bIdx} style={{ paddingLeft: '20px', margin: '14px 0', listStyleType: 'disc' }}>
          {lines.map((line, lIdx) => {
            const content = line.replace(/^\s*[\*\-]\s+/, '');
            return (
              <li key={lIdx} style={{ marginBottom: '6px', fontSize: '0.92rem', lineHeight: '1.6', color: '#4a5568' }}>
                {parseInlineStyles(content)}
              </li>
            );
          })}
        </ul>
      );
    }

    // Check if it's a mixed text block that has lists inside
    if (trimmed.startsWith('*') || trimmed.startsWith('-')) {
      const bulletLines = trimmed.split("\n");
      const anyBullets = bulletLines.some(line => /^\s*[\*\-]\s+/.test(line));
      if (anyBullets) {
        return (
          <ul key={bIdx} style={{ paddingLeft: '20px', margin: '14px 0', listStyleType: 'disc' }}>
            {bulletLines.map((line, lIdx) => {
              const cleanLine = line.replace(/^\s*[\*\-]\s+/, '').trim();
              if (!cleanLine) return null;
              return (
                <li key={lIdx} style={{ marginBottom: '6px', fontSize: '0.92rem', lineHeight: '1.6', color: '#4a5568' }}>
                  {parseInlineStyles(cleanLine)}
                </li>
              );
            })}
          </ul>
        );
      }
    }
    
    // Regular paragraph block
    const paragraphLines = trimmed.split("\n");
    return (
      <p key={bIdx} style={{ marginBottom: '14px', fontSize: '0.92rem', lineHeight: '1.6', color: '#4a5568' }}>
        {paragraphLines.map((line, lIdx) => (
          <span key={lIdx}>
            {parseInlineStyles(line)}
            {lIdx < paragraphLines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  });
}

function parseInlineStyles(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} style={{ fontWeight: '700', color: '#1a202c' }}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index} style={{ fontStyle: 'italic' }}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await client.fetch<ProductDetail | null>(productBySlugQuery, { slug });
  
  return {
    title: `${product?.name || 'Product'} | Eriezon Crop Science`,
    description: product?.description || product?.modeOfAction || "Product details and dosage information.",
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await client.fetch<ProductDetail | null>(productBySlugQuery, { slug });

  if (!product) {
    notFound();
  }

  return (
    <article className="container" style={{ padding: '72px 20px 80px' }}>
      <div className={styles.grid}>
        
        {/* Left: Image — Amazon-style magnifier */}
        <div className={styles.imageSection}>
          {product.productImage ? (
            <ImageMagnifier
              src={urlFor(product.productImage).width(1200).url()}
              alt={product.name}
              width={800}
              height={800}
              magnification={2.5}
            />
          ) : (
            <div className={styles.placeholder}>No Image</div>
          )}
        </div>

        {/* Right: Info */}
        <div className={styles.infoSection}>
          <span className={styles.categoryBadge}>{product.category}</span>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.activeIngredient}>{product.activeIngredient}</p>
          
          {product.description && (
            <div className={styles.descriptionGroup} style={{ marginBottom: '24px', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '20px' }}>
              {parseMarkdown(product.description)}
            </div>
          )}
          
          {(product.modeOfAction || !product.description) && (
            <div className={styles.detailsGroup}>
              <h3>Mode of Action</h3>
              <div style={{ color: '#4a5568', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {parseMarkdown(product.modeOfAction || "Contact and systemic action for broad-spectrum control.")}
              </div>
            </div>
          )}

          <div className={styles.detailsGroup}>
            <h3>Available Pack Sizes</h3>
            <div className={styles.tagList}>
              {product.packSizes?.map((size: string) => (
                <span key={size} className={styles.tag}>{size}</span>
              ))}
            </div>
          </div>

          {product.brochureUrl && (
            <a href={product.brochureUrl} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
              Download Product Brochure (PDF)
            </a>
          )}
        </div>

      </div>

      {/* Dosage Table Section */}
      {product.dosageTable && product.dosageTable.length > 0 && (
        <section style={{ marginTop: '80px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', borderLeft: '5px solid #1a6b2e', paddingLeft: '15px' }}>
            Recommendation for Use
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table className={styles.dosageTable}>
              <thead>
                <tr>
                  <th>Crop</th>
                  <th>Pest / Disease</th>
                  <th>Dosage / Acre</th>
                  <th>Water Volume</th>
                </tr>
              </thead>
              <tbody>
                {product.dosageTable.map((row: DosageRow, index: number) => (
                  <tr key={index}>
                    <td>{row.crop}</td>
                    <td>{row.pest}</td>
                    <td>{row.dosage}</td>
                    <td>{row.water}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

    </article>
  );
}

import Link from "next/link";
import styles from "./CategoryGrid.module.scss";

const categories = [
  {
    id: "herbicides",
    name: "Herbicides",
    desc: "Effective weed control solutions for better crop yield.",
    bg: "/crops/wheat.jpg"
  },
  {
    id: "insecticides",
    name: "Insecticides",
    desc: "Advanced protection against a wide range of crop pests.",
    bg: "/farm-lands.png"
  },
  {
    id: "fungicides",
    name: "Fungicides",
    desc: "Prevent and cure fungal diseases in major crops.",
    bg: "/garden.png"
  },
  {
    id: "pgr",
    name: "Plant Growth Regulators",
    desc: "Enhance crop growth, flowering, and overall yield.",
    bg: "/green-grass.avif"
  },
  {
    id: "bio-pesticides",
    name: "Bio-Pesticides",
    desc: "Eco-friendly pest management solutions.",
    bg: "/crops/rice.jpg"
  },
  {
    id: "micronutrients",
    name: "Micronutrients",
    desc: "Essential nutrients to correct soil deficiencies.",
    bg: "/garden.png"
  },
];

export default function CategoryGrid() {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <h2 className={styles.heading}>Our Product Categories</h2>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link
              href={`/products?category=${cat.id}`}
              key={cat.id}
              className={styles.card}
            >
              <div
                className={styles.bgImage}
                style={{ backgroundImage: `url(${cat.bg})` }}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{cat.name}</h3>
                <p className={styles.cardDesc}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



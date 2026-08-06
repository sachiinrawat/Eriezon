import VideoBackground from "./VideoBackground";
import styles from "./PageHero.module.scss";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  videoUrl: string;
}

export default function PageHero({ title, subtitle, videoUrl }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      <VideoBackground videoUrl={videoUrl} />
      <div className={`container ${styles.content}`}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

import styles from "./VideoBackground.module.scss";

interface VideoBackgroundProps {
  videoUrl: string;
  overlayOpacity?: number;
}

export default function VideoBackground({ videoUrl, overlayOpacity }: VideoBackgroundProps) {
  return (
    <div className={styles.videoWrapper}>
      <video
        key={videoUrl}
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        src={videoUrl}
      >
        Your browser does not support the video tag.
      </video>
      <div 
        className={styles.overlay} 
        style={overlayOpacity ? { backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`, background: 'none' } : {}}
      />
    </div>
  );
}

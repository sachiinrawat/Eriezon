import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/common/PageHero";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Contact Us | Eriezon Crop Science India",
  description: "Get in touch with Eriezon Crop Science India for product inquiries, distributorship, or farmer support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contact Us" 
        subtitle="We are here to assist you with any questions or support you may need." 
        videoUrl="/2.mp4"
      />

      <section className={`${styles.section} container`}>
        <div className={styles.grid}>
          
          <div>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <MapPin className={styles.icon} size={32} />
                <div className={styles.details}>
                  <h3>Registered Office</h3>
                  <p>Plot No. 30, 5th Floor, Tech Centre Phase-1, Rajiv Gandi Infotech Park, MIDC, Hinjewadi, Pune – Maharashtra – 411057</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <Phone className={styles.icon} size={32} />
                <div className={styles.details}>
                  <h3>Phone</h3>
                  <p>Customer Care: 020-67320455</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <Mail className={styles.icon} size={32} />
                <div className={styles.details}>
                  <h3>Email</h3>
                  <p>customercare@eriezon.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <Clock className={styles.icon} size={32} />
                <div className={styles.details}>
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM to 6:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.537233634026!2d73.7275069!3d18.5912854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc0e5555555%3A0x633512a514d7a8d5!2sRajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Eriezon Office Location"
              ></iframe>
            </div>
          </div>

          <div>
            <h2 style={{ marginBottom: "20px" }}>Send us a Message</h2>
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}

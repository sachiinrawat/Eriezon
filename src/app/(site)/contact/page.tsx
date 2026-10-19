import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
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
                  <h3>Corporate Office (Marketed by)</h3>
                  <p>
                    <strong>Eriezon Crop Science India Pvt. Ltd.</strong><br />
                    Sr. No. 153/17, Opposite Tip Top Hotel, Expressway, Gaurav Icon Tower, Pune, Maharashtra - 411057
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <MapPin className={styles.icon} size={32} />
                <div className={styles.details}>
                  <h3>Registered Office</h3>
                  <p>C-167, Alpha-1, Greater Noida (G.B. Nagar) U.P. India - 201310</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Phone className={styles.icon} size={32} />
                <div className={styles.details}>
                  <h3>Toll Free Number</h3>
                  <p>
                    <a href="tel:18005691901">1800 569 1901</a>
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Mail className={styles.icon} size={32} />
                <div className={styles.details}>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:customercare@eriezon.com">customercare@eriezon.com</a>
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Globe className={styles.icon} size={32} />
                <div className={styles.details}>
                  <h3>Website</h3>
                  <p>
                    <a href="https://www.eriezon.in" target="_blank" rel="noopener noreferrer">
                      www.eriezon.in
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Clock className={styles.icon} size={32} />
                <div className={styles.details}>
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM to 6:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <iframe
                src="https://maps.google.com/maps?q=Gaurav+Icon+Tower,+Opposite+Tip+Top+Hotel,+Wakad,+Pune,+Maharashtra+411057&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

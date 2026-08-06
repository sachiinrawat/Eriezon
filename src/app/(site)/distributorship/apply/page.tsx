import { Metadata } from "next";
import DistributorForm from "@/components/forms/DistributorForm";

export const metadata: Metadata = {
  title: "Apply for Distributorship | Eriezon Crop Science India",
  description: "Submit your application to become an official distributor or dealer for Eriezon Crop Science India.",
};

export default function ApplyPage() {
  return (
    <>
      <section style={{ backgroundColor: "#0d3b1a", color: "#fff", padding: "60px 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>Distributorship Application</h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Complete the form below to register your interest. Our team will review your application and get in touch within 48 hours.
          </p>
        </div>
      </section>

      <section className="container" style={{ padding: "80px 0", maxWidth: "800px" }}>
        <DistributorForm />
      </section>
    </>
  );
}

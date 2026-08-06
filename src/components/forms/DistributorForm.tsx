"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import styles from "./ContactForm.module.scss"; // Reusing the same SCSS module for consistent form styling

const distributorSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  firmName: z.string().min(2, "Business/Firm Name is required"),
  businessType: z.string().min(1, "Please select a business type"),
  state: z.string().min(1, "Please select a state"),
  district: z.string().min(2, "District/City is required"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit number"),
  email: z.string().email("Valid email is required"),
  turnover: z.string().min(1, "Please select annual turnover"),
  existingBrands: z.string().optional(),
  message: z.string().optional(),
  gstNumber: z.string().optional(),
  agreeTerms: z.literal(true, {
    message: "You must agree to the terms"
  })
});

type DistributorFormValues = z.infer<typeof distributorSchema>;

export default function DistributorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<DistributorFormValues>({
    resolver: zodResolver(distributorSchema),
  });

  const onSubmit = async (data: DistributorFormValues) => {
    setIsSubmitting(true);
    console.log("Distributor Application Submitted:", data);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className={styles.form} style={{ textAlign: "center", padding: "60px 40px" }}>
        <h3 style={{ color: "#1a6b2e", marginBottom: "15px", fontSize: "1.5rem" }}>Application Received!</h3>
        <p>Thank you for your interest in partnering with Eriezon Crop Science India. Our business development team will review your details and contact you shortly.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Full Name *</label>
          <input className={styles.input} {...register("fullName")} placeholder="John Doe" />
          {errors.fullName && <p className={styles.error}>{errors.fullName.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Business / Firm Name *</label>
          <input className={styles.input} {...register("firmName")} placeholder="M/s Kisan Agro" />
          {errors.firmName && <p className={styles.error}>{errors.firmName.message}</p>}
        </div>

      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Type of Business *</label>
          <select className={styles.select} {...register("businessType")}>
            <option value="">Select Type</option>
            <option value="Retailer">Retailer</option>
            <option value="Distributor">Distributor</option>
            <option value="Wholesaler">Wholesaler</option>
            <option value="Other">Other</option>
          </select>
          {errors.businessType && <p className={styles.error}>{errors.businessType.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>State *</label>
          <select className={styles.select} {...register("state")}>
            <option value="">Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
          </select>
          {errors.state && <p className={styles.error}>{errors.state.message}</p>}
        </div>

      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>District / City *</label>
          <input className={styles.input} {...register("district")} placeholder="Pune" />
          {errors.district && <p className={styles.error}>{errors.district.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Mobile Number *</label>
          <input className={styles.input} type="tel" {...register("mobile")} placeholder="10-digit mobile" />
          {errors.mobile && <p className={styles.error}>{errors.mobile.message}</p>}
        </div>

      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Email Address *</label>
          <input className={styles.input} type="email" {...register("email")} placeholder="contact@firm.com" />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>GST Number (Optional)</label>
          <input className={styles.input} {...register("gstNumber")} placeholder="27XXXXX1234X1ZX" />
        </div>

      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Current Annual Turnover *</label>
        <select className={styles.select} {...register("turnover")}>
          <option value="">Select Range</option>
          <option value="Less than 50 Lakhs">Less than 50 Lakhs</option>
          <option value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</option>
          <option value="1 Crore - 5 Crores">1 Crore - 5 Crores</option>
          <option value="Above 5 Crores">Above 5 Crores</option>
        </select>
        {errors.turnover && <p className={styles.error}>{errors.turnover.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Existing Brands Handled (Optional)</label>
        <textarea className={styles.textarea} {...register("existingBrands")} placeholder="List brands you currently distribute..."></textarea>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Message / Remarks (Optional)</label>
        <textarea className={styles.textarea} {...register("message")} placeholder="Any additional information..."></textarea>
      </div>

      <div className={styles.formGroup} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input type="checkbox" id="agreeTerms" {...register("agreeTerms")} style={{ width: '20px', height: '20px' }} />
        <label htmlFor="agreeTerms" style={{ fontSize: '0.9rem', color: '#555' }}>
          I confirm that the information provided is accurate, and I agree to the <a href="/terms" style={{ color: '#1a6b2e', textDecoration: 'underline' }}>Terms & Conditions</a>.
        </label>
      </div>
      {errors.agreeTerms && <p className={styles.error} style={{ marginTop: '-15px', marginBottom: '20px' }}>{errors.agreeTerms.message}</p>}

      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
        {isSubmitting ? "Submitting Application..." : "Submit Application"}
      </button>
    </form>
  );
}

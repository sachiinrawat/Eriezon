"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import styles from "./ContactForm.module.scss";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  state: z.string().min(1, "Please select a state"),
  queryType: z.string().min(1, "Please select a query type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Stub for Phase 1 API routing / Resend.io integration
    console.log("Form Submitted:", data);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className={styles.form} style={{ textAlign: "center", padding: "60px 40px" }}>
        <h3 style={{ color: "#1a6b2e", marginBottom: "15px", fontSize: "1.5rem" }}>Thank You!</h3>
        <p>Your message has been received. Our team will get back to you shortly.</p>
        <button 
          onClick={() => setIsSuccess(false)} 
          className={styles.submitBtn} 
          style={{ marginTop: "20px" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Full Name</label>
        <input className={styles.input} {...register("name")} placeholder="John Doe" />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Email Address</label>
        <input className={styles.input} type="email" {...register("email")} placeholder="john@example.com" />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Phone Number</label>
        <input className={styles.input} type="tel" {...register("phone")} placeholder="+91 9000000000" />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>State</label>
        <select className={styles.select} {...register("state")}>
          <option value="">Select State</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          {/* Add more states as needed */}
        </select>
        {errors.state && <p className={styles.error}>{errors.state.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Query Type</label>
        <select className={styles.select} {...register("queryType")}>
          <option value="">Select Query Type</option>
          <option value="Product Inquiry">Product Inquiry</option>
          <option value="Distributorship">Distributorship</option>
          <option value="Farmer Support">Farmer Support</option>
          <option value="Other">Other</option>
        </select>
        {errors.queryType && <p className={styles.error}>{errors.queryType.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Message</label>
        <textarea className={styles.textarea} {...register("message")} placeholder="How can we help you?"></textarea>
        {errors.message && <p className={styles.error}>{errors.message.message}</p>}
      </div>

      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

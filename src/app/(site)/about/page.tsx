import { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import AboutClient from "@/components/about/AboutClient";

export const metadata: Metadata = {
  title: "About Us | Eriezon Crop Science India",
  description: "Learn about Eriezon Crop Science India, our mission, vision, and commitment to providing quality agrochemicals.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Eriezon"
        subtitle="Innovating Agriculture, Empowering Farmers."
        videoUrl="/2.mp4"
      />
      <AboutClient />
    </>
  );
}

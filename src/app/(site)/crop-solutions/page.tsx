import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allCropsQuery } from "@/sanity/lib/queries";
import PageHero from "@/components/common/PageHero";
import { FALLBACK_CROPS } from "@/lib/cropData";
import { urlFor } from "@/sanity/lib/image";
import { Crop } from "@/lib/types";
import CropSolutionsClient from "@/components/crop-solutions/CropSolutionsClient";

export const metadata: Metadata = {
  title: "Crop Solutions | Eriezon Crop Science India",
  description:
    "Explore scientific crop protection schedules, pest diagnostics, and seasonal calendars for major Indian crops.",
};

async function getCrops(): Promise<Crop[]> {
  try {
    const crops = await client.fetch<Crop[]>(allCropsQuery);
    return crops && crops.length > 0 ? crops : (FALLBACK_CROPS as Crop[]);
  } catch {
    return FALLBACK_CROPS as Crop[];
  }
}

function getCropImageUrl(crop: Crop): string {
  if (crop.cropImage?.asset) {
    return urlFor(crop.cropImage).width(800).height(560).url();
  }
  if (typeof crop.cropImage === "string") return crop.cropImage;
  return "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop";
}

export default async function CropSolutionsPage() {
  const crops = await getCrops();
  const imageUrls = crops.map(getCropImageUrl);

  return (
    <>
      <PageHero
        title="Crop Solutions"
        subtitle="Science-backed protection calendars and pest guides for Indian agriculture."
        videoUrl="/2.mp4"
      />
      <CropSolutionsClient crops={crops} imageUrls={imageUrls} />
    </>
  );
}

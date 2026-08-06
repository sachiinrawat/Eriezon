import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { client } from "@/sanity/lib/client";
import { allCategoriesQuery } from "@/sanity/lib/queries";
import { Category } from "@/lib/types";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await client.fetch<Category[]>(allCategoriesQuery).catch(() => []);

  return (
    <>
      <Header categories={categories} />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

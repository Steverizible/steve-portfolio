import type { Metadata } from "next";
import { contactPage, siteMeta } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `${siteMeta.name} | Contact`,
  description: contactPage.description,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

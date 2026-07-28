import { Suspense } from "react";
import ContactPageClient from "@/components/ContactPageClient";
import PageChrome from "@/components/PageChrome";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full animate-page-in bg-background">
      <PageChrome />
      <Suspense
        fallback={
          <div className="mx-auto w-full max-w-6xl px-6 py-12 text-sm text-muted md:px-10 md:py-16 lg:px-14">
            Loading contact form…
          </div>
        }
      >
        <ContactPageClient />
      </Suspense>
    </main>
  );
}

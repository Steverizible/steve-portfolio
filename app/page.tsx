import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import FeaturedWork from "@/components/FeaturedWork";
import FavoriteStack from "@/components/FavoriteStack";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Motivation from "@/components/Motivation";

export default function Home() {
  return (
    <>
      <div id="top" />
      <main className="w-full">
        <Hero />
        <FeaturedWork />
        <About />
        <Expertise />
        <Motivation />
        <Experience />
        <FavoriteStack />
        <Awards />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

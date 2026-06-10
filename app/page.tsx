import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import FeaturedWork from "@/components/FeaturedWork";
import FavoriteStack from "@/components/FavoriteStack";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Motivation from "@/components/Motivation";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <SelectedWork />
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

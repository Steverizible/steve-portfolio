import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import ExperienceBreakout from "@/components/ExperienceBreakout";
import Expertise from "@/components/Expertise";
import FeaturedWork from "@/components/FeaturedWork";
import FavoriteStack from "@/components/FavoriteStack";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Motivation from "@/components/Motivation";
import MotivationBreakout from "@/components/MotivationBreakout";

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
        <MotivationBreakout />
        <Experience />
        <ExperienceBreakout />
        <FavoriteStack />
        <Awards />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

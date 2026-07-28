import About from "@/components/About";
import AIBuildMethodPreview from "@/components/AIBuildMethodPreview";
import AISystems from "@/components/AISystems";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import ExperienceBreakout from "@/components/ExperienceBreakout";
import Expertise from "@/components/Expertise";
import FeaturedWork from "@/components/FeaturedWork";
import FavoriteStack from "@/components/FavoriteStack";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Motivation from "@/components/Motivation";
import MotivationBreakout from "@/components/MotivationBreakout";
import RecruiterSummary from "@/components/RecruiterSummary";
import TechStackPreview from "@/components/TechStackPreview";
import WhereICreateValue from "@/components/WhereICreateValue";

export default function Home() {
  return (
    <>
      <div id="top" />
      <main className="w-full">
        <Hero />
        <FeaturedWork />
        <WhereICreateValue />
        <AISystems />
        <AIBuildMethodPreview />
        <RecruiterSummary />
        <About />
        <Expertise />
        <Motivation />
        <MotivationBreakout />
        <Experience />
        <ExperienceBreakout />
        <TechStackPreview />
        <FavoriteStack />
        <Awards />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}

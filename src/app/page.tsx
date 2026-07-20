import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import TeamSection from "@/components/Teamsection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <MissionSection/>
      <TeamSection/>
      <Footer/>
    </>
  );
}
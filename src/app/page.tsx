import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionCard";
import TeamSection from "@/components/Teamsection";
import Footer from "@/components/Footer";
import MissionCard from "@/components/MissionCard";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <MissionCard/>
      <TeamSection/>
      <Footer/>
    </>
  );
}
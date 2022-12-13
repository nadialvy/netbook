import NavBar from "../components/NavBar"
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import OurAchievment from "../components/OurAchievment";
import OurCommunity from "../components/OurCommunity";
import OurTeam from "../components/OurTeam";
import CTA from "../components/CTA";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-white to-indigo-100">
        <NavBar />
        <Hero />
      </div>
      <AboutUs />
      <OurAchievment />
      <OurCommunity />
      <OurTeam />
      <CTA />
      <Blog />
    </>
  );
}


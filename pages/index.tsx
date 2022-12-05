import NavBar from "../components/NavBar"
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-white to-indigo-100">
        <NavBar />
        <Hero />
      </div>
      <AboutUs />
    </>
  );
}


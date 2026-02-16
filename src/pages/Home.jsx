import Hero from "../components/Hero";
import Menu from "../components/Menu";
import ChaiSpecialty from "../components/ChaiSpecialty";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import SpecialItemsCarousel from "../components/SpecialItemsCarousel";
import FeaturesBanner from "../components/FeaturesBanner";

const Home = () => {
  return (
    <>
      <SpecialItemsCarousel />
      <FeaturesBanner />
      <Hero />
      <Menu />
      <ChaiSpecialty />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;

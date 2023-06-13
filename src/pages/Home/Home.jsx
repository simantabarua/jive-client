import useTitle from "../../hooks/useTitle";
import HeroBanner from "./HeroBanner";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Testimonials from "./Testimonial";

const Home = () => {
  useTitle('Home')
  return (
    <>
      <HeroBanner />
      <PopularClasses />
      <PopularInstructors />
      <Testimonials />
    </>
  );
};

export default Home;

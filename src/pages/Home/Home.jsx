import useTitle from "../../hooks/useTitle";
import DanceCategory from "./DanceCategory";
import DataOverview from "./DataOverview";
import FeatureDance from "./FeatureDance";
import HeroBanner from "./HeroBanner";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Testimonials from "./Testimonial";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <HeroBanner />
      <PopularClasses />
      <PopularInstructors />
      <FeatureDance />
      <DataOverview />
      <DanceCategory />
      <Testimonials />
    </>
  );
};

export default Home;

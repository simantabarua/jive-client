import { Link } from "react-router-dom";
import InstructorCard from "../Instructors/InstructorCard";
import SectionHeader from "../../components/Common/SectionHeader";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../components/Common/Loading";

const PopularInstructors = () => {
  const { isLoading, data: instructors = [] } = useQuery(
    "instructor",
    async () => {
      const response = await axios.get("/instructors-popular");
      return response.data;
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  const limitedInstructors = instructors.slice(0, 6);

  return (
    <>
      <SectionHeader
        title="Discover Our Popular Instructors"
        subtitle="Explore the Expertise and Passion of Our Highly Recommended Instructors!"
      />

      <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6 md:px-3 lg:px-6 place-items-center ">
        {limitedInstructors.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/instructors" className="btn btn-primary">
          See More
        </Link>
      </div>
    </>
  );
};

export default PopularInstructors;

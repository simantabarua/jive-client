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

      <div className="card-grid">
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

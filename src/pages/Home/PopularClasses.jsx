import { Link } from "react-router-dom";
import SectionHeader from "../../components/Common/SectionHeader";
import ClassCard from "../Classes/ClassCard";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../components/Common/Loading";

const PopularClasses = () => {
  const { isLoading, data: popularClasses = [] } = useQuery(
    "popularClasses",
    async () => {
      const response = await axios.get("/classes-popular");
      return response.data;
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  const limitedClasses = popularClasses.slice(0, 6);

  return (
    <>
      <SectionHeader
        title="Explore Our Popular Classes: Discover the Best Courses Available"
        subtitle="Choose from a Wide Range of Highly Rated Classes!"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6 md:px-3 lg:px-6 place-items-center ">
        {limitedClasses.map((popularClass, index) => (
          <ClassCard key={index} classItem={popularClass} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/classes" className="btn btn-primary">
          See More
        </Link>
      </div>
    </>
  );
};

export default PopularClasses;

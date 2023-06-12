import axios from "axios";
import InstructorCard from "./InstructorCard";
import { useQuery } from "react-query";
import Loading from "../../components/Common/Loading";

const Instructors = () => {
  const { isLoading, data: instructors = [] } = useQuery(
    "instructor",
    async () => {
      const response = await axios.get("/instructors");
      return response.data;
    }
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 xl:grid-cols-3 gap-6  px-3 lg:px-6 place-items-center">
        {instructors.map((instructor, index) => (
          <InstructorCard instructor={instructor} key={index} />
        ))}
      </div>
    </>
  );
};

export default Instructors;

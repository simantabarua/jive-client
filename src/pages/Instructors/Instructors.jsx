import axios from "axios";
import InstructorCard from "./InstructorCard";
import { useQuery } from "react-query";
import Loading from "../../components/Common/Loading";
import useTitle from "../../hooks/useTitle";
import PageHeader from "../../components/Header/PageHeader";

const Instructors = () => {
  useTitle("Instructors");
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
      <PageHeader
        title="Instructors"
        description="Meet our dedicated instructors and start your learning journey with the best."
      />
      <div className="card-grid mt-4">
        {instructors.map((instructor, index) => (
          <InstructorCard instructor={instructor} key={index} />
        ))}
      </div>
    </>
  );
};

export default Instructors;

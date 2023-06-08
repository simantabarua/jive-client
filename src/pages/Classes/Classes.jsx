import axios from "axios";
import ClassCard from "./ClassCard";
import { useQuery } from "react-query";
import Loading from "../../components/Common/Loading";

const Classes = () => {

  const {isLoading, data } = useQuery('classes', () => {
  return axios.get("http://localhost:5000/classes")
  })
  if (isLoading) return <Loading/>

  


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 xl:grid-cols-3 gap-6  px-3 lg:px-6">
        {data?.data.map((classItem, index) => (
          <ClassCard key={index} class={classItem} />
        ))}
      </div>
    </>
  );
};

export default Classes;

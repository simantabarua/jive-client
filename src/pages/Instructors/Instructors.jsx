import axios from "axios";
import InstructorCard from "./InstructorCard";
import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/instructors").then((response) => {
      console.log(response.data);
      setInstructors(response.data);
    });
  }, []);
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

0
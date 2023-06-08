import InstructorCard from "./InstructorCard";

const Instructors = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 xl:grid-cols-3 gap-6  px-3 lg:px-6"></div>
     <InstructorCard/>
    </>
  );
};

export default Instructors;

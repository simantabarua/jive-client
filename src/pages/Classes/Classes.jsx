import ClassCard from "./ClassCard";
import Loading from "../../components/Common/Loading";
import useClasses from "../../hooks/useClasses";

const Classes = () => {
  const { classes, isLoading } = useClasses();
 
  if (isLoading) return <Loading/>

  


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 xl:grid-cols-3 gap-6  px-3 lg:px-6">
        {classes?.data.map((classItem, index) => (
          <ClassCard key={index} class={classItem} />
        ))}
      </div>
    </>
  );
};

export default Classes;

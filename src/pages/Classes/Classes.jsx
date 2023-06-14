import ClassCard from "./ClassCard";
import Loading from "../../components/Common/Loading";
import useClasses from "../../hooks/useClasses";
import useTitle from "../../hooks/useTitle";
import useRoleChecker from "../../hooks/useRoleChecker";

const Classes = () => {
  
  useTitle("Classes");
  const { classes, isLoading } = useClasses();
  const { role } = useRoleChecker();
  if (isLoading || isLoading) return <Loading />;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 xl:grid-cols-3 gap-6 place-items-center px-3 lg:px-6">
        {classes.map((classItem, index) => (
          <ClassCard key={index} classItem={classItem} role={role} />
        ))}
      </div>
    </>
  );
};

export default Classes;

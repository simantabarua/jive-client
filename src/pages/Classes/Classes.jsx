import ClassCard from "./ClassCard";
import Loading from "../../components/Common/Loading";
import useClasses from "../../hooks/useClasses";
import useTitle from "../../hooks/useTitle";
import useRoleChecker from "../../hooks/useRoleChecker";

const Classes = () => {
  useTitle("Classes");
  const { classes, isLoading } = useClasses();
  const { role, useRoleLoading } = useRoleChecker();
  if (isLoading || isLoading || useRoleLoading) return <Loading />;
  return (
    <>
      <div className="card-grid mt-10">
        {classes.map((classItem, index) => (
          <ClassCard key={index} classItem={classItem} role={role} />
        ))}
      </div>
    </>
  );
};

export default Classes;

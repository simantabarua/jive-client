import ClassCard from "./ClassCard";
import Loading from "../../components/Common/Loading";
import useClasses from "../../hooks/useClasses";
import useTitle from "../../hooks/useTitle";
import useRoleChecker from "../../hooks/useRoleChecker";
import PageHeader from "../../components/Header/PageHeader";
import bgImage from "../../assets/Asset 1.svg";
const Classes = () => {
  useTitle("Classes");
  const { classes, isLoading } = useClasses();
  const { role, useRoleLoading } = useRoleChecker();
  if (isLoading || isLoading || useRoleLoading) return <Loading />;
  return (
    <>
      <PageHeader
        title="Classes"
        description="Explore a variety of classes tailored to your interests"
      />

      <div className="card-grid mt-4 relative z-50 ">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat">
          <image src={bgImage} />
        </div>
        {classes.map((classItem, index) => (
          <ClassCard key={index} classItem={classItem} role={role} />
        ))}
      </div>
    </>
  );
};

export default Classes;

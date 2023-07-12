import SectionHeader from "../../components/Common/SectionHeader";

const DataOverview = () => {
  const danceStyles = [
    {
      title: "Salsa",
      description:
        "Salsa is a very popular genre of dance from the Caribbean with salsa music.",
      student: "1504",
    },
    {
      title: "Hip Hop",
      description:
        "Hip hop is a style of popular music featuring rap with an electronic backing.",
      student: "2154",
    },
    {
      title: "Tap Dance",
      description:
        "Tap dance is a genre of dance using the sounds of tap shoes striking the floor.",
      student: "1354",
    },
    {
      title: "Ballet Dancing",
      description:
        "Ballet dancing is for getting into shape, improve flexibility and have fun!",
      student: "2244",
    },
  ];

  const renderSection = (danceStyles) => (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-spacing-1 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <p className=" font-bold text-3xl text-gray-400">{ danceStyles.student}+</p>
        <h2 className=" font-medium text-3xl text-gray-900">
          {danceStyles.title}
        </h2>
        <p className="leading-relaxed">{danceStyles.description}</p>
      </div>
    </div>
  );
  return (
    <>
      
      <div className="container px-5 py-24 mx-auto">
      <SectionHeader
        title={
          "Record number of students enroll in top classes."
        }
      />
        <div className="flex flex-wrap -m-4 text-center">
          {danceStyles.map(renderSection)}
        </div>
      </div>
    </>
  );
};

export default DataOverview;

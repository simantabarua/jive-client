import SectionHeader from "../../components/Common/SectionHeader";
import { FaUserGraduate } from "react-icons/fa";

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

  const renderSection = (style) => (
    <div key={style.title} className="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div className="bg-white shadow-lg rounded-lg px-6 py-8 transform transition-transform duration-300 hover:scale-105 border-t-8 border-indigo-600">
        <div className="flex items-center justify-center text-indigo-600 mb-4">
          <FaUserGraduate className="text-4xl" />
        </div>
        <p className="text-3xl font-bold text-gray-800">{style.student}+</p>
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">
          {style.title}
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          {style.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-24">
      <SectionHeader
        title="Record number of students enroll in top classes"
        subtitle="Explore our most popular dance styles with high enrollment and join the community!"
      />
      <div className="flex flex-wrap -m-4 text-center">
        {danceStyles.map(renderSection)}
      </div>
    </div>
  );
};

export default DataOverview;

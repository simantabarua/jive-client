import { Link } from "react-router-dom";
import { FiMail, FiBook, FiUser, FiEye } from "react-icons/fi";

const InstructorCard = ({ instructor }) => {
  const { image, userName, email, numberOfClasses, totalStudents } = instructor;

  return (
    <div
      className="card w-full h-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-y-105 hover:shadow-xl"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <figure className="relative">
        <img
          className="h-36 md:h-44 lg:h-64 w-full object-cover object-left-top rounded-bl-[40px]"
          src={image}
          loading="lazy"
          alt={`${userName}`}
        />
      </figure>
      <div className="card-body p-3  md:p-6 space-y-1 md:space-y-2">
        <h2 className="card-title text-base md:text-2xl font-semibold text-gray-800 ">
          {userName}
        </h2>
        <p className="flex items-center text-sm text-gray-600 text-wrap overflow-hidden">
          <FiMail className="mr-2 text-blue-500" /> {email}
        </p>

        <div className="flex items-center text-sm text-gray-600">
          <FiBook className="mr-2 text-purple-500" />
          <span>Classes: {numberOfClasses}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <FiUser className="mr-2 text-green-500" />
          <span>Students: {totalStudents}</span>
        </div>

        <div className="card-actions ">
          <Link>
            <button className="btn btn-sm bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-indigo-500 transition-colors duration-300">
              <FiEye /> View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;

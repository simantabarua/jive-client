import useSelectedClass from "../../hooks/useSelectedClass";
import { FaUserGraduate } from "react-icons/fa";
import { MdFactCheck } from "react-icons/md";

const ClassCard = ({ classItem, role }) => {
  const { image, className, instructor, availableSeats, price, totalEnroll } =
    classItem;
  const { handleSelectedClass } = useSelectedClass();
  const userRole = role || "student";

  return (
    <div
      className={`card w-full h-full shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105 ${
        availableSeats <= 0 ? "bg-red-50 border-l-4 border-red-400" : "bg-white"
      }`}
    >
      <figure className="relative">
        <img
          className="h-36 md:h-44 lg:h-64 w-full object-cover object-left-top rounded-lg"
          src={image}
          alt={className}
          loading="lazy"
        />
      </figure>
      <div className="card-body p-4 md:p-6  md:space-y-1">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          {className}
        </h2>
        <p className="text-sm text-gray-600">{instructor}</p>

        <div className="text-sm text-gray-600">
          <span className="font-medium text-gray-700">Price:</span> ${price}
        </div>

        <div className="flex items-center text-sm text-gray-600 space-x-1">
          <MdFactCheck className="text-blue-500" />
          <span>
             Seats: {availableSeats > 0 ? availableSeats : "Full"}
          </span>
        </div>

        <div className="flex items-center text-sm text-gray-600 space-x-1">
          <FaUserGraduate className="text-green-500" />
          <span>Enrolled: {totalEnroll}</span>
        </div>

        <div className="card-actions pt-3">
          <button
            onClick={() => handleSelectedClass(classItem)}
            className="btn btn-sm bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors duration-300 w-full md:w-auto"
            disabled={availableSeats <= 0 || userRole !== "student"}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

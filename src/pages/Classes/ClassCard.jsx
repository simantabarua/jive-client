import useSelectedClass from "../../hooks/useSelectedClass";
import { FaUserGraduate } from "react-icons/fa";
import { MdFactCheck } from "react-icons/md";

const ClassCard = ({ classItem, role }) => {
  const { image, className, instructor, availableSeats, price, totalEnroll } =
    classItem;
  const { handleSelectedClass } = useSelectedClass();
  const userRole = role || "student"; 

  return (
    <>
      <div
        className={`card w-full h-full md:w-96 md:h-[29rem]  shadow-xl rounded-xl px-2 md:p-4 ${
          availableSeats < 0 ? "bg-red-300" : "bg-base-300"
        }`}
      >
        <figure>
          <img
            className="h-64 w-full object-left-top object-cover md:w-96 rounded-lg"
            src={image}
            alt={className}
            loading="lazy"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>{instructor}</p>
          <span>Price: ${price}</span>
          <span>
            <MdFactCheck className="inline-block mr-2" /> Available Seats:
            {availableSeats}
          </span>
          <span>
            <FaUserGraduate className="inline-block mr-2" /> Student Enrolled:
            {totalEnroll}
          </span>
          <div className="card-actions">
            <button
              onClick={() => {
                handleSelectedClass(classItem);
              }}
              className="btn btn-sm btn-primary border-0 mt-2"
              disabled={availableSeats < 0 || userRole !== "student"}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;

import useSelectedClass from "../../hooks/useSelectedClass";

const ClassCard = ({ classItem }) => {
  const { image, className, instructor, availableSeats, price, totalEnroll } =
    classItem;
  const { handleSelectedClass } = useSelectedClass();
  return (
    <>
      <div className="card w-full h-full md:w-96 md:h-[29rem] bg-base-300 shadow-xl rounded-xl px-2 md:p-4">
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
          <div className="flex flex-col md:flex-row md:gap-20">
            <span>Price: ${price}</span>
            <span>Available Seats: {availableSeats}</span>
          </div>
          <span>Student Enrolled: {totalEnroll}</span>
          <div className="card-actions">
            <button
              onClick={() => {
                handleSelectedClass(classItem);
              }}
              className="btn btn-sm btn-primary border-0"
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

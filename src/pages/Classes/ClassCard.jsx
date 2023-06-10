import axios from "axios";
import useAuth from "../../hooks/useAuth";

const ClassCard = ({ classItem }) => {
  const { user } = useAuth();
  const { image, name, instructor, availableSeats, price } = classItem;
  const handleSelectedClass = () => {
    const selectedClassData = {
      name,
      instructor,
      email: user?.email,
      availableSeats,
      price,
      image,
      paymentStatus: "unpaid",
    };
    axios
      .post("/selected-class", selectedClassData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="card w-full h-full md:w-96 md:h-[29rem] bg-base-300 shadow-xl rounded-xl px-2 md:p-4">
        <figure>
          <img
            className="h-64 w-full object-left-top object-cover md:w-96 rounded-lg"
            src={image}
            alt={name}
            loading="lazy"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{instructor}</p>
          <div className="flex flex-col md:flex-row md:gap-20">
            <span>Price: ${price}</span>
            <span>Available Seats: {availableSeats}</span>
          </div>
          <div className="card-actions">
            <button
              onClick={handleSelectedClass}
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

import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import useRoleChecker from "../../hooks/useRoleChecker";

const ClassCard = ({ classItem }) => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { role } = useRoleChecker();

  const {
    _id,
    image,
    className,
    instructor,
    instructorEmail,
    availableSeats,
    price,
    totalEnroll,
  } = classItem;
  const handleSelectedClass = () => {
    const selectedClassData = {
      classId: _id,
      className,
      instructor,
      instructorEmail,
      email: user?.email,
      availableSeats,
      price,
      image,
      paymentStatus: "unpaid",
    };
    axiosSecure
      .post("/selected-class", selectedClassData)
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Class added successfully",
          });
        }
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
            {role === "student" && (
              <button
                onClick={handleSelectedClass}
                className="btn btn-sm btn-primary border-0"
              >
                Select
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;

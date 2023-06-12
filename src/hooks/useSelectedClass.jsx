import useAuth from "./useAuth";
import useAxios from "./useAxios";
import Swal from "sweetalert2";

const useSelectedClass = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const handleSelectedClass = (classItem) => {
    const {
      _id,
      className,
      instructor,
      instructorEmail,
      availableSeats,
      price,
      image,
    } = classItem;
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
      .post(`/selected-class?email=${user?.email}`, selectedClassData)
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

  return {
    handleSelectedClass,
    
  };
};

export default useSelectedClass;


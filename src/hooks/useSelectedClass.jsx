import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
import Swal from "sweetalert2";

const useSelectedClass = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleSelectedClass = (classItem) => {
    if (!user) {
      Swal.fire({
        title: "Please login to enroll class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to login",
        preConfirm: () => {
          return navigate("/login", { state: { from: location } });
        },
      });
      return; 
    }
    
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

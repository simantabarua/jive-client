import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
import Swal from "sweetalert2";

const useSelectedClass = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const {
    isLoading,
    data: classes = [],
    refetch,
  } = useQuery(("selectedClasses", user?.email), async () => {
    const response = await axiosSecure.get(
      `/selected-class?email=${user?.email}`
    );
    return response.data;
  });

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

  return {
    handleSelectedClass,
    isLoading,
    classes,
    refetch,
  };
};

export default useSelectedClass;

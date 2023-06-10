import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "react-query";
import Loading from "../../components/Common/Loading";

const MyClasses = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const {
    isLoading,
    data: classes = [],
    refetch,
  } = useQuery(("classes", user?.email), async () => {
    const response = await axiosSecure.get(
      `/instructor-classes?email=${user?.email}`
    );
    console.log(response);

    return response.data;
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-class/${id}`).then((response) => {
          console.log(response);

          if (response?.data?.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Class Status</th>
            <th>Total Enroll</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {classes.map(
            (
              {
                _id,
                className,
                availableSeats,
                price,
                classStatus,
                totalEnroll,
              },
              index
            ) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{className}</td>
                <td>{availableSeats}</td>
                <td>{price}</td>
                <td>{classStatus}</td>
                <td>{totalEnroll}</td>
                <th>
                  <td className="space-x-2">
                    <button
                      onClick={() => {
                        handleDelete(_id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button className="btn btn-primary">Update</button>
                  </td>
                </th>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;

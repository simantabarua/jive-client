import Loading from "../../components/Common/Loading";
import Swal from "sweetalert2";
import useSelectedClass from "../../hooks/useSelectedClass";
import useAxios from "../../hooks/useAxios";

const MySelectedClasses = () => {
  const { isLoading, classes, refetch } = useSelectedClass();
  const axiosSecure = useAxios();

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
        axiosSecure.delete(`/selected-class/${id}`).then((response) => {

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
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map(
              (
                {
                  _id,
                  className,
                  instructor,
                  availableSeats,
                  price,
                  instructorEmail,
                },
                index
              ) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{className}</td>
                  <td>{instructor}</td>
                  <td>{instructorEmail}</td>
                  <td>{availableSeats}</td>
                  <td>{price}</td>
                  <td className="space-x-2">
                    <button
                      onClick={() => {
                        handleDelete(_id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button className="btn btn-primary">Pay</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySelectedClasses;

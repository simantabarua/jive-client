import Swal from "sweetalert2";
import Loading from "../../components/Common/Loading";
import useAxios from "../../hooks/useAxios";
import useClasses from "../../hooks/useClasses";

const ManageClasses = () => {
  const { isLoading, classes, refetch } = useClasses();
  const axiosSecure = useAxios();
  const handleClassStatus = (id, status) => {
    console.log(id, status);

    axiosSecure
      .patch(`/change-class/${id}`, { status: status })
      .then((response) => {
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: `class ${status} successfully`,
          });
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {classes.map(
              (
                {
                  _id,
                  className,
                  instructor,
                  email,
                  availableSeats,
                  price,
                  classStatus,
                },
                index
              ) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src="" alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{className}</td>
                  <td>{instructor}</td>
                  <td>{email}</td>
                  <td>{availableSeats}</td>
                  <td>{price}</td>
                  <td className="capitalize">{classStatus}</td>
                  <td className="space-x-2">
                    <button
                      onClick={() => {
                        handleClassStatus(_id, "approved");
                      }}
                      className="btn btn-xs btn-primary"
                      disabled={classStatus === "approved"}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        handleClassStatus(_id, "denied");
                      }}
                      className="btn btn-xs btn-danger"
                      disabled={classStatus === "denied"}
                    >
                      Deny
                    </button>
                    <button className="btn btn-xs btn-warning">Feedback</button>
                    <button
                      onClick={() => {
                        handleDelete(_id);
                      }}
                      className="btn btn-xs btn-warning"
                    >
                      Delete
                    </button>
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

export default ManageClasses;

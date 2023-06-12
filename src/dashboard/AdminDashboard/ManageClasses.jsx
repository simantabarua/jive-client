import Swal from "sweetalert2";
import Loading from "../../components/Common/Loading";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "react-query";

const ManageClasses = () => {
  const axiosSecure = useAxios();
  const { user, loading } = useAuth();

  const {
    isLoading,
    data: classes = [],
    refetch,
  } = useQuery("classes", async () => {
    const response = await axiosSecure.get(`/classes-all?email=${user.email}`);

    return response.data;
  });

  const handleClassStatus = (id, status,instructorEmail) => {

    axiosSecure
      .patch(`/change-class/${id}`, { status: status, instructorEmail:instructorEmail })
      .then((response) => {
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

          if (response?.data?.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  if (isLoading || loading) {
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
              <th>Total Enrolled</th>
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
                  instructorEmail,
                  availableSeats,
                  price,
                  classStatus,
                  totalEnroll,
                  
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
                  <td>{instructorEmail}</td>
                  <td>{availableSeats}</td>
                  <td>{price}</td>
                  <td className="capitalize">{classStatus}</td>
                  <td>{totalEnroll}</td>
                  <td className=" flex flex-col gap-3 justify-center items-center">
                    <button
                      onClick={() => {
                        handleClassStatus(_id, "approved", instructorEmail);
                      }}
                      className="btn btn-xs w-32 btn-success"
                      disabled={classStatus === "approved"}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        handleClassStatus(_id, "denied", instructorEmail);
                      }}
                      className="btn btn-xs w-32 btn-warning"
                      disabled={classStatus === "denied"}
                    >
                      Deny
                    </button>
                    <button className="btn btn-xs w-32 btn-info">
                      Feedback
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(_id);
                      }}
                      className="btn btn-xs w-32 btn-error"
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

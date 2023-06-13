import Swal from "sweetalert2";
import Loading from "../../components/Common/Loading";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ManageClasses = () => {
  const axiosSecure = useAxios();
  const { user, loading } = useAuth();
  const [classId, setClassId] = useState("");
  const { register, handleSubmit } = useForm();
  const {
    isLoading,
    data: classes = [],
    refetch,
  } = useQuery("classes", async () => {
    const response = await axiosSecure.get(`/classes-all?email=${user.email}`);

    return response.data;
  });

  const handleClassStatus = (id, status, instructorEmail) => {
    axiosSecure
      .patch(`/change-class/${id}`, {
        status: status,
        instructorEmail: instructorEmail,
      })
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

  const handleSendFeedback = (data) => {
    console.log(data.feedback);
    const id = classId;
    console.log(id);
    
    axiosSecure
      .patch(`/feedback/${id}`, {
        feedback: data.feedback,
      })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: `feedback send successfully`,
          });
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
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
                      disabled={
                        classStatus === "approved" || classStatus === "denied"
                      }
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        handleClassStatus(_id, "denied", instructorEmail);
                      }}
                      className="btn btn-xs w-32 btn-warning"
                      disabled={
                        classStatus === "approved" || classStatus === "denied"
                      }
                    >
                      Deny
                    </button>
                    <button
                      className="btn btn-xs w-32 btn-info"
                      onClick={() => {
                        window.my_modal_3.showModal();
                        setClassId(_id);
                      }}
                    >
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

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              <button
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>

            <div>
              <h3 className="font-bold text-lg">Send feedback</h3>
              <form onSubmit={handleSubmit(handleSendFeedback)}>
                <div className="form-control mt-3">
                  <textarea
                    placeholder="Write Feedback"
                    className="input textarea h-32 input-bordered "
                    {...register("feedback", {
                      required: "Please type something",
                    })}
                  ></textarea>
                </div>
                <button
                  className="btn btn-primary w-64 mt-3 border-0"
                  type="submit"
                >
                  Send Feedback
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default ManageClasses;

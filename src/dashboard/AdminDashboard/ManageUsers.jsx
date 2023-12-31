import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "react-query";
import Loading from "../../components/Common/Loading";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const {
    isLoading,
    data: users = [],
    refetch,
  } = useQuery(("user", user?.email), async () => {
    const response = await axiosSecure.get(`/users?email=${user?.email}`);
    return response.data;
  });

  const changeUserRole = (id, role) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will change the user's role.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change role!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/change-user-role/${id}`, { role: role, email: user?.email })
          .then((response) => {
            if (response.data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: `User role updated to ${role} successfully.`,
              });
              refetch();
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          })
          .catch((error) => {
            console.log(error);
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
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ _id, userName, email, role, image }, index) => (
              <tr key={_id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt={userName + "image"} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{userName}</div>
                    </div>
                  </div>
                </td>
                <td>{email}</td>
                <td className="capitalize">{role}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => changeUserRole(_id, "admin")}
                    className="btn btn-sm btn-danger"
                    disabled={role === "admin" }
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={() => changeUserRole(_id, "instructor")}
                    className="btn btn-sm btn-warning"
                    disabled={role === "admin" || role === "instructor"}
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;


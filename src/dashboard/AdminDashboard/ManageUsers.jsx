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
    console.log(response);

    return response.data;
  });

  const changeUserRole = (id, role) => {
    console.log(id, role);
    axiosSecure
      .patch(`/change-user-role/${id}`, { role: role })
      .then((response) => {
        console.log(response.data);

        if (response.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "user role updated successfully",
          });
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
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
            {users.map(({ _id, userName, email, role }, index) => (
              <tr key={_id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{userName}</div>
                    </div>
                  </div>
                </td>
                <td>{email}</td>
                <td>{role}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => changeUserRole(_id, "admin")}
                    className="btn btn-sm btn-danger"
                    disabled={role ===  'admin'}
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={() => changeUserRole(_id, "Instructor")}
                    className="btn btn-sm btn-warning"
                    disabled={role === 'instructor' || 'admin'}
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

// useEffect(() => {
//   if (user?.email) {
//     axiosSecure
//       .get(`/users?email=${user?.email}`)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }, [user]);

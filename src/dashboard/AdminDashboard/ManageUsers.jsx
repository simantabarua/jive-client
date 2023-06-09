import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "react-query";
import Loading from "../../components/Common/Loading";

const ManageUsers = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
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

  const { isLoading, data: users = [] } = useQuery(
    ("user", user?.email),
    async () => {
      const response = await axiosSecure.get(`/users?email=${user?.email}`);
      console.log(response);

      return response.data;
    }
  );

  if (isLoading) {
    return <Loading />;
  }
  console.log(users);

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
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">John Doe</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>john.doe@example.com</td>
                <td>Student</td>
                <td>
                  <button className="button button-primary">
                    Make Instructor
                  </button>
                  <button className="button button-primary">Make Admin</button>
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

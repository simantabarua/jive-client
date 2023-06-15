import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRoleChecker = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const email = user?.email;

  const fetchUser = async () => {
    if (!email) {
      return;
    }
    const response = await axiosSecure.get(`/check-user?email=${email}`);
    return response.data;
  };

  const { data: role, isLoading: useRoleLoading } = useQuery(
    ["user", email],
    fetchUser
  );

  return { role, useRoleLoading };
};

export default useRoleChecker;

// if (!email) {
//   return null;
// }

// if (useRoleLoading) {
//   return null;
// }

// if (error) {
//   return null;
// }

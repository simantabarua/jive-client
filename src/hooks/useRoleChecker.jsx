import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRoleChecker = () => {
  const axiosSecure = useAxios();
  const { user , loading} = useAuth();
  const token = localStorage.getItem("access-token");

  const fetchUser = async () => {
    if (!loading && token !== null) {
      const response = await axiosSecure.get(`/check-user?email=${user?.email}`);
    return await response.data;
   }
  };

  const { data: role, isLoading: useRoleLoading } = useQuery(
    ["role", user?.email],
    fetchUser
  );

  return { role, useRoleLoading };
};

export default useRoleChecker;



import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const fetchUserRole = async (axiosSecure, email) => {
  const response = await axiosSecure.get(`/check-user?email=${email}`);
  return response.data;
};

const useRoleChecker = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const email = user?.email;
  const { data: role } = useQuery("role", () => fetchUserRole(axiosSecure, email));
  return role;
};

export default useRoleChecker;

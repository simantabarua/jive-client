import { useEffect } from "react";
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRoleChecker = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const email = user?.email;

  const { data: role, isLoading } = useQuery(["role", email], async () => {
    if (!user) {
      return "student";
    } else {
      const response = await axiosSecure.get(`/check-user?email=${email}`);
      return response.data;
    }
  });

  useEffect(() => {
    console.log(role);
  }, [role]);

  return { role, isLoading };
};

export default useRoleChecker;

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRoleChecker = () => {
  const [role, setRole] = useState("student");
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const email = user?.email;

  const { data: userRole, isLoading } = useQuery(["role", email], async () => {
    if (!user) {
      setRole("student");
      return;
    } else {
      const response = await axiosSecure.get(`/check-user?email=${email}`);
      setRole(response.data);
      return userRole;
    }
  });

  useEffect(() => {
    console.log(role);
  }, [role]);

  return { role, isLoading };
};

export default useRoleChecker;

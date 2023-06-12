import { useQuery } from "react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

function useLoadSelectClass() {
  const { axiosSecure } = useAxios();
  const { user } = useAuth();
  const {
    isLoading,
    data: selectedClasses = [],
    refetch,
  } = useQuery("selectedClasses", async () => {
    const response = await axiosSecure.get(
      `/selected-class?email=${user?.email}`
    );
    return response.data;
  });
  return { isLoading, selectedClasses, refetch };
}

export default useLoadSelectClass;

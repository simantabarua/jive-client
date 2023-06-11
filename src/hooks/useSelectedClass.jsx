import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useSelectedClass = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
  
    const {
      isLoading,
      data: classes = [],
      refetch,
    } = useQuery(("selectedClasses", user?.email), async () => {
      const response = await axiosSecure.get(
        `/selected-class?email=${user?.email}`
      );
      return response.data;
    });
  return {isLoading, classes, refetch}
}

export default useSelectedClass
import { useQuery } from "react-query";
import useAxios from "./useAxios";

const useClasses = () => {
  const axiosSecure = useAxios();
  const { isLoading, data: classes = [] } = useQuery("classes", async () => {
    const response = await axiosSecure.get("/classes");
    return response.data;
  });

  return {
    isLoading,
    classes,
  };
};

export default useClasses;

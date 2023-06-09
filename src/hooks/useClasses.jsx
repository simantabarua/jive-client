import { useQuery } from "react-query";
import useAxios from "./useAxios";

const useClasses = () => {
  const axiosSecure = useAxios();
  const { isLoading, data: classes } = useQuery("classes", () => {
    return axiosSecure.get("/classes");
  });

  return {
    isLoading,
    classes,
  };
};

export default useClasses;

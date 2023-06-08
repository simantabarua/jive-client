import axios from "axios";
import { useQuery } from "react-query";

const useClasses = () => {
  const { isLoading, data: classes } = useQuery("classes", () => {
    return axios.get("http://localhost:5000/classes");
  });
console.log(classes);


  return {
    isLoading,
    classes,
  
  };
};

export default useClasses;

import axios from "axios";

import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useAxios = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  // const axiosSecure = axios.create({
  //   baseURL: "https://jive-server.vercel.app",
  // });

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });
  //request
  axiosSecure.interceptors.request.use((request) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  });
  //response
  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxios;

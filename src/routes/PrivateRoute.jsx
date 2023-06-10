import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Common/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true} state={{ from: location }} />;
};

export default PrivateRoute;

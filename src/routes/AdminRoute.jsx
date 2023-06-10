import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Common/Loading";
import useRoleChecker from "../hooks/useRoleChecker";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const role = useRoleChecker();

  const location = useLocation();
  console.log(role);

  if (loading) {
    return <Loading />;
  }
  if (user && role === "admin") {
    return children;
  }
  return <Navigate to="/" replace={true} state={{ from: location }} />;
};

export default AdminRoute;

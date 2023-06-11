import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Common/Loading";
import useRoleChecker from "../hooks/useRoleChecker";
import useAuth from "../hooks/useAuth";

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const {role, userLoading} = useRoleChecker();

  const location = useLocation();
  console.log(role);

  if (loading || userLoading) {
    return <Loading />;
  }
  if (user && role === "student") {
    return children;
  }
  return <Navigate to="/" replace={true} state={{ from: location }} />;
};

export default StudentRoute;

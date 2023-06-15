import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Common/Loading";
import useRoleChecker from "../hooks/useRoleChecker";
import useAuth from "../hooks/useAuth";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const {role, useRoleLoading} = useRoleChecker();
  const location = useLocation();

  if (loading || useRoleLoading) {
    return <Loading />;
  }
  if (user && role === "instructor") {
    return children;
  }
  return <Navigate to="/" replace={true} state={{ from: location }} />;
};

export default InstructorRoute;

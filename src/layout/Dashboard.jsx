import { Outlet } from "react-router-dom";
import DashboardNav from "../components/Dashboard/DashboardNav";
import Sidebar from "../components/Dashboard/Sidebar";
import useRoleChecker from "../hooks/useRoleChecker";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Common/Loading";

const Dashboard = () => {
  const {role, } = useRoleChecker();
  const { loading, userLoading } = useAuth();
  if (loading || userLoading) {
    return <Loading />;
  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <DashboardNav />
        <Outlet />
      </div>
      <Sidebar userRole={role} />
    </div>
  );
};

export default Dashboard;

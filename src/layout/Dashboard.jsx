import { Outlet } from "react-router-dom";
import DashboardNav from "../components/Dashboard/DashboardNav";
import Sidebar from "../components/Dashboard/Sidebar";
import useRoleChecker from "../hooks/useRoleChecker";

const Dashboard = () => {
  const role = useRoleChecker();
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

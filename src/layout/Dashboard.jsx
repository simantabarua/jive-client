import { Outlet } from "react-router-dom";
import DashboardNav from "../components/Dashboard/DashboardNav";
import Sidebar from "../components/Dashboard/Sidebar";

const Dashboard = () => {
  const userRole = "admin";
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <DashboardNav/>
        <Outlet />
      </div>
      <Sidebar userRole={userRole}/>
    </div>
  );
};

export default Dashboard;

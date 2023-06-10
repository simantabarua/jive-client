import { Outlet } from "react-router-dom";
import DashboardNav from "../components/Dashboard/DashboardNav";
import Sidebar from "../components/Dashboard/Sidebar";
import { useQuery } from "react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: role } = useQuery("role", async () => {
    if (user) {
      const response = await axiosSecure.get(
        `/check-user?email=${user?.email}`
      );
      return response.data;
    }
  });
  
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

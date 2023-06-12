import { NavLink } from "react-router-dom";

const Sidebar = ({ userRole }) => {
  return (
    <div className="drawer-side ">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className=" space-y-5 bg-base-200 p-4 w-56 h-full">
        {userRole === "admin" && (
          <>
            <ul className="menu menu-compact  bg-base-200 w-52 rounded-box">
              <li>
                <NavLink to="/dashboard/manage-classes">Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-users">Manage Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-orders">Manage Orders</NavLink>
              </li>
            </ul>
          </>
        )}

        {userRole === "instructor" && (
          <>
            <ul className="menu menu-compact   bg-base-200 w-52 rounded-box">
              <li className="menu-title">Title</li>
              <li>
                <NavLink to="/dashboard/my-classes">My Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-class">Add a Class</NavLink>
              </li>
            </ul>
          </>
        )}

        {userRole === "student" && (
          <>
            <ul className="menu menu-compact nu bg-base-200 w-52 rounded-box">
              <li className="menu-title">Title</li>
              <li>
                <NavLink to="/dashboard/my-selected-classes">
                  My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-enrolled-classes">
                  My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">Payment</NavLink>
              </li>
            </ul>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

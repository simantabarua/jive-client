import { NavLink } from "react-router-dom";
import { FaChalkboardTeacher, FaMoneyBill,  FaUserFriends, FaUsersCog } from "react-icons/fa";
import { HiDocumentAdd, HiShoppingCart } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
const Sidebar = ({ userRole }) => {
  return (
    <div className="drawer-side ">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className=" space-y-5 bg-base-200 p-4 w-56 h-full">
        {userRole === "admin" && (
          <>
            <ul className="menu menu-compact  bg-base-200 w-52 rounded-box">
              <li>
                <NavLink to="/dashboard/manage-classes">
                  <FaUserFriends /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-users">
                  <FaUsersCog /> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-orders">
                  <HiShoppingCart /> Manage Orders
                </NavLink>
              </li>
            </ul>
          </>
        )}

        {userRole === "instructor" && (
          <>
            <ul className="menu menu-compact   bg-base-200 w-52 rounded-box">
              <li className="menu-title">Title</li>
              <li>
                <NavLink to="/dashboard/my-classes">
                  <FaChalkboardTeacher /> My Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-class">
                  <HiDocumentAdd /> Add a Class
                </NavLink>
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
                  <FaChalkboardTeacher /> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-enrolled-classes">
               <FaMoneyBill/>   My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <MdPayment /> Payment
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

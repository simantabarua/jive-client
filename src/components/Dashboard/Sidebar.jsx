import { NavLink } from 'react-router-dom'

const Sidebar = ({userRole}) => {
  
  return (
    <div className="drawer-side ">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className=" space-y-5 bg-base-200 p-4 w-80 h-full">
          {userRole === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/manage-classes">Manage Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-users">Manage Users</NavLink>
              </li>
            </>
          )}

          {userRole === "instructor" && (
            <>
              <li>
                <NavLink to="/dashboard/add-class">Add a Class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-classes">My Classes</NavLink>
              </li>
            </>
          )}

          {userRole === "student" && (
            <>
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
            </>
          )}
        </ul>
      </div>
  )
}

export default Sidebar
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Avatar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logOut, user } = useAuth();

  const handleLogOut = () => {
    logOut();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="dropdown dropdown-end z-10">
        <label
          onClick={toggleMenu}
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img src={user?.photoURL} alt="Avatar" />
          </div>
        </label>
        {isMenuOpen && (
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64"
          >
            <div className="text-center p-4">
              <h2 className="font-semibold">{user?.displayName}</h2>
              <p>{user?.email}</p>
            </div>
            <li>
              <Link to={"/profile"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogOut}>Logout</a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Avatar;

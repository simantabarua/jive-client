import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../utils/links";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { HiMenuAlt1, HiMoon, HiOutlineX, HiSun } from "react-icons/hi";
import useAuth from "../../hooks/useAuth";
import Avatar from "../Common/Avatar";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    themeChange(false);
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(prefersDarkMode.matches);
    }
  }, []);

  const menuLinks = navLinks.map(({ label, path }, index) => (
    <li key={index}>
      <NavLink to={path}>{label}</NavLink>
    </li>
  ));
  return (
    <>
      <div className="w-full  bg-base-300 z-10">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <button
                className="btn-circle btn-sm flex justify-center items-center"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <HiOutlineX /> : <HiMenuAlt1 />}
              </button>
              {isMenuOpen && (
                // for mobile
                <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52 z-10">
                  {menuLinks}
                  {user && <NavLink to="/dashboard">Dashboard</NavLink>}
                </ul>
              )}
            </div>
            <a className="btn btn-ghost normal-case text-xl">Jive</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            {/* for desktop */}
            <ul className="menu-horizontal gap-2 lg:gap-5  items-center font-semibold">
              {menuLinks}
              {user && <NavLink to="/dashboard">Dashboard</NavLink>}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="mx-2">
              {isDarkMode ? (
                <button
                  className="btn-circle transition duration-400 transform rotate-45  "
                  data-set-theme="light"
                >
                  <HiSun
                    className="w-8 h-8 inline"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                  />
                </button>
              ) : (
                <button
                  className="btn-circle transition duration-400 "
                  data-set-theme="dark"
                >
                  <HiMoon
                    className="w-8 h-8 inline"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                  />
                </button>
              )}
            </div>
            {user ? (
              <Avatar />
            ) : (
              <Link to="/login">
                <button className="btn btn-primary">login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

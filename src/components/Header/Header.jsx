import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { HiMenuAlt1, HiMoon, HiOutlineX, HiSun } from "react-icons/hi";
import { IoLanguageOutline } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import Avatar from "../Common/Avatar";
import { navLinks } from "../../utils/links";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  const menuLinks = navLinks.map(({ label, path, submenu }, index) => (
    <li key={index} className="relative group">
      <NavLink to={path}>{label}</NavLink>
      {submenu && (
        <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg p-2 mt-2">
          {submenu.map((subLink, subIndex) => (
            <li key={subIndex}>
              <NavLink
                to={subLink.path}
                className="hover:bg-gray-200 p-2 rounded"
              >
                {subLink.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  return (
    <div className="w-full bg-base-300 z-10">
      <div className="navbar container mx-auto">
        {/* Navbar Start: Mobile Toggle, Brand */}
        <div className="navbar-start flex items-center">
          <button
            className="btn-circle btn-sm flex lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiMenuAlt1 />}
          </button>
          <a className="btn btn-ghost normal-case text-xl ml-2">Jive</a>
        </div>

        {/* Navbar Center: Links and Search */}
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu-horizontal gap-4 font-semibold">
            {menuLinks}
            {user && <NavLink to="/dashboard">Dashboard</NavLink>}
          </ul>
        </div>

        {/* Navbar End: Theme Toggle, Language, User Avatar/Login */}
        <div className="navbar-end flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            className="btn-circle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            data-set-theme={isDarkMode ? "light" : "dark"}
          >
            {isDarkMode ? (
              <HiSun className="text-lg" />
            ) : (
              <HiMoon className="text-lg" />
            )}
          </button>

          {/* Language Toggle */}
          <button className="btn btn-ghost hidden lg:inline-flex items-center">
            <IoLanguageOutline className="mr-1" /> EN
          </button>

          {/* User Avatar or Login */}
          {user ? (
            <div className="dropdown dropdown-end">
              <Avatar className="btn btn-circle btn-ghost" />
              
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-base-100 p-4 rounded-md shadow-lg">
          <ul className="space-y-2">
            {menuLinks}
            {user && <NavLink to="/dashboard">Dashboard</NavLink>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

import React, { useContext } from "react";
import { Link, NavLink } from "react-router"; // Assuming v6+
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthContext";
import logo from "../assets/logo.png";
import MyLink from "./MyLink"; // Assuming this handles active styling

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => toast.error(error.message));
  };

  // Shared Navigation Links
  const navLinks = (
    <>
      <li>
        <MyLink to="/">Home</MyLink>
      </li>
      <li>
        <MyLink to="/service">Service</MyLink>
      </li>
      <li>
        <MyLink to="/about">About</MyLink>
      </li>
      <li>
        <MyLink to="/contact">Contact</MyLink>
      </li>
      {user && (
        <li>
          <MyLink to="/my-profile">My Profile</MyLink>
        </li>
      )}
      {/* Add Login/Register to mobile menu only if not logged in */}
      {!user && (
        <li className="lg:hidden">
          <Link to="/login">Login</Link>
        </li>
      )}
      {!user && (
        <li className="lg:hidden">
          <Link to="/register">Register</Link>
        </li>
      )}
    </>
  );

  return (
    // Outer Container: Sticky, blurred, constrained width
    <div className="sticky top-4 z-50 w-11/12  mx-auto">
      <div className="navbar bg-white/80 backdrop-blur-md shadow-lg rounded-full px-4 sm:px-8 mt-2 transition-all duration-300">

        {/* --- Navbar Start: Mobile Menu & Logo --- */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="WarmPaws" className="w-10 h-10 object-contain" />
            <span className="font-bold text-xl hidden sm:block text-gray-700">WarmPaws</span>
          </NavLink>
        </div>

        {/* --- Navbar Center: Desktop Links --- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium text-gray-600">
            {navLinks}
          </ul>
        </div>

        {/* --- Navbar End: Auth Actions --- */}
        <div className="navbar-end gap-3">
          {user ? (
            // LOGGED IN STATE: Avatar Dropdown
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-2">
                <div className="w-10 rounded-full">
                  <img
                    alt={user?.displayName || "User"}
                    src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li className="menu-title px-4 py-2 text-primary font-bold">
                  {user?.displayName || "Welcome Back"}
                </li>
                <li>
                  <Link to="/my-profile" className="justify-between">
                    My Profile
                    <span className="badge badge-sm badge-primary">New</span>
                  </Link>
                </li>
                <li><a>Settings</a></li>
                <div className="divider my-0"></div>
                <li><button onClick={handleLogOut} className="text-error">Logout</button></li>
              </ul>
            </div>
          ) : (
            // LOGGED OUT STATE: Buttons
            <div className="hidden lg:flex items-center gap-2">
              <Link to="/login" className="btn btn-outline btn-primary rounded-full px-8">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary text-white px-6 rounded-full hover:shadow-lg transition-transform hover:-translate-y-0.5">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React, { use } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import MyLink from "./MyLink";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const links = (
    <>
      <li>
        <MyLink to={"/"}>Home</MyLink>
      </li>

      <li>
        <MyLink to={"/service"}>Service</MyLink>
      </li>
      <li>
        <MyLink to={"/my-profile"}>My Profile</MyLink>
      </li>
    </>
  );

  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Logout successful
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className=" shadow-sm">
      <div className="w-11/12 mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow "
              >
                {links}
              </ul>
            </div>
            <NavLink to={"/"} className="w-30">
              <img src={logo} alt="WarmPaws Logo" />
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-6">{links}</ul>
          </div>
          <div className="navbar-end flex items-center gap-3 relative group">
            {/* User Image */}
            {user ? (
              <div className="relative">
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-10 h-10 rounded-full -z-10 cursor-pointer"
                />
                {/* Tooltip (Display Name) */}
                <span className="absolute left-1/2 -translate-x-1/2 top-8 bg-[#2f7dad] text-white  text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap translate-y-1 group-hover:translate-y-0">
                  {user?.displayName}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>{" "}
          {/* Login Button */}
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary ml-3">
              Logout
            </button>
          ) : (
           <>
            <Link to={"/login"} className="btn btn-outline btn-primary ml-5">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-outline md:flex items-center justify-center hidden md:block btn-primary ml-3">
              Register
            </Link>
           </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

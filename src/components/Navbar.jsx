import React from "react";
import { NavLink } from "react-router-dom";
import { appConfig } from "../utils/constants";
import { useGlobalDispatch, useGlobalState } from "../providers/GlobalState";

const Navbar = () => {
  const { user, isAuthenticated } = useGlobalState();
  const dispatch = useGlobalDispatch();

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

      const logout = () => {
        console.log("logged out")
        dispatch({ type: "LOGOUT" });
      }

  return (
    <nav
      className={`bg-${appConfig.theme.primaryColor}-700 border-b border-blue-500`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src={appConfig.logo}
                alt="Epic Travel Assistant"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"></span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex items-center space-x-4"> 
                {isAuthenticated ? (
                  <div className="flex items-center"> 
                    <span className="text-white mr-4 font-semibold">Welcome {user.name}</span>
                    <button onClick={logout} className="bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <NavLink to="/login" className={linkClass}>
                      Login
                    </NavLink>
                    <NavLink to="/register" className={linkClass}>
                      Register
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

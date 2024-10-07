import React from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useMainContext } from "../../../hooks/useMainContext";
import { IoIosLogOut } from "react-icons/io";

export default function DashboardSidebarActions() {
  const { handleLogout, setUser, setCurrentUser, setInitializing } =
    useMainContext();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
      <NavLink
        to="/"
        className="w-full bg-secondaryDark flex justify-start items-center text-nowrap gap-3 p-3 rounded-full text-sm transition-color duration-100 hover:bg-primary"
      >
        <FaHome />
      </NavLink>
      <button
        onClick={() => handleLogout(setUser, setCurrentUser, setInitializing)}
        className="w-full bg-secondaryDark flex justify-start items-center text-nowrap gap-3 p-3 rounded-full text-sm transition-color duration-100 hover:bg-primary"
      >
        <IoIosLogOut />
      </button>
    </div>
  );
}

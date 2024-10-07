import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";

export default function DashboardLogo() {
  return (
    <NavLink to="/dashboard" className="w-auto h-auto  rounded-full">
      <div className=" w-8 h-8 md:w-20 md:h-20 rounded-full overflow-hidden flex justify-center items-center transition-all duration-500">
        <img src={Logo} />
      </div>
    </NavLink>
  );
}

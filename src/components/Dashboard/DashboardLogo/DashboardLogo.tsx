import React from "react";
import { NavLink } from "react-router-dom";

type DashboardLogoProps = {
  isOpen: boolean;
};

export default function DashboardLogo({ isOpen }: DashboardLogoProps) {
  return (
    <NavLink to="/dashboard" className="w-auto h-auto  rounded-full mt-5">
      <div
        className={`${
          isOpen ? "w-20 h-20" : "w-10 h-10 "
        } rounded-full overflow-hidden flex justify-center items-center transition-all`}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbfPCa2_R7W9mwADUg0QCtJVoLkLyd--dZA&s"
          className="scale-100 "
        />
      </div>
    </NavLink>
  );
}

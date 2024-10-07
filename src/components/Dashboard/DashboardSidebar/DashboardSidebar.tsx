import React from "react";

import { NavItems } from "./NavItems";
import { NavLink } from "react-router-dom";
import DashboardSidebarItem from "../DashboardSidebarItem/DashboardSidebarItem";
import DashboardLogo from "../DashboardLogo/DashboardLogo";

import { FaHome } from "react-icons/fa";
import DashboardSidebarActions from "../DashboardSidebarActions/DashboardSidebarActions";

export default function DashboardSidebar() {
  return (
    <>
      <div
        className="
      w-[4rem] md:w-[40%] lg:w-[30%] xl:w-[20%] h-[100dvh] bg-primaryDark flex flex-col justify-between items-center text-white p-3 transition-all duration-500 relative
"
      >
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <DashboardLogo />
          <ul className="w-full flex flex-col gap-2">
            {NavItems.map((item) => (
              <DashboardSidebarItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <DashboardSidebarActions />
      </div>
    </>
  );
}

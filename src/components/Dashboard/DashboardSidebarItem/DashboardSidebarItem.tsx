import React from "react";
import { IconType } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";

type DashboardSidebarItemProps = {
  item: { id: number; path: string; label: string; icon: IconType };
};

export default function DashboardSidebarItem({
  item,
}: DashboardSidebarItemProps) {
  const location = useLocation();
  return (
    <li>
      <NavLink
        to={item.path}
        className={`
        w-full bg-secondaryDark flex justify-start items-center text-nowrap gap-3 py-2 px-3 rounded-sm text-sm transition-color duration-100 hover:bg-primary

        ${location.pathname === item.path && "dash-active"}

        `}
      >
        <div>
          <item.icon />
        </div>
        <p className="hidden md:block transition-all duration-500 origin-leftscale-0">
          {item.label}
        </p>
      </NavLink>
    </li>
  );
}

import React from "react";
import { IconType } from "react-icons";

import { NavLink, useLocation } from "react-router-dom";

type DashboardNavbarItemProps = {
  item: { path: string; label: string; icon: string | IconType };
  Icon: string | IconType;
  isOpen: boolean;
};

export default function DashboardNavbarItem({
  item,
  Icon,
  isOpen,
}: DashboardNavbarItemProps) {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <li className="w-full flex" key={item.path}>
      <NavLink
        to={item.path}
        className={`w-full bg-secondaryDark text-white rounded-md text-sm flex justify-start items-center overflow-hidden

        ${pathName === item.path && "dash-active"}`}
      >
        <div className="p-3">
          <Icon size={16} />
        </div>
        <div
          className={`
         origin-left
        ${
          isOpen ? "w-full scale-100" : "w-auto scale-0 hidden"
        } transition-all`}
        >
          {item.label}
        </div>
      </NavLink>
    </li>
  );
}

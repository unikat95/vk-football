import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function DashboardNavbar() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <>
      <ul className="w-full flex gap-2">
        <li>
          <NavLink
            to="/dashboard/teams"
            className={`bg-white px-4 py-1 rounded-md ${
              pathName === "/dashboard/teams" && "bg-red-500 text-white"
            }`}
          >
            Drużyny
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/match-queue"
            className={`bg-white px-4 py-1 rounded-md ${
              pathName === "/dashboard/match-queue" && "bg-red-500 text-white"
            }`}
          >
            Kolejka meczy
          </NavLink>
        </li>
      </ul>
    </>
  );
}

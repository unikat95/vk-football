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
            to="/dashboard/team"
            className={`bg-white px-4 py-1 rounded-md ${
              pathName === "/dashboard/team" && "text-red-500"
            }`}
          >
            Drużyna
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/teams"
            className={`bg-white px-4 py-1 rounded-md ${
              pathName === "/dashboard/teams" && "text-red-500"
            }`}
          >
            Drużyny
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/scoreboard"
            className={`bg-white px-4 py-1 rounded-md ${
              pathName === "/dashboard/scoreboard" && "text-red-500"
            }`}
          >
            Tabela
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/match-queue"
            className={`bg-white px-4 py-1 rounded-md ${
              pathName === "/dashboard/match-queue" && "text-red-500"
            }`}
          >
            Kolejka meczy
          </NavLink>
        </li>
      </ul>
    </>
  );
}

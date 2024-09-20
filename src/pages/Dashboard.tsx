import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { Navigate, Outlet } from "react-router-dom";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar/DashboardNavbar";

export default function Dashboard() {
  const context = useContext(MainContext);
  if (!context) return "loading...";

  const { currentUser } = context;

  if (!currentUser?.isAdmin) return <Navigate to="/" />;

  return (
    <div className="w-full flex flex-col gap-5">
      <DashboardNavbar />
      <Outlet />
    </div>
  );
}

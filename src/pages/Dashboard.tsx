import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar/DashboardSidebar";
import { useMainContext } from "../hooks/useMainContext";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar/DashboardNavbar";

export default function Dashboard() {
  const { currentUser } = useMainContext();

  if (!currentUser?.isAdmin) return <Navigate to="/" />;

  return (
    <div className="w-full h-[100dvh] flex justify-between items-start overflow-hidden relative">
      <DashboardSidebar />

      <div className="w-full h-full overflow-y-auto flex flex-col gap-5">
        <DashboardNavbar />
        <div className="w-full h-full px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

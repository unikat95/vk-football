import React from "react";
import { useMainContext } from "../../../hooks/useMainContext";

export default function DashboardNavbar() {
  const { currentUser } = useMainContext();
  return (
    <div className="w-full h-auto flex items-end justify-end bg-white p-3">
      <div className="w-10 h-10 bg-tertiary p-2 flex justify-center items-center rounded-full">
        {currentUser?.firstName.slice(0, 1)}
        {currentUser?.lastName.slice(0, 1)}
      </div>
    </div>
  );
}

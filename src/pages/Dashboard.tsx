import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const context = useContext(MainContext);
  if (!context) return "loading...";

  const { currentUser } = context;

  if (!currentUser?.isAdmin) return <Navigate to="/" />;

  return <div>Dashboard</div>;
}

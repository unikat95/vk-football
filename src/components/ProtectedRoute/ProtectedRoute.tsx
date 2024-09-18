import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const context = useContext(MainContext);
  if (!context) return "loading...";

  const { currentUser } = context;

  return currentUser ? children : <Navigate to="/" />;
}

import React from "react";

import { Navigate } from "react-router-dom";
import { useMainContext } from "../../hooks/useMainContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser } = useMainContext();

  return currentUser ? children : <Navigate to="/" />;
}

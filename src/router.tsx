import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Team from "./pages/Team";
import Table from "./pages/Table";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/table" element={<Table />} />
    </Route>
  )
);

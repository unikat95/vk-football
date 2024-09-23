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
import Teams from "./components/Dashboard/Teams/Teams";
import MatchQueue from "./components/Dashboard/MatchQueue/MatchQueue";
import ScoreboardPage from "./components/Dashboard/ScoreboardPage/ScoreboardPage";

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
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="team" element={<Team />} />
        <Route path="teams" element={<Teams />} />
        <Route path="match-queue" element={<MatchQueue />} />
        <Route path="scoreboard" element={<ScoreboardPage />} />
      </Route>
      <Route path="/team" element={<Team />} />
      <Route path="/table" element={<Table />} />
    </Route>
  )
);

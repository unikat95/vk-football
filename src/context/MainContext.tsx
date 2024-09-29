import React, { createContext, useState } from "react";

import { MainContextProps, MainProviderProps } from "./ContextTypes";

import { handleLogin, handleSignUp, handleLogout } from "./AuthFunctions";
import { handleAddTeam } from "./MainFunctions";

import { useAuth } from "../hooks/useAuth";
import PageLoading from "../components/PageLoading/PageLoading";
import { useTeams } from "../hooks/useTeams";
import { usePlayers } from "../hooks/usePlayers";

export const MainContext = createContext<MainContextProps | null>(null);

export default function MainProvider({ children }: MainProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    user,
    setUser,
    currentUser,
    setCurrentUser,
    loading,
    initializing,
    setInitializing,
  } = useAuth();
  const { teams, setTeams, sortedTeams } = useTeams();
  const { players, setPlayers } = usePlayers();

  if (loading || initializing) return <PageLoading />;

  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        currentUser,
        setCurrentUser,
        loading,
        initializing,
        setInitializing,
        isModalOpen,
        setIsModalOpen,

        teams,
        setTeams,
        sortedTeams,

        players,
        setPlayers,

        handleLogin,
        handleSignUp,
        handleLogout,

        handleAddTeam,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

import React, { createContext, useState } from "react";

import { MainContextProps, MainProviderProps } from "./ContextTypes";

import { handleLogin, handleSignUp, handleLogout } from "./AuthFunctions";
import { handleAddTeam } from "./MainFunctions";

import { useAuth } from "../hooks/useAuth";
import PageLoading from "../components/PageLoading/PageLoading";
import { useTeams } from "../hooks/useTeams";

export const MainContext = createContext<MainContextProps | null>(null);

export default function MainProvider({ children }: MainProviderProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {
    user,
    setUser,
    currentUser,
    setCurrentUser,
    loading,
    initializing,
    setInitializing,
  } = useAuth();
  const { teams, setTeams } = useTeams();

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

        teams,
        setTeams,

        openModal,
        setOpenModal,

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

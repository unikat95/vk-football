import React, { createContext, useState } from "react";

import { MainContextProps, MainProviderProps } from "./ContextTypes";

import { handleLogin, handleSignUp, handleLogout } from "./AuthFunctions";

import { useAuth } from "../hooks/useAuth";
import PageLoading from "../components/PageLoading/PageLoading";

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

        openModal,
        setOpenModal,

        handleLogin,
        handleSignUp,
        handleLogout,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

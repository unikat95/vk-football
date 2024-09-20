import { User } from "firebase/auth";
import React, { SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

export type UserProps = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  isAdmin: boolean;
  isCompleted: boolean;
};

export type TeamProps = {
  id: string;
  name: string;
  stadium: string;
  logo: string;
};

export type MainContextProps = {
  user: User | null;
  setUser: React.Dispatch<SetStateAction<User | null>>;
  currentUser: UserProps | null;
  setCurrentUser: React.Dispatch<SetStateAction<UserProps | null>>;
  loading: boolean;
  initializing: boolean;
  setInitializing: React.Dispatch<SetStateAction<boolean>>;
  teams: TeamProps[];
  setTeams: React.Dispatch<SetStateAction<TeamProps[]>>;

  openModal: boolean;
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;

  handleLogin: (
    email: string,
    password: string,
    setLoading: React.Dispatch<SetStateAction<boolean>>,
    setInitializing: React.Dispatch<SetStateAction<boolean>>,
    setOpenModal: React.Dispatch<SetStateAction<boolean>>,
    currentUser: UserProps | null,
    navigate: NavigateFunction
  ) => void;
  handleSignUp: (
    email: string,
    password: string,
    setLoading: React.Dispatch<SetStateAction<boolean>>,
    setInitializing: React.Dispatch<SetStateAction<boolean>>,
    setOpenModal: React.Dispatch<SetStateAction<boolean>>,
    currentUser: UserProps | null,
    navigate: NavigateFunction
  ) => void;
  handleLogout: (
    setUser: React.Dispatch<SetStateAction<User | null>>,
    setCurrentUser: React.Dispatch<SetStateAction<UserProps | null>>,
    setInitializing: React.Dispatch<SetStateAction<boolean>>
  ) => void;

  handleAddTeam: (
    id: string,
    teamName: string,
    teamStadoum: string,
    logo: string
  ) => void;
};
export type MainProviderProps = {
  children: React.ReactNode;
};

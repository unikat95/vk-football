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

export type PlayerProps = {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  age: string;
};

export type TeamProps = {
  id: string;
  name: string;
  stadium: string;
  logo: string;
  points: number;
  winnings: number;
  draws: number;
  lost: number;
  goalsScored: number;
  goalsConceded: number;
  hostMatches: number;
  hostWinnings: number;
  hostDraws: number;
  hostLost: number;
  hostGoalsScored: number;
  hostGoalsConceded: number;
  awayMatches: number;
  awayWinnings: number;
  awayDraws: number;
  awayLost: number;
  awayGoalsScored: number;
  awayGoalsConceded: number;
  directMatches: number;
  directWinnings: number;
  directDraws: number;
  directLost: number;
  directGoalsScored: number;
  directGoalsConceded: number;
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
  sortedTeams: TeamProps[];
  players: PlayerProps[];
  setPlayers: React.Dispatch<SetStateAction<PlayerProps[]>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;

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

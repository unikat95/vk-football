import { BsMicrosoftTeams } from "react-icons/bs";
import { MdScoreboard, MdArticle } from "react-icons/md";
import { HiQueueList } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa6";
import { IoMdFootball } from "react-icons/io";

export const navItems = [
  {
    path: "/dashboard/players",
    label: "Zawodnicy",
    icon: IoMdFootball,
  },
  {
    path: "/dashboard/teams",
    label: "Drużyny",
    icon: BsMicrosoftTeams,
  },
  {
    path: "/dashboard/scoreboard",
    label: "Tabela",
    icon: MdScoreboard,
  },
  {
    path: "/dashboard/match-queue",
    label: "Kolejka meczów",
    icon: HiQueueList,
  },
  { path: "/dashboard/posts", label: "Posty", icon: MdArticle },
  {
    path: "/dashboard/users",
    label: "Użytkownicy",
    icon: FaUsers,
  },
];

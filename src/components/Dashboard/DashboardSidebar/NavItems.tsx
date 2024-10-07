import { BsMicrosoftTeams } from "react-icons/bs";
import { MdScoreboard, MdArticle } from "react-icons/md";
import { HiQueueList } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";

export const NavItems = [
  {
    id: 1,
    path: "/dashboard",
    label: "Home",
    icon: FaHome,
  },
  {
    id: 2,
    path: "/dashboard/players",
    label: "Zawodnicy",
    icon: IoMdFootball,
  },
  {
    id: 3,
    path: "/dashboard/teams",
    label: "Drużyny",
    icon: BsMicrosoftTeams,
  },
  {
    id: 4,
    path: "/dashboard/scoreboard",
    label: "Tabela",
    icon: MdScoreboard,
  },
  {
    id: 5,
    path: "/dashboard/match-queue",
    label: "Kolejka meczów",
    icon: HiQueueList,
  },
  {
    id: 6,
    path: "/dashboard/posts",
    label: "Posty",
    icon: MdArticle,
  },
  {
    id: 7,
    path: "/dashboard/users",
    label: "Użytkownicy",
    icon: FaUsers,
  },
];

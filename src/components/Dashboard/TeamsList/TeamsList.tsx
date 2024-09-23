import React, { useContext } from "react";

import { MainContext } from "../../../context/MainContext";

import { GiSoccerField } from "react-icons/gi";

export default function TeamsList() {
  const context = useContext(MainContext);
  if (!context) return;

  const { teams } = context;

  return (
    <div className="w-full bg-white flex flex-col gap-5 p-5 rounded-md">
      <div className="w-full flex justify-center items-center">
        Podkarpackie | Klasa B | Jarosław
      </div>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {teams.map((team) => (
          <div
            key={team.id}
            className="w-auto h-auto bg-zinc-200 p-5 rounded-md flex flex-col justify-center items-center gap-3"
          >
            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-white">
              Logo
            </div>
            <div>{team.name}</div>
            <div className="w-full flex justify-center items-center gap-1 text-sm">
              <GiSoccerField size={16} /> {team.stadium}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

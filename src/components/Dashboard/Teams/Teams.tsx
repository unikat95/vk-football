import React, { useContext } from "react";
import AddTeamForm from "../AddTeamForm/AddTeamForm";
import { MainContext } from "../../../context/MainContext";
import PageLoading from "../../PageLoading/PageLoading";

export default function Teams() {
  const context = useContext(MainContext);
  if (!context) return <PageLoading />;

  const { teams } = context;

  return (
    <div className="w-full flex flex-col gap-5">
      <AddTeamForm />
      <div className="w-full grid grid-cols-2 gap-2">
        {teams.map((team) => (
          <div
            key={team.id}
            className="w-full flex flex-col justify-center items-center bg-white p-5 gap-2 rounded-md"
          >
            <img src={team.logo} alt="" className="w-20 h-20" />
            <div>{team.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

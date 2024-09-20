import React, { ChangeEvent, useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { IoIosAddCircleOutline } from "react-icons/io";

import CtaButton from "../../CtaButton/CtaButton";
import { MainContext } from "../../../context/MainContext";
import PageLoading from "../../PageLoading/PageLoading";

export default function AddTeamForm() {
  const context = useContext(MainContext);
  if (!context) return <PageLoading />;

  const { handleAddTeam } = context;

  const [team, setTeam] = useState({
    name: "",
    stadium: "",
    logo: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const id = uuidv4();
    handleAddTeam(id, team.name, team.stadium, team.logo);
    setTeam({ name: "", stadium: "", logo: "" });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="w-full bg-white flex flex-col gap-2 p-5 rounded-md">
      <h1>Dodaj drużynę:</h1>
      <label htmlFor="name" className="flex flex-col">
        Nazwa:
        <input
          type="text"
          name="name"
          placeholder="nazwa drużyny..."
          onChange={handleInputChange}
          value={team.name}
          className="w-full border-[1px] border-slate-300 px-3 py-1"
        />
      </label>
      <label htmlFor="stadium">
        Stadion:
        <input
          type="text"
          name="stadium"
          placeholder="stadion..."
          onChange={handleInputChange}
          value={team.stadium}
          className="w-full border-[1px] border-slate-300 px-3 py-1"
        />
      </label>
      <label htmlFor="stadium">
        Logo:
        <input
          type="text"
          name="logo"
          placeholder="logo..."
          onChange={handleInputChange}
          value={team.logo}
          className="w-full border-[1px] border-slate-300 px-3 py-1"
        />
      </label>

      <CtaButton
        text="Dodaj drużynę"
        Icon={IoIosAddCircleOutline}
        onClick={handleSubmit}
      />
    </form>
  );
}

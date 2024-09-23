import React, {
  ChangeEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { v4 as uuidv4 } from "uuid";
import { IoIosAddCircleOutline } from "react-icons/io";

import CtaButton from "../../CtaButton/CtaButton";
import { MainContext } from "../../../context/MainContext";
import PageLoading from "../../PageLoading/PageLoading";

type AddTeamFormProps = {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function AddTeamForm({ setIsOpen }: AddTeamFormProps) {
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

    if (!team.name || !team.stadium) return;

    const id = uuidv4();
    handleAddTeam(id, team.name, team.stadium, team.logo);
    setTeam({ name: "", stadium: "", logo: "" });
    setIsOpen(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="w-full bg-white flex flex-col gap-5 rounded-md">
      <h1 className="text-xl font-semibold">Dodaj drużynę:</h1>
      <label htmlFor="name" className="flex flex-col gap-1">
        Nazwa:
        <input
          type="text"
          name="name"
          placeholder="nazwa drużyny..."
          onChange={handleInputChange}
          value={team.name}
          className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
        />
      </label>
      <label htmlFor="stadium" className="flex flex-col gap-1">
        Stadion:
        <input
          type="text"
          name="stadium"
          placeholder="stadion..."
          onChange={handleInputChange}
          value={team.stadium}
          className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
        />
      </label>
      <label htmlFor="stadium" className="flex flex-col gap-1">
        Logo:
        <input
          type="text"
          name="logo"
          placeholder="logo..."
          onChange={handleInputChange}
          value={team.logo}
          className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
        />
      </label>

      <CtaButton
        text="Dodaj drużynę"
        Icon={IoIosAddCircleOutline}
        onClick={handleSubmit}
        disabled={!team.name || !team.stadium}
      />
    </form>
  );
}

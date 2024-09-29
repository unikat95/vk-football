import React, { ChangeEvent, SetStateAction, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { IoIosAddCircleOutline } from "react-icons/io";

import CtaButton from "../../CtaButton/CtaButton";
import FormInput from "../../FormInput/FormInput";
import { useMainContext } from "../../../hooks/useMainContext";

type AddTeamFormProps = {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function AddTeamForm({ setIsOpen }: AddTeamFormProps) {
  const { handleAddTeam } = useMainContext();

  const [team, setTeam] = useState({
    name: "",
    stadium: "",
    logo: "",
  });

  const incompleteTeam = !team.name || !team.stadium || !team.logo;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (incompleteTeam) return;

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
    <form className="w-full bg-white flex flex-col justify-center items-end gap-5 rounded-md">
      <h1 className="w-full flex justify-center items-center text-xl font-semibold py-5">
        Dodaj drużynę:
      </h1>
      <FormInput
        type="text"
        name="name"
        placeholder="nazwa drużyny..."
        value={team.name}
        onChange={handleInputChange}
        label="Nazwa:"
      />
      <FormInput
        type="text"
        name="stadium"
        placeholder="stadion..."
        value={team.stadium}
        onChange={handleInputChange}
        label="Stadion:"
      />
      <FormInput
        type="text"
        name="logo"
        placeholder="logo..."
        value={team.logo}
        onChange={handleInputChange}
        label="Logo:"
      />

      <CtaButton
        text="Dodaj drużynę"
        Icon={IoIosAddCircleOutline}
        onClick={handleSubmit}
        disabled={incompleteTeam}
      />
    </form>
  );
}

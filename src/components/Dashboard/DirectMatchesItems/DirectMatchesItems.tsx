import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import FormInputNumber from "../../FormInputNumber/FormInputNumber";

type HostMatchesItemsProps = {
  formInput: {
    directWinnings: number;
    directDraws: number;
    directLost: number;
    directGoalsScored: number;
    directGoalsConceded: number;
  };
  setFormInput: Dispatch<
    SetStateAction<{
      hostWinnings: number;
      hostDraws: number;
      hostLost: number;
      hostGoalsScored: number;
      hostGoalsConceded: number;
      awayWinnings: number;
      awayDraws: number;
      awayLost: number;
      awayGoalsScored: number;
      awayGoalsConceded: number;
      directWinnings: number;
      directDraws: number;
      directLost: number;
      directGoalsScored: number;
      directGoalsConceded: number;
    }>
  >;
};

export default function DirectMatchesItems({
  formInput,
  setFormInput,
}: HostMatchesItemsProps) {
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  return (
    <>
      <h1 className="font-medium text-slate-600 border-b pb-2">
        Mecze bezpośrednie
      </h1>
      <div className="w-full grid grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-2">
        <FormInputNumber
          formInput={formInput.directWinnings}
          name="directWinnings"
          onChange={handleChangeInput}
          text="Wygrane:"
        />
        <FormInputNumber
          formInput={formInput.directDraws}
          name="directDraws"
          onChange={handleChangeInput}
          text="Remisy:"
        />
        <FormInputNumber
          formInput={formInput.directLost}
          name="directLost"
          onChange={handleChangeInput}
          text="Przegrane:"
        />
        <FormInputNumber
          formInput={formInput.directGoalsScored}
          name="directGoalsScored"
          onChange={handleChangeInput}
          text="Strzelone bramki:"
        />
        <FormInputNumber
          formInput={formInput.directGoalsConceded}
          name="directGoalsConceded"
          onChange={handleChangeInput}
          text="Stracone bramki:"
        />
      </div>
    </>
  );
}

import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

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
      <h1 className="font-medium border-b pb-2">Mecze bezpośrednie</h1>
      <div className="w-full grid grid-cols-2 gap-x-5 gap-y-2">
        <label htmlFor="points">
          Wygrane:
          <input
            type="number"
            name="directWinnings"
            value={formInput.directWinnings}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Remisy:
          <input
            type="number"
            name="directDraws"
            value={formInput.directDraws}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Przegrane:
          <input
            type="number"
            name="directLost"
            value={formInput.directLost}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Strzelone bramki:
          <input
            type="number"
            name="directGoalsScored"
            value={formInput.directGoalsScored}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Stracone bramki:
          <input
            type="number"
            name="directGoalsConceded"
            value={formInput.directGoalsConceded}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
      </div>
    </>
  );
}

import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

type HostMatchesItemsProps = {
  formInput: {
    awayWinnings: number;
    awayDraws: number;
    awayLost: number;
    awayGoalsScored: number;
    awayGoalsConceded: number;
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

export default function AwayMatchesItems({
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
      <h1 className="font-medium border-b pb-2">Mecze na wyjeździe</h1>
      <div className="w-full grid grid-cols-2 gap-x-5 gap-y-2">
        <label htmlFor="points">
          Wygrane:
          <input
            type="number"
            name="awayWinnings"
            value={formInput.awayWinnings}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Remisy:
          <input
            type="number"
            name="awayDraws"
            value={formInput.awayDraws}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Przegrane:
          <input
            type="number"
            name="awayLost"
            value={formInput.awayLost}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Strzelone bramki:
          <input
            type="number"
            name="awayGoalsScored"
            value={formInput.awayGoalsScored}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Stracone bramki:
          <input
            type="number"
            name="awayGoalsConceded"
            value={formInput.awayGoalsConceded}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
      </div>
    </>
  );
}

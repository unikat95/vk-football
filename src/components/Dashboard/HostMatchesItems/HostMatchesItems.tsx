import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

type HostMatchesItemsProps = {
  formInput: {
    hostWinnings: number;
    hostDraws: number;
    hostLost: number;
    hostGoalsScored: number;
    hostGoalsConceded: number;
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

export default function HostMatchesItems({
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
      <h1 className="font-medium border-b pb-2">Mecze u siebie:</h1>
      <div className="w-full grid grid-cols-2 gap-x-5 gap-y-2">
        <label htmlFor="points">
          Wygrane:
          <input
            type="number"
            name="hostWinnings"
            value={formInput.hostWinnings}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Remisy:
          <input
            type="number"
            name="hostDraws"
            value={formInput.hostDraws}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Przegrane:
          <input
            type="number"
            name="hostLost"
            value={formInput.hostLost}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Strzelone bramki:
          <input
            type="number"
            name="hostGoalsScored"
            value={formInput.hostGoalsScored}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
        <label htmlFor="points">
          Stracone bramki:
          <input
            type="number"
            name="hostGoalsConceded"
            value={formInput.hostGoalsConceded}
            onChange={handleChangeInput}
            className="w-full border-[1px] border-slate-300 px-3  py-2 rounded-md"
          />
        </label>
      </div>
    </>
  );
}

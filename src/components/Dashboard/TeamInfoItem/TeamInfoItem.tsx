import React from "react";

import { IoIosFootball } from "react-icons/io";

type TeamInfoItemProps = {
  where: string;
  totalMatches?: number;
  points?: number;
  winnings: number;
  draws: number;
  lost: number;
  goalsScored: number;
  goalsConceded: number;
};

export default function TeamInfoItem({
  where,
  totalMatches,
  points,
  winnings,
  draws,
  lost,
  goalsScored,
  goalsConceded,
}: TeamInfoItemProps) {
  return (
    <div className="w-auto overflow-hidden flex flex-col justify-start items-start text-xs gap-1">
      <div className="w-full flex justify-between items-center gap-1 bg-tertiaryDark text-secondary p-3 rounded-md relative overflow-hidden">
        <div className="flex justify-center items-center gap-2">{where}</div>
        <div>
          <IoIosFootball
            size={100}
            className="absolute -top-1 -right-10 opacity-15"
          />
        </div>
      </div>
      <div className="w-full bg-white flex flex-col p-3 gap-1 rounded-md text-xs border">
        {totalMatches && points && (
          <>
            <div className="w-full flex justify-between items-center border-b pb-1 border-tertiary">
              <div>Mecze:</div>
              <div className="text-primaryDark font-semibold">
                {totalMatches}
              </div>
            </div>
            <div className="w-full flex justify-between items-center border-b pb-1 border-tertiary">
              <div>Punkty:</div>
              <div className="text-primaryDark font-semibold">{points}</div>
            </div>
          </>
        )}
        <div className="w-full flex justify-between items-center border-b pb-1 border-tertiary">
          <div>Wygrane:</div>
          <div className="text-primaryDark font-semibold">{winnings}</div>
        </div>
        <div className="w-full flex justify-between items-center border-b pb-1 border-tertiary">
          <div>Remisy:</div>
          <div className="text-primaryDark font-semibold">{draws}</div>
        </div>
        <div className="w-full flex justify-between items-center border-b pb-1 border-tertiary">
          <div>Przegrane:</div>
          <div className="text-primaryDark font-semiboldld">{lost}</div>
        </div>
        <div className="w-full flex justify-between items-center border-b pb-1 border-tertiary">
          <div>Bramki:</div>
          <div className="text-primaryDark font-semibold">
            {goalsScored}-{goalsConceded}
          </div>
        </div>
      </div>
    </div>
  );
}

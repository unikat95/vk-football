import React from "react";

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
    <div className="w-auto bg-white border rounded-md flex flex-col justify-start items-start gap-3 p-3 text-sm">
      <div>{where}</div>
      <div className="w-full flex flex-col">
        {totalMatches && points && (
          <>
            <div className="w-full flex justify-between items-center">
              <div>Mecze:</div>
              <div className="text-primaryDark font-semibold">
                {totalMatches}
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div>Punkty:</div>
              <div className="text-primaryDark font-semibold">{points}</div>
            </div>
          </>
        )}
        <div className="w-full flex justify-between items-center">
          <div>Wygrane:</div>
          <div className="text-primaryDark font-semibold">{winnings}</div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div>Remisy:</div>
          <div className="text-primaryDark font-semibold">{draws}</div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div>Przegrane:</div>
          <div className="text-primaryDark font-semibold">{lost}</div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div>Bramki:</div>
          <div className="text-primaryDark font-semibold">
            {goalsScored}-{goalsConceded}
          </div>
        </div>
      </div>
    </div>
  );
}

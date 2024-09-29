import React from "react";

import ScoreboardTableHead from "../ScoreboardTableHead/ScoreboardTableHead";
import ScoreboardTable from "../ScoreboardTable/ScoreboardTable";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import useLoading from "../../../hooks/useloading";
import { useMainContext } from "../../../hooks/useMainContext";

type ScoreboardProps = {
  editable: boolean;
};

export default function Scoreboard({ editable }: ScoreboardProps) {
  const loading = useLoading(500);

  const { sortedTeams } = useMainContext();

  return (
    <div className="w-full flex flex-col gap-5 rounded-md">
      <div className="w-full flex justify-start md:justify-center items-center text-xs md:text-base font-medium">
        Podkarpackie | Klasa B 2024/2025 | Jarosław
      </div>
      <div className="flex flex-col rounded-md overflow-hidden">
        <ScoreboardTableHead />
        {loading ? (
          <div className="w-full py-5 flex justify-center items-center">
            <LoadingIcon size={20} />
          </div>
        ) : (
          <ScoreboardTable sortedTeams={sortedTeams} editable={editable} />
        )}
      </div>
    </div>
  );
}

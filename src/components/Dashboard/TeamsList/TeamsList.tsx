import React from "react";

import TeamListItem from "../TeamListItem/TeamListItem";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import useLoading from "../../../hooks/useloading";
import { useMainContext } from "../../../hooks/useMainContext";

export default function TeamsList() {
  const loading = useLoading(300);
  const { teams } = useMainContext();

  return (
    <div className="w-full flex flex-col gap-5 rounded-md">
      {loading ? (
        <div className="w-full py-5 flex justify-center items-center">
          <LoadingIcon size={20} />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-1">
          {teams.map((team, index) => (
            <TeamListItem team={team} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

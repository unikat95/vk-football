import React from "react";
import { TeamProps } from "../../../context/ContextTypes";
import TeamItem from "../TeamItem/TeamItem";

type ScoreboardTableProps = {
  sortedTeams: TeamProps[];
  editable: boolean;
};

export default function ScoreboardTable({
  sortedTeams,
  editable,
}: ScoreboardTableProps) {
  return (
    <div className="w-full flex flex-col">
      {sortedTeams.map((team, index) => (
        <TeamItem key={team.id} team={team} index={index} editable={editable} />
      ))}
    </div>
  );
}

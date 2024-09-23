import React, { useContext } from "react";
import { MainContext } from "../../../context/MainContext";
import TeamItem from "../TeamItem/TeamItem";
import ScoreboardTableHead from "../ScoreboardTableHead/ScoreboardTableHead";

type ScoreboardProps = {
  editable: boolean;
};

export default function Scoreboard({ editable }: ScoreboardProps) {
  const context = useContext(MainContext);
  if (!context) return;

  const { teams } = context;

  const sortedTeams = teams.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    const totalMatchesA = a.hostMatches + a.awayMatches;
    const totalMatchesB = b.hostMatches + b.awayMatches;

    if (totalMatchesA !== totalMatchesB) {
      return totalMatchesA - totalMatchesB;
    }

    if (a.directMatches > 0 && b.directMatches > 0) {
      if (a.directWinnings !== b.directWinnings) {
        return b.directWinnings - a.directWinnings;
      }

      const directGoalDifferenceA = a.directGoalsScored - a.directGoalsConceded;
      const directGoalDifferenceB = b.directGoalsScored - b.directGoalsConceded;

      if (directGoalDifferenceA !== directGoalDifferenceB) {
        return directGoalDifferenceB - directGoalDifferenceA;
      }

      if (a.directGoalsScored !== b.directGoalsScored) {
        return b.directGoalsScored - a.directGoalsScored;
      }
    }

    const goalDifferenceA = a.goalsScored - a.goalsConceded;
    const goalDifferenceB = b.goalsScored - b.goalsConceded;

    if (goalDifferenceA !== goalDifferenceB) {
      return goalDifferenceB - goalDifferenceA;
    }

    return b.goalsScored - a.goalsScored;
  });

  return (
    <div className="w-full bg-white flex flex-col p-5 gap-5 rounded-md">
      <div className="w-full flex justify-center items-center">
        Podkarpackie | Klasa B 2024/2025 | Jarosław
      </div>
      <div className="flex flex-col gap-1">
        <ScoreboardTableHead />
        <div className="w-full flex flex-col gap-1">
          {sortedTeams.map((team, index) => (
            <TeamItem
              key={team.id}
              team={team}
              index={index}
              editable={editable}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

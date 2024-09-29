import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { TeamProps } from "../context/ContextTypes";

export const useTeams = () => {
  const [teams, setTeams] = useState<TeamProps[]>([]);

  useEffect(() => {
    const teamUnsubscribe = onSnapshot(collection(db, "teams"), (teamsData) => {
      const teamsArray = teamsData.docs.map(
        (team) =>
          ({
            id: team.id,
            ...team.data(),
          } as TeamProps)
      );
      setTeams(teamsArray);
    });

    return () => teamUnsubscribe();
  }, []);

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

  return { teams, setTeams, sortedTeams };
};

import React from "react";
import { TeamProps } from "../../../context/ContextTypes";
import TeamInfoItem from "../TeamInfoItem/TeamInfoItem";

type TeamListItemInfoProps = {
  team: TeamProps;
};

export default function TeamInfo({ team }: TeamListItemInfoProps) {
  return (
    <div className="w-fullLight grid grid-cols-2 md:grid-cols-4 justify-between items-stretch gap-1">
      <TeamInfoItem
        where="Razem"
        totalMatches={team.winnings + team.draws + team.lost}
        points={team.points}
        winnings={team.hostWinnings + team.awayWinnings}
        draws={team.hostDraws + team.awayDraws}
        lost={team.hostLost + team.awayLost}
        goalsScored={team.hostGoalsScored + team.awayGoalsScored}
        goalsConceded={team.hostGoalsConceded + team.awayGoalsConceded}
      />
      <TeamInfoItem
        where="Dom"
        winnings={team.hostWinnings}
        draws={team.hostDraws}
        lost={team.hostLost}
        goalsScored={team.hostGoalsScored}
        goalsConceded={team.hostGoalsConceded}
      />
      <TeamInfoItem
        where="Wyjazd"
        winnings={team.awayWinnings}
        draws={team.awayDraws}
        lost={team.awayLost}
        goalsScored={team.awayGoalsScored}
        goalsConceded={team.awayGoalsConceded}
      />
      <TeamInfoItem
        where="Bezpoś."
        winnings={team.directWinnings}
        draws={team.directDraws}
        lost={team.directLost}
        goalsScored={team.directGoalsScored}
        goalsConceded={team.directGoalsConceded}
      />
    </div>
  );
}

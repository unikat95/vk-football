import React from "react";
import { TeamProps } from "../../../context/ContextTypes";
import TeamInfoItem from "../TeamInfoItem/TeamInfoItem";

type TeamListItemInfoProps = {
  team: TeamProps;
  isOpen: boolean;
};

export default function TeamInfo({ team, isOpen }: TeamListItemInfoProps) {
  return (
    <>
      {" "}
      <div
        className={`w-full grid grid-cols-2 justify-between items-stretch gap-1 font-medium ${
          isOpen ? "scale-100" : "scale-100"
        }`}
      >
        <TeamInfoItem
          where="Wszystkie mecze"
          totalMatches={team.winnings + team.draws + team.lost}
          points={team.points}
          winnings={team.hostWinnings + team.awayWinnings}
          draws={team.hostDraws + team.awayDraws}
          lost={team.hostLost + team.awayLost}
          goalsScored={team.hostGoalsScored + team.awayGoalsScored}
          goalsConceded={team.hostGoalsConceded + team.awayGoalsConceded}
        />
        <TeamInfoItem
          where="U siebie"
          winnings={team.hostWinnings}
          draws={team.hostDraws}
          lost={team.hostLost}
          goalsScored={team.hostGoalsScored}
          goalsConceded={team.hostGoalsConceded}
        />
        <TeamInfoItem
          where="Na wyjeździe"
          winnings={team.awayWinnings}
          draws={team.awayDraws}
          lost={team.awayLost}
          goalsScored={team.awayGoalsScored}
          goalsConceded={team.awayGoalsConceded}
        />
        <TeamInfoItem
          where="Bezpośrednie"
          winnings={team.directWinnings}
          draws={team.directDraws}
          lost={team.directLost}
          goalsScored={team.directGoalsScored}
          goalsConceded={team.directGoalsConceded}
        />
      </div>
    </>
  );
}

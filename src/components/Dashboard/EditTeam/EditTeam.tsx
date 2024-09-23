import React, { useState } from "react";

import { TeamProps } from "../../../context/ContextTypes";

import HostMatchesItems from "../HostMatchesItems/HostMatchesItems";
import CtaButton from "../../CtaButton/CtaButton";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import AwayMatchesItems from "../AwayMatchesItems/AwayMatchesItems";
import DirectMatchesItems from "../DirectMatchesItems/DirectMatchesItems";

type EditTeamProps = {
  team: TeamProps;
  onClose: () => void;
};

export default function EditTeam({ team, onClose }: EditTeamProps) {
  const [formInput, setFormInput] = useState({
    hostWinnings: team.hostWinnings,
    hostDraws: team.hostDraws,
    hostLost: team.hostLost,
    hostGoalsScored: team.hostGoalsScored,
    hostGoalsConceded: team.hostGoalsConceded,
    awayWinnings: team.awayWinnings,
    awayDraws: team.awayDraws,
    awayLost: team.awayLost,
    awayGoalsScored: team.awayGoalsScored,
    awayGoalsConceded: team.awayGoalsConceded,
    directWinnings: team.directWinnings,
    directDraws: team.directDraws,
    directLost: team.directLost,
    directGoalsScored: team.directGoalsScored,
    directGoalsConceded: team.directGoalsConceded,
  });

  const teamWinnings = formInput.hostWinnings + formInput.awayWinnings;
  const teamLost = formInput.hostLost + formInput.awayLost;
  const teamDraws = formInput.hostDraws + formInput.awayDraws;
  const teamGoalScored = formInput.hostGoalsScored + formInput.awayGoalsScored;
  const teamGoalConceded =
    formInput.hostGoalsConceded + formInput.awayGoalsConceded;
  const teamPoints =
    teamWinnings * 3 + (formInput.hostDraws + formInput.awayDraws);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (team) {
      const teamRef = doc(db, "teams", team.id);

      const teamData = {
        ...formInput,
        points: teamPoints,
        winnings: teamWinnings,
        draws: teamDraws,
        lost: teamLost,
        goalScored: teamGoalScored,
        goalConceded: teamGoalConceded,
      };

      await updateDoc(teamRef, teamData);

      onClose();
    }
  };
  return (
    <div className="w-full h-full flex flex-col gap-5 overflow-hidden">
      <div className="w-full flex justify-start items-center gap-2">
        <p>Edycja drużyny:</p>
        <h1 className="font-semibold">{team.name}</h1>
        <p className="text-sm font-semibold pt-1 text-red-500">
          {teamPoints}pkt
        </p>
      </div>
      <form className="w-full flex flex-col gap-5 overflow-y-auto">
        <HostMatchesItems formInput={formInput} setFormInput={setFormInput} />
        <AwayMatchesItems formInput={formInput} setFormInput={setFormInput} />
        <DirectMatchesItems formInput={formInput} setFormInput={setFormInput} />
        <CtaButton text="Zapisz informacje" onClick={handleSubmit} />
      </form>
    </div>
  );
}

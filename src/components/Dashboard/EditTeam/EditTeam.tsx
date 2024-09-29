import React, { useState } from "react";

import { TeamProps } from "../../../context/ContextTypes";

import HostMatchesItems from "../HostMatchesItems/HostMatchesItems";
import CtaButton from "../../CtaButton/CtaButton";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import AwayMatchesItems from "../AwayMatchesItems/AwayMatchesItems";
import DirectMatchesItems from "../DirectMatchesItems/DirectMatchesItems";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";

import { IoPencil } from "react-icons/io5";

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
  const [loading, setLoading] = useState(false);

  const teamWinnings = formInput.hostWinnings + formInput.awayWinnings;
  const teamLost = formInput.hostLost + formInput.awayLost;
  const teamDraws = formInput.hostDraws + formInput.awayDraws;
  const teamGoalScored = formInput.hostGoalsScored + formInput.awayGoalsScored;
  const teamGoalConceded =
    formInput.hostGoalsConceded + formInput.awayGoalsConceded;
  const teamPoints =
    teamWinnings * 3 + (formInput.hostDraws + formInput.awayDraws);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    setLoading(true);
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
      setLoading(false);
      onClose();
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-between gap-5 overflow-hidden relative">
      <div className="w-full flex justify-start items-center gap-2 py-5">
        <p className="text-sm">Drużyna:</p>
        <h1 className="text-sm font-semibold">{team.name}</h1>
      </div>
      <form className="w-full flex flex-col gap-5 overflow-y-auto">
        <HostMatchesItems formInput={formInput} setFormInput={setFormInput} />
        <AwayMatchesItems formInput={formInput} setFormInput={setFormInput} />
        <DirectMatchesItems formInput={formInput} setFormInput={setFormInput} />
      </form>
      <div className="flex justify-end items-end mt-5">
        <CtaButton
          text="Zapisz informacje"
          Icon={IoPencil}
          onClick={handleSubmit}
        />
      </div>
      {loading && (
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-white bg-opacity-50">
          <LoadingIcon size={22} />
        </div>
      )}
    </div>
  );
}

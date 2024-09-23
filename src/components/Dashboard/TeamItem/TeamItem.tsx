import React, { useState } from "react";
import { TeamProps } from "../../../context/ContextTypes";
import Modal from "../../Modal/Modal";
import EditTeam from "../EditTeam/EditTeam";

type TeamItemProps = {
  team: TeamProps;
  index: number;
  editable: boolean;
};

export default function TeamItem({ team, index, editable }: TeamItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const hostMatches = team.hostWinnings + team.hostDraws + team.hostLost;
  const awayMatches = team.awayWinnings + team.awayDraws + team.awayLost;
  const teamMatches = hostMatches + awayMatches;

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        key={team.id}
        className={`w-full grid grid-cols-[auto,2fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] bg-zinc-100 hover:bg-slate-200 p-1 gap-1 text-sm font-light justify-center items-center ${
          editable && "cursor-pointer"
        }`}
        onClick={editable ? handleOpenModal : undefined}
      >
        <div className="w-6 pl-2 text-center font-semibold text-xs">
          {index + 1}
        </div>
        <div className="px-2 text-nowrap col-span-2 flex justify-start items-center">
          {team.name}
        </div>
        <div className="px-2 text-center font-medium">{team.points}</div>
        <div className="px-2 text-center">{teamMatches}</div>

        <div className="px-2 text-center">
          {team.awayWinnings + team.hostWinnings}
        </div>
        <div className="px-2 text-center">
          {team.awayDraws + team.hostDraws}
        </div>
        <div className="px-2 text-center">{team.awayLost + team.hostLost}</div>

        <div className="px-2 text-center">
          {team.awayGoalsScored + team.hostGoalsScored}-
          {team.awayGoalsConceded + team.hostGoalsConceded}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        closeButton={true}
        contentClose={false}
      >
        <EditTeam team={team} onClose={handleCloseModal} />
      </Modal>
    </>
  );
}

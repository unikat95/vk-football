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

  const teamBg = team.name === "Victoria Kidałowice" ? "#50B2C0" : undefined;

  const teamColor = team.name === "Victoria Kidałowice" ? "white" : undefined;

  return (
    <>
      <div
        key={team.id}
        className={`w-full grid grid-cols-[auto,2fr,repeat(6,1fr)] md:grid-cols-[auto,2fr,repeat(7,1fr)] bg-primaryLight odd:bg-secondaryLight hover:bg-secondaryDark hover:text-white px-2 py-2 md:py-2 gap-1 text-xs md:text-sm font-light md:font-normal justify-center items-center

        ${editable && "cursor-pointer"}`}
        style={{ backgroundColor: teamBg, color: teamColor }}
        onClick={editable ? handleOpenModal : undefined}
      >
        <div className="w-3 text-center font-semibold text-xs">{index + 1}</div>
        <div className="px-1 text-nowrap col-span-2 flex justify-start items-center truncate overflow-hidden whitespace-nowrap">
          {team.name}
        </div>
        <div className="flex justify-center items-center font-medium">
          {team.points}
        </div>
        <div className="flex justify-center items-center">{teamMatches}</div>

        <div className="flex justify-center items-center">
          {team.awayWinnings + team.hostWinnings}
        </div>
        <div className="flex justify-center items-center">
          {team.awayDraws + team.hostDraws}
        </div>
        <div className="flex justify-center items-center">
          {team.awayLost + team.hostLost}
        </div>

        <div className="justify-center items-center hidden md:flex">
          {team.awayGoalsScored + team.hostGoalsScored}-
          {team.awayGoalsConceded + team.hostGoalsConceded}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        closeButton={true}
        contentClose={false}
        widthClass="w-full sm:w-[70%]"
        heightClass="h-full sm:h-[80%]"
      >
        <EditTeam team={team} onClose={handleCloseModal} />
      </Modal>
    </>
  );
}

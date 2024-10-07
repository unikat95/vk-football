import React, { useState } from "react";

import { TeamProps } from "../../../context/ContextTypes";
import TeamInfo from "../TeamInfo/TeamInfo";

import { IoIosArrowForward } from "react-icons/io";

type TeamListItemProps = {
  team: TeamProps;
  index: number;
};

export default function TeamListItem({ team, index }: TeamListItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenTeamInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="w-auto h-auto bg-secondary hover:bg-tertiaryDark text-black hover:text-white border border-secondaryLight p-5 rounded-md flex justify-between items-center cursor-pointer text-sm transition-colors"
        style={
          isOpen ? { backgroundColor: "#242424", color: "white" } : undefined
        }
        onClick={handleOpenTeamInfo}
      >
        <div className="w-full flex gap-2 justify-start items-center ">
          <div className="w-5 h-5 rounded-md bg-opacity-70 flex justify-center items-center text-xs font-semibold">
            {index + 1}
          </div>
          <div className="w-6 h-6 flex justify-center items-center rounded-full overflow-hidden">
            <img src={team.logo} />
          </div>
          <div className="text-xs font-semibold truncate overflow-hidden whitespace-nowrap">
            {team.name}
          </div>
        </div>
        <div className={`w-auto ${isOpen && "rotate-90"}`}>
          <IoIosArrowForward />
        </div>
      </div>
      {isOpen && <TeamInfo team={team} isOpen={isOpen} />}
    </>
  );
}

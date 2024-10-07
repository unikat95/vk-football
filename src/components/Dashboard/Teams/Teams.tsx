import React, { useState } from "react";
import AddTeamForm from "../AddTeamForm/AddTeamForm";
import Modal from "../../Modal/Modal";
import DashboardCtaButton from "../DashboardCtaButton/DashboardCtaButton";
import { useTeams } from "../../../hooks/useTeams";
import TeamInfo from "../TeamInfo/TeamInfo";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import { MdArrowForwardIos } from "react-icons/md";

export default function Teams() {
  const [isOpen, setIsOpen] = useState(false);
  const [teamId, setTeamId] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { sortedTeams } = useTeams();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSelectTeam = async (selectedId: string) => {
    setTeamId(selectedId);
    setIsDropdownOpen(false);

    if (selectedId) {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    }
  };

  const selectedTeam = sortedTeams.find((team) => team.id === teamId);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-between items-end gap-5 pb-5">
        <div className="w-full flex flex-col gap-5">
          <div className="relative w-full">
            <div
              className="bg-white flex  justify-between items-center border border-secondaryLight p-3 rounded-lg cursor-pointer"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              {teamId
                ? sortedTeams.find((team) => team.id === teamId)?.name ||
                  "Wybierz drużynę..."
                : "Wybierz drużynę..."}
              <MdArrowForwardIos className="rotate-90" />
            </div>
            {isDropdownOpen && (
              <ul className="absolute z-10 w-full bg-white border border-secondaryLight rounded-lg mt-1">
                {sortedTeams.map((team) => (
                  <li
                    key={team.id}
                    className="flex items-center p-2 hover:bg-gray-200 cursor-pointer border-b border-slate-100 last:border-none"
                    onClick={() => handleSelectTeam(team.id)}
                  >
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="w-5 h-5 mr-2 rounded-full"
                    />
                    {team.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {loading ? (
            <div className="w-full flex justify-center items-center">
              <LoadingIcon size={24} />
            </div>
          ) : (
            selectedTeam && <TeamInfo team={selectedTeam} isOpen={isOpen} />
          )}
        </div>
        <div>
          <DashboardCtaButton
            handleOpenModal={handleOpenModal}
            text="Dodaj drużynę"
          />
        </div>
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          closeButton={true}
          contentClose={true}
          widthClass="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
        >
          <AddTeamForm setIsOpen={setIsOpen} />
        </Modal>
      </div>
    </>
  );
}

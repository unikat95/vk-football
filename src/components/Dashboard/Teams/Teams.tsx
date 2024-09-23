import React, { useState } from "react";

import AddTeamForm from "../AddTeamForm/AddTeamForm";
import TeamsList from "../TeamsList/TeamsList";

import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "../../Modal/Modal";

export default function Teams() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-start items-start gap-5">
        <div>
          <button
            onClick={handleOpenModal}
            className="bg-white hover:bg-zinc-100 flex justify-center items-center gap-2 px-4 py-2 rounded-md text-lg"
          >
            Dodaj drużynę <IoIosAddCircleOutline size={24} />
          </button>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          closeButton={true}
          contentClose={true}
        >
          <AddTeamForm setIsOpen={setIsOpen} />
        </Modal>
        <TeamsList />
      </div>
    </>
  );
}

import React, { useState } from "react";

import AddTeamForm from "../AddTeamForm/AddTeamForm";
import TeamsList from "../TeamsList/TeamsList";

import Modal from "../../Modal/Modal";
import DashboardCtaButton from "../DashboardCtaButton/DashboardCtaButton";

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
          widthClass="w-full sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
        >
          <AddTeamForm setIsOpen={setIsOpen} />
        </Modal>
        <TeamsList />
      </div>
    </>
  );
}

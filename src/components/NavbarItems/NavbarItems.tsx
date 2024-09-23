import React, { SetStateAction, useContext } from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import { MainContext } from "../../context/MainContext";

type NavbarItemsProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
};

export default function NavbarItems({
  openMenu,
  setOpenMenu,
}: NavbarItemsProps) {
  const context = useContext(MainContext);

  if (!context) return "loading...";
  const { currentUser, setIsModalOpen } = context;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ul
        className={`w-full h-screen md:w-auto md:h-auto bg-zinc-100 md:bg-transparent fixed  md:relative top-0 left-0 flex flex-col md:flex-row justify-center items-center gap-5 transition-all md:transition-none duration-300 ${
          openMenu ? "translate-y-0" : "translate-x-[150dvh] md:translate-x-0"
        }`}
      >
        <NavbarItem to="/" name="Strona Główna" setOpenMenu={setOpenMenu} />
        <NavbarItem to="/team" name="Drużyna" setOpenMenu={setOpenMenu} />
        <NavbarItem to="/table" name="Tabela" setOpenMenu={setOpenMenu} />
        {currentUser ? (
          <NavbarItem to="/profile" name="Profile" setOpenMenu={setOpenMenu} />
        ) : (
          <button
            onClick={handleOpenModal}
            className="bg-red-600 text-white hover:bg-red-700 px-4 py-1 rounded-md text-xl md:text-base"
          >
            Login
          </button>
        )}
      </ul>
    </>
  );
}

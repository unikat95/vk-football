import React, { useContext } from "react";

import { MainContext } from "../../context/MainContext";

import { IoIosClose } from "react-icons/io";

type ModalProps = {
  children: React.ReactNode;
  closeButton?: boolean;
};

export default function Modal({ children, closeButton }: ModalProps) {
  const context = useContext(MainContext);

  if (!context) return "loading...";

  const { openModal, setOpenModal } = context;

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {openModal && (
        <div
          className="w-[100dvw] h-screen bg-slate-950 bg-opacity-100 md:bg-opacity-30 absolute top-0 left-0 flex justify-center items-center z-[999]"
          onClick={() => setOpenModal(false)}
        >
          <div
            className=" bg-white text-black p-8 rounded-md shadow-xl relative z-[1000]"
            onClick={handleContentClick}
          >
            {closeButton && (
              <div className="absolute top-3 right-3 flex justify-center items-center text-slate-500 hover:text-red-500 rounded-full">
                <button onClick={() => setOpenModal(false)}>
                  <IoIosClose size="30" />
                </button>
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
}

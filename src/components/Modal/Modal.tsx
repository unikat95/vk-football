import React from "react";

import { IoIosClose } from "react-icons/io";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  closeButton?: boolean;
  contentClose?: boolean;
};

export default function Modal({
  children,
  isOpen,
  onClose,
  closeButton,
  contentClose,
}: ModalProps) {
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <>
      {
        <div
          className="w-[100dvw] h-screen bg-slate-950 bg-opacity-30 absolute top-0 left-0 flex justify-center items-center z-[999]"
          onClick={contentClose ? onClose : undefined}
        >
          <div
            className="w-[80%] md:w-[60%] lg:w-[45%] xl:w-[50%] max-h-[80%] bg-white text-black p-10 rounded-md shadow-xl relative z-[1000] overflow-auto"
            onClick={handleContentClick}
          >
            {closeButton && (
              <div className="absolute top-3 right-3 flex justify-center items-center text-slate-500 hover:text-red-500 rounded-full">
                <button onClick={onClose}>
                  <IoIosClose size="30" />
                </button>
              </div>
            )}
            {children}
          </div>
        </div>
      }
    </>
  );
}

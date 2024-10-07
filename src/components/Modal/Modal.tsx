import React from "react";

import { IoIosClose } from "react-icons/io";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  closeButton?: boolean;
  contentClose?: boolean;
  widthClass?: string;
  heightClass?: string;
};

export default function Modal({
  children,
  isOpen,
  onClose,
  closeButton,
  contentClose,
  widthClass = "w-auto",
  heightClass = "h-auto",
}: ModalProps) {
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <>
      {
        <div
          className="w-[100dvw] h-[100dvh] bg-primaryDark bg-opacity-50 backdrop-blur-[1px] absolute top-0 left-0 flex justify-center items-center z-[999]"
          onClick={contentClose ? onClose : undefined}
        >
          <div
            className={`w-auto h-auto bg-white text-black py-5 px-5 rounded-md shadow-xl relative z-[1000] overflow-auto flex justify-center items-center
              ${widthClass} ${heightClass}
              `}
            onClick={handleContentClick}
          >
            {closeButton && (
              <div className="absolute top-3 right-3 flex justify-center items-center text-slate-500 hover:text-red-500 rounded-full z-[100]">
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

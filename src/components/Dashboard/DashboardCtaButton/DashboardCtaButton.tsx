import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

type DashboardCtaButtonProps = {
  handleOpenModal?: () => void;
  text: string;
};

export default function DashboardCtaButton({
  handleOpenModal,
  text,
}: DashboardCtaButtonProps) {
  return (
    <button
      onClick={handleOpenModal}
      className="bg-white text-slate-500 hover:bg-secondaryDark hover:text-white border border-secondaryLight flex justify-center items-center gap-2 py-3 px-5 rounded-full text-sm font-semibold uppercase"
    >
      {text} <IoIosAddCircleOutline size={18} />
    </button>
  );
}

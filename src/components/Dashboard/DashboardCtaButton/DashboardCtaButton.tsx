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
      className="bg-white text-thirdDark hover:bg-secondaryDark hover:text-primaryLight border border-secondaryLight flex justify-center items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold uppercase"
    >
      {text} <IoIosAddCircleOutline size={18} />
    </button>
  );
}

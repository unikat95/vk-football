import React from "react";
import { IconType } from "react-icons";

type CtaButtonProps = {
  text: string;
  Icon?: IconType;
  onClick?: (e: { preventDefault: () => void }) => void;
  disabled?: boolean;
};

export default function CtaButton({
  text,
  Icon,
  onClick,
  disabled,
}: CtaButtonProps) {
  return (
    <button
      className="flex justify-center items-center gap-2 bg-black hover:bg-opacity-80 rounded-md text-white pr-4 pl-5 py-3 disabled:bg-opacity-60 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {Icon && <Icon size={16} />}
    </button>
  );
}

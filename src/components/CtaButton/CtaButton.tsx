import React from "react";
import { IconType } from "react-icons";

type CtaButtonProps = {
  text: string;
  Icon: IconType;
  onClick?: (e: { preventDefault: () => void }) => void;
};

export default function CtaButton({ text, Icon, onClick }: CtaButtonProps) {
  return (
    <button
      className="flex justify-center items-center gap-2 bg-black hover:bg-opacity-80 rounded-md text-white pr-2 pl-3 py-1"
      onClick={onClick}
    >
      {text}
      <Icon />
    </button>
  );
}

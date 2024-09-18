import React from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

type CtaButtonProps = {
  text: string;
  to: string;
  Icon: IconType;
  onClick?: () => void;
};

export default function CtaLink({ text, to, Icon }: CtaButtonProps) {
  return (
    <NavLink
      to={to}
      className="flex justify-center items-center gap-2 bg-black hover:bg-opacity-80 rounded-md text-white pr-2 pl-3 py-1"
    >
      {text}
      <Icon />
    </NavLink>
  );
}

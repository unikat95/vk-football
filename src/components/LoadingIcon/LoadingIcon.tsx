import React from "react";
import { PiSpinner } from "react-icons/pi";

type LoadingIconProps = {
  size: number;
};

export default function LoadingIcon({ size }: LoadingIconProps) {
  return <PiSpinner className="animate-spin" size={size} />;
}

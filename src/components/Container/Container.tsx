import React from "react";
import { useLocation } from "react-router-dom";

type ContainerProps = {
  children: React.ReactNode;
  disabledPatch: string[];
};

export default function Container({ children, disabledPatch }: ContainerProps) {
  const location = useLocation();

  if (disabledPatch.some((path) => location.pathname.startsWith(path)))
    return children;

  return (
    <div className="w-full max-w-[1400px] h-auto flex flex-col gap-5 px-0 md:px-5 md:py-5 2xl:px-0">
      {children}
    </div>
  );
}

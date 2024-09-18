import React from "react";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

export default function PageLoading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0">
      <LoadingIcon size={30} />
    </div>
  );
}

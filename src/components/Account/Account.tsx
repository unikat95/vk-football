import React, { useState } from "react";
import Modal from "../Modal/Modal";
import AccountForm from "../AccountForm/AccountForm";

type AccountProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Account({ isOpen, onClose }: AccountProps) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(true);

  const handleMethodChange = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeButton={true}
        widthClass="w-full sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
        heightClass="h-full sm:h-auto"
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-8">
          <h1 className="text-2xl font-bold">
            {isSignedIn ? "Login" : "Create Account"}
          </h1>
          <AccountForm isSignedIn={isSignedIn} />
          <span className="w-[70%] h-[1px] bg-slate-200 flex justify-center items-center relative">
            <span className="absolute w-4 h-4 bg-slate-200 rounded-full border-[4px] border-white"></span>
          </span>
          <div>
            {isSignedIn
              ? "Don`t have an account? "
              : "Already have an account? "}
            <button className="underline" onClick={handleMethodChange}>
              {isSignedIn ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

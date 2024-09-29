import React, { ChangeEvent, useState } from "react";

import AccountFormInput from "../AccountFormInput/AccountFormInput";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { useNavigate } from "react-router-dom";
import { useMainContext } from "../../hooks/useMainContext";

type AccountFormProps = {
  isSignedIn: boolean;
};

export default function AccountForm({ isSignedIn }: AccountFormProps) {
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormField((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const {
    handleLogin,
    handleSignUp,
    setIsModalOpen,
    setInitializing,
    currentUser,
  } = useMainContext();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (isSignedIn) {
      handleLogin(
        formField.email,
        formField.password,
        setLoading,
        setInitializing,
        setIsModalOpen,
        currentUser,
        navigate
      );
    } else {
      handleSignUp(
        formField.email,
        formField.password,
        setLoading,
        setInitializing,
        setIsModalOpen,
        currentUser,
        navigate
      );
    }
  };

  return (
    <form className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-col gap-5 relative">
        <AccountFormInput
          name="email"
          formField={formField.email}
          handleInputChange={handleInputChange}
        />
        <AccountFormInput
          name="password"
          formField={formField.password}
          handleInputChange={handleInputChange}
        />
        {loading && (
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-white bg-opacity-50">
            <LoadingIcon size={22} />
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="disabled:text-opacity-40 disabled:bg-opacity-80 bg-black text-white px-4 py-1 rounded-md flex justify-center items-center"
      >
        {isSignedIn ? "Login" : "Sign Up"}
      </button>
    </form>
  );
}

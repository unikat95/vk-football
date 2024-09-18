import React, { ChangeEvent } from "react";

type AccountFormInputProps = {
  name: string;
  formField: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function AccountFormInput({
  name,
  formField,
  handleInputChange,
}: AccountFormInputProps) {
  return (
    <input
      type={name}
      name={name}
      placeholder={`${name}...`}
      value={formField}
      onChange={handleInputChange}
      className="w-full h-auto py-2 border-b-2 focus:border-b-blue-500 outline-none rounded-sm placeholder:text-zinc-400 border-zinc-200"
    />
  );
}

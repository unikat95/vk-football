import React, { ChangeEvent } from "react";

type FormInputNumberProps = {
  formInput: number;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

export default function FormInputNumber({
  formInput,
  name,
  onChange,
  text,
}: FormInputNumberProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-sm text-slate-600">{text}</label>
      <input
        type="number"
        name={name}
        value={formInput}
        onChange={onChange}
        className="w-full border-2 border-zinc-200 px-4 py-2 rounded-md outline-blue-400"
      />
    </div>
  );
}

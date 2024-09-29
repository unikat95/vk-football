import React, { ChangeEvent } from "react";

type FormInputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

export default function FormInput({
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
}: FormInputProps) {
  return (
    <div className="w-full flex flex-col gap-1 text-sm text-slate-600">
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-2 border-zinc-200 p-3 rounded-md outline-blue-400"
      />
    </div>
  );
}

import { useState } from "react";

interface Props {
  onChange: (value: string) => void;
  label: string;
  description: string;
  placeholder: string;
}

export default function TextInput({ onChange, label, description, placeholder }: Props) {
  const [textValue, setTextValue] = useState("");
  return (
    <div className="flex flex-col">
      <label className="text-base font-bold">{label}</label>
      <span className="text-sm font-light">{description}</span>
      <input
        className="rounded border-2 border-solid border-indigo-400  "
        type="text"
        value={textValue}
        placeholder={placeholder}
        onChange={event => {
          setTextValue(event.target.value);
          onChange(event.target.value);
        }}
      />
    </div>
  );
}

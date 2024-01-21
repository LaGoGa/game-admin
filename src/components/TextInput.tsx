import { useState } from "react";

export default function TextInput() {
  const [textValue, setTextValue] = useState("");
  return (
    <div className="flex flex-col">
      <label className="font-bold text-base">Login</label>
      <span className="font-light text-sm">Write your login below</span>
      <input
        className="rounded border-2 border-solid border-indigo-400  "
        type="text"
        value={textValue}
        placeholder="Random shit"
        onChange={event => setTextValue(event.target.value)}
      />
    </div>
  );
}

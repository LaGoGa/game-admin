import { useState } from "react";

export default function TextInput() {
  const [textValue, setTextValue] = useState("");
  return (
    <input
      className="rounded border-2 border-solid border-indigo-400"
      type="text"
      value={textValue}
      onChange={event => setTextValue(event.target.value)}
    />
  );
}

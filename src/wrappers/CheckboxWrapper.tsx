import { useContext } from "react";

import { Checkbox } from "@/components/Checkbox";
import { loginContext } from "@/context/LoginFormContext";

export const CheckboxWrapper = () => {
  const { isChecked, handleCheckbox } = useContext(loginContext);

  return <Checkbox onChange={handleCheckbox} label="Remember me" isChecked={isChecked} />;
};

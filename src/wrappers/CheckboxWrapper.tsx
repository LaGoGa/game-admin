import { useContext } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { loginContext } from "@/context/LoginFormContext";

export const CheckboxWrapper = () => {
  const { isChecked, handleCheckbox } = useContext(loginContext);

  return (
    <div>
      <Checkbox
        className="data-[state=checked]:bg-indigo-600"
        onCheckedChange={handleCheckbox}
        checked={isChecked}
        id="email"
      />
      <Label className="ms-2 text-base" htmlFor="email">
        Remember me
      </Label>
    </div>
  );
};

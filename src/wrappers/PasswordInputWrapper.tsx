import { useContext } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginContext } from "@/context/LoginFormContext";

export const PasswordInputWrapper = () => {
  const { password, handlePassword } = useContext(loginContext);

  return (
    <div className="flex flex-col">
      <Label className="text-base font-bold">Password</Label>
      <span className="text-sm font-light">{"Write your password below"}</span>
      <Input
        className="border-2 border-solid border-indigo-400"
        value={password}
        onChange={handlePassword}
        placeholder="Password"
      />
    </div>
  );
};

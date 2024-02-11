import { useContext } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginContext } from "@/context/LoginFormContext";

export const LoginInputWrapper = () => {
  const { login, handleLogin } = useContext(loginContext);

  return (
    <div className="flex flex-col">
      <Label className="text-base font-bold">Login</Label>
      <span className="text-sm font-light">{"Write your login below"}</span>
      <Input
        className="border-2 border-solid border-indigo-400"
        value={login}
        onChange={handleLogin}
        placeholder="Login"
      />
    </div>
  );
};

import { useContext } from "react";

import TextInput from "@/components/TextInput";
import { loginContext } from "@/context/LoginFormContext";

export const LoginInputWrapper = () => {
  const { login, handleLogin } = useContext(loginContext);

  return (
    <TextInput
      value={login}
      onChange={handleLogin}
      label="Login"
      description="Write your login below"
      placeholder="Login"
    />
  );
};

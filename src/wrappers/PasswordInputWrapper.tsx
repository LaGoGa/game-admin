import { useContext } from "react";

import TextInput from "@/components/TextInput";
import { loginContext } from "@/context/LoginFormContext";

export const PasswordInputWrapper = () => {
  const { password, handlePassword } = useContext(loginContext);

  return (
    <TextInput
      value={password}
      onChange={handlePassword}
      label="Password"
      description="Write your password below"
      placeholder="Password"
    />
  );
};

import { createContext, PropsWithChildren, useState } from "react";

interface LoginContext {
  login: string;
  password: string;
  isChecked: boolean;
  handleLogin: (value: string) => void;
  handlePassword: (value: string) => void;
  handleCheckbox: (value: boolean) => void;
}

export const loginContext = createContext({} as LoginContext);

const LoginFormContext = ({ children }: PropsWithChildren) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = (value: string) => {
    setLogin(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleCheckbox = (value: boolean) => {
    setIsChecked(value);
  };

  const contextValues: LoginContext = {
    login,
    password,
    isChecked,
    handleLogin,
    handlePassword,
    handleCheckbox,
  };

  return <loginContext.Provider value={contextValues}>{children}</loginContext.Provider>;
};

export default LoginFormContext;

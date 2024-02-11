import { createContext, PropsWithChildren, useState } from "react";

interface LoginContext {
  login: string;
  password: string;
  handleLogin: (value: string) => void;
  handlePassword: (value: string) => void;
}

export const loginContext = createContext({} as LoginContext);

const LoginFormContext = ({ children }: PropsWithChildren) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (value: string) => {
    setLogin(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const contextValues: LoginContext = {
    login,
    password,
    handleLogin,
    handlePassword,
  };

  return <loginContext.Provider value={contextValues}>{children}</loginContext.Provider>;
};

export default LoginFormContext;

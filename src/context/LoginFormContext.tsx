import { ChangeEvent, createContext, PropsWithChildren, useState } from "react";

interface LoginContext {
  login: string;
  password: string;
  isChecked: boolean;
  handleLogin: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCheckbox: (event: boolean) => void;
}

export const loginContext = createContext({} as LoginContext);

const LoginFormContext = ({ children }: PropsWithChildren) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCheckbox = (event: boolean) => {
    setIsChecked(event);
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

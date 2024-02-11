import LoginFormContext from "@/context/LoginFormContext";
import { CheckboxWrapper } from "@/wrappers/CheckboxWrapper";
import { LoginInputWrapper } from "@/wrappers/LoginInputWrapper";
import { PasswordInputWrapper } from "@/wrappers/PasswordInputWrapper";

import Button from "./Button";

export default function LoginForm() {
  return (
    <LoginFormContext>
      <form className="w-full">
        <div>
          <LoginInputWrapper />
        </div>
        <div>
          <PasswordInputWrapper />
        </div>
        <div>
          <CheckboxWrapper />
        </div>
        <div>
          <Button />
        </div>
      </form>
    </LoginFormContext>
  );
}

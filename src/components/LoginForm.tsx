import LoginFormContext from "@/context/LoginFormContext";
import { CheckboxWrapper } from "@/wrappers/CheckboxWrapper";
import { LoginInputWrapper } from "@/wrappers/LoginInputWrapper";
import { PasswordInputWrapper } from "@/wrappers/PasswordInputWrapper";

import { Button } from "./ui/button";

export default function LoginForm() {
  return (
    <LoginFormContext>
      <div className="w-full p-5 md:p-10">
        <form>
          <div>
            <LoginInputWrapper />
          </div>
          <div>
            <PasswordInputWrapper />
          </div>
          <div className="my-2">
            <CheckboxWrapper />
          </div>
          <div className="my-2">
            <Button className="w-full bg-indigo-400 px-5 py-2 text-white hover:bg-indigo-600 focus:outline-none active:bg-indigo-700">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </LoginFormContext>
  );
}

import TextInput from "./TextInput";
import Button from "./Button";
export default function LoginForm() {
  const handleLogin = (value: string) => console.log("Login: ", value);
  const handlePassword = (value: string) => console.log("Password: ", value);
  return (
    <form>
      <div>
        <TextInput onChange={handleLogin} label="Login" description="Write your login below" placeholder="Login" />
      </div>
      <div>
        <TextInput
          onChange={handlePassword}
          label="Password"
          description="Write your password below"
          placeholder="Password"
        />
      </div>
      <div>
        <Button />
      </div>
    </form>
  );
}

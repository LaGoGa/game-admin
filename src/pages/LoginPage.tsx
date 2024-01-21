import TextInput from "@/components/TextInput";

export default function LoginPage() {
  const handleLogin = (value: string) => console.log("Login: ", value);
  const handlePassword = (value: string) => console.log("Password: ", value);

  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        <img className="h-full" src="/images/login.jpg" alt="login image" />
      </div>
      <div className="flex flex-col items-center justify-center">
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
      </div>
    </main>
  );
}

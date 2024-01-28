import LoginForm from "@/components/LoginForm";
export default function LoginPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        <img className="h-full" src="/images/login.jpg" alt="login image" />
      </div>
      <div className="flex flex-col items-center justify-center mx-5">
        <LoginForm />
      </div>
    </main>
  );
}

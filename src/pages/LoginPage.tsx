import TextInput from "@/components/TextInput";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <img className="h-full" src="/images/login.jpg" alt="login image" />
        </div>
        <div className="flex justify-center items-center">
          <TextInput />
      </div>
    </main>
  );
}

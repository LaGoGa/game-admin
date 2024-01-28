import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        <img className="h-full" src="/images/login.jpg" alt="login image" />
      </div>
      <div className="mx-5 flex flex-col items-center justify-center">{children}</div>
    </main>
  );
};

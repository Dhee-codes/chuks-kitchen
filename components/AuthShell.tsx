"use client";

import { usePathname } from "next/navigation";

export const AuthShell = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const pathname = usePathname();
    const isWelcome = pathname === "/";

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block flex-1 relative bg-[url(/auth.jpg)] bg-cover bg-center">
        {!isWelcome && (
          <div className="absolute inset-0 bg-primary/70 flex flex-col justify-center items-center text-primary-foreground text-center">
            <h1 className="text-sz-48 leading-15.25 font-bold">Chuks Kitchen</h1>
            <p className="text-sz-24 leading-8.5 font-medium max-w-[27ch]">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
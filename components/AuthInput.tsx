"use client";

import { useState } from "react";
import Image from "next/image";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconSrc: string;
  type: string
  id: string;
  placdholder?: string
}

export function AuthInput({ label, iconSrc, type, id, placeholder, ...props }: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute left-3 top-1/2 -translate-y-1/2"
        >
          <Image src={iconSrc} alt="" width={20} height={20} />
        </span>
        <input
          id={id}
          type={inputType}
          placeholder={
            isPassword ? (showPassword ? "QWE123#" : "******") : placeholder
          }
          {...props}
          className="w-full border border-border rounded-md pl-12 pr-4 py-4"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <Image
              src={showPassword ? "/icons/view.svg" : "/icons/hide.svg"}
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </div>
  );
}

/*
        <form className="w-full grid">
          <div className="flex flex-col small">
            <div className="mb-5">
              <label htmlFor="user-id">Email or phone number</label>
              <div className="relative mt-1.5">
                <span
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                >
                  <Image
                    src="/icons/mail.svg"
                    alt="Mail icon"
                    width={20}
                    height={20}
                  />
                </span>
                <input
                  id="user-id"
                  type="text"
                  placeholder="name@gmail.com"
                  required
                  className="w-full border border-border rounded-md pl-12 pr-4 py-4"
                />
              </div>
            </div>

            <div>
              <label htmlFor="user-pass">Password</label>
              <div className="relative mt-1.5">
                <span
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                >
                  <Image
                    src="/icons/lock.svg"
                    alt="Mail icon"
                    width={20}
                    height={20}
                  />
                </span>
                <input
                  id="user-pass"
                  type="password"
                  placeholder="******"
                  required
                  className="w-full border border-border rounded-md px-12 py-4"
                />
                <button
                  type="button"
                  aria-label="Show password"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <Image
                    src="/icons/hide.svg"
                    alt="Eye icon"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            <Link href="/" className="text-right caption my-4">
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="py-6">
            Continue
          </Button>
        </form>
*/

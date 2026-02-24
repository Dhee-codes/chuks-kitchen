"use client";

import { useState } from "react";
import { AuthFormShell } from "@/components/AuthFormShell";
import { AuthInput } from "@/components/AuthInput";
import { AgreementInput } from "@/components/AgreementInput";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMatch = password === confirmPassword || confirmPassword === "";

  return (
    <AuthFormShell title="Create Your Account">
      <AuthInput
        id="email"
        label="Email"
        iconSrc="/icons/mail.svg"
        placeholder="name@gmail.com"
        type="email"
      />
      <AuthInput
        id="phone"
        label="Phone number"
        iconSrc="/icons/phone.svg"
        placeholder="8123340690"
        type="text"
      />
      <AuthInput
        id="password"
        label="Password"
        iconSrc="/icons/lock.svg"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <AuthInput
        id="confirm-password"
        label="Confirm Password"
        iconSrc="/icons/lock.svg"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      {!isMatch && (
        <p className="text-xs text-red-500 font-medium animate-in fade-in">
          Passwords do not match
        </p>
      )}
      
      <AgreementInput />
    </AuthFormShell>
  );
}

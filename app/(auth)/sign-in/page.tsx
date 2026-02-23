import { AuthFormShell } from "@/components/AuthFormShell";
import { AuthInput } from "@/components/AuthInput";

export default function SignIn() {
  return (
    <AuthFormShell title="Login your Account">
      <AuthInput
        id="email"
        label="Email"
        iconSrc="/icons/mail.svg"
        placeholder="name@gmail.com"
        type="email"
      />
      <AuthInput
        id="password"
        label="Password"
        iconSrc="/icons/lock.svg"
        placeholder="******"
        type="password"
      />
    </AuthFormShell>
  );
}

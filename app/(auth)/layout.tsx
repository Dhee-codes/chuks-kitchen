import { AuthShell } from "@/components/AuthShell";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <AuthShell>{children}</AuthShell>
    </section>
  );
}

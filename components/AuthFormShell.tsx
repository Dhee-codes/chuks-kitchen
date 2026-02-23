import { Logo } from "./Logo"
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image"

export const AuthFormShell = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen place-items-center">
      <section className="w-full md:w-470/730 max-w-117.5 md:min-w-95 px-5 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col items-center mb-4">
          <Logo link={false} />
          <h1 className="sect-title">{title}</h1>
        </div>
        <form className="w-full grid">
          {children}
          <Button type="submit" className="py-6 mt-5">
            Continue
          </Button>
        </form>

        <div role="separator" className="caption text-center my-3">
          Or continue with
        </div>

        <div className="w-full flex flex-col gap-6 mb-4">
          <button
            className="flex gap-3 bg-card justify-center items-center border border-border text-foreground py-4 regular-roboto"
            aria-label="Continue with Google"
          >
            <span aria-hidden="true" className="w-5 aspect-square">
              <Image
                src="/icons/google.svg"
                alt="Mail icon"
                width={20}
                height={20}
              />
            </span>
            Continue with Google
          </button>
          <button
            className="flex gap-3 bg-card justify-center items-center border border-border text-foreground py-4 regular-roboto"
            aria-label="Continue with Facebook"
          >
            <span aria-hidden="true" className="w-3 aspect-square">
              <Image
                src="/icons/facebook.svg"
                alt="Mail icon"
                width={20}
                height={20}
              />
            </span>
            Continue with Facebook
          </button>
        </div>
        <p className="caption text-center">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-[#64B5F6] hover:underline">
            Create an account
          </Link>
        </p>
      </section>
    </div>
  );
}

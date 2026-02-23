import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="grid min-h-screen place-items-center">
      <section className="max-w-117.5">
        <div className="flex flex-col items-center mb-4">
          <Logo link={false} />
          <h1 className="sect-title">Login your Account</h1>
        </div>

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
        <p className="caption">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-[#64B5F6] hover:underline">
            Create an account
          </Link>
        </p>
      </section>
    </div>
  );
}

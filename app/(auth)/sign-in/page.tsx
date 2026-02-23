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

        <form>
          <div>
            <div>
              <label htmlFor="user-id">Email or phone number</label>
              <div>
                <span aria-hidden="true">
                  <Image
                    src="/icons/mail.svg"
                    alt="Mail icon"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  />
                </span>
                <input
                  id="user-id"
                  type="text"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="user-pass">Password</label>
              <div>
                <span aria-hidden="true">
                  <Image
                    src="/icons/lock.svg"
                    alt="Mail icon"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  />
                </span>
                <input
                  id="user-pass"
                  type="password"
                  placeholder="******"
                  required
                />
                <button type="button" aria-label="Show password">
                  <Image
                    src="/icons/eye.svg"
                    alt="Mail icon"
                    width={20}
                    height={20}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            <Link href="/">Forgot Password?</Link>
          </div>

          <Button type="submit">Continue</Button>
        </form>

        {/* Divider */}
        <div role="separator">Or continue with</div>

        {/* Social Logins */}
        <div>
          <Button aria-label="Continue with Google">
            <span aria-hidden="true">
              <Image
                src="/icons/google.svg"
                alt="Mail icon"
                width={20}
                height={20}
                aria-hidden="true"
              />
            </span>
            Continue with Google
          </Button>
          <Button aria-label="Continue with Apple">
            <span aria-hidden="true">
              <Image
                src="/icons/facebook.svg"
                alt="Mail icon"
                width={20}
                height={20}
                aria-hidden="true"
              />
            </span>
            Continue with Facebook
          </Button>
        </div>
        <p>
          Don&apos;t have an account?
          <Link href="/register">Create an account</Link>
        </p>
      </section>
    </div>
  );
}

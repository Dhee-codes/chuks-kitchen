import Link from "next/link";

export const AgreementInput = () => {
  return (
    <div className="mt-1.75">
      <label htmlFor="agree" className="flex items-center gap-3">
        <input
          type="checkbox"
          name="agree"
          id="agree"
          className="accent-off-brand size-4.5"
          checked
        />
        <span className="small">
          I agree to the{" "}
          <Link href="/" className="text-[#64B5F6] hover:underline">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/" className="text-[#64B5F6] hover:underline">
            Privacy Policy
          </Link>
        </span>
      </label>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="px-5 py-8">
      <div className="md:hidden w-full aspect-350/159 bg-[url(/welcome-mobile.jpg)] bg-cover bg-center" />
      <div>
        <Button
          variant="ghost"
          className="text-off-brand leading-6 border-2 border-off-brand px-[31.5px] py-2.75 hover:bg-off-brand"
          asChild
        >
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
    </div>
  );
}
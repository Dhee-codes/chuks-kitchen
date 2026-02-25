import { Button } from "./ui/button";
import Link from "next/link";

const DiscoverButton = () => {
  return (
    <Button className="px-7 py-6">
      <Link href="/menu">Discover what&apos;s new</Link>
    </Button>
  );
}

export const HomeShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="relative w-full aspect-390/765 md:aspect-1440/1024 bg-[url(/home/hero-bg.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/45 flex flex-col justify-center gap-5 text-primary-foreground px-2 md:px-12">
          <h1 className="page-head">
            The Heart of Nigerian Home Cooking
          </h1>
          <h2 className="page-subhead">
            Handcrafted with passion, delivered with care.
          </h2>
          <div>
            <DiscoverButton />
          </div>
        </div>
      </div>
      <div>{children}</div>
      <div className="relative w-full aspect-390/656 md:aspect-1440/610 bg-[url(/home/footer-bg.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1D1D1D73] flex flex-col justify-center gap-2.5 text-primary-foreground px-5">
          <h2 className="extra-bold">Introducing Our New Menu Additions!</h2>
          <p className="semi-bold">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>
          <div>
            <DiscoverButton />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { navlinks } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/ui/Menu";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const LoginBtn = ({ className }: { className?: string }) => {
  return (
    <Button
      className={cn(
        "hidden md:flex bg-primary hover:bg-accent rounded-lg px-14.5 py-5 ",
        className,
      )}
      asChild
    >
      <Link href="/sign-in">Login</Link>
    </Button>
  );
}

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-card backdrop-blur-md text-foreground font-inter">
      <div className="px-4.75 md:px-12 py-2 md:py-4.5 flex items-center justify-between md:gap-11.25">
        <Logo link={true} className="w-27 sm:w-34" />

        <nav aria-label="Primary navigation" className="hidden md:block flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navlinks
                .filter((link) => link.isInHeader)
                .map((link) => {
                  const isCurrent = pathname === link.href;

                  return (
                    <NavigationMenuItem className="flex-1" key={link.href}>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link
                          href={link.href}
                          aria-current={isCurrent ? "page" : undefined}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4">
          <LoginBtn />

          <Sheet>
            <SheetTrigger asChild>
              <Button size="custom" className="md:hidden bg-card border-none">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="px-15 py-menu-y">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav className="flex flex-col gap-8">
                {navlinks
                  .filter((link) => link.isInHeader)
                  .map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
              </nav>
              <LoginBtn className="flex mt-15" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

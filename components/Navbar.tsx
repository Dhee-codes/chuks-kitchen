"use client";

import Link from "next/link";
import Image from "next/image";
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

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-card backdrop-blur-md text-foreground font-inter">
      <div className="px-4.75 md:px-12 py-2 md:py-4.5 flex items-center justify-between md:gap-11.25">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={183}
            height={41}
            className="w-27 md:w-45.75"
            priority
          />
        </Link>

        <nav className="hidden md:block flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navlinks
                .filter((link) => link.isInHeader)
                .map((link) => (
                  <NavigationMenuItem className="flex-1" key={link.href}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-sz-16 leading-6",
                      )}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden sm:flex font-semibold bg-primary hover:bg-accent rounded-lg px-14.5 py-3.75">
            Login
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="custom" className="md:hidden">
                <Menu />
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
              <Button className="flex font-semibold bg-primary hover:bg-accent rounded-lg py-3.75 mt-15">
                Login
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
